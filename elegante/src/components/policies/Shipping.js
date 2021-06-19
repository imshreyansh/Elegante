import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Policies.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'



class Shipping extends Component {
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
            <div className="mainPolicy">
                <div className="headingPolicy">
                     <span className="headingSpan">Shipping & Returns</span>
                </div>
                <div className="divPolicyText">
                    <span className="policySpan">Delivery timeline: Minimum 6 day to maximum 11 days.

​

To return your product, you should reach out to us via DM or email. We will provide you with the information regarding the same. Pick up will be scheduled if your order is cleared for a return.


You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.


Depending on where you live, the time it may take for your exchanged product to reach you, may vary.<br/>

Our policy lasts 10 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.


To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.<br/>

Refunds (if applicable)
Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.

If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.

​

Sale items (if applicable)

 

Only regular priced items may be refunded, unfortunately sale items cannot be refunded.<br/>
If you haven’t received a refund yet, first check your bank account again.

Then contact your credit card company, it may take some time before your refund is officially posted.

Next contact your bank. There is often some processing time before a refund is posted.

If you’ve done all of this and you still have not received your refund yet, please contact us at [elegantebymegha@gmail.com].</span>
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

export default connect(mapStateToProps)(Shipping)