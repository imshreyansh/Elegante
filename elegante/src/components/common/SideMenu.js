import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Common.css'
import logoWhite from "../../assets/images/logoWhite.png"

class SideMenu extends Component {
    render(){
        return(
            <div className="sideMenuOne">
                <div className="sideMenuTwo">
                    <div className="logoContainer">
                    <img src={logoWhite} className="logoOnTopBar"/>
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

export default connect(mapStateToProps)(SideMenu)