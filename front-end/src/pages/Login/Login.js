import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormLogin from '../../components/FormLogin';

import { userLogin } from '../../store/ducks/user';

const Login = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.userReducer.session);
  
  useEffect(() => {
    dispatch(userLogin());
  }, []);

  return (
    <div>
      <FormLogin />
    </div>
  );
};

export default Login;
