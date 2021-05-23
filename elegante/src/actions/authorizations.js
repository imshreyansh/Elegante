import {LOGIN_USER,SIGN_UP} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'

export const loginUser=(data)=>dispatch=>{
    axios.post(`${IP}/api/userAuth/loginUser`,data)
    .then(res=>{
        if(res){
            dispatch({type: LOGIN_USER,payload:res.data.response})
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: LOGIN_USER,payload:null})
    )
}

export const signUpUser=(data)=>dispatch=>{
    axios.post(`${IP}/api/userAuth/createUser`,data)
    .then(res=>{
        if(res){
            dispatch(handleError({type:'success',error:'Successfully Registered'}))
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: SIGN_UP,payload:null})
    )
}