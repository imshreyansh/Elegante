import React,{Component} from 'react'
import {connect} from 'react-redux'
import sample from '../../assets/images/sample.jpeg'
import {handleError} from '../../actions/handleError'
import './User.css'


class UserOrder extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default

    }
  
   
      
    render(){
        return(
            <div className="userOrder">
            <div className="userOrderOne">
                <div className="userOrderTwo">
                    <img src={sample} className="userOrderImg"/>
                </div>
                <div className="userOrderThree">
                    <span>Bangles</span>
                </div>
                <div className="userOrderThree">
                    <span>x20</span>
                </div>
                <div className="userOrderThree">
                    <span>Rs 50</span>
                </div>
                <div className="userOrderThree">
                    <span>#0982319012</span>
                </div>
                <div className="userOrderThree">
                    <span>24/05/2021</span>
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

export default connect(mapStateToProps)(UserOrder)
