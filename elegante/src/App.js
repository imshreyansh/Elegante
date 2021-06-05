import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Authorization from './components/authorization/Authorization'
import SideMenu from './components/common/SideMenu'
import TopBar from './components/common/TopBar'
import Dashboard from './components/admin/Dashboard'
import Categories from './components/admin/Categories'
import Formatting from './components/admin/Formatting'
import Stocks from './components/admin/Stocks'
import UserTopBar from './components/user/UserTopBar'
import UserLandingPage from './components/user/UserLandingPage'
import UserCart from './components/user/UserCart'
import UserAddress from './components/user/UserAddress'
import UserProfile from './components/user/UserProfile'
import UserOrder from './components/user/UserOrder'
import LandingPage from './components/common/LandingPage'
import SnackBar from './components/utils/SnackBar'
import {getItemFromStorage,removeItemFromStorage} from './components/utils/localStorage'

class App extends Component {

loggedInUser = () => {
  try{
    const role = jwt.decode(this.props.token).designation
    return role
  }catch{
    return false
  }
}
  render(){
    return (
      <Router>
        <SnackBar />
        {!this.loggedInUser() ?
        <Switch>
          <Route exact path="/" component={Authorization} />
        </Switch> :
        this.loggedInUser() && this.loggedInUser() === 'Admin' ?
        <Fragment>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        </Switch>
        </Fragment> :
        this.loggedInUser() && this.loggedInUser()==='User'?
        <Fragment>
          <Switch>
        <Route exact path="/" component={LandingPage} />
        </Switch>
        </Fragment>:
        <Switch>
        <Route exact path="/" component={Authorization} />
      </Switch>
      }     
      </Router>
    );
  }
}

function mapStateToProps(){
  return{
    token:getItemFromStorage('authedId')
  }
}
export default connect(mapStateToProps)(App)
