import {ADD_STOCK,GET_STOCK,EDIT_STOCK,DELETE_STOCK} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'

export const addStock = (data)=>dispatch=>{
    axios.post(`${IP}/api/stock/addStock`,data)
    .then(res=>{
        dispatch({type: ADD_STOCK,payload:res.data.response})
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_STOCK,payload:null})
    )
}
