import {POST_USER_REQUEST,GET_USER_REQUEST} from '../actions/actionTypes'

const initialState=[]
export default function userRequest(state=initialState,action){
    const {type,payload}=action

    switch(type){
        case POST_USER_REQUEST:
            if(payload !==null){
            return [payload,...state]
            }

        case GET_USER_REQUEST:
            if(payload !==null){
                return payload
            }

        default:
            return state
    }

}