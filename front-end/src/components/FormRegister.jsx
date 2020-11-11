import React, { useState, useEffect } from 'react';

const FormRegister = () => {

  function handleClick() {
    console.log('handleClick clicked');
  }

  // Set all local Action/Reducers
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    admin: false,
  });

  const [inputsValid, setInputsValid] = useState(
    true,
  );

  // Each time user is updated password and email are checked if are valid 
  useEffect(() => {
    const regexEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
    const regexName = /\w{12}/i;

    if (user.password.length > 5 && regexEmail.test(user.email) && regexName.test(user.name)) {
      setInputsValid(false)
    } else {
      setInputsValid(true)
    }
  }, [user]);

  return (
    <div>
      <form className="formContainer">
        <input name="name" type="text"
          data-testid="signup-name"
          placeholder="Digit seu nome"
          value={user.name}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
        <input name="email" type="email"
          data-testid="signup-email"
          placeholder="Digit seu email"
          value={user.email}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
        <input name="password" type="password"
          data-testid="signup-password"
          placeholder="Digit seu password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
        <label>
          Quero Vender
          <input
            data-testid="signup-seller"
            name="admin" type="checkbox"
            checked={user.admin}
            onChange={(event) =>
              setUser({ ...user, [event.target.name]: !user.admin })
            }
          />
        </label>
        <button data-testid="signup-btn" type="submit" onClick={handleClick} disabled={inputsValid}>CADASTRAR</button>
      </form>

    </div>

  )
}

export default FormRegister
