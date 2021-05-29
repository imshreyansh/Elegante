import { combineReducers } from 'redux'
import authorization from './authorization'
import handleError from './handleError'
import category from './category'
import stocks from './stocks'
export default combineReducers({
authorization,
handleError,
category,
stocks
})