import { combineReducers } from 'redux'
import authorization from './authorization'
import handleError from './handleError'
export default combineReducers({
authorization,
handleError   
})