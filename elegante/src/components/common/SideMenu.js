import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Common.css'
import logoWhite from "../../assets/images/logoWhite.png"
import { Dashboard,Category,Accessible} from '@material-ui/icons';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import {NavLink} from 'react-router-dom'
class SideMenu extends Component {
    render(){
        return(
            <div className="sideMenuOne">
                <div className="sideMenuTwo">
                    <div className="logoContainer">
                    <img src={logoWhite} className="logoOnTopBar"/>
                    </div>
                    <NavLink to="/" style={{textDecoration:'none'}}>
                    <div className="sideMenuItems">
                        <div className="sideMenuItemFormat">
                            <Dashboard style={{color:'#fff',marginTop:'auto',marginBottom:'auto'}}/>
                            <span className="sideMenuItemText">Dashboard</span>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to="/categories" style={{textDecoration:'none'}}>
                    <div className="sideMenuItems">
                        <div className="sideMenuItemFormat">
                            <Category style={{color:'#fff',marginTop:'auto',marginBottom:'auto'}}/>
                            <span className="sideMenuItemText">Categories</span>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to="/stocks" style={{textDecoration:'none'}}>
                    <div className="sideMenuItems">
                        <div className="sideMenuItemFormat">
                            <AccountBalanceWalletIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto'}}/>
                            <span className="sideMenuItemText">Stock/Item</span>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to="/formatting" style={{textDecoration:'none'}}>
                    <div className="sideMenuItems">
                        <div className="sideMenuItemFormat">
                            <Accessible style={{color:'#fff',marginTop:'auto',marginBottom:'auto'}}/>
                            <span className="sideMenuItemText">Formatting</span>
                        </div>
                    </div>
                    </NavLink>
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