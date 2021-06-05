import React,{Component} from 'react'
import {connect} from 'react-redux'
import sample from '../../assets/images/sample.jpeg'
import {handleError} from '../../actions/handleError'
import {validation} from '../../utils/validation'
import tick from '../../assets/images/tick.png'
import './User.css'


class UserProfile extends Component {
    constructor(props){
        super(props)
        this.default={
            password:'',
            passwordE:''
        }
        this.state = this.default

    }
  
    confirm = () =>{
        const {password, passwordE} = this.state
        if(password !=='' && passwordE ===''){

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
               <div className="AuthTen">
                    <input type="text" className="AuthInputTwo" style={{borderBottomWidth:1,borderBottomColor:this.state.passwordE ==='' ? '#333' :'red'}} placeholder="Update Password" value={this.state.password} onChange={(e)=>this.setState(validation(e,'password','text',['name is reuired','ds']))}/>
                </div>
                <div className="AuthEleven" onClick={()=>this.confirm()}>
                    <span className="AuthSpanOne">Confirm</span>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(authedId){
    return{
        authedId:authedId,
    }
}

export default connect(mapStateToProps)(UserProfile)
