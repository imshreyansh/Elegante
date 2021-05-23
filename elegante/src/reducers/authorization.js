import {LOGIN_USER,SIGN_UP} from '../actions/actionTypes'

export default function authorization(state=null,action){
    const {type,payload} = action
    switch (type){
        case LOGIN_USER:
            const obj ={loginToken: payload}
            return obj

        case SIGN_UP:
            return payload
                
        default:
            return state
    }
}