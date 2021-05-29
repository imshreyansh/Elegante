import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import {validation} from '../../utils/validation'
import {handleError} from '../../actions/handleError'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {addCategory,editCategory,deleteCategory,getCategory} from '../../actions/category'

class Categories extends Component {
    constructor(props){
        super(props)
        this.default={
         category:'',
         categoryE:'',
         idUpdate:'',
         action:'add'
        }
        this.state = this.default
        this.props.dispatch(getCategory())
    }

    addCategory = () =>{
        if(this.state.category !==''){
            const obj = {
                category: this.state.category
            }
           this.state.action === 'add' ? this.props.dispatch(addCategory(obj)) : 
           this.props.dispatch(editCategory(this.state.idUpdate,obj)) 
           this.setState({
               action:'add',
               category:'',
               idUpdate:''
           })
           console.log(this.state.action)
        }else{
            const obj={
                error:'Some fields are empty',
                type:'error'
            }
            this.props.dispatch(handleError(obj))
        }
    }

    updateData = (id,data)=>{
        this.setState({
            category:data,
            idUpdate:id,
            action:'update'
        })
    }

    deleteData=(id)=>{
     this.props.dispatch(deleteCategory(id))
    }
   
    render(){
        return(
            <div className="dashboardOne"> 
                <div className='categoryOne'>
                    <span className="categorySpanOne">Category Name</span>
                </div>
                <div className="categoryTwo">
                        <input type="text" className="categoryInputOne" placeholder="Name" value={this.state.category}  style={{borderBottomColor:this.state.categoryE ==='' ? '#333' :'red'}} onChange={(e)=>this.setState(validation(e,'category','text',['name is reuired','ds']))}/>
                    </div>
                    <div className="AuthEleven" onClick={()=>this.addCategory()}>
                    <span className="AuthSpanOne">Submit</span>
                    </div>
                <div className="categoryThree">
                    {this.props.categories.map((data,id)=>{
                        return(
                    <div key={id} className="categoryFour">
                    <span className="categorySpanTwo" style={{marginTop:'50px'}}>{data.name}</span>
                    <div className="categoryFive">
                    <EditIcon style={{color:'#333',marginTop:'auto',marginBottom:'auto'}} onClick={()=>this.updateData(data._id,data.name)}/>
                    <DeleteIcon style={{color:'#333',marginTop:'auto',marginBottom:'auto'}} onClick={()=>this.deleteData(data._id)}/>
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
        categories:ref.category !==null ? ref.category : []
    }
}

export default connect(mapStateToProps)(Categories)