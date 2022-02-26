import { combineReducers } from "redux"

import prevReducer from "./prevReducer"

export default combineReducers({
    prev : prevReducer
});
