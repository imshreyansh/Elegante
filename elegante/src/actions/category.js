import {ADD_CATEGORIES,EDIT_CATEGORIES,GET_CATEGORIES,DELETE_CATEGORIES} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'


export const addCategory = (data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/category/addCategory`,data)
    .then(res=>{
        if(res){
        dispatch({type: ADD_CATEGORIES,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_CATEGORIES,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getCategory = ()=>dispatch=>{
    axios.get(`${IP}/api/category/getAllCategory`)
    .then(res=>{
        if(res){
        dispatch({type: GET_CATEGORIES,payload:res.data.response})
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_CATEGORIES,payload:null})
    )
}

export const editCategory = (id,data)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/category/editCategory/${id}`,data)
    .then(res=>{
        if(res){
        dispatch({type: EDIT_CATEGORIES,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: EDIT_CATEGORIES,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const deleteCategory = (id)=>dispatch=>{
    dispatch(onLoader(true))
    axios.post(`${IP}/api/category/deleteCategory/${id}`)
    .then(res=>{
        if(res){
        dispatch({type: DELETE_CATEGORIES,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: DELETE_CATEGORIES,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}