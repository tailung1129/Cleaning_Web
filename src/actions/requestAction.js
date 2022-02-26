import { GET_REQUEST } from "./types";
import { fnLogin } from "../api";

export const getRequest = ( postdata ) => dispatch => {
    fnLogin(postdata)
        .then((res) => {
            // console.log(res.data.response_description);
            if(res.data.response_description==="Login Success")
              window.location.href = "/account/requests"
        }).then(result => dispatch({
            type: GET_REQUEST,
            payload: result.data.company.requests
        })).catch((error) => {
            console.log(error)
        });
}