import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import './App.css'
import SideMenu from './components/common/SideMenu'
import TopBar from './components/common/TopBar'
import SnackBar from './components/utils/SnackBar'
import {getItemFromStorage} from './components/utils/localStorage'
class App extends Component {
  render(){
    return (
      <div>
        <SnackBar />
        <TopBar/>
       <SideMenu/>
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
