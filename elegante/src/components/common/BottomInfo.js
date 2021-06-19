import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './LandingPage.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import {getItemFromStorage} from '../utils/localStorage'
import logoWhite from '../../assets/images/logoWhite.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

class BottomInfo extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default

    }

    componentDidMount() {
       
    }
    onScrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
         }

    render(){
        if(this.props.location.pathname!=='/login'){
        return(
            <div className="landingPageOne">
    
       <div className="LandingBottom">
            <div className="landingBottomDataContainer">
            <img src={logoWhite} className="landingBottomDataOne"/>
            <div className="landingBottomDataTwo">
            <a href="https://www.instagram.com/_elegante.__/"><InstagramIcon className="landingBottomIcon"/></a>
            <FacebookIcon className="landingBottomIcon"/>
            </div>
            <div className="landingBottomDataThree">
            <Link to="/shipping" style={{textDecoration:'none'}} className="landingBottomTexts" onClick={()=>this.onScrollToTop()}>Shipping & Returns</Link>
            <Link to="/terms" style={{textDecoration:'none'}} className="landingBottomTexts" onClick={()=>this.onScrollToTop()}>Terms & Conditions</Link>
            <Link to="/contact" style={{textDecoration:'none'}} className="landingBottomTexts" onClick={()=>this.onScrollToTop()}>Contact Us</Link>
            <Link to="/policy" style={{textDecoration:'none'}} className="landingBottomTexts" onClick={()=>this.onScrollToTop()}>Policy</Link>
            </div>
            </div>
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

export default (connect(mapStateToProps)(withRouter(BottomInfo)))