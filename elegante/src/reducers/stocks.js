import {ADD_STOCK,GET_STOCK,EDIT_STOCK,DELETE_STOCK,GET_STOCK_BY_CATEGORY} from '../actions/actionTypes'

const initialState=[]
export default function stocks(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case ADD_STOCK:
            if(payload!==null){
                return [...state,payload]
            }

        case GET_STOCK:
            if(payload !==null){
                return payload
            }

        case GET_STOCK_BY_CATEGORY:
            if(payload !==null){
                return {stockByCategory:payload,state}
            }

        case EDIT_STOCK:
            if(payload !==null){
                const filterData = state.filter(d=>d._id !== payload._id)
                return [...filterData,payload]
            }

        case DELETE_STOCK:
            if(payload !==null){
                const deletedStock = state.filter(d=>d._id !== payload._id)
                return deletedStock
            }
        
        default:
            return state
    }
}