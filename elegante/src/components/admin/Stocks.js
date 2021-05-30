import React,{Component} from 'react'
import {connect} from 'react-redux'
import {validation} from '../../utils/validation'
import {handleError} from '../../actions/handleError'
import {getCategory} from '../../actions/category'
import {addStock} from '../../actions/stocks'
import './Dashboard.css'

class Stocks extends Component {
    constructor(props){
        super(props)
        this.default={
            itemName:'',
            itemNameE:'',
            thumbnail:[],
            cost:'',
            costE:'',
            selling:'',
            sellingE:'',
            discount:'',
            discountE:'',
            qty:'',
            qtyE:'',
            category:''
        }
        this.state = this.default
        this.props.dispatch(getCategory())
    }

    onImage=(e)=>{
        const arr=[]
        Object.entries(e.target.files).map(d=>{
            arr.push(d[1])
        })
    this.setState({
    thumbnail:arr
    })  
  }

  addStocks = () =>{
      const {itemName,itemNameE,cost,costE,selling,sellingE,discount,discountE,qty,qtyE} = this.state
      if(itemName!==''&&itemNameE===''&&cost!==''&&costE===''&&selling!==''&&sellingE===''&&discount!==''&&discountE===''&&qty!==''&&qtyE===''){
          const obj={
              name:itemName,
              costPrice:cost,
              sellingPrice:selling,
              discount,
              qty,
              category:this.state.category ==='' ? this.props.categories[0]._id : this.state.category
          }
          const formData = new FormData()
          this.state.thumbnail.map(d=>{
            formData.append('thumbnail', d)
          })
          formData.append('data',JSON.stringify(obj))
          this.props.dispatch(addStock(formData))
        }else{
        const obj={
            error:'Some fields are empty',
            type:'error'
        }
        this.props.dispatch(handleError(obj))
      }
  }
   
    render(){
        return(
            <div className="dashboardOne"> 
            <div className="stocksZero">
            <div className="stocksOne">
                <div className="stocksTwo">
                        <input type="text" className="stocksInputOne" placeholder="Item Name" value={this.state.itemName}  style={{borderBottomColor:this.state.itemNameE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'itemName','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                        <input type="text" className="stocksInputOne" placeholder="Cost Price" value={this.state.cost}  style={{borderBottomColor:this.state.costE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'cost','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                        <input type="text" className="stocksInputOne" placeholder="Selling Price" value={this.state.selling}  style={{borderBottomColor:this.state.sellingE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'selling','text',['name is reuired','ds']))}/>
                </div>
                
            </div>
            <div className="stocksOne">
                <div className="stocksTwo">
                        <input type="text" className="stocksInputOne" placeholder="Quantity" value={this.state.qty}  style={{borderBottomColor:this.state.qtyE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'qty','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                        <input type="text" className="stocksInputOne" placeholder="Discount Percentage" value={this.state.discount}  style={{borderBottomColor:this.state.discountE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'discount','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                    <select className="stocksInputOne" onChange={(e)=>this.setState({
                        category:e.target.value
                    })}>
                        {this.props.categories.map((data,id)=>{
                            return(
                             <option key={id} value={data._id}>{data.name}</option>
                            )
                        })}
                    </select> 
                </div>
                
            </div>
            <div className="stocksOne">
                <div className="stocksTwo">
                    <input type="file" multiple="multiple" name="thumbnail" className="stocksInputLast" placeholder="Photos"  onChange={(e)=>this.onImage(e)}/>
                </div>
                
            </div>
            <div className="AuthEleven" onClick={()=>this.addStocks()}>
                    <span className="AuthSpanOne">Submit</span>
                    </div>
            </div>
           </div>
        )
    }
}

function mapStateToProps(data){
    return {
        data,
        categories: data.category ? data.category :[]
    }
}

export default connect(mapStateToProps)(Stocks)