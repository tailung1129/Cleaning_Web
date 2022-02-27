import { CLICKPREV , INITPREV } from "../types/prevtypes"

const prevReducer = ( state = false , action ) =>{
    switch (action.type) {
        case CLICKPREV:
            return action.payload
        case INITPREV:
            return action.payload
        default :
            return state
    }
}

export default prevReducer