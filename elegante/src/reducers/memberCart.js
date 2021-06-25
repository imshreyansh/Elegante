import {GET_MEMBER_CART,ADD_MEMBER_CART,REMOVE_MEMBER_CART} from '../actions/actionTypes'

const initialState=[]

export default function category(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case ADD_MEMBER_CART:
            if(payload !==null){
                return [...state,payload]
            }
        
        case GET_MEMBER_CART:
            if(payload !==null){
                return payload
            }

        case REMOVE_MEMBER_CART:
            if(payload !==null){
                const filterData = state.filter(d=>d._id!==payload._id)
                return filterData
            }

        default:
            return state
    }
}