import { createStore , applyMiddleware , combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import productsReducer from "./Reducers/Products";
import cartReducer from "./Reducers/Cart";

const rootReducer = combineReducers({
    products : productsReducer,
    cart : cartReducer
});

const store = createStore(rootReducer , applyMiddleware(thunk , logger));
export default store;