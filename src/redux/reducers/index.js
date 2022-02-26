import { combineReducers } from "redux"

import prevReducer from "./prevReducer"

const rootReducer = combineReducers({
    prev : prevReducer
});

export default rootReducer