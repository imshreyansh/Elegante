import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './App.css'
import Authorization from './components/authorization/Authorization'
import SnackBar from './components/utils/SnackBar'
import {getItemFromStorage} from './components/utils/localStorage'
class App extends Component {
  render(){
    return (
      <div>
        <SnackBar />
       <Authorization/>
      </div>
    );
  }
}

function mapStateToProps(token){
  return{
    token:getItemFromStorage('authedId')
  }
}
export default connect(mapStateToProps)(App)
