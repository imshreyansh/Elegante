import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Authorization.css'
import logoWhite from "../../assets/images/logoWhite.png"
import {loginUser,signUpUser} from '../../actions/authorizations'
import {handleError} from '../../actions/handleError'
import {validation} from '../../utils/validation'
import {storeItem} from '../utils/localStorage'
import { CodeSharp } from '@material-ui/icons'
class Authorization extends Component {
    constructor(props){
        super(props)
        this.default={
            username:'',
            password:'',
            display:true,
            name:'',
            email:'',
            mobile:'',
            address:'',
            passwordSignUP:'',
            nameE:'',
            emailE:'',
            mobileE:'',
            addressE:'',
            passwordSignUPE:''
        }
        this.state = this.default

    }
    Auth =()=>{
        if(this.state.display===true){
            const obj={
                email:this.state.username,
                password:this.state.password
            }
            this.props.dispatch(loginUser(obj))
            this.setState({
                username:'',
                password:'',
            })
        }else{
            const {email, passwordSignUP,mobile,address,name}=this.state
            if(name!==''&&email!==''&&mobile!==''&&address!==''&&passwordSignUP!==''){
                const obj={
                    name:this.state.name,
                    email:this.state.email,
                    mobile:this.state.mobile,
                    address:this.state.address,
                    password:this.state.passwordSignUP,
                    designation:'User'
                }
                this.props.dispatch(signUpUser(obj))
                this.setState({
                    name:'',
                    email:'',
                    mobile:'',
                    address:'',
                    passwordSignUP:'',
                    display:true
                })
            }else{
                const obj={
                    error:'Some fields are empty',
                    type:'error'
                }
                this.props.dispatch(handleError(obj))
            }
        }
    }
    render(){
        return(
            <div className="AuthOne">
                <div className="AuthTwo">
                <div className="AuthFour">
                    <div className="AuthSix">
                    <div className="AuthFive">
                    <div className="AuthSeven">
                    <img src={logoWhite} className="logo"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="AuthThree">
                    <div className="AuthEight" onClick={()=>this.setState({display:!this.state.display})}>
                        <span className="AuthSpanOne">{this.state.display===true ? 'SIGN UP' :'SIGN IN' }</span>
                    </div>
                    <div className="AuthNine">
                        <span className="AuthSpanTwo">{this.state.display===true ? 'SIGN IN' : 'SIGN UP'}</span>
                    </div>
                   {this.state.display===true ?
                   <div className="AuthTen">
                        <input type="text" className="AuthInputOne" placeholder="Email" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
                        <input type="password" className="AuthInputOne" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    </div> :
                    <div className="AuthTen">
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.nameE ==='' ? '#333' :'red'}} placeholder="Name" value={this.state.name} onChange={(e)=>this.setState(validation(e,'name','text',['name is reuired','ds']))}/>
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.emailE ==='' ? '#333' :'red'}} placeholder="Email" value={this.state.email} onChange={(e)=>this.setState(validation(e,'email','email',['Email is reuired','Incorrect Email']))}/>
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.mobileE ==='' ? '#333' :'red'}} placeholder="Mobile" value={this.state.mobile} onChange={(e)=>this.setState(validation(e,'mobile','text',['Email is reuired','Incorrect Email']))}/>
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.addressE ==='' ? '#333' :'red'}} placeholder="Address" value={this.state.address} onChange={(e)=>this.setState(validation(e,'address','text',['name is reuired','ds']))}/>
                    <input type="password" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.passwordSignUPE ==='' ? '#333' :'red'}} placeholder="Password" value={this.state.passwordSignUP} onChange={(e)=>this.setState(validation(e,'passwordSignUP','text',['name is reuired','ds']))}/>
                </div>
                    } 
                    <div className="AuthEleven" onClick={()=>this.Auth()}>
                    <span className="AuthSpanOne">Let's Go</span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(authedId){
    return {
        authedId
    }
}

export default connect(mapStateToProps)(Authorization)