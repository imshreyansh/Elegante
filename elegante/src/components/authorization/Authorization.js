import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Authorization.css'
import logoWhite from "../../assets/images/logoWhite.png"
import {loginUser,signUpUser} from '../../actions/authorizations'
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
        }
        this.state = this.default

    }
    Auth =()=>{
        if(this.state.display===true){
            const obj={
                username:this.state.username,
                password:this.state.password
            }
            this.props.dispatch(loginUser(obj))
        }else{
        const obj={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            address:this.state.address,
            password:this.state.password,
        }
        this.props.dispatch(signUpUser(obj))
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
                        <input type="text" className="AuthInputOne" placeholder="Username" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
                        <input type="password" className="AuthInputOne" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    </div> :
                    <div className="AuthTen">
                    <input type="text" className="AuthInputOne" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                    <input type="text" className="AuthInputOne" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                    <input type="text" className="AuthInputOne" placeholder="Mobile" value={this.state.mobile} onChange={(e)=>this.setState({mobile:e.target.value})}/>
                    <input type="text" className="AuthInputOne" placeholder="Address" value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})}/>
                    <input type="text" className="AuthInputOne" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
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