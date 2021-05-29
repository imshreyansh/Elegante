import {ADD_STOCK,GET_STOCK,EDIT_STOCK,DELETE_STOCK} from '../actions/actionTypes'

export default function stocks(state=null,action){
    const {type,payload} = action
    switch (type){
        case ADD_STOCK:
            if(payload !==null){
                return [...state,payload]
            }
        default:
            return state
    }
}