import React,{Component} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'

class Formatting extends Component {
    constructor(props){
        super(props)
        this.default={
         
        }
        this.state = this.default

    }
   
    render(){
        return(
            <div className="dashboardOne"> 
                <span>Formatting</span>
            </div>
        )
    }
}

function mapStateToProps(authedId){
    return {
        authedId
    }
}

export default connect(mapStateToProps)(Formatting)