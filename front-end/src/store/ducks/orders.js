import UserService from '../../services/trybeerAPI';

/** sideBarHide REDUX */

/** Actions Types */

export const Types = {
  POST_ORDER: 'POST_ORDER',
};

/** Reducers */

const initialState = {
  postOrderSuccess: false,
};

const ordersReducer = (state = initialState, { type }) => {
  switch (type) {
    case Types.POST_ORDER:
      return {
        ...state,
        postOrderSuccess: true,
      };
    default:
      return state;
  }
};

/** Actions */

export const sendOrder = () => ({
  type: Types.POST_ORDER,
});

export const hasErrored = (error) => ({
  type: Types.ERROR,
  payload: error,
})

/** Actions Creators */

export const postOrder = (cart) => (dispatch) => {
console.log("inside postOrder", cart);
  UserService.postOrder()
    .then((res) => {
      dispatch(sendOrder(res.data));
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default ordersReducer;
