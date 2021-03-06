import {GET_ALL_OFFERS,GET_ALL_ACTIVE_OFFERS,ADD_OFFER,EDIT_OFFER} from '../actions/actionTypes'

const initialState=[]
export default function offer(state=initialState,action){
    const {type,payload}=action
    
    switch(type){
        case ADD_OFFER:
            if(payload !==null){
                return [...state,payload]
            }

        case GET_ALL_OFFERS:
            if(payload !==null){
                return payload
            }
        
        case EDIT_OFFER:
            if(payload !==null){
                const getUnique = state.filter(d=>d._id!==payload._id)
                return [...getUnique,payload]
            }   
        
        default:
            return state
    }
}