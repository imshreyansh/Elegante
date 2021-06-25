import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import {validation} from '../../../utils/validation'
import {handleError} from '../../../actions/handleError'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import phaseTwo from '../../../assets/images/phaseTwo.jpg'
import logo from '../../../assets/images/logo.png'
import {addCategory,editCategory,deleteCategory,getCategory} from '../../../actions/category'
import {Link} from 'react-router-dom'
import categorySample from '../../../assets/images/categorySample.jpeg'
import CategoryIcon from '@material-ui/icons/Category';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DoneIcon from '@material-ui/icons/Done';
class Categories extends Component {
    constructor(props){
        super(props)
        this.default={
         category:'',
         categoryE:'',
         idUpdate:'',
         action:'add',
         file:'',
         imagePreviewUrl:''
        }
        this.state = this.default
        this.handleChange = this.handleChange.bind(this)
        this.props.dispatch(getCategory())
    }

    addCategory = () =>{
        if(this.state.category !=='' && this.state.file!==''){
            const obj = {
                category: this.state.category
            }
            const editObj = {
                name: this.state.category
            }
            const formData = new FormData()
            formData.append('data',JSON.stringify( this.state.action === 'add' ?obj:editObj))
            formData.append('thumbnail',this.state.file)
           this.state.action === 'add' ? this.props.dispatch(addCategory(formData)) : 
           this.props.dispatch(editCategory(this.state.idUpdate,formData)) 
           this.setState({
               action:'add',
               category:'',
               idUpdate:''
           })
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
            category:data.name,
            idUpdate:id,
            action:'update'
        })
    }

    status = (id,data)=>{
       const obj ={
           status:data.status==='Active' ? 'Inactive' : 'Active'
       }
      this.props.dispatch(editCategory(id,obj))
    }

    deleteData=(id)=>{
     this.props.dispatch(deleteCategory(id))
    }

    handleChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
      }
   
    render(){
        return(
            <div className="categoryOne">
            <input type="file" id="image" style={{display:"none"}} onChange={this.handleChange}/>
                    <div className="categoryTwo">
                        <label for="image">
                        <div className="categoryThumbnail">
                        <img src={this.state.imagePreviewUrl!=='' ?this.state.imagePreviewUrl :categorySample} className="categoryThumbnailImage"/>
                        </div>
                        {/* <EditIcon className="categoryThumbnailEdit"/> */}
                        </label>
                    </div>
                    <div className="catoryAddCategoryInput">
                    <div className="categoryThree">
                    <CategoryIcon className="categoryInputIcon"/>
                    <input type="text" className="categoryInputOne" placeholder="Add Category" value={this.state.category}  style={{borderBottomColor:this.state.categoryE ==='' ? '#00695c' :'red'}} onChange={(e)=>this.setState(validation(e,'category','text',['name is reuired','ds']))}/>
                    </div>
                    </div>
                    <div className="categoryButton" onClick={()=>this.addCategory()}>
                        <span className="categorySpanOne">Submit</span>
                    </div>
                    <div className="tableMainDiv">
                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                    <span className="thumbTHSpan">Avatar</span>
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">Category</span>
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
                        {this.props.categories.map((data,i)=>{
                        return(
                        <div key={i} className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                <img src={data.thumbnail.path} className="catTHImage"/>                                
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">{data.name}</span>
                                </div>
                            </div>
                            <div className="THTwoDiv">
                            <div className="statTHDiv">
                                {data.status!=='Active' ?
                                <CheckBoxOutlineBlankIcon style={{color:'grey'}} className="thumbTHSpan" onClick={()=>this.status(data._id,data)}/>
                                 : <CheckBoxIcon style={{color:'#00695c'}} className="thumbTHSpan" onClick={()=>this.status(data._id,data)}/>}
                                </div>
                                <div className="statTHDiv">
                                <EditIcon onClick={()=>this.updateData(data._id,data)} style={{fontSize:'20px'}} className="catTHSpan"/>
                                </div>
                            </div>
                        </div>
                        )})}
                    </div>
            </div>
          
        )
    }
}

function mapStateToProps(data){
    return {
        categories:data.category.state ? data.category.state.filter(d=>d.status==='Active'):data.category.filter(d=>d.status==='Active'),
    }
}

export default connect(mapStateToProps)(Categories)


// <table className="categoryTable">
//                         <div className="categoryTableInside">
//                         <div className="categoryTableOne">
//                             <th className="categoryTableSpanOneTwo">Thumbnail</th>
//                             <th className="categoryTableSpanOne">Category</th>
//                         </div>
//                         <div className="categoryTableOneTwo">
//                             <th className="categoryTableSpanOne">Status</th>
//                             <th className="categoryTableSpanOne">Edit</th>
//                         </div>
//                     </div>
//                     {this.props.categories.map((data,id)=>{
//                         return(
//                             <div key={id} className="categoryTableInside">
//                             <div className="categoryTableOne">
//                 <img src={data.thumbnail.path} className="categoryThumbnailImageTable"/>
//                         <span className="categoryTableSpanTwo">{data.name}</span>
//                             </div>
//                             <div className="categoryTableOne">
//                                 <DoneIcon className="categoryTableSpanTwo" />
//                                 <EditIcon className="categoryTableSpanTwo" />
//                             </div>
//                         </div>
//                         )
//                     })}
                    
//                         </table>