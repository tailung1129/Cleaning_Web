import { combineReducers } from "redux"

import prevReducer from "./prevReducer"
import nextReducer from "./nextReducer"
import requestsReducer from "./requestsReducer"

export default combineReducers({
    prev : prevReducer,
    next : nextReducer,
    requests : requestsReducer
});
