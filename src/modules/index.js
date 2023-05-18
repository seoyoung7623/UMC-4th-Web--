import { combineReducers, createStore } from "redux";
import products from "./products";

const rootReducer = combineReducers({
  products,
});
const store = createStore(rootReducer);

export default store;
