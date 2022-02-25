import { combineReducers } from "redux";
import postReducer from './postReducer.js'
import postLogin from "./postLogin.js";

export default combineReducers({
    posts:postReducer
});