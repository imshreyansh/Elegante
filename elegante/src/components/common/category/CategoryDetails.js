import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Category.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import sample from '../../../assets/images/sample.jpeg'


class CategoryDetails extends Component {
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
            <div className="categoryMainDiv">
                <div className="headingCategory">
                    <span className="categorySpanHeadingCommon">Necklace</span>
                </div>
                <div className="categoryCommonOne">
            
                <Link to={{pathname:`/stockDetails/${232}`}} style={{textDecoration:'none'}} className="categoryDetailsMainItems">
                <div className="categoryDetailsMainItemsEach">
                <img src={sample} className="categoryDetailsMainImage"/>
                <span className="categoryDetailsMainName">Vintage Handwritten letter</span>
                <span className="categoryDetailsMainNameThree">Rs 250.00</span>
                <div className="categoryDetailsMainBack">
                <span className="categoryDetailsMainNameTwo">Add to Cart</span>
                </div>
                </div>
            </Link>

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

export default connect(mapStateToProps)(CategoryDetails)