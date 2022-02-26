import { CLICKPREV , INITPREV } from "../types/prevtypes"

export const prevclickAction = () => dispatch => {
    dispatch({
        type : CLICKPREV,
        payload : true
    })
    console.log("here is prev click action")
}

export const initprevAction = () => dispatch => {
    dispatch({
        type : INITPREV,
        payload : false
    })
}