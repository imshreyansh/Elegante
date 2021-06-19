import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './LandingPage.css'
import sample from '../../assets/images/sample.jpeg'
import sampleOne from '../../assets/images/sampleOne.jpeg'
import sideOne from '../../assets/images/sideOne.png'
import sideTwo from '../../assets/images/sideTwo.png'
import phaseTwo from '../../assets/images/phaseTwo.jpeg'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import logo from '../../assets/images/logo.png'
import logoTwo from '../../assets/images/logoTwo.png'
import logoWhite from '../../assets/images/logoWhite.png'
import {Link} from 'react-router-dom'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SpaIcon from '@material-ui/icons/Spa';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import insta from '../../assets/images/insta.png'
import email from '../../assets/images/email.png'
class LandingPage extends Component {
    constructor(props){
        super(props)
        this.default={
            slideShowArray:[sample,sampleOne,phaseTwo],
            slideImage:'',
            indexImage:0,
            mobile:true,
            categories:[1,2,3,4,5,6,7]
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
        if(window.matchMedia("(max-width: 768px)").matches){
        this.setState({
            mobile:true
        })
        }else{
            this.setState({
                mobile:false
            })
        }
    }
    render(){
        return(
            <div className="landingPageOne">
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
       <div className="categoryItemsDiv">
            <div className="categoryItems">
                <div className="categoryItemsEach">
                <img src={sample} className="landingCategoryImage"/>
                <div className="LandingCategoryBack">
                <span className="landingCategoryName">Necklaces</span>
                </div>
                </div>
            </div>
            </div>
            <div className="arrowForLandingCategory">
            <div className="arrowForLandingCategoryTwo">
<SkipPreviousIcon style={{fontSize:'30px'}} className="arrowIconOne"/>
<span className="arrowSpan">1</span>
<SkipNextIcon style={{fontSize:'30px'}} className="arrowIconTwo"/>
            </div>
            </div>
       </div>
       <div className="categoriesLandingOne">
       <div className="categoryHeadingLanding">
            <span className="headingLanding">Top Seller's</span>
       </div>
       </div>
       <div className="topSellersDiv">
            <div className="topSellersItems">
                <div className="topSellersItemsEach">
                <div className="topSellersTag">
                <span className="topSellersNameFour">Top Seller's</span>
                </div>
                <img src={sample} className="topSellersImage"/>
                <span className="topSellersName">Vintage Handwritten letter</span>
                <span className="topSellersNameThree">Rs 250.00</span>
                <div className="topSellersBack">
                <span className="topSellersNameTwo">Add to Cart</span>
                </div>
                </div>
            </div>
            </div>
            <div className="arrowForLandingCategory">
            <div className="arrowForLandingCategoryTwo">
<SkipPreviousIcon style={{fontSize:'30px'}} className="arrowIconOne"/>
<span className="arrowSpan">1</span>
<SkipNextIcon style={{fontSize:'30px'}} className="arrowIconTwo"/>
            </div>
            </div>
       <div className="categoriesLandingOne">
       <div className="categoryHeadingLanding">
            <span className="headingLanding">Happy Customer's</span>
       </div>
       </div>
       <div className="customerFeedbackDiv">
            <div className="customerFeedbackCard">
                <SpaIcon className="feedbackIcon"/>
                <div className="customerFeedbackText">
                <span className="feedbackText">
The growth is very tremendous ! For me personally the packaging and the presentation is very eye catching. I love the quality and it's reasonable price. I would love to see your business grow moreee.</span>
<span className="feedbackByName">- Shreyansh</span>
<div className="dotsOnFeedback">
<FiberManualRecordIcon className="dotsManual" style={{fontSize:"12px"}}/>
<FiberManualRecordIcon className="dotsManual" style={{fontSize:"12px"}}/>
<FiberManualRecordIcon className="dotsManual" style={{fontSize:"12px"}}/>
<FiberManualRecordIcon className="dotsManual" style={{fontSize:"12px"}}/>

</div>
                </div>
              
                <SpaIcon className="feedbackIcon"/>
            </div>
       </div>
       <div className="categoriesLandingOne">
       <div className="categoryHeadingLanding">
            <span className="headingLanding">Covid Safety</span>
       </div>
       </div>
       <div className="covidSafetyDiv">
            <div className="covidSafetySpan">
                <span className="covidSafetySpanText">Food facilities and farms can report a closure or a reduction in operations and/or request assistance for a human food establishment regulated by the FDA, excluding restaurant, retail food establishments, and animal food operations. Read the full guidance for additional information.</span>
            </div>
            <video className="videoCovid" autoplay="autoplay" controls>
      <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"/>
     </video>
       </div>
       <div className="categoriesLandingOne">
       <div className="categoryHeadingLanding">
            <span className="headingLanding">Let's Get Connected</span>
       </div>
       </div>
       <div className="connectedInfo">
       <img src={email} className="connectedImage"/>
       <img src={insta} className="connectedImage"/>
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