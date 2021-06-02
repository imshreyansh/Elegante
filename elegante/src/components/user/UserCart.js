import React,{Component} from 'react'
import {connect} from 'react-redux'
import sample from '../../assets/images/sample.jpeg'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './User.css'


class UserCart extends Component {
    constructor(props){
        super(props)
        this.default={

        }
        this.state = this.default

    }
  

    render(){
        return(
            <div className="userCartOne">
                <div className="userCartTwo">
                    <img src={sample} className="userCartImage"/>
                    <div className="userCartThree">
                    <span className="userCartText">Bangles</span>
                    <div className="userCartFour">
                    <AddCircleIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto',cursor:"pointer",fontSize:'30'}} />
                    <span className="userCartTextTwo">20</span>
                    <RemoveCircleIcon style={{color:'#fff',marginTop:'auto',marginBottom:'auto',cursor:"pointer",marginLeft:'10',fontSize:'30'}} />
                    </div>
                    </div>
                <HighlightOffIcon style={{color:'red',marginTop:'auto',marginBottom:'auto',cursor:"pointer",marginLeft:'auto',marginRight:'auto',fontSize:'30'}} />
                </div>
                <div className="AuthEleven">
                    <span className="AuthSpanOne">Checkout</span>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(authedId){
    return{
        authedId:authedId,
    }
}

export default connect(mapStateToProps)(UserCart)
