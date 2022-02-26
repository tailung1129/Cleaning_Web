import { CLICKPREV , INITPREV } from "../types/prevtypes"

const initstate = {
    ciickprev : true , 
    initprev : false
}

const prevReducer = ( state = initstate , action ) =>{
    switch (action.type) {
        case CLICKPREV:
            return action.payload
        case INITPREV:
            return action.payload
        default :
            return state.initprev
    }
}

export default prevReducer