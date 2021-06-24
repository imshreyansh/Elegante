import {GET_ALL_OFFERS,GET_ALL_ACTIVE_OFFERS,ADD_OFFER,EDIT_OFFER} from './actionTypes'
import {handleError} from './handleError'
import {IP} from '../config/config'
import axios from 'axios'
import {onLoader} from './loader'


export const addOffer = (data)=>dispatch=>{
    axios.post(`${IP}/api/offer/addOffer`,data)
    .then(res=>{
    if(res){
        dispatch({type: ADD_OFFER,payload:res.data.response})
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
        }
    })
    .catch(err=>
        dispatch(handleError({type:'error',error:err.message})),
        dispatch({type: ADD_OFFER,payload:null}),
        setTimeout(() => {
            dispatch(onLoader(false))
        },2000)
    )
}

export const getAllOffer = ()=>dispatch=>{
    axios.get(`${IP}/api/offer/getAllOffer`)
    .then(res=>{
        if(res){
            dispatch({type: GET_ALL_OFFERS,payload:res.data.response})
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
            }
        })
        .catch(err=>
            dispatch(handleError({type:'error',error:err.message})),
            dispatch({type: GET_ALL_OFFERS,payload:null}),
            setTimeout(() => {
                dispatch(onLoader(false))
            },2000)
        )
}