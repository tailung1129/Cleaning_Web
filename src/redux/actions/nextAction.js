import { CLICKNEXT , INITNEXT } from "../types/nexttypes"

export const nextclickAction = () => dispatch => {
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