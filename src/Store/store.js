import { createStore } from "redux";
import rootReducers from "../Reducers/index";

const store = createStore(rootReducers);

export default store;
