import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Policies.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'



class Policy extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default

    }

    componentDidMount() {
       
    }


    render(){
        return(
            <div className="mainPolicy">
                <div className="headingPolicy">
                     <span className="headingSpan">Policy</span>
                </div>
                <div className="divPolicyText">
                    <span className="policySpan">When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.


When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.


Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.<br/>
</span>
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

export default connect(mapStateToProps)(Policy)