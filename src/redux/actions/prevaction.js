import { CLICKPREV , INITPREV } from "../types/prevtypes"

const initstate = {
    ciickprev : true , 
    initprev : false
}

export const prev = ( state = initstate , action ) =>{
    switch (action.type) {
        case CLICKPREV:
            return state.ciickprev
        case INITPREV:
            return state.initprev
    }
}