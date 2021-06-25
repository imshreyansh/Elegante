import {ADD_CATEGORIES,EDIT_CATEGORIES,GET_CATEGORIES,DELETE_CATEGORIES,GET_CATEGORY_BY_ID} from '../actions/actionTypes'

const initialState={allCategories:[],categoryName:{}}

export default function category(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case ADD_CATEGORIES:
            if(payload !==null){
                return {
                    ...state,
                    allCategories:[...state.allCategories,payload]
                }
            }
        
        case GET_CATEGORIES:
            if(payload !==null){
                return {
                    ...state,
                    ...{allCategories:payload}
                }
            }

        case GET_CATEGORY_BY_ID:
            if(payload !==null){
                return {
                    ...state,
                    ...{categoryName:payload}
                }
                
            }
        
        case EDIT_CATEGORIES:
            if(payload !==null){
                const filterData = state.allCategories.filter(d=>d._id!==payload._id)
                return {
                    ...state,
                   allCategories: [...filterData,payload]
                 }
            }
        case DELETE_CATEGORIES:
            if(payload !==null){
                const filterData = state.allCategories.filter(d=>d._id!==payload._id)
                return {
                    ...state,
                   allCategories: filterData
                 }
            }

        default:
            return state
    }
}