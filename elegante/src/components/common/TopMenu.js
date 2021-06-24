import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/authorizations'
import './LandingPage.css'
import sample from '../../assets/images/sample.jpeg'
import sampleOne from '../../assets/images/sampleOne.jpeg'
import phaseTwo from '../../assets/images/phaseTwo.jpeg'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import logoTwo from '../../assets/images/logoTwo.png'
import {Link,withRouter} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CategoryIcon from '@material-ui/icons/Category';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExtensionIcon from '@material-ui/icons/Extension';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
        this.setState({
            menuOpen:false,
            openDrawer:false
        })
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

      handleDrawerClose = () => {
        this.setState({openDrawer:false});
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
                {this.props.jwtToken === null ?
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
                {this.props.jwtToken !== null ?
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
if(this.props.location.pathname!=='/login' && !this.props.loader){
    return(
        <div className="landingPageOne">
             <Drawer anchor={'right'} open={this.state.openDrawer} onClose={()=>this.setState({openDrawer:false})} className="drawer">
             <img src={logoTwo} className="logoDrawer"/>
           {this.props.jwtToken !==null ?
           this.props.jwtToken.designation==='Admin' ? 
           <div className="drawerUl">
            <div className="drawerEach">
            <AccountCircleIcon className="drawerIcon"/>
           <span className="drawerLiName" onClick={()=>this.handleDrawerClose()}>Hey, {this.props.jwtToken.name}</span>
           </div>
           <Link to="/" style={{textDecoration:'none'}} className="drawerEach">
               <HomeIcon className="drawerIcon"/>
           <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Home</span>
           </Link>
           <Link to="/addCategory" style={{textDecoration:'none'}} className="drawerEach">
               <ExtensionIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Add Category</span>
           </Link>
           <Link to="/addStocks" style={{textDecoration:'none'}} className="drawerEach">
               <AddShoppingCartIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Add Stocks</span>
           </Link>
           <Link to="/addOffers" style={{textDecoration:'none'}} className="drawerEach">
               <LocalOfferIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Add Offers</span>
           </Link> 
           <Link to="/addTax" style={{textDecoration:'none'}} className="drawerEach">
               <LocalAtmIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Add Tax</span>
           </Link>
           <Link to="/userRequest" style={{textDecoration:'none'}} className="drawerEach">
               <RecordVoiceOverIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>User Requests</span>
           </Link>
           <Link to="/category" style={{textDecoration:'none'}} className="drawerEach">
               <CategoryIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Categories</span>
           </Link>
           <Link to="/cart" style={{textDecoration:'none'}} className="drawerEach">
               <ShoppingCartIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Cart</span>
           </Link>
           <Link to="/myOrders" style={{textDecoration:'none'}} className="drawerEach">
               <ReceiptIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>My Orders</span>
           </Link>
           <div className="drawerEach" onClick={()=>this.onLogout()}>
               <ExitToAppIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Logout</span>
           </div>
           {/* <Link to="/updatePassword" style={{textDecoration:'none'}} className="drawerEach">
               <AccountCircleIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Update Password</span>
           </Link> */}
           </div>
           :
           <div className="drawerUl">
           <Link to="/" style={{textDecoration:'none'}} className="drawerEach">
               <HomeIcon className="drawerIcon"/>
           <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Home</span>
           </Link>
           <Link to="/category" style={{textDecoration:'none'}} className="drawerEach">
               <CategoryIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Categories</span>
           </Link>
           <Link to="/cart" style={{textDecoration:'none'}} className="drawerEach">
               <ShoppingCartIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Cart</span>
           </Link>
           <Link to="/myOrders" style={{textDecoration:'none'}} className="drawerEach">
               <ReceiptIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>My Orders</span>
           </Link>
           <div className="drawerEach" onClick={()=>this.onLogout()}>
               <ExitToAppIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Logout</span>
           </div>
           {/* <Link to="/updatePassword" style={{textDecoration:'none'}} className="drawerEach">
               <AccountCircleIcon className="drawerIcon"/>
               <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Update Password</span>
           </Link> */}
           </div>
            :  <div className="drawerUl">
            <Link to="/" style={{textDecoration:'none'}} className="drawerEach">
                <HomeIcon className="drawerIcon"/>
            <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Home</span>
            </Link>
            <Link to="/category" style={{textDecoration:'none'}} className="drawerEach">
                <CategoryIcon className="drawerIcon"/>
                <span className="drawerLi" onClick={()=>this.handleDrawerClose()}>Categories</span>
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
{this.props.jwtToken !==null ? 
this.props.jwtToken.designation==='Admin' ? 
<div>
<MenuItem style={{color:'#00695c'}} onClick={()=>this.handleClose()}>Hey, {this.props.jwtToken.name}</MenuItem>
{/* <Link to="/category" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>My Profile</MenuItem></Link> */}
<Link to="/addCategory" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>Add Category</MenuItem></Link>
<Link to="/addStocks" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>Add Stocks</MenuItem></Link>
<Link to="/addOffers" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>Add Offers</MenuItem></Link>
<Link to="/addTax" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>Add Tax</MenuItem></Link>
{/* <Link to="/addCurrency" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>Add Currency</MenuItem></Link> */}
<Link to="/userRequest" style={{textDecoration:'none',color: '#00695c'}}><MenuItem onClick={()=>this.handleClose()}>User Requests</MenuItem></Link>
<MenuItem style={{textDecoration:'none',color: '#00695c'}} onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
</div>
:
this.props.jwtToken.designation==='User' ? 
<div>
<MenuItem onClick={()=>this.handleClose()}>Update Password</MenuItem>
<MenuItem onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
</div> :null:null
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
    console.log(authedId.loader)
    return{
        loader:authedId.loader,
        authedId:authedId,
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default (connect(mapStateToProps)(withRouter(TopMenu)))