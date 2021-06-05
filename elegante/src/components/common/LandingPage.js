import React,{Component} from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/authorizations'
import './LandingPage.css'
import categorySample from '../../assets/images/categorySample.jpeg'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import logo from '../../assets/images/logo.png'

class LandingPage extends Component {
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
            <div className="landingPageOne">
            <img src={logo} className="logoMainLandingPage"/>

                 <Menu
        anchorEl={this.state.menuOpen}
        keepMounted
        anchorReference="anchorPosition"
        anchorPosition={{ top: 80, left: 2000 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={this.state.menuOpen}
        onClose={()=>this.handleClose()}
      >
        <MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem>
        <MenuItem onClick={()=>this.handleClose()}>My Orders</MenuItem>
        <MenuItem onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
      </Menu>
                <div className="landingPageMenuTop">
                    <div className="landingPageMenuItems">
                    <ShoppingCartIcon className="landingPageSpan"/>
                    <span className="landingPageSpan">Home</span>
                    <span className="landingPageSpan">Hey, {this.props.jwtToken.name}</span>
                    <MenuIcon className="landingPageSpan" onClick={()=>this.handleClick()}/>
                    </div>
                </div>
                <div className="landingPageCategory">
                    <div className="landingPageCatgeoryNameAndImage">
                    <img src={categorySample} className="landingPageMenuCategory"/>
                    <span className="landingPageSpanTwo">Screncher's</span>
                    </div>
                </div>
                <div className="landingPageProductOne">
                    <div className="landingPageProductTwo">
                    <img src={categorySample} className="landingPageProductImage"/>
                    <span className="landingPageSpanThree">Bechne Ka Saaman</span>
                    <span className="landingPageSpanThree">Rs 24</span>
                    <div className="landingPageAddToCartButton">
                    <span className="landingPageSpanFour">Add to Cart</span>
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

export default connect(mapStateToProps)(LandingPage)