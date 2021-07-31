import { createStore, combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
	ProductsReducer,
	CartReducer,
});

const store = createStore(root, devToolsEnhancer());

export default store;
