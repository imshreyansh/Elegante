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
import state from '../../../utils/state.json'
class Cart extends Component {
    constructor(props){
        super(props)
        this.default={
           next:true
        }
        this.state = this.default

    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})

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
                   {this.state.next ? 
                   <div className="CartPaymentDivDesign">
                        <div className="CartAddressDiv">
                            <span className="CartAddressHeadingSpan">Add Shipping Address</span>
                        </div>
                        <div className="CartAddressDiv">
                        <input className="CartAddress" style={{placeholderTextColor:'#fff'}} placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                        </div>
                        <div className="CartAddressDiv">
                        <input className="CartAddress" style={{placeholderTextColor:'#fff'}} placeholder="Mobile" value={this.state.mobile} onChange={(e)=>this.setState({mobile:e.target.value})}/>
                        </div>
                        <div className="CartAddressDiv">
                        <input className="CartAddress" style={{placeholderTextColor:'#fff'}} placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                        </div>
                        <div className="CartAddressDiv">
                        <input className="CartAddress" style={{placeholderTextColor:'#fff'}} placeholder="Address" value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})}/>
                        </div>
                        <div className="CartAddressDiv">
                        <select className="CartAddressTwo" onChange={(e)=>this.setState({
                        state:e.target.value
                    })}>
                        {state.map((data,id)=>{
                            return(
                             <option key={id} value={data.name}>{data.name}</option>
                            )
                        })}
                    </select> 
                        </div>
                        <div className="CartAddressDiv">
                        <input className="CartAddress" style={{placeholderTextColor:'#fff'}} placeholder="City" value={this.state.city} onChange={(e)=>this.setState({city:e.target.value})}/>
                        </div>
                        <div className="CartAddressDiv">
                        <input className="CartAddress" style={{placeholderTextColor:'#fff'}} placeholder="Pin Code" value={this.state.pin} onChange={(e)=>this.setState({pin:e.target.value})}/>
                        </div>
                        <div className="MoneyCartGoNextDivOne">
                            <div className="MoneyCartGoNextDivTwo">
                            <ArrowForwardIosIcon className="MoneyCartGoNextIcon" />
                            </div>
                        </div>
                    
                    </div>
                    :
                    <div className="CartPaymentDivDesign">
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
                <div className="MoneyCartDiv">
                <span className="MoneyCartSpan">Sub Total</span>
                <span className="MoneyCartSpanTwo">Rs 200</span>
                </div>
                <div className="MoneyCartDiv">
                <span className="MoneyCartSpan">Discount</span>
                <span className="MoneyCartSpanTwo">20%</span>
                </div>
                <div className="MoneyCartDiv">
                <span className="MoneyCartSpan">Tax</span>
                <span className="MoneyCartSpanTwo">18%</span>
                </div>
                <div className="MoneyCartDiv">
                <span className="MoneyCartSpan">Total</span>
                <span className="MoneyCartSpanTwo">Rs 180</span>
                </div>
                <div className="MoneyCartGoNextDivOne">
                <div className="MoneyCartGoNextDivTwo" onClick={()=>this.setState({next:true})}>
                <ArrowForwardIosIcon className="MoneyCartGoNextIcon" />
                </div>
                </div>
                    </div>
                    }
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

 