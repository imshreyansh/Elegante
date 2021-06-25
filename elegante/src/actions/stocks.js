import {ADD_STOCK,GET_STOCK,EDIT_STOCK,DELETE_STOCK,GET_STOCK_BY_CATEGORY,GET_STOCK_BY_ID} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'

export const addStock = (data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/stock/addStock`,data)
    .then(res=>{
        dispatch({type: ADD_STOCK,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_STOCK,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getStock = ()=>dispatch=>{
    axios.get(`${IP}/api/stock/getAllStocks`)
    .then(res=>{
        dispatch({type: GET_STOCK,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_STOCK,payload:null})
    )
}

export const getStockByCategory = (id)=>dispatch=>{
    axios.get(`${IP}/api/stock/getStockByCategory/${id}`)
    .then(res=>{
        dispatch({type: GET_STOCK_BY_CATEGORY,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_STOCK_BY_CATEGORY,payload:null})
    )
}

export const getStockById = (id)=>dispatch=>{
    axios.get(`${IP}/api/stock/getStockById/${id}`)
    .then(res=>{
        dispatch({type: GET_STOCK_BY_ID,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_STOCK_BY_ID,payload:null})
    )
}

export const deleteStock = (id)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/stock/deleteStock/${id}`)
    .then(res=>{
        dispatch({type: DELETE_STOCK,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: DELETE_STOCK,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const editStock = (id,data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/stock/editStock/${id}`,data)
    .then(res=>{
        dispatch({type: EDIT_STOCK,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: EDIT_STOCK,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}