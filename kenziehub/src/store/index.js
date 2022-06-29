import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
