/** USER REDUX */

import UserService from '../../services/trybeerAPI';

/** Actions Types */

export const Types = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERROR',
};

/** Reducers */

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: '',
    role: '',
  },
  session: {
    token: '',
  },
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOGIN:
      console.log(payload);
      return {
        ...state,
        isLoggedIn: true,
        user: payload.userData,
        session: { token: payload.token },
      };
    case Types.LOGOUT:
      return { initialState };
    case Types.ERROR:
      return { ...state, error: payload.error };
    default:
      return state;
  }
};

/** Actions */

export const login = ({ token, userData }) => ({
  type: Types.LOGIN,
  payload: {
    token,
    userData,
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
    .then((userLogin) => {
      const { token, userData } = userLogin.data;
      
      dispatch(login({ token, userData }));
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default userReducer;
