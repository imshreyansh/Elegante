import React,{Component} from 'react'
import {connect} from 'react-redux'
import sample from '../../assets/images/sample.jpeg'
import {handleError} from '../../actions/handleError'
import {validation} from '../../utils/validation'
import tick from '../../assets/images/tick.png'
import './User.css'


class UserAddress extends Component {
    constructor(props){
        super(props)
        this.default={
            address:'',
            addressE:'',
            email:'',
            emailE:'',
            mobile:'',
            mobileE:'',
            pin:'',
            pinE:''
        }
        this.state = this.default

    }
  
    confirm = () =>{
        const {address, addressE, email, emailE, mobile, mobileE,pin,pinE} = this.state
        if(address !=='' && addressE ===''&&email !==''&& emailE===''&&mobile !==''&&mobileE ===''&&pin !==''&&pinE===''){

        }else{
                const obj={
                    error:'Some fields are empty',
                    type:'error'
                }
                this.props.dispatch(handleError(obj))
            }
    }
      
    render(){
        return(
            <div className="userAddress">
                <img src={tick} className="tick"/>
                <span className="userAdressSpan">You Order Was Successfull !</span>
               {/* <div className="AuthTen">
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.addressE ==='' ? '#333' :'red'}} placeholder="Address" value={this.state.address} onChange={(e)=>this.setState(validation(e,'address','text',['name is reuired','ds']))}/>
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.emailE ==='' ? '#333' :'red'}} placeholder="Email" value={this.state.email} onChange={(e)=>this.setState(validation(e,'email','email',['Email is reuired','Incorrect Email']))}/>
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.mobileE ==='' ? '#333' :'red'}} placeholder="Mobile" value={this.state.mobile} onChange={(e)=>this.setState(validation(e,'mobile','text',['Email is reuired','Incorrect Email']))}/>
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.pinE ==='' ? '#333' :'red'}} placeholder="Pincode" value={this.state.pin} onChange={(e)=>this.setState(validation(e,'pin','text',['name is reuired','ds']))}/>
                </div>
                <div className="AuthEleven" onClick={()=>this.confirm()}>
                    <span className="AuthSpanOne">Confirm</span>
                    </div> */}
            </div>
        )
    }
}

function mapStateToProps(authedId){
    return{
        authedId:authedId,
    }
}

export default connect(mapStateToProps)(UserAddress)
