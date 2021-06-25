import {ADD_STOCK,GET_STOCK,EDIT_STOCK,DELETE_STOCK,GET_STOCK_BY_CATEGORY,GET_STOCK_BY_ID} from '../actions/actionTypes'

const initialState={allStocks:[],stockByCategory:[],stockById:{}}
export default function stocks(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case ADD_STOCK:
            if(payload!==null){
                return{
                    ...state,
                    allStocks:[...state.allStocks,payload]
                } 
            }

        case GET_STOCK:
            if(payload !==null){
                return {
                    ...state,
                    ...{allStocks:payload}
                }
            }

        case GET_STOCK_BY_CATEGORY:
            if(payload !==null){
                return{
                    ...state,
                    ...{stockByCategory:payload}
                }
                
            }

        case GET_STOCK_BY_ID:
            if(payload !==null){
                return{
                ...state,
                ...{stockById:payload}
            }
            }

        case EDIT_STOCK:
            if(payload !==null){
                const filterData = state.allStocks.filter(d=>d._id !== payload._id)
                return {
                    ...state,
                    allStocks:[...filterData.allStocks,payload]
                } 
            }

        case DELETE_STOCK:
            if(payload !==null){
                const deletedStock = state.allStocks.filter(d=>d._id !== payload._id)
                return {
                    ...state,
                    allStocks:deletedStock
                }
            }
        
        default:
            return state
    }
}