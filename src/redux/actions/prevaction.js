import { CLICKPREV , INITPREV } from "../types/prevtypes"

export const prevclickAction = () => dispatch => {
    dispatch({
        type : CLICKPREV,
        payload : true
    })
}

export const initprevAction = () => dispatch => {
    dispatch({
        type : INITPREV,
        payload : false
    })
}