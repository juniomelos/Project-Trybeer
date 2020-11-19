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
      case Types.ERROR:
        console.log("payload");
        // return { ...state, errors: [...state.errors, payload.error] };
        return { ...state, errors: [...state.errors, 'payload.error'] };
    
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

export const postOrder = (cart) => (dispatch) => {
  console.log("inside postOrder" , cart);
  UserService.postOrder()
    .then((res) =>   dispatch(sendOrder(res.data)))
    .catch((error) => dispatch(hasErrored(error)));
};

export default ordersReducer;
