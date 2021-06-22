import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Authorization from './components/authorization/Authorization'
import TopMenu from './components/common/TopMenu'
import BottomInfo from './components/common/BottomInfo'
import Categories from './components/admin/Categories'
import Stocks from './components/admin/Stocks'
import LandingPage from './components/common/LandingPage'
import SnackBar from './components/utils/SnackBar'
import Contact from './components/policies/Contact'
import Policy from './components/policies/Policy'
import Shipping from './components/policies/Shipping'
import Terms from './components/policies/Terms'
import Category from './components/common/category/Category'
import CategoryDetails from './components/common/category/CategoryDetails'
import StockDetails from './components/common/stock/StockDetails'
import Cart from './components/common/cart/Cart'
import MyOrders from './components/user/MyOrders'
import AdminAllOrders from './components/admin/allOrders/AdminAllOrders'
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
        <Fragment>
          <TopMenu />
                  <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route  path="/login" component={Authorization} />
          <Route  path="/shipping" component={Shipping} />
          <Route  path="/terms" component={Terms} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/policy" component={Policy} />
          <Route  path="/category" component={Category} />
          <Route  path="/categoryDetails/:id" component={CategoryDetails} />
          <Route  path="/stockDetails/:id" component={StockDetails} />
          <Route  path="/myOrders" component={MyOrders} /> //remove
        </Switch>
        <BottomInfo/>
        </Fragment> :
        this.loggedInUser() && this.loggedInUser() === 'Admin' ?
        <Fragment>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route  path="/login" component={Authorization} />
          <Route  path="/shipping" component={Shipping} />
          <Route  path="/terms" component={Terms} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/policy" component={Policy} />
          <Route  path="/category" component={Category} />
          <Route  path="/categoryDetails/:id" component={CategoryDetails} />
          <Route  path="/stockDetails/:id" component={StockDetails} />
          <Route  path="/cart" component={Cart} />
        </Switch>
        </Fragment> :
        this.loggedInUser() && this.loggedInUser()==='User'?
        <Fragment>
          <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route  path="/login" component={Authorization} />
          <Route  path="/shipping" component={Shipping} />
          <Route  path="/terms" component={Terms} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/policy" component={Policy} />
          <Route  path="/category" component={Category} />
          <Route  path="/categoryDetails/:id" component={CategoryDetails} />
          <Route  path="/stockDetails/:id" component={StockDetails} />
          <Route  path="/cart" component={Cart} />
        </Switch>
        </Fragment>:
          <Fragment>
          <TopMenu />
                  <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route  path="/login" component={Authorization} />
          <Route  path="/shipping" component={Shipping} />
          <Route  path="/terms" component={Terms} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/policy" component={Policy} />
          <Route  path="/category" component={Category} />
          <Route  path="/categoryDetails/:id" component={CategoryDetails} />
          <Route  path="/stockDetails/:id" component={StockDetails} />
        </Switch>
        </Fragment>
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
