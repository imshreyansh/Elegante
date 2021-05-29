import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Common.css'
import { MeetingRoom} from '@material-ui/icons';
import { withRouter } from 'react-router-dom'
import {logout} from '../../actions/authorizations'

class TopBar extends Component {

    onLogout = ()=>{
        this.props.dispatch(logout())
        setTimeout(() => {
            this.props.history.push('/')
          }, 1000)
    }
    render(){
        return(
            <div className="topBarOne">
                <div className="topBarTwo">
                <div className="topBarThree">
                        <div className="topBarFour" onClick={()=>this.onLogout()}>
                            <MeetingRoom style={{color:'#fff',marginTop:'auto',marginBottom:'auto'}}/>
                            <span className="topBarFive">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(authedId){
    return{
        authedId:authedId
    }
}

export default (connect(mapStateToProps)(withRouter(TopBar)))
