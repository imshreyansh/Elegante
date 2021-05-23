import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Common.css'

class SideMenu extends Component {
    render(){
        return(
            <div className="topBarOne">
                <div className="topBarTwo">
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

export default connect(mapStateToProps)(SideMenu)