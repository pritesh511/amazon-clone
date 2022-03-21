import { combineReducers } from "redux";
import addItemReducers from "./addItemReducers";
import authReducers from "./authReducer";

const rootReducers = combineReducers({
  addItemReducers,
  authReducers,
});

export default rootReducers;
