import {ADD_CATEGORIES,EDIT_CATEGORIES,GET_CATEGORIES,DELETE_CATEGORIES,GET_CATEGORY_BY_ID} from '../actions/actionTypes'

const initialState=[]
export default function category(state=initialState,action){
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

        case GET_CATEGORY_BY_ID:
            if(payload !==null){
                return {categoryName:payload,state}
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