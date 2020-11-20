import UserService from '../../services/trybeerAPI';

/** sideBarHide REDUX */

/** Actions Types */

export const Types = {
  POST_ORDER: 'POST_ORDER',
  ERROR_ORDER: 'ERROR_ORDER',
};

/** Reducers */

const initialState = {
  postOrderSuccess: false,
  errors: [],
};

const ordersReducer = (state = initialState, { type, payload }) => {
  console.log('orderReducer', type, payload);
  switch (type) {
    case Types.POST_ORDER:
      return {
        ...state,
        postOrderSuccess: true,
      };
    case Types.ERROR_ORDER:
      console.log('payload', payload);
      return {
        ...state,
        errors: [
          ...state.errors,
          `${payload.error.code} mess: ${payload.error.message}`,
        ],
      };

    default:
      return state;
  }
};

/** Actions */

export const sendOrder = (data) => ({
  type: Types.POST_ORDER,
  data,
});

export const hasErrored = (error) => ({
  type: Types.ERROR_ORDER,
  payload: error,
});

/** Actions Creators */

export const postOrder = (cart, email, total, address, number, token) => (
  dispatch,
) => {
  const cartArray = [];
  Object.keys(cart).map(function (key) {
    cartArray.push({
      productId: key,
      quantity: cart[key].quantity,
    });
  });
  const payload = {
    email,
    total: 12,
    address,
    number,
    date: '2020-10-10',
products: cartArray,
    // products: [
    //   {
    //     productId: 8,
    //     quantity: 5,
    //   },
    //   {
    //     productId: 4,
    //     quantity: 5,
    //   },
    // ],

  };
  console.log('inside postOrder Acrion creator', payload, token);
  UserService.postOrder(payload, token)
    .then((res) => dispatch(sendOrder(res.data)))
    .catch((error) => dispatch(hasErrored(error)));
};

export default ordersReducer;
