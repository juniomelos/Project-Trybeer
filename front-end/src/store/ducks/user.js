/** USER REDUX */

import UserService from '../../services/trybeerAPI';

/** Actions Types */

export const Types = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  ERROR: 'ERROR',
};

/** Reducers */

const initialState = {
  user: {
    name: '',
    email: '',
    role: '',
  },
  session: {
    isLoggedIn: false,
    token: '',
  },
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOGIN:
      return {
        ...state,
        user: payload.userData,
        session: { isLoggedIn: true, token: payload.token },
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

export const userSignup = (userData) => (dispatch) => {
  UserService.userSignup(userData)
    .then((response) => {
      /** Verifica se o recurso foi criado no BD e procede */
      /** Faz login se ok */
      if (response.status === 201) {      
        const { token, userData } = response.data;
        dispatch(login({ token, userData }));
      }
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default userReducer;
