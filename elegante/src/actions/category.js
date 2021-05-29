import {ADD_CATEGORIES,EDIT_CATEGORIES,GET_CATEGORIES,DELETE_CATEGORIES} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'

export const addCategory = (data)=>dispatch=>{
    axios.post(`${IP}/api/category/addCategory`,data)
    .then(res=>{
        dispatch({type: ADD_CATEGORIES,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_CATEGORIES,payload:null})
    )
}

export const getCategory = ()=>dispatch=>{
    axios.get(`${IP}/api/category/getAllCategory`)
    .then(res=>{
        dispatch({type: GET_CATEGORIES,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: GET_CATEGORIES,payload:null})
    )
}

export const editCategory = (id,data)=>dispatch=>{
    axios.post(`${IP}/api/category/editCategory/${id}`,data)
    .then(res=>{
        dispatch({type: EDIT_CATEGORIES,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: EDIT_CATEGORIES,payload:null})
    )
}

export const deleteCategory = (id)=>dispatch=>{
    axios.post(`${IP}/api/category/deleteCategory/${id}`)
    .then(res=>{
        dispatch({type: DELETE_CATEGORIES,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: DELETE_CATEGORIES,payload:null})
    )
}