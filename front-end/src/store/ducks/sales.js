/** SALES REDUX */

import UserService from '../../services/trybeerAPI';

/** Actions Types */

export const Types = {
  SALES: 'SALES',
  SALES_FETCHING: 'SALES_FETCHING',
  ERROR: 'ERROR',
};

/** Reducers */

const initialState = {
  isFetching: true,
  sales: [],
  saleProducts: [],
};

const salesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SALES_FETCHING:
      return { ...initialState, isFetching: payload.status };
    case Types.SALES:
      return {
        ...state,
        sales: payload.sales,
      };
    case Types.ERROR:
      return { ...state, errors: [...state.errors, payload.error] };
    default:
      return state;
  }
};

/** Actions */

export const login = ({ token, data }) => ({
  type: Types.LOGIN,
  payload: {
    token,
    data,
  },
});

export const logout = () => ({
  type: Types.LOGOUT,
});

export const hasErrored = (error) => ({
  type: Types.ERROR,
  payload: error,
});

/** Actions Creators */

export const userLogin = (email, password) => (dispatch) => {
  UserService.userLogin({ email, password })
    .then((userLogin) => dispatch(login(userLogin.data)))
    .catch((error) => dispatch(hasErrored(error)));
};

export const userSignup = (userData) => (dispatch) => {
  UserService.userSignup(userData)
    .then((response) => {
      /** Verifica se o recurso foi criado no BD e procede */
      /** Faz login se ok */
      if (response.status === 200) {
        dispatch(login(response.data));
      }
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export const userNameUpdate = (name, email) => (dispatch) => {
  UserService.userNameUpdate(name, email)
    .then((DATA) => {
      dispatch(login(DATA));
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default userReducer;
