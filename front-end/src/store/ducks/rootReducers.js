import { combineReducers } from 'redux';

import userReducer from './user';
import sideBarHideReducer from './sideBarHide';
import cartReducer from './productsCart';


const rootReducer = combineReducers({
  userReducer,
  sideBarHideReducer,
  cartReducer,
});

export default rootReducer;
