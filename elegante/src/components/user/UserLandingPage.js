import React,{Component} from 'react'
import {connect} from 'react-redux'
import sample from '../../assets/images/sample.jpeg'
import './User.css'


class UserLandingPage extends Component {
    constructor(props){
        super(props)
        this.default={

        }
        this.state = this.default

    }
  
      
    render(){
        return(
            <div className="userLandingOne">
                <div className="userLandingTwo">
                    <div className="userLandingCategory">
                        <span className="userLandingSpan">Rings and Roses</span>
                    </div>
                </div>
                <div className="userLandingProducts">
                    <div className="userLandingEachProduct">
                        <img src={sample} className="userLandingProductImages"/>
                        <span className="userLandingSpanTwo" style={{marginTop:"20px",justifyContent: "center",flexDirection:"row",display: "flex"}}>Bangles</span>
                        <span className="userLandingSpanTwo" style={{marginTop:"10px",color:'#fff'}}>Rs 20</span>
                        <div className="userLandingAdd">
                        <span className="userLandingThree">Add to Cart</span>
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

export default connect(mapStateToProps)(UserLandingPage)
