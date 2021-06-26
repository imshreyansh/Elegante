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


