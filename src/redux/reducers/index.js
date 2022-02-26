import { combineReducers } from "redux"

import prevReducer from "./prevReducer"
import nextReducer from "./nextReducer"

export default combineReducers({
    prev : prevReducer,
    next : nextReducer,
});
