import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import UserService  from '../services/trybeerAPI';
import { userNameUpdate } from '../store/ducks/user';


const FormClientProfile = () => {

  // Set all local Action/Reducers
  // const userData = useSelector((state) => state.userReducer.user);
  const userData = {
    name: "myname",
    email: 'MyEmail',
  }
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: userData.name,
  });

  const [inputsValid, setInputsValid] = useState(
    true,
  );

  function handleClick() {
    console.log('handleClick clicked');
    dispatch(userNameUpdate(user.name, userData.email)); //async


    // UserService.userNameUpdate(user.name, userData.email)
    //   .then(
    //     (data) => console.log(data),
    //     (error) => console.log(error.message),
    //   );

  }

  // Each time user is updated name is checked if are valid 
  useEffect(() => {
    const regexName = /\w{12}/i;

    if (regexName.test(user.name) && user.name !== userData.name) {
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
      <form className="formContainer">
        <input name="name" type="text" data-testid="profile-email-input"
          value={userData.email}
          readonly
        />


        <input name="name" type="text"
          data-testid="profile-name-input"
          placeholder="Digit seu nome"
          value={user.name}
          onChange={(event) =>
            setUser({ ...user, [event.target.name]: event.target.value })
          }
        />
      </form>
      <button data-testid="profile-save-btn" onClick={handleClick} disabled={inputsValid}>Salvar</button>
    </div>
  )
}

export default FormClientProfile;

