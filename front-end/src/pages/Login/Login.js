import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormLogin from '../../components/FormLogin';
import { saveToLocalStorage } from '../../services/localStorage';

const Login = () => {
  const { token, isLoggedIn } = useSelector((state) => state.userReducer.session);
  const userData = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      saveToLocalStorage('user', { token, ...userData });

      userData.role === 'client'
        ? history.push('/products')
        : history.push('/admin/orders');
    }
  }, [isLoggedIn]);

  return (
    <div>
      <FormLogin />
    </div>
  );
};

export default Login;
