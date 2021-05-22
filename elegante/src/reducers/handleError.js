import {ERROR} from '../actions/actionTypes'

export default function handleError(state=null,action){
    const {type,payload} = action
    switch(type){
        case ERROR:
            return payload

            default:
                return state
    }
}