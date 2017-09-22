import authReducer from "./authReducers";
import {combineReducers} from "redux";

export default combineReducers({
    auth:authReducer
});