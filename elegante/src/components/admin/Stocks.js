import React,{Component} from 'react'
import {connect} from 'react-redux'
import logo from "../../assets/images/logo.png"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {validation} from '../../utils/validation'
import {handleError} from '../../actions/handleError'
import {getCategory} from '../../actions/category'
import {addStock,getStock,editStock,deleteStock} from '../../actions/stocks'
import './Dashboard.css'

class Stocks extends Component {
    constructor(props){
        super(props)
        this.default={
            state:'',
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
            category:'',
            id:''
        }
        this.state = this.default
        this.props.dispatch(getCategory())
        this.props.dispatch(getStock())
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
      const {itemName,itemNameE,cost,costE,selling,sellingE,discount,discountE,qty,qtyE,id} = this.state
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
         this.state.state === '' ? this.props.dispatch(addStock(formData)): this.props.dispatch(editStock(id,formData))
          this.setState({
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
            category:'',
            state:''
          })
        }else{
        const obj={
            error:'Some fields are empty',
            type:'error'
        }
        this.props.dispatch(handleError(obj))
      }
  }

  onEdit = (d) =>{
      this.setState({
        itemName:d.name,
        thumbnail:d.thumbnail,
        cost:d.costPrice,
        selling:d.sellingPrice,
        discount:d.discount,
        qty:d.qty,
        category:d.category._id,
        state:'edit',
        id:d._id
      })
  }

  onDelete = (id)=>{
    this.props.dispatch(deleteStock(id))
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
            <div className="stockTable">
                    <span className="stockSpanOne">Thumbnail</span>
                    <span className="stockSpanOne">Item</span>
                    <span className="stockSpanOne">Cost</span>
                    <span className="stockSpanOne">Selling</span>
                    <span className="stockSpanOne">QTY</span>
                    <span className="stockSpanOne">Discount</span>
                    <span className="stockSpanOne">Edit</span>
                    <span className="stockSpanOne">Delete</span>
            </div>
            {this.props.stocks.map((d,i)=>{
                return(
            <div className="stockTableTwo">
            <div className="stockTableData">
          {d.thumbnail.length>0?  <img src={d.thumbnail[0].path}  className="stockImg"/> : <img src={logo} className="stockImg"/>}
            </div>
                <span className="stockSpanThree">{d.name}</span>
                <span className="stockSpanThree">{d.costPrice}</span>
                <span className="stockSpanThree">{d.sellingPrice}</span>
                <span className="stockSpanThree">{d.qty}</span>
                <span className="stockSpanThree">{d.discount}</span>
                <div className="stockTableDataIcon">
                <EditIcon onClick={()=>this.onEdit(d)}/>
                </div>
                <div className="stockTableDataIcon">
                <DeleteIcon onClick={()=>this.onDelete(d._id)}/>
                </div>
        </div>
                )
            })}
           </div>
        )
    }
}

function mapStateToProps(data){
    return {
        data,
        categories: data.category ? data.category :[],
        stocks: data.stocks  ? data.stocks :[]
    }
}

export default connect(mapStateToProps)(Stocks)