import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Category.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import sample from '../../../assets/images/sample.jpeg'
import {getCategoryById} from '../../../actions/category'
import {getStockByCategory} from '../../../actions/stocks'
class CategoryDetails extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default
        this.props.dispatch(getCategoryById(this.props.match.params.id))
        this.props.dispatch(getStockByCategory(this.props.match.params.id))
    }

    componentDidMount() {

    }


    render(){
        return(
            <div className="categoryMainDiv">
                <div className="headingCategory">
                    <span className="categorySpanHeadingCommon">{this.props.category.categoryName && this.props.category.categoryName.name}</span>
                </div>
                <div className="categoryCommonOne">
            {this.props.stocks!==undefined ?this.props.stocks.map((d,i)=>{
                return(
                    <Link key={i} to={{pathname:`/stockDetails/${d._id}`}} style={{textDecoration:'none'}} className="categoryDetailsMainItems">
                    <div className="categoryDetailsMainItemsEach">
                    <img src={d.thumbnail[0].path} className="categoryDetailsMainImage"/>
                    <span className="categoryDetailsMainName">{d.name}</span>
                <span className="categoryDetailsMainNameThree">Rs {(d.sellingPrice).toFixed(2)}</span>
                  {d.qty===0 ?
                  <div style={{backgroundColor:'#ddd'}} className="categoryDetailsMainBack">
                  <span className="categoryDetailsMainNameTwo">Out of Stock</span>
                  </div>
                   :<div className="categoryDetailsMainBack">
                    <span className="categoryDetailsMainNameTwo">Add to Cart</span>
                    </div>}
                    </div>
                </Link>
    
                )
            }):null}
                </div>
            </div>
        )
        
    }
}

function mapStateToProps(data){
    return{
        stocks:data.stocks.stockByCategory && data.stocks.stockByCategory,
        category:data.category,
        authedId:data,
    }
}

export default connect(mapStateToProps)(CategoryDetails)