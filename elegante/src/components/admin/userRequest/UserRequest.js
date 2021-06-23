import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './UserRequest.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'
import {handleError} from '../../../actions/handleError'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class UserRequest extends Component {
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
            <div className="UserRequest">
              <div className="UserRequestDivMain">
                <div className="UserRequestDivEach">
                    <div className="UserRequestSpanEach">
                        <span className="UserRequestSpan">Shreyansh Upadhyay</span>
                    </div>
                    <div className="UserRequestSpanEach">
                        <span className="UserRequestSpan">+919926551579</span>
                    </div>
                    <div className="UserRequestSpanEach">
                        <span className="UserRequestSpan">shreyu.upadhyay13@gmail.com</span>
                    </div>
                    <div className="UserRequestIconEach">
                    <ExpandMoreIcon style={{fontSize:'40px',color:'#80cbc4'}} className="UserRequestSpan"/>
                    </div>
                </div>
                <div className="UserDescriptionMainDiv">
                    <div className="UserDescriptionDateDiv">
                        <span className="UserRequestSpan">Date: 29/12/2021</span>
                    </div>
                    <div className="UserDescriptionDateDiv">
                    <span className="UserDescriptionHeadingSpan">Description</span>
                    </div>
                    <div className="UserDescriptionDiv">
                    <span className="UserRequestSpan">When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.


When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.


Email marketing (if applicable): With your permission, we m</span>
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

export default connect(mapStateToProps)(UserRequest)