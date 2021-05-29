import {ADD_CATEGORIES,EDIT_CATEGORIES,GET_CATEGORIES,DELETE_CATEGORIES} from '../actions/actionTypes'

export default function category(state=null,action){
    const {type,payload} = action
    switch (type){
        case ADD_CATEGORIES:
            if(payload !==null){
                return [...state,payload]
            }
        
        case GET_CATEGORIES:
            if(payload !==null){
                return payload
            }
        
        case EDIT_CATEGORIES:
            if(payload !==null){
                const filterData = state.filter(d=>d._id!==payload._id)
                return [...filterData,payload]
            }
        case DELETE_CATEGORIES:
            if(payload !==null){
                const filterData = state.filter(d=>d._id!==payload._id)
                return filterData
            }

        default:
            return state
    }
}