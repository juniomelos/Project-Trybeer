import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

const FormLogin = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });


  return (

    <div>
      <h1>
        Here is FormLogin
    </h1>
      <form >
        <input name="email" type="email"
          placeHolder="Digit seu email"
          value={user.email}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />

        <input name="password" type="password"
          placeHolder="Digit seu password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
        <input type="submit" />
      </form>

    </div>

  )
}

export default FormLogin
