import React,{Component,Fragment} from 'react'
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
import {Link} from 'react-router-dom'

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
        {this.props.jwtToken !==null && 
        this.props.jwtToken.designation==='Admin' ? 
    <Fragment>
 <Link to="/category" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem></Link>
 <Link to="/category" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Orders</MenuItem></Link>
    <Link to="/category" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Add Category</MenuItem></Link>
    <Link to="/stocks" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Add Stocks</MenuItem></Link>
    <Link to="/stocks" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.onLogout()}>About</MenuItem></Link>
    <MenuItem style={{textDecoration:'none',color: '#F4AFB3'}} onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
    </Fragment>
    :
    <Fragment>
         <MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem>
    <MenuItem onClick={()=>this.handleClose()}>My Orders</MenuItem>
    <MenuItem onClick={()=>this.onLogout()}>About</MenuItem>
    <MenuItem onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
    </Fragment>
   }
      </Menu>
                <div className="landingPageMenuTop">
                {this.props.jwtToken === null ?
                <div className="landingPageMenuItems">
                    <span className="landingPageSpan">Home</span>
                    <span className="landingPageSpan">About</span>
                    <Link to="/login" style={{textDecoration:'none'}} className="landingPageSpan">
                    <span>Login/Sign Up</span>
                    </Link>
                    </div> :
                <div className="landingPageMenuItems">
                    <ShoppingCartIcon className="landingPageSpan"/>
                    <Link to="/" style={{textDecoration:'none'}} className="landingPageSpan">
                    <span>Home</span>
                    </Link>
                    <span className="landingPageSpan">Hey, {this.props.jwtToken.name}</span>
                    <MenuIcon className="landingPageSpan" onClick={()=>this.handleClick()}/>
                    </div>
                    }
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
                    {this.props.jwtToken === null ?
                    <Link to="/login" style={{textDecoration:'none'}} className="landingPageAddToCartButton">
                    <div>
                    <span className="landingPageSpanFour">Add to Cart</span>
                    </div>
                    </Link>
                    :<div className="landingPageAddToCartButton">
                    <span className="landingPageSpanFour">Add to Cart</span>
                    </div>}
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