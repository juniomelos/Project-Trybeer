import { combineReducers } from 'redux';

import userReducer from './user';
import sideBarHideReducer from './sideBarHide';


const rootReducer = combineReducers({
  userReducer,
  sideBarHideReducer,
});

export default rootReducer;
