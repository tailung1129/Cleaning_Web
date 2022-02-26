import { CLICKNEXT , INITNEXT } from "../types/nexttypes"

const nextReducer = ( state = false , action ) =>{
    switch (action.type) {
        case CLICKNEXT:
            return action.payload
        case INITNEXT:
            return action.payload
        default :
            return state
    }
}

export default nextReducer