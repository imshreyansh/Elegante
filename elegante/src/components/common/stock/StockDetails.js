import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Stock.css'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import sample from '../../../assets/images/sample.jpeg'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {getStockById} from '../../../actions/stocks'
import {addToCart,getMemberCart} from '../../../actions/memberCart'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../../utils/localStorage'
class StockDetails extends Component {
    constructor(props){
        super(props)
        this.default={
           qty:1,
           thumbnail:[],
           mainThumb:'',
           isThere:true
        }
        this.state = this.default
        this.props.dispatch(getStockById(this.props.match.params.id))
       this.props.dispatch(getMemberCart(this.props.jwtToken!==null ? this.props.jwtToken.id:''))
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            thumbnail: nextProps.stocks.thumbnail && nextProps.stocks.thumbnail.length>0 ? nextProps.stocks.thumbnail : [],
            mainThumb:nextProps.stocks.thumbnail && nextProps.stocks.thumbnail.length>0 ? nextProps.stocks.thumbnail[0]:[],
            isThere:this.props.jwtToken!==null ? nextProps.cart.filter(d=>d.stock._id===nextProps.match.params.id).length>0?true:false:false
        })
 
    }


    onChangeImage = (i)=>{
        this.setState({
            mainThumb:this.state.thumbnail[i]
        })
    }

    onAddToCart =()=> {
        const obj={
            qty:this.state.qty,
            stock:this.props.match.params.id,
            user:this.props.jwtToken.id
        }
        this.props.dispatch(addToCart(obj))
    }

    onPressIncrement = (quantity)=>{
        if(this.state.qty<quantity){
            this.setState({
                qty:this.state.qty+1
            })
        }
    }

    onPressDecrement = ()=>{
        if(this.state.qty>1){
            this.setState({
                qty:this.state.qty-1
            })
        }
    }

    render(){
        return(
            <div className="Stock">
              <div className="StockDetailsOne">
                <div className="StockDetailsTwo">
                    <div className="StockDetailsImageThumb">
                        <img src={this.state.mainThumb.path} className="StockDetailsImageThumbMain"/>
                    </div>
                    <div className="StockDetailsSmallThumb">
                    {this.state.thumbnail.map((d,i)=>{
                        return(
                            <img onClick={()=>this.onChangeImage(i)} key={i} src={d.path} className="StockDetailsSmallThumbMain"/>
                        )
                    })}
                    </div>
                </div>
                <div className="StockDetailsThree">
                     <div className="StockDetailsStockName">
                     <span className="StockDetailsStockNameSpan">{this.props.stocks.name}</span>
                     </div>
                     <div className="StockDetailsStockMoneyName">
                     <span className="StockDetailsStockMoney">Rs {this.props.stocks.sellingPrice ?(this.props.stocks.sellingPrice).toFixed(2):0.00}</span>
                    </div>
                    <div className="StockDetailsFour">
                        <div onClick={()=>this.onPressDecrement()} className="StockDetailsIncrementDiv">
                            <RemoveIcon style={{fontSize:"25px"}} className="StockDetailsIncrementSpan" />
                        </div>
                        <div className="StockDetailsValuetDiv">
                        <span className="StockDetailsValueSpan">{this.state.qty}</span>
                        </div>
                        <div onClick={()=>this.onPressIncrement(this.props.stocks.qty)} className="StockDetailsIncrementDiv">
                            <AddIcon style={{fontSize:"25px"}} className="StockDetailsIncrementSpan" />
                        </div>
                    </div>
                    {this.props.stocks.qty===0 ?
                  <div style={{backgroundColor:'#ddd'}} className="StockDetailsMainBack">
                  <span className="StockDetailsMainNameTwo">Out of Stock</span>
                  </div>
                   : this.state.isThere ?
                   <div style={{backgroundColor:'#ddd'}} onClick={()=>this.onAddToCart()} className="StockDetailsMainBack">
                    <span className="StockDetailsMainNameTwo">Added to Cart</span>
                    </div> :this.props.jwtToken!==null ? <div onClick={()=>this.onAddToCart()} className="StockDetailsMainBack">
                    <span className="StockDetailsMainNameTwo">Add to Cart</span>
                    </div>:
                     <Link to="/login" style={{textDecoration:'none'}} className="StockDetailsMainBack">
                    <span className="StockDetailsMainNameTwo">Add to Cart</span>
                    </Link>}
                </div>
              </div>
              <div className="StockDetailsDescription">
                    <span className="StockDetailsDescriptionHeading">Description</span>
              </div>
              <div className="StockDetailsDescription">
                    <span className="StockDetailsDescriptionSpan">{this.props.stocks.description}</span>
              </div>
              
            </div>
        )
        
    }
}

function mapStateToProps(data){
    return{
        stocks:data.stocks.stockById && data.stocks.stockById.length>0 ? data.stocks.stockById[0]:{},
        authedId:data,
        jwtToken:jwt.decode(getItemFromStorage('authedId')),
        cart:data.memberCart
    }
}

export default connect(mapStateToProps)(StockDetails)