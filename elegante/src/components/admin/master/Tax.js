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
class Tax extends Component {
    constructor(props){
        super(props)
        this.default={
        taxName:'',
        taxPercentage:'',
        taxNameE:'',
        taxPercentageE:''
        }
        this.state = this.default
        this.props.dispatch(getCategory())
    }

    addCategory = () =>{
       
    }

    updateData = ()=>{
       
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
                    <div className="categoryButton" onClick={()=>this.addCategory()}>
                        <span className="categorySpanOne">Submit</span>
                    </div>
                    <div className="tableMainDiv">
                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                    <span className="thumbTHSpan">Discount(%)</span>
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

                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                <span className="catTHSpan">20</span>
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">GST</span>
                                </div>
                            </div>
                            <div className="THTwoDiv">
                            <div className="statTHDiv">
                            <CheckBoxIcon style={{fontSize:'20px',color:'green'}} className="catTHSpan"/>
                                </div>
                                <div className="statTHDiv">
                                <EditIcon style={{fontSize:'20px'}} className="catTHSpan"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(ref){
    return {
        categories:ref.category !==null ? ref.category : []
    }
}

export default connect(mapStateToProps)(Tax)
