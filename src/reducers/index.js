import { combineReducers } from "redux";
import postReducer from './postReducer.js'
import requestReducer from "./requestReducer.js";

export default combineReducers({
    posts:postReducer,
    requests:requestReducer
});