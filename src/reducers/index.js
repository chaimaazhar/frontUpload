import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isLogged: loggedReducer,
    counter : counterReducer   
});
export default allReducers;