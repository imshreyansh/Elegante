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
import {Link} from 'react-router-dom'

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.default={
            menuOpen:false,
            slideShowArray:[sample,sampleOne,phaseTwo],
            slideImage:'',
            indexImage:0
        }
        this.state = this.default

    }

    componentDidMount() {
        setInterval(() => {
           this.setState({
               indexImage:this.state.slideShowArray.length ===this.state.indexImage ? 0 : this.state.indexImage+1,
           },()=>{
               this.setState({
                   slideImage:this.state.slideShowArray[this.state.indexImage]
               })
           })
        },5000)
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
                   <MenuIcon className="landingPageSpan" onClick={()=>this.handleClick()}/>
                   </div>
                </div>
                
              ) 
       }else{
            return(
                <div className="landingPageMenuTop">
                {this.props.jwtToken === null ?
                <div className="landingPageMenuItems">
                   <span className="landingPageSpan" onClick={()=>this.onScrollToTop()}>Home</span>
                   <span className="landingPageSpan">Contact</span>
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
                
              )
          }
          
      }

    render(){
        return(
            <div className="landingPageOne">
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
<MenuItem onClick={()=>this.onLogout()}>Contact</MenuItem>
<MenuItem onClick={()=>this.onLogout()}>LOGOUT</MenuItem>
</Fragment>
}
</Menu>
{this.renderMenu()}
            </div>
            <div className="offerPermanent">
                <span className="offerText">USE CODE "2021" AND GET 20% OFF </span>
                </div>
       <div className="allAdsOnLanding">
       <div className="upperBodyLanding" >
       <div className="upperBodyLandingInside">
            <img src={logoWhite} className="landingLogoBuy"/>
            <div className="buyNowLandingPage">
                <span className="buyNowText">Buy Now</span>
            </div>
       </div>
            </div>
            <img src={this.state.slideImage ==='' || this.state.slideImage ===undefined ? sample : this.state.slideImage} className="sampleAds"/>
       </div>
      <div className="aboutUsLanding"> 
      <div className="aboutImageOne">
      <img src={sideOne} className="aboutImageOneOne"/>
      </div>
      <div className="aboutTextLanding">
      <span className="aboutUsHeadingSpan">About Us</span>
      <span className="aboutUsSpan">An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd.</span>
      </div>
      <div className="aboutImageTwo">
      <img src={sideTwo} className="aboutImageOneOne"/>

        </div>
      </div>
       <div className="categoriesLandingOne">
       <div className="categoryHeadingLanding">
            <span className="headingLanding">Categories</span>
       </div>
       </div>
       <div className="categoriesLandingOne">
       <div className="categoryHeadingLanding">
            <span className="headingLanding">Top Seller's</span>
       </div>
       </div>
       <div className="LandingBottom">

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