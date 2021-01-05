import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormLogin from '../../components/FormLogin/FormLogin';
import { saveToLocalStorage } from '../../services/localStorage';
import Video from '../../assets/videos/video.mp4';
import LogoImage from '../../assets/images/cj-logo.png';

/** Styled COmponents */
import { ColorBg, LoginContainer, LoginVisualElem, Logo, VideoBg } from './style';
import { Button } from '../../components/StyledComponents/buttons';

const Login = () => {
  const { token, isLoggedIn } = useSelector(
    (state) => state.userReducer.session
  );
  const userData = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      saveToLocalStorage('user', { token, ...userData });

      history.push(userData.role === 'client' ? '/products' : '/admin/orders');
    }
  }, [isLoggedIn]);

  return (
    <LoginContainer>
      <LoginVisualElem>
        <VideoBg autoPlay muted loop id="myVideo">
          <source src={Video} type="video/mp4" />
        </VideoBg>
        <ColorBg />
        <Logo src={LogoImage} />
      </LoginVisualElem>
      <FormLogin />
    </LoginContainer>
  );
};

export default Login;
