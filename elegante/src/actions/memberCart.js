import {GET_MEMBER_CART,ADD_MEMBER_CART,REMOVE_MEMBER_CART} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'

export const addToCart = (data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/cart/addToCart`,data)
    .then(res=>{
        dispatch({type: ADD_MEMBER_CART,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_MEMBER_CART,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getMemberCart = (id)=>dispatch=>{
    axios.get(`${IP}/api/cart/getMemberCart/${id}`)
    .then(res=>{
        dispatch({type: GET_MEMBER_CART,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_MEMBER_CART,payload:null})
    )
}

export const removeCart = (id)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/cart/removeCart/${id}`)
    .then(res=>{
        dispatch({type: REMOVE_MEMBER_CART,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: REMOVE_MEMBER_CART,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}
