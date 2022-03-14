import { combineReducers } from "redux";
import addItemReducers from "./addItemReducers";

const rootReducers = combineReducers({
  addItemReducers,
});

export default rootReducers;
