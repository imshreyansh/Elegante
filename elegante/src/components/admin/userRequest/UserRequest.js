import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './UserRequest.css'
import jwt from 'jsonwebtoken'
import {getItemFromStorage} from '../../utils/localStorage'
import {Link,withRouter} from 'react-router-dom'
import {handleError} from '../../../actions/handleError'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getUserRequest} from '../../../actions/userRequest'
class UserRequest extends Component {
    constructor(props){
        super(props)
        this.default={
       index:'',
       data:''
        }
        this.state = this.default
        this.props.dispatch(getUserRequest())
    }

    componentDidMount() {
       
    }

    renderView = (d,i)=>{
        if(this.state.index===i){
            return(
                <div className="UserDescriptionMainDiv">
                    <div className="UserDescriptionDateDiv">
                        <span className="UserRequestSpan">Date: {new Date(d.created_at).getDate()}/{new Date(d.created_at).getMonth()+1}/{new Date(d.created_at).getFullYear()}</span>
                    </div>
                    <div className="UserDescriptionDateDiv">
                    <span className="UserDescriptionHeadingSpan">Description</span>
                    </div>
                    <div className="UserDescriptionDiv">
                    <span className="UserRequestSpan">{d.description}</span>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="UserRequest">
                               {
                   this.props.userRequest.map((d,i)=>{
                       return(
              <div className="UserRequestDivMain">
                        <div key={i} className="UserRequestDivEach">
                    <div className="UserRequestSpanEach">
                        <span className="UserRequestSpan">{d.name}</span>
                    </div>
                    <div className="UserRequestSpanEach">
                        <span className="UserRequestSpan">{d.mobile}</span>
                    </div>
                    <div className="UserRequestSpanEach">
                        <span className="UserRequestSpan">{d.email}</span>
                    </div>
                    <div className="UserRequestIconEach">
                    <ExpandMoreIcon onClick={()=>this.setState({index:i})} style={{fontSize:'40px',color:'#80cbc4'}} className="UserRequestSpan"/>
                    </div>
                </div>
                   {this.renderView(d,i)}
              </div>
                  )
                })
            } 
            </div>
        )
        
    }
}

function mapStateToProps(data){
    return{
        authedId:data,
        userRequest:data.userRequest,
        jwtToken:jwt.decode(getItemFromStorage('authedId'))
    }
}

export default connect(mapStateToProps)(UserRequest)