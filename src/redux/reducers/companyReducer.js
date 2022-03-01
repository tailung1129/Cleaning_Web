import { COMPANYLOGIN } from "../types/companytypes";

const companyReducer = ( state = {} , action ) => {
    switch (action.type) {
        case COMPANYLOGIN:
            return action.payload;
        default :
            return state;
    }
}

export default companyReducer;