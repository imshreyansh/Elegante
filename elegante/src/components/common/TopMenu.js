import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/authorizations'
import './LandingPage.css'
import sample from '../../assets/images/sample.jpeg'
import sampleOne from '../../assets/images/sampleOne.jpeg'
import sideOne from '../../assets/images/sideOne.png'
import sideTwo from '../../assets/images/sideTwo.png'
import phaseTwo from '../../assets/images/phaseTwo.jpeg'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import logo from '../../assets/images/logo.png'
import logoTwo from '../../assets/images/logoTwo.png'
import logoWhite from '../../assets/images/logoWhite.png'
import {Link,withRouter} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CategoryIcon from '@material-ui/icons/Category';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
class TopMenu extends Component {
    constructor(props){
        super(props)
        this.default={
            menuOpen:false,
            slideShowArray:[sample,sampleOne,phaseTwo],
            slideImage:'',
            indexImage:0,
            openDrawer:false,
            mobile:true,
            modalOffer:false
        }
        this.state = this.default

    }

    componentDidMount() {
        if(window.matchMedia("(max-width: 768px)").matches){
            this.setState({
                modalOffer:true
            })
        }
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

      onScrollToTop = () =>{
     window.scrollTo({top: 0, behavior: 'smooth'})
      }

      renderMenu = () => {
          if(window.matchMedia("(max-width: 768px)").matches){
            return(
                <div className="landingPageMenuTop">
                <div className="landingPageMenuItems">                  
                   <MenuIcon className="landingPageSpan" onClick={()=>this.handleDrawer()}/>
                   </div>
                </div>
                
              ) 
       }else{
            return(
                <div className="landingPageMenuTop">
                {this.props.jwtToken !== null ?
                <div className="landingPageMenuItems">
                   <Link to="/" style={{textDecoration:'none'}}  className="landingPageSpan" ><span onClick={()=>this.onScrollToTop()}>Home</span></Link>
                   <Link to="/category" style={{textDecoration:'none'}} className="landingPageSpan">
                       <span onClick={()=>this.onScrollToTop()}>Categories</span></Link>
                   <Link to="/login" style={{textDecoration:'none'}} className="landingPageSpan">
                   <span onClick={()=>this.onScrollToTop()}>Login/Sign Up</span>
                   </Link>
                   </div> :
                <div className="landingPageMenuItems">
                <Link to="/" style={{textDecoration:'none'}}  className="landingPageSpan" ><span onClick={()=>this.onScrollToTop()}>Home</span></Link>
                <Link to="/category" style={{textDecoration:'none'}} className="landingPageSpan">
                    <span onClick={()=>this.onScrollToTop()}>Categories</span></Link>
                <AccountCircleIcon style={{fontSize:"20px"}} className="landingPageSpan" onClick={()=>this.setState({menuOpen:true})}/>
                </div>
                   }
                </div>
                
              )
          }
          
      }

      renderCartAndOrder = () =>{
        if(window.matchMedia("(max-width: 768px)").matches){
            return null
       }else{
            return(
                <div className="cartAndOrderShowDiv">
                {this.props.jwtToken === null ?
                <div className="cartAndOrderDisplay">
                              <Link to="/cart" style={{textDecoration:'none'}}>
<ShoppingCartIcon style={{fontSize:"20px"}} className="shopCartOrderRecieptIcon"/>
</Link>
<Link to="/myOrders" style={{textDecoration:'none'}}>
<ReceiptIcon style={{fontSize:"20px",paddingLeft:"10px"}} className="shopCartOrderRecieptIcon"/>
</Link>
                   </div> :null
                   }
                </div>
                
              )
          }
      }
      

      renderOffer = () => {
        if(window.matchMedia("(max-width: 768px)").matches){
            return (
                <Modal
                open={this.state.modalOffer}
                onClose={()=>this.setState({modalOffer:false})}
              >
                  <div className="offerDivModal">
                      <div className="closeModalCross">
<CancelIcon className="closeModalCrossIcon"  onClick={()=>this.setState({modalOffer:false})}/>
                      </div>
                    <div className="offerDivModalInside">
                        <span className="offerSpanText">Use Code</span>
                        <span className="offerSpanTextTwo">"2021"</span>
                        <span className="offerSpanText">And Get 10% Off</span>
                    </div>
                  </div>
            </Modal>
            )
        }else{
            return(
                <div className="offerUpperPermanent">
                <div className="offerPermanent">
                <span className="offerText">USE CODE "2021" AND GET 20% OFF </span>
                </div>
                </div>
            )
            
        }
    }

      handleDrawer = ()=>{
          this.setState({
              openDrawer:true
          })
      }

    render(){
if(this.props.location.pathname!=='/login'){
    return(
        <div className="landingPageOne">
             <Drawer anchor={'right'} open={this.state.openDrawer} onClose={()=>this.setState({openDrawer:false})} className="drawer">
             <img src={logoTwo} className="logoDrawer"/>
           {this.props.jwtToken ===null ?
           <div className="drawerUl">
           <Link to="/" style={{textDecoration:'none'}} className="drawerEach">
               <HomeIcon className="drawerIcon"/>
           <span className="drawerLi" onClick={()=>this.handleClose()}>Home</span>
           </Link>
           <Link to="/category" style={{textDecoration:'none'}} className="drawerEach">
               <CategoryIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleClose()}>Categories</span>
           </Link>
           <Link to="/cart" style={{textDecoration:'none'}} className="drawerEach">
               <ShoppingCartIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleClose()}>Cart</span>
           </Link>
           <Link to="/myOrders" style={{textDecoration:'none'}} className="drawerEach">
               <ReceiptIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleClose()}>My Orders</span>
           </Link>
           <Link to="/updatePassword" style={{textDecoration:'none'}} className="drawerEach">
               <AccountCircleIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleClose()}>Update Password</span>
           </Link>
           </div>
            :  <div className="drawerUl">
            <Link to="/" style={{textDecoration:'none'}} className="drawerEach">
                <HomeIcon className="drawerIcon"/>
            <span className="drawerLi" onClick={()=>this.handleClose()}>Home</span>
            </Link>
            <Link to="/category" style={{textDecoration:'none'}} className="drawerEach">
                <CategoryIcon className="drawerIcon"/>
                <span className="drawerLi" onClick={()=>this.handleClose()}>Categories</span>
            </Link>
            <Link to="/login" style={{textDecoration:'none'}} className="drawerEach">
                <VpnKeyIcon className="drawerIcon"/>
                <span className="drawerLi">Login/Sign Up</span>
            </Link>
             </div>}
      </Drawer>
        <div className="navbar">
        <img src={logoTwo} className="logoMainLandingPage"/>

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
<div>
<Link to="/category" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem></Link>
<Link to="/category" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Add Category</MenuItem></Link>
<Link to="/stocks" style={{textDecoration:'none',color: '#F4AFB3'}}><MenuItem onClick={()=>this.handleClose()}>Add Stocks</MenuItem></Link>
<MenuItem style={{textDecoration:'none',color: '#F4AFB3'}} onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
</div>
:
<div>
<MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem>
<MenuItem onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
</div>
}
</Menu>
{this.renderCartAndOrder()}

{this.renderMenu()}
{this.renderOffer()}

        </div>


        </div>
    )
}else{
    return null
}
        
    }
}

function mapStateToProps(authedId){
    return{
        authedId:authedId,
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default (connect(mapStateToProps)(withRouter(TopMenu)))