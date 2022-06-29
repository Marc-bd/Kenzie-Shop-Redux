import { addToCart, attProd, removeFromCart } from "./actions";
import { useSelector } from "react-redux";
import { products } from "../../../data/database";

export const addToCartThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();

    const cartHasProduct = cart.find((prod) => prod.id === product.id);
    //const cartHasProduct = cart.find((prod) => console.log);

    const list = JSON.parse(localStorage.getItem("@KenzieShopCart")) || [];

    if (!cartHasProduct) {
      const newList = [...list, { ...product, qtd: 1 }];
      localStorage.setItem("@KenzieShopCart", JSON.stringify(newList));
      dispatch(addToCart({ ...product, qtd: 1 }));
    } else {
      const attList = JSON.parse(localStorage.getItem("@KenzieShopCart"));
      attList.forEach((prod) => {
        if (prod.id === product.id) {
          prod.qtd++;
        }
      });
      dispatch(attProd(attList));
      localStorage.setItem("@KenzieShopCart", JSON.stringify(attList));
    }
  };
};

export const removeFromCartThunk = (id) => (dispatch, getState) => {
  const { cart } = getState();
  const prodId = cart.find((prod) => prod.id === id);

  if (prodId.qtd > 1) {
    const list = JSON.parse(localStorage.getItem("@KenzieShopCart"));
    list.forEach((prod) => {
      if (prod.id === prodId.id) {
        prod.qtd--;
      }
    });
    dispatch(removeFromCart(list));
    localStorage.setItem("@KenzieShopCart", JSON.stringify(list));
  } else {
    const newlist = cart.filter((product) => product.id !== id);

    localStorage.setItem("@KenzieShopCart", JSON.stringify(newlist));
    dispatch(removeFromCart(newlist));
  }
};

//https://github.com/filipekenzie/t11-avancando-com-redux/blob/main/src/store/modules/cart/thunks.js
