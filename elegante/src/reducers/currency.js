import {ADD_CURRENCY,SET_DEFAULT_CURRENCY,GET_CURRENCY,DELETE_CURRENCY} from '../actions/actionTypes'

const initialState=[]
export default function currency(state=initialState,action){

    const {type,payload} = action
    switch (type){
        case ADD_CURRENCY:
            if(payload !==null){
                return [...state,payload]
            }

        case GET_CURRENCY:
            if(payload !==null){
                return payload
            }

        case DELETE_CURRENCY:
            if(payload !==null){
                const filterState = state.filter(d=>d._id!==payload._id)
                return filterState
            }

        case SET_DEFAULT_CURRENCY:
            if(payload !==null){
                return payload
            }
            
        default:
            return state
    }
}