import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import './App.css'
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
        <TopBar/>
        <div className="sideMenuandComp">
        <SideMenu/>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/categories" component={Categories} />
        <Route path="/stocks" component={Stocks} />
        <Route path="/formatting" component={Formatting} />
        </Switch>
          </div>
        </Fragment> :
        this.loggedInUser() && this.loggedInUser()==='User'?
        <Fragment>
          <UserTopBar/>
          <Switch>
        <Route exact path="/" component={UserLandingPage} />
        <Route exact path="/cart" component={UserCart} />
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
