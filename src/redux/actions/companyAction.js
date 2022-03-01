import { COMPANYLOGIN } from "../types/companytypes";

export const companyloginAction = ( requests ) => dispatch => {
    dispatch({
        type : COMPANYLOGIN,
        payload : requests
    });
}