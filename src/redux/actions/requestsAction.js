import { SAVEREQUESTS } from "../types/requeststypes";

export const saverequestsAction = ( requests ) => dispatch => {
    dispatch({
        type : SAVEREQUESTS , 
        payload : requests
    })
}