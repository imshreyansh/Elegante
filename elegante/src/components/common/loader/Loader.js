import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './Loader.css'
import loader from '../../../assets/images/loader.gif'
class Contact extends Component {
    constructor(props){
        super(props)
        this.default={
    
        }
        this.state = this.default

    }

    componentDidMount() {
       
    }



    render(){
        if(this.props.loader){
            return(
                <div className="loaderMain">
                <img src={loader} className="loaderGIF" />
                </div>
            )    
        }else{
            return null
        }
      
    }
}

function mapStateToProps(load){
    return{
        loader:load.loader,
    }
}

export default connect(mapStateToProps)(Contact)