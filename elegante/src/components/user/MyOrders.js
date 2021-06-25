import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './User.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class MyOrders extends Component {
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
            <div className="UserMain">
            <div className="MyOrdersHeadingDiv">
                    <span className="MyOrdersHeadingSpan">My Order's</span>
                </div>
                <div className="MyOrdersMainDiv">
                    <div className="MyOrdersEachDiv">
                        <div className="MyOrdersEachDivOrderNumberDiv">
                            <span className="MyOrdersEachDivOrderNumberSpan">#0982638</span>
                        </div>
                        <div className="MyOrdersEachDivDateTimeAndIconDiv">
                            <span className="MyOrdersEachDivDateAndTimeSpan">12/11/2021</span>
                        </div>
                        <div className="MyOrdersEachDivDateTimeAndIconDiv">
                            <span className="MyOrdersEachDivDateAndTimeSpan">12:25</span>
                        </div>
                        <div className="MyOrdersEachDivDateTimeAndIconDiv">
                            <ExpandMoreIcon style={{fontSize:'40px'}} className="MyOrdersEachDivIconSpan"/>
                        </div>
                    </div>
                    <div className="MyOrderDetailsDiv">
                         <div className="MyOrderDetailsSpanDiv">
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">NAME</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">Shreyansh Upadhyay</span>
                            </div>
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">Email</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">{`shreyu.upadhyay13@gmail.com`}</span>
                            </div>
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">Mobile</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">+919926551579</span>
                            </div>
                         </div>
                         <div className="MyOrderDetailsSpanDiv">
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">Address</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">K67/81 A-2 Bharat Milap Colony Nati Imli Varanasi</span>
                            </div>
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">State</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">Uttar Pradesh</span>
                            </div>
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">City</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">Varanasi</span>
                            </div>
                            
                         </div>
                         <div className="MyOrderDetailsSpanDiv">
                         <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">Pin</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">221001</span>
                            </div>
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">Service</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">ECom Express</span>
                            </div>
                            <div className="MyOrderDetailsSpanDivEach">
                                <span className="MyOrderDetailsSpanDivEachSpan">Tracking Id</span>
                                <span className="MyOrderDetailsSpanDivEachSpan">110297236767</span>
                            </div>
                        </div>
                         <div className="MyOrderDetailsItemsDiv">
                            <div className="MyOrderDetailsItemsEach">
                            <span className="MyOrderDetailsSpanDivEachSpan">Vintage Handwritten letter</span>
                            <span className="MyOrderDetailsSpanDivEachSpan">x2</span>
                            <span className="MyOrderDetailsSpanDivEachSpan">Rs 200</span>
                            </div>
                         </div>
                         <div className="MyOrderDetailsItemsDiv">
                            <div className="MyOrderDetailsItemsEach">
                            <span className="MyOrderDetailsSpanDivEachSpan">Sub Total</span>
                            <span className="MyOrderDetailsSpanDivEachSpan">Rs 400</span>
                            </div>
                            <div className="MyOrderDetailsItemsEach">
                            <span className="MyOrderDetailsSpanDivEachSpan">Discount</span>
                            <span className="MyOrderDetailsSpanDivEachSpan">20%</span>
                            </div>
                            <div className="MyOrderDetailsItemsEach">
                            <span className="MyOrderDetailsSpanDivEachSpan">Tax</span>
                            <span className="MyOrderDetailsSpanDivEachSpan">18%</span>
                            </div>
                            <div className="MyOrderDetailsItemsEach">
                            <span className="MyOrderDetailsSpanDivEachSpan">Total</span>
                            <span className="MyOrderDetailsSpanDivEachSpan">Rs 380</span>
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
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default connect(mapStateToProps)(MyOrders)