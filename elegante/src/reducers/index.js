import { combineReducers } from 'redux'
import authorization from './authorization'
import handleError from './handleError'
import category from './category'
import stocks from './stocks'
import currency from './currency'
import offer from './offer'
import tax from './tax'
import memberCart from './memberCart'
import order from './order'
import loader from './loader'
import userRequest from './userRequest'
export default combineReducers({
authorization,
handleError,
category,
stocks,
currency,
loader,
offer,
tax,
memberCart,
order,
userRequest
})