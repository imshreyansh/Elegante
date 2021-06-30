import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Profile.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../../utils/localStorage'
import EmailIcon from '@material-ui/icons/Email';
import {validation} from '../../../utils/validation'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {updateUserPassword} from '../../../actions/authorizations'

class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.default={
           password:'',
           passwordE:''
        }
        this.state = this.default

    }

    componentDidMount() {
       
    }

    addPassword=()=>{
        if(this.state.password!==''){
        const obj={
            password:this.state.password
        }
        
        this.props.dispatch(updateUserPassword(this.props.jwtToken.id,obj))
        }
    }


    render(){
        return(
            <div className="profileMain">
                <div className="UserProfileDiv">
                    <span className="UserProfileHeadingSpan">Change Password</span>
                </div>
                <div className="inputDivForgot">
                        <div className="ProfileDivOne">
                        <VpnKeyIcon className="AuthInputIcon"/>
                    <input type="password" className="AuthInputOne" style={{borderBottomColor:this.state.passwordE ==='' ? '#00695c' :'red'}} placeholder="Add New Password" value={this.state.password} onChange={(e)=>this.setState(validation(e,'password','text',['Email is reuired','Incorrect Email']))}/>
                    </div>
                        </div>
                        <div className="changePasswordButton" onClick={()=>this.addPassword()}>
                        <span className="AuthSpanOne">Submit</span>
                    </div>
            </div>
        )
        
    }
}

function mapStateToProps(authedId){
    return{
        authedId:authedId,
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default connect(mapStateToProps)(ChangePassword)