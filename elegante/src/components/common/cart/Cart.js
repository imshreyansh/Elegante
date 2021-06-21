import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Cart.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import sample from '../../../assets/images/sample.jpeg'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import offer from '../../../assets/images/offer.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class Cart extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default

    }

    componentDidMount() {
       
    }


    render(){
        return(
            <div className="CartMain">
                <div className="shoppingCartHeading">
                    <span className="shoppingCartHeadingSpan">Shopping Cart</span>
                </div>
                <div className="CartMainDiv">
                    <div className="CartProductsDiv">
                        <div className="CartProductEach">
                            <div className="ProductImageCartAndItsName">
                                <img src={phaseTwo} className="ProductEachImage"/>
                                <div className="ProductNameDivAndMoney">
                                    <span className="ProductNameSpanCart">Vintage Handwritten letter</span>
                                    <span className="ProductMoneySpanCart">Rs. 20</span>
                                </div>
                            </div>
                            <div className="QuantityAndMoneyCart">
                            <div className="QuantityProductEachCart">
                                <span className="QuantityProductEachCartSpan">QTY: X2</span>
                            </div>
                            <div className="QuantityProductEachCart">
                                <span className="QuantityProductEachCartSpan">Rs. 200</span>
                            </div>
                            </div>
                            <div className="QuantityProductEachCartIcon">
                                <CancelIcon className="QuantityProductEachCartIconIcon" />
                            </div>
                        </div>

                        
                    </div>
                    <div className="CartPaymentDiv">
                    <div className="offerToAskDiv">
                        <div className="offerImageAndTextCart">
                            <img src={offer} className="offerImageOnCart"/>
                            <span className="offerSpanOnCart">Discount Coupon</span>
                        </div>
                        <div className="offerInputAndGo">
                        <input className="inputFormCartOffer" placeholder="Coupon" value={this.state.coupon} onChange={(e)=>this.setState({coupon:e.target.value})}/>
                            <div className="offerGoButtonCart">
                            <ArrowForwardIosIcon className="offerButtonArrowCart" />
                            </div>
                        </div>
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
    }
}

export default connect(mapStateToProps)(Cart)