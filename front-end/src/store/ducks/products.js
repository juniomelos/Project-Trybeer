import { omit } from 'lodash';
import UserService from '../../services/trybeerAPI';

/** sideBarHide REDUX */

/** Actions Types */

export const Types = {
  ADD_PRODUCTS: 'ADADD_PRODUCTSD_TO_CART',
};

/** Reducers */

const initialState = {
  products: {},
};

const productsReducer = (state = initialState, { type, products }) => {
  switch (type) {
    case Types.ADD_PRODUCTS:
      return {
        ...state,
        products,
      };
    default:
      return state;
  }
};

/** Actions */

export const addProducts = (products) => ({
  type: Types.ADD_PRODUCTS,
  products,
});

export const hasErrored = (error) => ({
  type: Types.ERROR,
  payload: error,
});

/** Actions Creators */

export const getProducts = () => (dispatch) => {
  console.log("inside getProducts");
  UserService.getProducts()
    .then((res) => {
     console.log('Products', res); 
      dispatch(addProducts(res.data))
    }
      )
    .catch((error) => dispatch(hasErrored(error)));
};

export default productsReducer;
