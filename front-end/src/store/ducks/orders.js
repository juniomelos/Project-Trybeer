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
  switch (type) {
    case Types.POST_ORDER:
      return {
        ...state,
        postOrderSuccess: true,
      };
    case Types.ERROR_ORDER:
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

export const sendOrder = (payload) => ({
  type: Types.POST_ORDER,
  payload,
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
  let date = new Date();
  const dateAndMonth = `${('0' + date.getDate()).slice(-2)}/${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}`;
  console.log("type of total:", typeof dateAndMonth);

  const payload = {
    email,
    total: total.toString(),
    address,
    number,
    date: dateAndMonth,
    products: cartArray,
  };
  console.log('inside postOrder Action creator', payload, token);
  UserService.postOrder(payload, token)
    .then((res) => {
      console.log("postOrder API res", res);
     return dispatch(sendOrder(res))
    }
     )
    .catch((error) => dispatch(hasErrored(error)));
};

export default ordersReducer;
