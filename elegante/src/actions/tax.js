import {GET_ALL_TAX,GET_ALL_ACTIVE_TAX,ADD_TAX,EDIT_TAX} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'


export const addTax = (data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/tax/addTax`,data)
    .then(res=>{
    if(res){
        dispatch({type: ADD_TAX,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_TAX,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getAllTax = ()=>dispatch=>{
    axios.get(`${IP}/api/tax/getAllTax`)
    .then(res=>{
        if(res){
            dispatch({type: GET_ALL_TAX,payload:res.data.response})
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
            }
        })
        .catch(err=>
            dispatch(handleError({type:'error',error:err.message})),
            dispatch({type: GET_ALL_TAX,payload:null}),
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
        )
}

export const editTax = (id,data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/tax/updateTax/${id}`,data)
    .then(res=>{
    if(res){
        dispatch({type: EDIT_TAX,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: EDIT_TAX,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getActiveTax = ()=>dispatch=>{
    axios.get(`${IP}/api/tax/getActiveTax`)
    .then(res=>{
        if(res){
            dispatch({type: GET_ALL_ACTIVE_TAX,payload:res.data.response})
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
            }
        })
        .catch(err=>
            dispatch(handleError({type:'error',error:err.message})),
            dispatch({type: GET_ALL_ACTIVE_TAX,payload:null}),
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
        )
}