import { combineReducers } from "redux";
import Counter from "./Counter";
import UI from "./UI";

const reducers = combineReducers({
    Counter, UI
});

export default reducers;