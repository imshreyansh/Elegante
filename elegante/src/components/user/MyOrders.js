import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './User.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getOrderByUserId} from '../../actions/order'
import {getDate,getTime} from '../utils/dateAndTime'


class MyOrders extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default
        this.props.dispatch(getOrderByUserId(this.props.jwtToken.id))
    }

    componentDidMount() {
       
    }


    renderView=(i,d)=>{
        if(this.state.index !=='' && this.state.index===i){
            return(
                <div className="MyOrderDetailsDiv">
                <div className="MyOrderDetailsSpanDiv">
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">NAME</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.name}</span>
                   </div>
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">Email</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.email}</span>
                   </div>
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">Mobile</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.mobile}</span>
                   </div>
                </div>
                <div className="MyOrderDetailsSpanDiv">
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">Address</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.address}</span>
                   </div>
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">State</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.state}</span>
                   </div>
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">City</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.city}</span>
                   </div>
                   
                </div>
                <div className="MyOrderDetailsSpanDiv">
                <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">Pin</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.pin}</span>
                   </div>
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">Service</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.service}</span>
                   </div>
                   <div className="MyOrderDetailsSpanDivEach">
                       <span className="MyOrderDetailsSpanDivEachSpan">Tracking Id</span>
                       <span className="MyOrderDetailsSpanDivEachSpan">{d.trackingId==='' ? 'Yet to dispatch' : d.trackingId}</span>
                   </div>
               </div>
               {d.stock.map((data,id)=>{
                   return(
                    <div className="MyOrderDetailsItemsDiv">
                    <div className="MyOrderDetailsItemsEach">
                    <span className="MyOrderDetailsSpanDivEachSpan">{data.stockId.name}</span>
                   <span className="MyOrderDetailsSpanDivEachSpan">x{data.qty}</span>
                    <span className="MyOrderDetailsSpanDivEachSpan">Rs {(data.amount).toFixed(2)}</span>
                    </div>
                 </div>
                   )
               })}
               
                
                <div className="MyOrderDetailsItemsDiv">
                   <div className="MyOrderDetailsItemsEach">
                   <span className="MyOrderDetailsSpanDivEachSpan">Sub Total</span>
                   <span className="MyOrderDetailsSpanDivEachSpan">Rs {(d.subTotal).toFixed(2)}</span>
                   </div>
                   <div className="MyOrderDetailsItemsEach">
                   <span className="MyOrderDetailsSpanDivEachSpan">Discount</span>
                   <span className="MyOrderDetailsSpanDivEachSpan">{d.discount}%</span>
                   </div>
                   <div className="MyOrderDetailsItemsEach">
                   <span className="MyOrderDetailsSpanDivEachSpan">{d.tax.tax}</span>
                   <span className="MyOrderDetailsSpanDivEachSpan">{d.tax.percentage}%</span>
                   </div>
                   <div className="MyOrderDetailsItemsEach">
                   <span className="MyOrderDetailsSpanDivEachSpan">Total</span>
                   <span className="MyOrderDetailsSpanDivEachSpan">Rs {(d.total).toFixed(2)}</span>
                   </div>
                </div>
           </div>
            )
        }
    }
    render(){
        return(
            <div className="UserMain">
            <div className="MyOrdersHeadingDiv">
                    <span className="MyOrdersHeadingSpan">My Order's</span>
                </div>
                {this.props.orders.map((d,i)=>{
                    return(
                        <div className="MyOrdersMainDiv">
                        <div className="MyOrdersEachDiv">
                            <div className="MyOrdersEachDivOrderNumberDiv">
                                <span className="MyOrdersEachDivOrderNumberSpan">#{d.orderId}</span>
                            </div>
                            <div className="MyOrdersEachDivDateTimeAndIconDiv">
                            <span className="MyOrdersEachDivDateAndTimeSpan">{getDate(d.date)}</span>
                            </div>
                            <div className="MyOrdersEachDivDateTimeAndIconDiv">
                                <span className="MyOrdersEachDivDateAndTimeSpan">{getTime(d.time)}</span>
                            </div>
                            <div className="MyOrdersEachDivDateTimeAndIconDiv">
                                <ExpandMoreIcon onClick={()=>this.setState({index:i})} style={{fontSize:'40px'}} className="MyOrdersEachDivIconSpan"/>
                            </div>
                        </div>
                       {this.renderView(i,d)}
                    </div>
                    )
                })}
               
                
            </div>
        )
        
    }
}
function mapStateToProps(data){
    return{
        authedId:data,
        orders:data.order,
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default connect(mapStateToProps)(MyOrders)