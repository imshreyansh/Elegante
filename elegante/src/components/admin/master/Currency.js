import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import {validation} from '../../../utils/validation'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {addCurrency,getAllCurrency,deleteCurrency,setDefaultCurrency} from '../../../actions/currency'
import {handleError} from '../../../actions/handleError'

class Currency extends Component {
    constructor(props){
        super(props)
        this.default={
         currency:'',
         currencyE:''
        }
        this.state = this.default
        this.props.dispatch(getAllCurrency())
    }

    addCurrency=()=>{
        if(this.state.currency!==''&&this.state.currencyE===''){
            const obj = {
                currency: this.state.currency
            }
            this.props.dispatch(addCurrency(obj))
            this.setState({currency:'',currencyE:''})
        }else{
            const obj={
                error:'Some fields are empty',
                type:'error'
            }
            this.props.dispatch(handleError(obj))
        }
    }

    deleteData=(id)=>{
        this.props.dispatch(deleteCurrency(id))
    }

    onSetStatus = (id) => {
        this.props.dispatch(setDefaultCurrency(id))
    }
   
    render(){
        return(
            <div className="dashboardOne"> 
                <div className='categoryOne'>
                    <span className="categorySpanOne">Add Currency</span>
                </div>
                <div className="categoryTwo">
                        <input type="text" className="categoryInputOne" placeholder="Name" value={this.state.currency}  style={{borderBottomColor:this.state.currencyE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'currency','text',['name is reuired','ds']))}/>
                    </div>
                    <div className="AuthEleven" onClick={()=>this.addCurrency()}>
                    <span className="AuthSpanOne">Submit</span>
                    </div>
                <div className="categoryThree">
                    {this.props.allCurrencies.map((data,id)=>{
                        return(
                    <div kei={id} className="categoryFour">
                    <span className="categorySpanTwo" style={{marginTop:'50px'}}>{data.name}</span>
                    <div className="categoryFive">
                   {data.active ? <CheckBoxIcon style={{color:'#333',marginTop:'auto',marginBottom:'auto'}} onClick={()=>this.updateData()}/>
                   :<CheckBoxOutlineBlankIcon style={{color:'#333',marginTop:'auto',marginBottom:'auto'}} onClick={()=>this.onSetStatus(data._id)}/>}
                    <DeleteIcon style={{color:'#333',marginTop:'auto',marginBottom:'auto'}} onClick={()=>this.deleteData(data._id)}/>
                </div>
                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(currency){
    return {
        allCurrencies:currency.currency
    }
}

export default connect(mapStateToProps)(Currency)