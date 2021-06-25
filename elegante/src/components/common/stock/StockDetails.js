import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Stock.css'
import jwt from 'jsonwebtoken'
import {Link,withRouter} from 'react-router-dom'
import phaseTwo from '../../../assets/images/phaseTwo.png'
import sample from '../../../assets/images/sample.jpeg'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {getStockById} from '../../../actions/stocks'

class StockDetails extends Component {
    constructor(props){
        super(props)
        this.default={
           
        }
        this.state = this.default
        this.props.dispatch(getStockById(this.props.match.params.id))
    }

    componentDidMount() {
       
    }


    render(){
        return(
            <div className="Stock">
              <div className="StockDetailsOne">
                <div className="StockDetailsTwo">
                    <div className="StockDetailsImageThumb">
                        <img src={phaseTwo} className="StockDetailsImageThumbMain"/>
                    </div>
                    <div className="StockDetailsSmallThumb">
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>
                    <img src={phaseTwo} className="StockDetailsSmallThumbMain"/>

                    </div>
                </div>
                <div className="StockDetailsThree">
                     <div className="StockDetailsStockName">
                     <span className="StockDetailsStockNameSpan">Vintage Handwritten letter</span>
                     </div>
                     <div className="StockDetailsStockMoneyName">
                     <span className="StockDetailsStockMoney">Rs 250.00</span>
                    </div>
                    <div className="StockDetailsFour">
                        <div className="StockDetailsIncrementDiv">
                            <RemoveIcon style={{fontSize:"25px"}} className="StockDetailsIncrementSpan" />
                        </div>
                        <div className="StockDetailsValuetDiv">
                            <span className="StockDetailsValueSpan">1</span>
                        </div>
                        <div className="StockDetailsIncrementDiv">
                            <AddIcon style={{fontSize:"25px"}} className="StockDetailsIncrementSpan" />
                        </div>
                    </div>
                    <div className="StockDetailsMainBack">
                <span className="StockDetailsMainNameTwo">Add to Cart</span>
                </div>
                </div>
              </div>
              <div className="StockDetailsDescription">
                    <span className="StockDetailsDescriptionHeading">Description</span>
              </div>
              <div className="StockDetailsDescription">
                    <span className="StockDetailsDescriptionSpan">Making a div vertically scrollable is easy by using CSS overflow property. There are different values in overflow property. For example: overflow:auto; and the axis hiding procedure like overflow-x:hidden; and overflow-y:auto;. It will make vertical and horizontal scrollable bar and the auto will make only vertically scrollable bar.
For vertical scrollable bar use the x and y axis. Set the overflow-x:hidden; and overflow-y:auto; that will automatically hide the horizontal scroll bar and present only vertical scrollbar. Here the scroll div will be vertically scrollable.

</span>
              </div>
              
            </div>
        )
        
    }
}

function mapStateToProps(data){
    return{
        stocks:data.stocks.stockById && data.stocks.stockById,
        authedId:data,
    }
}

export default connect(mapStateToProps)(StockDetails)