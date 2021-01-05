import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveToLocalStorage } from '../../services/localStorage';
import { userLogin } from '../../store/ducks/user';
import { Button } from '../StyledComponents/buttons';
import { Form, FormContainer, Input, InputLabel, SectionDivider, SectionDividerLine } from './style';

const FormLogin = () => {
  // Route to /Register
  const history = useHistory();
  const dispatch = useDispatch();

  // Set all local Action/Reducers
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [inputsValid, setInputsValid] = useState(true);

  function handleClick() {
    dispatch(userLogin(user.email, user.password)); //async
  }

  // Each time user is updated password and email are checked if are valid
  useEffect(() => {
    const regexEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
    if (user.password.length > 5 && regexEmail.test(user.email)) {
      setInputsValid(false);
    } else {
      setInputsValid(true);
    }
  }, [user]);

  return (
    <FormContainer>
      <Form>
        <InputLabel>
          Email
          <Input
            name="email"
            type="email"
            data-testid="email-input"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, [event.target.name]: event.target.value })
            }
          />
        </InputLabel>
        <InputLabel>
          Password
          <Input
            name="password"
            type="password"
            data-testid="password-input"
            value={user.password}
            onChange={(event) =>
              setUser({ ...user, [event.target.name]: event.target.value })
            }
          />
        </InputLabel>
      </Form>
      <Button
        type="button"
        data-testid="signin-btn"
        btype="primary"
        size="300"
        onClick={handleClick}
      >
        entrar
      </Button>
      <h3>Ou</h3>
      <div>
        <Button btype="outline"
          data-testid="no-account-btn"
          onClick={() => history.push('/register')}
        >
          {' '}
          Ainda não tenho conta
        </Button>
      </div>
    </FormContainer>
  );
};

export default FormLogin;
