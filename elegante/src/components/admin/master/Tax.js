import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import {validation} from '../../../utils/validation'
import {handleError} from '../../../actions/handleError'
import EditIcon from '@material-ui/icons/Edit';
import {addCategory,editCategory,deleteCategory,getCategory} from '../../../actions/category'
import {Link} from 'react-router-dom'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import {addTax,getAllTax,editTax} from '../../../actions/tax'
class Tax extends Component {
    constructor(props){
        super(props)
        this.default={
        taxName:'',
        taxPercentage:'',
        taxNameE:'',
        taxPercentageE:'',
        edit:false,
        id:''
        }
        this.state = this.default
        this.props.dispatch(getAllTax())
    }

    addTax = () =>{
        const obj={
            tax:this.state.taxName,
            percentage:this.state.taxPercentage
        }
        this.state.edit ? this.props.dispatch(editTax(this.state.id,obj)) :this.props.dispatch(addTax(obj))
        this.setState({
            taxName:'',
            taxPercentage:'',
            id:'',
            edit:false
        })
     }
 
     updateTax = (id,data)=>{
        this.setState({
         taxName:data.tax,
         taxPercentage:data.percentage,
            id,
            edit:true
        })
     }
 
     status = (id,data)=>{
         const obj={
             status:data.status==='Active' ? 'Inactive' : 'Active'
         }
         this.props.dispatch(editTax(id,obj))
     }
     
    render(){
        return(
            <div className="categoryOne">                    
                    <div className="catoryAddCategoryInput">
                    <div className="categoryThree">
                    <AttachMoneyIcon className="categoryInputIcon"/>
                    <input type="text" className="categoryInputOne" placeholder="Tax Name" value={this.state.taxName}  style={{borderBottomColor:this.state.taxNameE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'taxName','text',['name is reuired','ds']))}/>
                    </div>
                    </div>
                    <div className="catoryAddCategoryInput">
                    <div className="categoryThree">
                    <LocalAtmIcon className="categoryInputIcon"/>
                    <input type="number" className="categoryInputOne" placeholder="Tax Percentage" value={this.state.taxPercentage}  style={{borderBottomColor:this.state.taxPercentageE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'taxPercentage','text',['Percent is reuired','ds']))}/>
                    </div>
                    </div>
                    <div className="categoryButton" onClick={()=>this.addTax()}>
                        <span className="categorySpanOne">Submit</span>
                    </div>
                    <div className="tableMainDiv">
                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                    <span className="thumbTHSpan">Applied(%)</span>
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">Tax Name</span>
                                </div>
                            </div>
                            <div className="THTwoDiv">
                            <div className="statTHDiv">
                                    <span className="thumbTHSpan">Status</span>
                                </div>
                                <div className="statTHDiv">
                                <span className="catTHSpan">Edit</span>
                                </div>
                            </div>
                        </div>
{this.props.tax.map((d,i)=>{
    return(
        <div key={i} className="tableMainFirstTH">
        <div className="THOneDiv">
            <div className="thumbTHDiv">
            <span className="catTHSpan">{d.percentage}</span>
            </div>
            <div className="catTHDiv">
            <span className="catTHSpan">{d.tax}</span>
            </div>
        </div>
        <div className="THTwoDiv">
        <div className="statTHDiv">
        {d.status==='Active' ? 
            <CheckBoxIcon onClick={()=>this.status(d._id,d)} style={{fontSize:'20px',color:'green'}} className="catTHSpan"/>
              :<CheckBoxOutlineBlankIcon onClick={()=>this.status(d._id,d)} style={{fontSize:'20px',color:'green'}} className="catTHSpan"/>
                  }
            </div>
            <div className="statTHDiv">
            <EditIcon onClick={()=>this.updateTax(d._id,d)} style={{fontSize:'20px'}} className="catTHSpan"/>
            </div>
        </div>
    </div>
    )
})}
            </div>
            </div>
        )
    }
}

function mapStateToProps(ref){
    return {
        tax:ref.tax
    }
}

export default connect(mapStateToProps)(Tax)
