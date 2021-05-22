import {ERROR} from './actionTypes'

export const handleError = (data)=>dispatch=>{
    dispatch({type:ERROR,payload:data})
    setTimeout(()=>{
        dispatch({
            type:ERROR,
            payload:null
        })
    },2000)
}