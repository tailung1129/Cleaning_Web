import { SAVEREQUESTS } from "../types/requeststypes";

const requestsReducer = ( state = [] , action ) => {
    switch (action.type) {
        case SAVEREQUESTS:
            return action.payload
        default :
            return state
    }
}

export default requestsReducer