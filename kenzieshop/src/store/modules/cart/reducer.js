import { ADD_CART, REMOVE_CART, ATT_CART, SHOW_CART } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("@KenzieShopCart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;

      return [...state, product];

    case ATT_CART:
      return [...action.list];

    case REMOVE_CART:
      return action.list;

    default:
      return state;
  }
};

export default cartReducer;
