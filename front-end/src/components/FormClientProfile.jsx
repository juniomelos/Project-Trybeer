import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/ducks/user';



const FormClientProfile = () => {

  // Set all local Action/Reducers
  const userData = useSelector((state) => state.userReducer.user);

  const [user, setUser] = useState({
    name: userData.name,
  });

  const [inputsValid, setInputsValid] = useState(
    true,
  );

  function handleClick() {
    console.log('handleClick clicked');
  }

  // Each time user is updated name is checked if are valid 
  useEffect(() => {
    const regexName = /\w{12}/i;

    if (regexName.test(user.name) && user.name != userData.name) {
      setInputsValid(false)
    } else {
      setInputsValid(true)
    }
  }, [user]);

  return (
    <div>

      <h1>
        Here is FormClientProfile
    </h1>
      <h2>
        Seu email  :
    </h2>
      <h3 data-testid="profile-email-input"> {userData.email}</h3>
      <form className="formContainer">
        <input name="name" type="text"
          data-testid="profile-name-input"
          placeholder="Digit seu nome"
          value={user.name}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
        <button data-testid="profile-save-btn" type="submit" onClick={handleClick} disabled={inputsValid}>CADASTRAR</button>
      </form>
    </div>
  )
}

export default FormClientProfile;

