import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Policies.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'
import {validation} from '../../utils/validation'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import RateReviewIcon from '@material-ui/icons/RateReview';
import {handleError} from '../../actions/handleError'

class Contact extends Component {
    constructor(props){
        super(props)
        this.default={
            name:'',
            email:'',
            mobile:'',
            nameE:'',
            emailE:'',
            mobileE:'',
            description:'',
            descriptionE:''
        }
        this.state = this.default

    }

    componentDidMount() {
       
    }

    submit = () =>{
        const {email, description,mobile,name}=this.state
            if(name!==''&&email!==''&&mobile!==''&&description!==''){
                const obj={
                    name:this.state.name,
                    email:this.state.email,
                    mobile:this.state.mobile,
                    description:this.state.description,
                }
                this.setState({
                    name:'',
                    email:'',
                    mobile:'',
                    description:'',
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
            <div className="mainPolicy">
                <div className="headingPolicy">
                     <span className="headingSpan">Contact Us</span>
                </div>
               <div className="contactFirstDiv">
                <div className="contactSpan">
                    <span className="contactSpanTextHeading">Customer Service</span>
                    <span className="contactSpanText">
Our team is committed to going above and beyond to guarantee our clientele a satisfying shopping experience, and we’ll be more than happy to do the same for you. You can contact us via the provided information.
<p/>
Tel:  +91 9926551579
<p/>
​

Email:  alegantebymegha@gmail.com

​
<p/>
Address:  Thatheri Bazar Varanasi, Uttar Pradesh.</span>
                </div>
                <div className="inputForm">
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
                    <div className="AuthSix">
                        <RateReviewIcon className="AuthInputIcon"/>
                    <input type="text" className="AuthInputOne" style={{borderBottomColor:this.state.descriptionE ==='' ? '#00695c' :'red'}} placeholder="Description" value={this.state.description} onChange={(e)=>this.setState(validation(e,'description','text',['description is reuired','ds']))}/>
                    </div>
                </div>
                <div className="AuthButton" onClick={()=>this.submit()}>
                        <span className="AuthSpanOne">Submit</span>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Contact)