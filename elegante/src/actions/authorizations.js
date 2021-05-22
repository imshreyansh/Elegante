import {LOGIN_USER,SIGN_UP} from './actionTypes'

export const loginUser=(data)=>dispatch=>{
    dispatch({type: LOGIN_USER,payload:data})
}

export const signUpUser=(data)=>dispatch=>{
    dispatch({type: SIGN_UP,payload:data})
}