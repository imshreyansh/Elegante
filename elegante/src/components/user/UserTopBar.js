import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {logout} from '../../actions/authorizations'
import logoWhite from "../../assets/images/logoWhite.png"
import './User.css'
import jwt from 'jsonwebtoken'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import {getItemFromStorage} from '../utils/localStorage'
import {Link} from 'react-router-dom'

class UserTopBar extends Component {
    constructor(props){
        super(props)
        this.default={
            menuOpen:false,

        }
        this.state = this.default

    }
    onLogout = ()=>{
        this.props.dispatch(logout())
        setTimeout(() => {
            this.props.history.push('/')
          }, 1000)
    }
     handleClick = () => {
        this.setState({menuOpen:true});
      }
    
       handleClose = () => {
        this.setState({menuOpen:false});
      };

      
    render(){
        return(
            <div className="userTopBarOne">
                 <Menu
        anchorEl={this.state.menuOpen}
        keepMounted
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        open={this.state.menuOpen}
        onClose={()=>this.handleClose()}
      >
        <MenuItem>Hello, {this.props.jwtToken.name}</MenuItem>
<Link to="/" style={{textDecoration:'none'}}>
 <MenuItem onClick={()=>this.handleClose()}>Home</MenuItem>
 </Link>
 <Link to={{pathname:`/profile/${this.props.jwtToken.id}`}} style={{textDecoration:'none'}}>
        <MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem>
        </Link>
        <Link to="/orders" style={{textDecoration:'none'}}>
        <MenuItem onClick={()=>this.handleClose()}>My Orders</MenuItem>
        </Link>
      </Menu>
                <img src={logoWhite} className="logoUserTopBar" />
                <div className='userTopBarTwo'>
                <Link to="/cart" style={{textDecoration:'none'}}>
                <ShoppingCartIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto',cursor:"pointer"}} />
                </Link>
                <div className="userTopBarThree" onClick={()=>this.onLogout()}>
                <PowerSettingsNewIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto'}}/>
                <span className="userTopBarText">LOGOUT</span>
                </div>
                <DragIndicatorIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto',marginLeft:'20px'}} onClick={()=>this.handleClick()}/>    
               
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

export default (connect(mapStateToProps)(withRouter(UserTopBar)))
