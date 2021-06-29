import React,{Component} from 'react'
import {connect} from 'react-redux'
import phaseTwo from "../../../assets/images/phaseTwo.jpg"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {validation} from '../../../utils/validation'
import {handleError} from '../../../actions/handleError'
import {getCategory} from '../../../actions/category'
import {addStock,getStock,editStock,deleteStock} from '../../../actions/stocks'
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import CategoryIcon from '@material-ui/icons/Category';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DescriptionIcon from '@material-ui/icons/Description';
import {getPageWiseData} from '../../utils/pagination'
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
            description:'',
            descriptionE:'',
            qty:'',
            qtyE:'',
            category:'',
            id:'',
            rows:[1,2,3,4,5,6],
            pn:1,
            allStocksData:[],
        }
        this.state = this.default
        this.props.dispatch(getCategory())
        this.props.dispatch(getStock())
    }
    componentWillReceiveProps(props){
      this.setState({
        allStocksData:props.stocks,
      })
  }

    reversePage = () => {
      if(this.state.pn>1){
        this.setState({
          pn:this.state.pn-1
        },()=>{
          getPageWiseData(this.state.pn,this.state.allStocksData,3)
        })
      }
    }
  
    forwardPage = () =>{
      if(this.state.pn>=1 && this.state.pn < this.state.allStocksData.length){
        this.setState({
          pn:this.state.pn+1
        },()=>{
          getPageWiseData(this.state.pn,this.state.allStocksData,3)
        })
      }
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
      const {itemName,itemNameE,cost,costE,selling,sellingE,description,descriptionE,qty,qtyE,id,thumbnail} = this.state
      if(itemName!==''&&itemNameE===''&&cost!==''&&costE===''&&selling!==''&&sellingE===''&&description!==''&&descriptionE===''&&qty!==''&&qtyE===''&&thumbnail.length>0){
          const obj={
              name:itemName,
              costPrice:cost,
              sellingPrice:selling,
              description,
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
            description:'',
            descriptionE:'',
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
    window.scrollTo({top: 0, behavior: 'smooth'})
      this.setState({
        itemName:d.name,
        thumbnail:d.thumbnail,
        cost:d.costPrice,
        selling:d.sellingPrice,
        description:d.description,
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
            <div className="categoryOne"> 
            <div className="stocksZero">
            <div className="stocksOne">
                <div className="stocksTwo">
                    <TurnedInIcon className="stocksInputOneIcon"/>
                        <input type="text" className="stocksInputOne" placeholder="Item Name" value={this.state.itemName}  style={{borderBottomColor:this.state.itemNameE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'itemName','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                <MonetizationOnIcon className="stocksInputOneIcon"/>
                        <input type="number" className="stocksInputOne" placeholder="Cost Price" value={this.state.cost}  style={{borderBottomColor:this.state.costE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'cost','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                <AccountBalanceIcon className="stocksInputOneIcon"/>
                        <input type="number" className="stocksInputOne" placeholder="Selling Price" value={this.state.selling}  style={{borderBottomColor:this.state.sellingE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'selling','text',['name is reuired','ds']))}/>
                </div>
                
            </div>
            <div className="stocksOne">
                <div className="stocksTwo">
                <FormatListNumberedIcon className="stocksInputOneIcon"/>
                        <input type="number" className="stocksInputOne" placeholder="Quantity" value={this.state.qty}  style={{borderBottomColor:this.state.qtyE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'qty','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                <DescriptionIcon className="stocksInputOneIcon"/>
                        <input type="text" className="stocksInputOne" placeholder="Description" value={this.state.description}  style={{borderBottomColor:this.state.descriptionE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'description','text',['name is reuired','ds']))}/>
                </div>
                <div className="stocksTwo">
                <CategoryIcon className="stocksInputOneIcon"/>
                    <select className="stocksInputOneDrop" onChange={(e)=>this.setState({
                        category:e.target.value
                    })}>
                        {this.props.categories!==undefined ? this.props.categories.map((data,id)=>{
                            return(
                             <option key={id} value={data._id}>{data.name}</option>
                            )
                        }):null}
                    </select> 
                </div>
                
            </div>
            <div className="stocksOne">
                <div className="stocksTwo">
                <AttachFileIcon className="stocksInputOneIcon"/>
                    <input type="file" multiple="multiple" name="thumbnail" className="stocksInputLast" placeholder="Photos"  onChange={(e)=>this.onImage(e)}/>
                </div>
                
            </div>
            <div className="categoryButton" onClick={()=>this.addStocks()}>
                    <span className="categorySpanOne">Submit</span>
                    </div>
            </div>
     
            <TableContainer className="stockTable">
      <Table className="stockTable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Thumbnail</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Item Name</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Selling</TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {getPageWiseData(this.state.pn,this.state.allStocksData,3).map((d,i)=>{
            return(
                <TableRow key={i}>
                <TableCell component="th" scope="row" >
                {d.thumbnail.length>0? <img src={d.thumbnail[0].path} className="tableStockImage"/> : <img src={phaseTwo} className="tableStockImage"/>}
                </TableCell>
                <TableCell align="right">{d.category.name}</TableCell>
                <TableCell align="right">{d.name}</TableCell>
                <TableCell align="right">{d.costPrice}</TableCell>
                <TableCell align="right">{d.sellingPrice}</TableCell>
                 <TableCell align="right">{d.qty}</TableCell>
                <TableCell align="right" ><EditIcon onClick={()=>this.onEdit(d)}/></TableCell>
              <TableCell align="right"><DeleteIcon onClick={()=>this.onDelete(d._id)}/></TableCell>
              </TableRow>
            )
        })}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="paginationButtonsDiv">
    <div className="paginationInside">
        <ArrowBackIosIcon style={{cursor:'pointer'}} onClick={()=>this.reversePage()}/>
        <ArrowForwardIosIcon style={{cursor:'pointer'}}  onClick={()=>this.forwardPage()}/>
    </div>
    </div>
           </div>
        )
    }
}

function mapStateToProps(data){
    return {
        data,
        categories:data.category.allCategories,
        stocks: data.stocks.allStocks
    }
}

export default connect(mapStateToProps)(Stocks)