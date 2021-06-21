import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Category.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'


class Category extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default

    }

    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})

    }


    render(){
        return(
            <div className="categoryMainDiv">
                <div className="headingCategory">
                    <span className="categorySpanHeadingCommon">Categories</span>
                </div>
                <div className="categoryCommonOne">
                   <Link to={{pathname:`/categoryDetails/${1234}`}} style={{textDecoration:'none'}} className="categoryCardMain">
                        <img className="categoryImageCommon" src={phaseTwo} />
                        <div className="categoryNameSpanCommon">
                            <span className="categoryNameSpanName">Necklace</span>
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

export default connect(mapStateToProps)(Category)