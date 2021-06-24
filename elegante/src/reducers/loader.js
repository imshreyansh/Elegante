import {SET_DEFAULT_LOADER} from '../actions/actionTypes'

const initialState=false
export default function loader(state=initialState,action){

    const {type,payload} = action
    switch (type){
        case SET_DEFAULT_LOADER:
            if(payload !==null){
                return payload
            }
            
        default:
            return state
    }
}