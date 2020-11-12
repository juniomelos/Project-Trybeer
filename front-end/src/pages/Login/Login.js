import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormLogin from '../../components/FormLogin';
import { saveToLocalStorage } from '../../services/localStorage';

const Login = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const { token } = useSelector((state) => state.userReducer.session);
  const userData = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      console.log(userData)
      saveToLocalStorage('user', { token, ...userData });

      userData.role === 'user'
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
