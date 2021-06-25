import {GET_ALL_TAX,GET_ALL_ACTIVE_TAX,ADD_TAX,EDIT_TAX} from '../actions/actionTypes'

const initialState=[]
export default function tax(state=initialState,action){
    const {type,payload}=action
    
    switch(type){
        case ADD_TAX:
            if(payload !==null){
                return [...state,payload]
            }

        case GET_ALL_TAX:
            if(payload !==null){
                return payload
            }
        
        case EDIT_TAX:
            if(payload !==null){
                const getUnique = state.filter(d=>d._id!==payload._id)
                return [...getUnique,payload]
            }   
        
        default:
            return state
    }
}