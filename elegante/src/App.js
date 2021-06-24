import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Authorization from './components/authorization/Authorization'
import TopMenu from './components/common/TopMenu'
import BottomInfo from './components/common/BottomInfo'
import Categories from './components/admin/master/Categories'
import Offers from './components/admin/master/Offers'
import Tax from './components/admin/master/Tax'
import Stocks from './components/admin/master/Stocks'
import UserRequest from './components/admin/userRequest/UserRequest'
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
import Currency from './components/admin/master/Currency'
import AdminAllOrders from './components/admin/allOrders/AdminAllOrders'
import {getItemFromStorage,removeItemFromStorage} from './components/utils/localStorage'
import Loader from './components/common/loader/Loader'
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
        <Loader />
        <SnackBar />
        {!this.props.loader ?!this.loggedInUser() ?
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
        <BottomInfo/>
        </Fragment> :
        this.loggedInUser() && this.loggedInUser() === 'Admin' ?
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
          <Route  path="/addCategory" component={Categories} />
          <Route  path="/addStocks" component={Stocks} />
          <Route path="/myOrders" component={AdminAllOrders} />
          <Route path="/addOffers" component={Offers} />
          <Route path="/addTax" component={Tax} />
          <Route path="/userRequest" component={UserRequest} />
          <Route  path="/stockDetails/:id" component={StockDetails} />
          <Route  path="/cart" component={Cart} />
        </Switch>
        <BottomInfo/>
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
         null:null
      }     
      </Router>
    );
  }
}

function mapStateToProps(load){
  return{
    loader:load.loader,
    token:getItemFromStorage('authedId')
  }
}
export default connect(mapStateToProps)(App)
