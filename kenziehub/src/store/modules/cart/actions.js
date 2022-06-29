import { ADD_CART, REMOVE_CART, ATT_CART, SHOW_CART } from "./actionTypes";

export const addToCart = (product) => ({ type: ADD_CART, product });

export const removeFromCart = (list) => ({ type: REMOVE_CART, list });

export const attProd = (list) => ({ type: ATT_CART, list });
