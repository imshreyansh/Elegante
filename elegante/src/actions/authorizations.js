import {LOGIN_USER,SIGN_UP,LOGOUT} from './actionTypes'
import {handleError} from './handleError'
import {storeItem,removeItemFromStorage} from '../components/utils/localStorage'
import {IP} from '../config/config'
import {onLoader} from './loader'
import axios from 'axios'

export const loginUser=(data)=>dispatch=>{
    axios.post(`${IP}/api/userAuth/loginUser`,data)
    .then(res=>{
        if(res){
            storeItem('authedId',res.data.response)
            dispatch({type: LOGIN_USER,payload:res.data.response})
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: LOGIN_USER,payload:null})
    )
}

export const logout=()=>dispatch=>{
    removeItemFromStorage('authedId')
    dispatch(onLoader(true))
    dispatch({
        type: LOGOUT,
        payload: {}
    })
    setTimeout(() => {
        dispatch(onLoader(false))
    },2000)
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