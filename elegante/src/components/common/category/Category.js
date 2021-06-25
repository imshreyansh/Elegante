import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Category.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import {getCategory} from '../../../actions/category'


class Category extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default
        this.props.dispatch(getCategory())
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
                    {this.props.allActiveCategories.map((d,i)=>{
                        return(
                   <Link key={i} to={{pathname:`/categoryDetails/${d._id}`}} style={{textDecoration:'none'}} className="categoryCardMain">
                   <img className="categoryImageCommon" src={d.thumbnail.path} />
                   <div className="categoryNameSpanCommon">
                       <span className="categoryNameSpanName">{d.name}</span>
                   </div>
               </Link>
                        )
                    })}
                </div>
            </div>
        )
        
    }
}

function mapStateToProps(data){
    return{
        allActiveCategories:data.category.state ? data.category.state.filter(d=>d.status==='Active'):data.category.filter(d=>d.status==='Active'),
        authedId:data,
    }
}

export default connect(mapStateToProps)(Category)