import {ADD_CURRENCY,SET_DEFAULT_CURRENCY,GET_CURRENCY,DELETE_CURRENCY} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'

export const addCurrency = (data)=>dispatch=>{
    axios.post(`${IP}/api/currency/addCurrency`,data)
    .then(res=>{
        dispatch({type:ADD_CURRENCY,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_CURRENCY,payload:null})
    )
}

export const getAllCurrency = ()=>dispatch=>{
    axios.get(`${IP}/api/currency/getAllCurrency`)
    .then(res=>{
        dispatch({type:GET_CURRENCY,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_CURRENCY,payload:null})
    )
}

export const deleteCurrency = (id)=>dispatch=>{
    axios.post(`${IP}/api/currency/deleteCurrency/${id}`)
    .then(res=>{
        dispatch({type:DELETE_CURRENCY,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: DELETE_CURRENCY,payload:null})
    )
}

export const setDefaultCurrency = (id)=>dispatch=>{
    axios.post(`${IP}/api/currency/setDefaultCurrency/${id}`)
    .then(res=>{
        dispatch({type:SET_DEFAULT_CURRENCY,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: SET_DEFAULT_CURRENCY,payload:null})
    )
}

