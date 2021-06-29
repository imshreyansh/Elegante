import {PURCHASE_ORDER,GET_ALL_ORDER,UPDATE_ORDER,GET_ORDER_BY_ID} from '../actions/actionTypes'

const initialState=[]
export default function stocks(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case PURCHASE_ORDER:
            if(payload!==null){
                return [...state,payload]
                
            }

        case GET_ALL_ORDER:
            if(payload !==null){
                return payload
            }

        case GET_ORDER_BY_ID:
            if(payload !==null){
                return payload
            }

        case UPDATE_ORDER:
            if(payload !==null){
                const filterData = state.filter(d=>d._id !== payload._id)
                return [payload,...filterData]
            }
        
        default:
            return state
    }
}