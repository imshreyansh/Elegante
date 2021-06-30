import {PURCHASE_ORDER,GET_ALL_ORDER,UPDATE_ORDER,GET_ORDER_BY_ID} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'

export const purchaseOrder = (data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/order/purchaseCartOrder`,data)
    .then(res=>{
        dispatch({type:PURCHASE_ORDER,payload:res.data.response})
        dispatch(handleError({type:'success',error:'Order Placed Successfully, Check Your Order History'}))
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: PURCHASE_ORDER,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getAllOrder = ()=>dispatch=>{
    axios.get(`${IP}/api/order/getAllOrder`)
    .then(res=>{
        dispatch({type:GET_ALL_ORDER,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_ALL_ORDER,payload:null}),
    )
}

export const getOrderByUserId = (id)=>dispatch=>{
    axios.get(`${IP}/api/order/getOrderByUserId/${id}`)
    .then(res=>{
        dispatch({type:GET_ORDER_BY_ID,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_ORDER_BY_ID,payload:null}),
    )
}

export const updateOrderStatus = (id,data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/order/updateOrder/${id}`,data)
    .then(res=>{
    if(res){
        dispatch({type: UPDATE_ORDER,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: UPDATE_ORDER,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

