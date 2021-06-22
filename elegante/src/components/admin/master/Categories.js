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
            const formData = new FormData()
            formData.append('data',JSON.stringify(obj))
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
            category:data,
            idUpdate:id,
            action:'update'
        })
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

                        <div className="tableMainFirstTH">
                            <div className="THOneDiv">
                                <div className="thumbTHDiv">
                                <img src={phaseTwo} className="catTHImage"/>                                
                                </div>
                                <div className="catTHDiv">
                                <span className="catTHSpan">Necklace's</span>
                                </div>
                            </div>
                            <div className="THTwoDiv">
                            <div className="statTHDiv">
                                    <span className="thumbTHSpan">Active</span>
                                </div>
                                <div className="statTHDiv">
                                <EditIcon style={{fontSize:'20px'}} className="catTHSpan"/>
                                </div>
                            </div>
                        </div>
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