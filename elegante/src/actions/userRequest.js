import {POST_USER_REQUEST,GET_USER_REQUEST} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'

export const postUserRequest = (data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/contact/postUserRequest`,data)
    .then(res=>{
        dispatch({type:POST_USER_REQUEST,payload:res.data.response})
        dispatch(handleError({type:'success',error:'Your query has been submitted succesfully we will contact you shortly'}))
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: POST_USER_REQUEST,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getUserRequest = ()=>dispatch=>{
    axios.get(`${IP}/api/contact/getUserRequest`)
    .then(res=>{
        if(res){
            dispatch({type: GET_USER_REQUEST,payload:res.data.response})
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
            }
        })
        .catch(err=>
            dispatch(handleError({type:'error',error:err.message})),
            dispatch({type: GET_USER_REQUEST,payload:null}),
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
        )
}

