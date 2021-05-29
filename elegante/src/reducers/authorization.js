import {LOGIN_USER,SIGN_UP,LOGOUT} from '../actions/actionTypes'

export default function authorization(state=null,action){
    const {type,payload} = action
    switch (type){
        case LOGIN_USER:
            return payload

        case LOGOUT:
            return payload

        case SIGN_UP:
            return payload
                
        default:
            return state
    }
}