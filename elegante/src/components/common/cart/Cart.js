import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Cart.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import sample from '../../../assets/images/sample.jpeg'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import offer from '../../../assets/images/offer.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import state from '../../../utils/state.json'
import {getMemberCart,removeCart} from '../../../actions/memberCart'
import {getAllTax} from '../../../actions/tax'
import {handleError} from '../../../actions/handleError'
import emptyCart from '../../../assets/images/emptyCart.png'
import {purchaseOrder} from '../../../actions/order'
class Cart extends Component {
    constructor(props){
        super(props)
        this.default={
           next:false,
           discount:0,
           coupon:'',
           name:'',
           nameE:'',
           mobile:'',
           mobileE:'',
           email:'',
           emailE:'',
           address:'',
           addressE:'',
           pin:'',
           pinE:'',
           state:state[0].name,
           city:'',
           cityE:''
        }
        this.state = this.default
        this.props.dispatch(getMemberCart(this.props.jwtToken.id))
        this.props.dispatch(getAllTax())
    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})

    }

    onRemove = (id) => {
        this.props.dispatch(removeCart(id))
    }

    checkOffer = () =>{
        if(this.state.coupon===this.props.offer.offer){
            this.setState({
                discount: this.props.offer.percentage
            })
        }else{
            const obj={
                error:'Not a valid offer',
                type:'error'
            }
            this.props.dispatch(handleError(obj))
        }
    }

    onPurchase = (total,subTotal) => {
        const stock=[]
        this.props.cart.forEach(d=>{
            stock.push({qty:d.qty,stockId:d.stock._id,amount:d.qty*d.stock.sellingPrice})
        })
        const obj={
            user:this.props.jwtToken.id,
            total,
            subTotal,
            discount:this.state.discount,
            tax:this.props.tax._id,
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            address:this.state.address,
            state:this.state.state,
            city:this.state.city,
            pin:this.state.pin,
            service:'',
            trackingId:'',
            stock
        }
        
        this.props.dispatch(purchaseOrder(obj))
        this.setState({
            discount:0,
            name:'',
            email:'',
            mobile:'',
            address:'',
            state:state[0].name,
            city:'',
            pin:'',
        })
    }

    renderView = (subTotal,Total) =>{
        if(this.props.cart.length>0){
            return(
                <div className="CartMainDiv">
                          <div className="CartProductsDiv">
                          {this.props.cart.map((d,i)=>{
                              return(    
                              <div key={i} className="CartProductEach">
                              <div className="ProductImageCartAndItsName">
                                  <img src={d.stock.thumbnail[0].path} className="ProductEachImage"/>
                                  <div className="ProductNameDivAndMoney">
                                      <span className="ProductNameSpanCart">{d.stock.name}</span>
                                      <span className="ProductMoneySpanCart">Rs. {d.stock.sellingPrice}</span>
                                  </div>
                              </div>
                              <div className="QuantityAndMoneyCart">
                              <div className="QuantityProductEachCart">
                                  <span className="QuantityProductEachCartSpan">QTY: X{d.qty}</span>
                              </div>
                              <div className="QuantityProductEachCart">
                                  <span className="QuantityProductEachCartSpan">Rs. {(d.qty*d.stock.sellingPrice)}</span>
                              </div>
                              </div>
                              <div className="QuantityProductEachCartIcon">
                                  <CancelIcon onClick={()=>this.onRemove(d._id)} className="QuantityProductEachCartIconIcon" />
                              </div>
                          </div> 
                              )
                          })}    
      
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
                                  <div className="MoneyCartGoNextDivTwo" onClick={()=>this.onPurchase(Total,subTotal)}>
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
                          <div onClick={()=>this.checkOffer()} className="offerGoButtonCart">
                          <ArrowForwardIosIcon className="offerButtonArrowCart" />
                          </div>
                      </div>
                      </div>
                      <div className="MoneyCartDiv">
                      <span className="MoneyCartSpan">Sub Total</span>
                      <span className="MoneyCartSpanTwo">Rs {subTotal}</span>
                      </div>
                      <div className="MoneyCartDiv">
                      <span className="MoneyCartSpan">Discount</span>
                          <span className="MoneyCartSpanTwo">{this.state.discount}%</span>
                      </div>
                      <div className="MoneyCartDiv">
                      <span className="MoneyCartSpan">{this.props.tax&&this.props.tax.tax}</span>
                      <span className="MoneyCartSpanTwo">{this.props.tax&&this.props.tax.percentage}%</span>
                      </div>
                      <div className="MoneyCartDiv">
                      <span className="MoneyCartSpan">Total</span>
                      <span className="MoneyCartSpanTwo">Rs {(Total).toFixed(2)}</span>
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
            )
        }else{
            return(
                <img src={emptyCart} className="emptyCart"/>
            )
        }
    }

    render(){
        let subTotal=0
        this.props.cart.forEach(d=>{
            subTotal+=d.qty*d.stock.sellingPrice
        })
        let Total =(subTotal*(this.props.tax&&this.props.tax.percentage/100)+subTotal)-(subTotal*(this.state.discount/100))
        return(
            <div className="CartMain">
                <div className="shoppingCartHeading">
                    <span className="shoppingCartHeadingSpan">Shopping Cart</span>
                </div>
                {this.renderView(subTotal,Total)}
            </div>
        )
        
    }
}


function mapStateToProps(data){
    return{
        offer:data.offer.filter(d=>d.status==='Active')[0],
        cart:data.memberCart,
        tax:data.tax.filter(d=>d.status==='Active')[0],
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default connect(mapStateToProps)(Cart)

 