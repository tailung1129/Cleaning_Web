import { CLICKNEXT , INITNEXT } from "../types/nexttypes"

export const nextclickAction = () => dispatch => {
    console.log("here is nexclick action")
    dispatch({
        type : CLICKNEXT,
        payload : true
    })   
}

export const initnextAction = () => dispatch => {
    dispatch({
        type : INITNEXT,
        payload : false
    })
}