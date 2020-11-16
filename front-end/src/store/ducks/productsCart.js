import { omit } from 'lodash';
/** sideBarHide REDUX */

/** Actions Types */

export const Types = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART',
  LOAD_INIT_STATE: 'LOAD_INIT_STATE',
};

/** Reducers */

const initialState = {
  cart: {},
};

const cartReducer = (state = initialState, { type, product }) => {
  switch (type) {
    case Types.ADD_TO_CART:
      let { id, name, price } = product;
      if (state.cart[id] !== undefined) {
        const newQuantity = (state.cart[id].quantity += 1);
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: {
              ...state.cart[id],
              quantity: newQuantity,
            },
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: {
              quantity: 1,
              name,
              price,
            },
          },
        };
      }
    case Types.REMOVE_TO_CART:
      if (state.cart[product.id].quantity === 1) {
        return {
          ...state,
          cart: omit(state.cart, product.id),
        };
      } else {
        const newQuantity = (state.cart[product.id].quantity -= 1); // Possible to use id?
        return {
          ...state,
          cart: {
            ...state.cart,
            [product.id]: {
              ...state.cart[product.id],
              quantity: newQuantity,
            },
          },
        };
      }
    case Types.LOAD_INIT_STATE:
      console.log('Cart inside Reducer', product);
      const cart = product;
      console.log('cart', cart );
        return {
          ...state,
          cart,
        };
    default:
      return state;
  }
};

/** Actions */

export const addToCart = (product) => ({
  type: Types.ADD_TO_CART,
  product,
});

export const removeToCart = (product) => ({
  type: Types.REMOVE_TO_CART,
  product,
});

export const loadInitCart = (product) => ({
  type: Types.LOAD_INIT_STATE,
  product,
});
export default cartReducer;
