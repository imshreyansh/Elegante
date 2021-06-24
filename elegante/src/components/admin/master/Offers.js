import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import {validation} from '../../../utils/validation'
import {handleError} from '../../../actions/handleError'
import EditIcon from '@material-ui/icons/Edit';
import {addCategory,editCategory,deleteCategory,getCategory} from '../../../actions/category'
import {Link} from 'react-router-dom'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {addOffer,getAllOffer} from '../../../actions/offer'
class Offers extends Component {
    constructor(props){
        super(props)
        this.default={
        offerName:'',
        offerPercentage:'',
        offerNameE:'',
        offerPercentageE:''
        }
        this.state = this.default
        this.props.dispatch(getAllOffer())
    }

    addOffer = () =>{
       const obj={
           offer:this.state.offerName,
           percentage:this.state.offerPercentage
       }
       this.props.dispatch(addOffer(obj))
    }

    updateOffer = ()=>{
       
    }
     
    render(){
        return(
            <div className="categoryOne">                    
                    <div className="catoryAddCategoryInput">
                    <div className="categoryThree">
                    <LocalOfferIcon className="categoryInputIcon"/>
                    <input type="text" className="categoryInputOne" placeholder="Offer Name" value={this.state.offerName}  style={{borderBottomColor:this.state.offerNameE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'offerName','text',['name is reuired','ds']))}/>
                    </div>
                    </div>
                    <div className="catoryAddCategoryInput">
                    <div className="categoryThree">
                    <LoyaltyIcon className="categoryInputIcon"/>
                    <input type="number" className="categoryInputOne" placeholder="Offer Percentage" value={this.state.offerPercentage}  style={{borderBottomColor:this.state.offerPercentageE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'offerPercentage','text',['Percent is reuired','ds']))}/>
                    </div>
                    </div>
                    <div className="categoryButton" onClick={()=>this.addOffer()}>
                        <span className="categorySpanOne">Submit</span>
                    </div>
                    <div className="tableMainDiv">
                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                    <span className="thumbTHSpan">Discount(%)</span>
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">Offer Name</span>
                                </div>
                            </div>
                            <div className="THTwoDiv">
                            <div className="statTHDiv">
                                    <span className="thumbTHSpan">Status</span>
                                </div>
                                <div className="statTHDiv">
                                <span className="catTHSpan">Edit</span>
                                </div>
                            </div>
                        </div>
                {this.props.offer.map((d,i)=>{
                    return(
                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                <span className="catTHSpan">{d.percentage}</span>
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">{d.offer}</span>
                                </div>
                            </div>
                            <div className="THTwoDiv">
                            <div className="statTHDiv">
                                {d.status==='Active' ? 
                                <CheckBoxIcon style={{fontSize:'20px',color:'green'}} className="catTHSpan"/>
                                  :<CheckBoxOutlineBlankIcon style={{fontSize:'20px',color:'green'}} className="catTHSpan"/>
                                      }
                                </div>
                                <div className="statTHDiv">
                                <EditIcon style={{fontSize:'20px'}} className="catTHSpan"/>
                                </div>
                            </div>
                        </div>
                    )
                })}

                    </div>
            </div>
        )
    }
}

function mapStateToProps(ref){
    return {
        offer:ref.offer
    }
}

export default connect(mapStateToProps)(Offers)
