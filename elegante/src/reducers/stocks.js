import {ADD_STOCK,GET_STOCK,EDIT_STOCK,DELETE_STOCK} from '../actions/actionTypes'

export default function stocks(state=null,action){
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