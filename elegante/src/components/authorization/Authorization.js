import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Authorization.css'
import logo from "../../assets/images/logo.png"
import developerLogo from "../../assets/images/developerLogo.png"
import {loginUser,signUpUser,updatePassword} from '../../actions/authorizations'
import {handleError} from '../../actions/handleError'
import {validation} from '../../utils/validation'
import {storeItem} from '../utils/localStorage'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Modal } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

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
            passwordSignUPE:'',
            modalPassword:false,
            forgotMail:'',
            forgotMailE:''
        }
        this.state = this.default

    }
    Auth =()=>{
        if(this.state.display===true){
            this.props.history.push('/')
            setTimeout(() => {
                const obj={
                    email:this.state.username,
                    password:this.state.password
                }
                this.props.dispatch(loginUser(obj))
                this.setState({
                    username:'',
                    password:'',
                })
              }, 100)
           
        }else{
            const {email, passwordSignUP,mobile,address,name}=this.state
            if(name!==''&&email!==''&&mobile!==''&&passwordSignUP!==''){
                const obj={
                    name:this.state.name,
                    email:this.state.email,
                    mobile:this.state.mobile,
                    address:'',
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

    onSocial = (res) =>{
        console.log(res)
    }
    
    forgotMailPass = () =>{
        if(this.state.forgotMail!==''){
            const obj={
                email:this.state.forgotMail
            }
            this.props.dispatch(updatePassword(obj))
            this.setState({
                modalPassword:false,
                forgotMail:'',
                forgotMailE:''
            })
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
            <div className="AuthOne">
                          <Modal
                    open={this.state.modalPassword}
                    onClose={()=>this.setState({modalPassword:false})}
                  >
                    <div className="forgotPasswordDivOne">
                    <div className="forgotPasswordDivTwo">
                        <div className="closeModalForPassword">
                            <CancelIcon style={{cursor:'pointer',color:'#00695c'}} onClick={()=>this.setState({modalPassword:false})} />
                        </div>
                        <div className="inputForgotPassword">
                        <div className="AuthSix">
                        <EmailIcon className="AuthInputIcon"/>
                    <input type="text" className="AuthInputOne" style={{borderBottomColor:this.state.forgotMailE ==='' ? '#00695c' :'red'}} placeholder="Email" value={this.state.forgotMail} onChange={(e)=>this.setState(validation(e,'forgotMail','email',['Email is reuired','Incorrect Email']))}/>
                    </div>
                        </div>
                        <div className="AuthButton" onClick={()=>this.forgotMailPass()}>
                        <span className="AuthSpanOne">Send</span>
                    </div>
                    </div>
                    </div>
                </Modal>
                <div className="AuthTwo">
                    <div className="AuthThree">

                    </div>
                    <div className="AuthFour">
                        <img src={logo} className="AuthLogo"/>
                        <div className="loginAuthForm">
                        {this.state.display===true ?
                      <div className="AuthFive">
                        <div className="AuthSix">
                            <PersonIcon className="AuthInputIcon"/>
                            <input type="text" className="AuthInputOne" style={{borderBottomColor:'#00695c'}} placeholder="Email" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
                        </div>
                        <div className="AuthSix">
                        <LockIcon className="AuthInputIcon"/>
                        <input type="password" className="AuthInputOne" style={{borderBottomColor:'#00695c'}} placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    </div>
                    <div className="AuthForgot">
                    <span style={{cursor:'pointer'}} onClick={()=>this.setState({modalPassword:true})} className="AuthSpanTwo">Forgot Password ?</span>
                    </div>
                    </div>
                    :
                    <div className="AuthFive">
                         <div className="AuthSix">
                        <PersonIcon className="AuthInputIcon"/>
                    <input type="text" className="AuthInputOne" style={{borderBottomColor:this.state.nameE ==='' ? '#00695c' :'red'}} placeholder="Name" value={this.state.name} onChange={(e)=>this.setState(validation(e,'name','text',['name is reuired','ds']))}/>
                    </div>
                    <div className="AuthSix">
                        <EmailIcon className="AuthInputIcon"/>
                    <input type="text" className="AuthInputOne" style={{borderBottomColor:this.state.emailE ==='' ? '#00695c' :'red'}} placeholder="Email" value={this.state.email} onChange={(e)=>this.setState(validation(e,'email','email',['Email is reuired','Incorrect Email']))}/>
                    </div>
                    <div className="AuthSix">
                        <PhoneAndroidIcon className="AuthInputIcon"/>
                    <input type="text" className="AuthInputOne" style={{borderBottomColor:this.state.mobileE ==='' ? '#00695c' :'red'}} placeholder="Mobile" value={this.state.mobile} onChange={(e)=>this.setState(validation(e,'mobile','text',['Email is reuired','Incorrect Email']))}/>
                    </div>
                    {/* <div className="AuthSix">
                        <PersonPinIcon className="AuthInputIcon"/>
                    <input type="text" className="AuthInputOne" style={{borderBottomColor:this.state.addressE ==='' ? '#00695c' :'red'}} placeholder="Address" value={this.state.address} onChange={(e)=>this.setState(validation(e,'address','text',['name is reuired','ds']))}/>
                    </div> */}
                    <div className="AuthSix">
                        <LockIcon className="AuthInputIcon"/>
                    <input type="password" className="AuthInputOne" style={{borderBottomColor:this.state.passwordSignUPE ==='' ? '#00695c' :'red'}} placeholder="Password" value={this.state.passwordSignUP} onChange={(e)=>this.setState(validation(e,'passwordSignUP','text',['name is reuired','ds']))}/>
                        </div>
                </div>
    }
                    <div className="AuthButton" onClick={()=>this.Auth()}>
                        <span className="AuthSpanOne">{this.state.display ? `Login` : `Sign Up`}</span>
                    </div>
                    <div className="AuthSeven">
                        <span className="AuthSpanTwo" onClick={()=>this.setState({display:!this.state.display})}>{this.state.display ? `Don't have an account ? Sign Up` : `Already have an account ? Login In` }</span>
                    </div>
                  {/* {this.state.display ?  <div className="AuthFacebookAndGoogle">
                    <FacebookLogin
    appId="2871980276465306"
    autoLoad={false}
    fields="name,email,picture"
    callback={(res)=>this.onSocial(res)}
  /> 
                    </div>:null}
                    {this.state.display ?
                    <div className="AuthFacebookAndGoogle">
                    <GoogleLogin
    clientId="233567002026-16k9ev92u1rjimh61n9q3sugjpc7irbh.apps.googleusercontent.com"
    buttonText="LOGIN WITH GOOGLE"
    onSuccess={(res)=>this.onSocial(res)}
    onFailure={(res)=>console.log(res)}
  />
                      </div>:null} */}

                        </div>
                        <div className="AuthDevLogoDivOne">
                      <div className="AuthDevLogoDivTwo">
                        <span className="AuthDevLogoSpan">Powered By:</span>
                      </div>
                      <div className="AuthDevLogoDivThree">
                        <img src={developerLogo} className="AuthDevLogo" />
                      </div>
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