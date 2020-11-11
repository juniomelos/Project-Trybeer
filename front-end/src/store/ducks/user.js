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
        user: payload.user,
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

export const login = ({ token, user }) => ({
  type: Types.LOGIN,
  payload: {
    token,
    user,
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

export const userLogin = (user) => (dispatch) => {
  UserService.userLogin('caio@caio.com', 'dsafddsa4fads5fds')
    .then((userLogin) => {
      console.log(userLogin);
      //REMOVER - ONLY FOR TEST
      const DATA = {
        token: 'f4das5d4f6asdf5f64af4d5sf.f4dsaf44',
        user: userLogin.data,
      };
      dispatch(login(DATA));
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default userReducer;
