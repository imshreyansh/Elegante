import {LOGIN_USER,SIGN_UP,LOGOUT,UPDATE_PASSWORD} from '../actions/actionTypes'

export default function authorization(state=null,action){
    const {type,payload} = action
    switch (type){
        case LOGIN_USER:
            return payload

        case LOGOUT:
            return payload

        case SIGN_UP:
            return payload
                
        case UPDATE_PASSWORD:
            return payload
            
        default:
            return state
    }
}