import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './FormLogin.css';

const FormLogin = () => {
  // Route to /Register 
  const history = useHistory();
  function handleClick() {
    history.push("/register");
  }
  // Set all local Action/Reducers
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [inputsValid, setInputsValid] = useState(
    true,
  );

  // Each time user is updated password and email are checked if are valid 
  useEffect(() => {
    console.log('user hit');
    const regexEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;

    if (user.password.length > 5 && regexEmail.test(user.email)) {
      setInputsValid(false)
    } else {
      setInputsValid(true)
    }
  }, [user]);



  return (

    <div>
      <h1>
        Here is FormLogin
    </h1>
      <form className= "formContainer">
        <input name="email" type="email"
          data-testid="email-input"
          placeHolder="Digit seu email"
          value={user.email}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })

          }
        />
        <input name="password" type="password"
          data-testid="password-input"
          placeholder="Digit seu password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
        <button data-testid="signin-btn" type="submit" disabled={inputsValid}>ENTRAR</button>
      </form>
      <div>
        <button data-testid="no-account-btn" onClick={handleClick}
        > Ainda nao tenho conta</button>
      </div>
    </div>

  )
}

export default FormLogin
