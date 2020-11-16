import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormLogin from '../../components/FormLogin';
import Header from '../../components/Header';
import { saveToLocalStorage } from '../../services/localStorage';

const Login = () => {
  const { token, isLoggedIn } = useSelector((state) => state.userReducer.session);
  const userData = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      saveToLocalStorage('user', { token, ...userData });

      userData.role === 'user'
        ? history.push('/products')
        : history.push('/admin/orders');
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Header></Header> 
      <FormLogin />
    </div>
  );
};

export default Login;
