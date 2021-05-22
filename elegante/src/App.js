import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './App.css'
import Authorization from './components/authorization/Authorization'
class App extends Component {
  render(){
    return (
      <div>
       <Authorization/>
      </div>
    );
  }
}

function mapStateToProps(authedId){
  return{
    authedId
  }
}
export default connect(mapStateToProps)(App)
