import {SET_DEFAULT_LOADER} from './actionTypes'

export const onLoader = (data)=>dispatch=>{
dispatch({type:SET_DEFAULT_LOADER,payload:data})
}