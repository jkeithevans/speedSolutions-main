import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Create.css';

const Create = (
  {
    setJustLoaded, setMessageModal, setUserData, setShowNav,
  },
) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  let newUser;
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('emailInput').focus();
  });

  const goToUserHome = () => {
    navigate('/userHome');
  };

  const createUser = async (e) => {
    e.preventDefault();
    const payload = {
      loggedIn: true,
      userName: userNameRef.current.value,
      password: passwordRef.current.value.toLowerCase(),
      email: emailRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value.toUpperCase(),
      zip: zipRef.current.value,
    };

    (userNameRef.current.value.length < 5)
      ? setMessageModal({ msg: 'Please make your Username 5 characters or more!', btn: 'Try Again' })
      : (/\s/.test(passwordRef.current.value))
        ? setMessageModal({ msg: 'Please make your Password with no spaces!', btn: 'Try Again' })
        : (passwordRef.current.value.length < 5)
          ? setMessageModal({ msg: 'Please make your Password 5 characters or more!', btn: 'Try Again' })
          : newUser = await api.createNewUser(payload);
    if (newUser.data.success === false) {
      setMessageModal({ msg: `${newUser.data.message}`, btn: 'Go Back' });
    } else {
      const { createdUser } = await newUser.data;
      await setUserData(createdUser);
      await goToUserHome();
    }
  };

  return (
    <div id="homePage" className="container-fluid">
      <div className="row">
        <img className="createPic1" src="../images/ford54.png" alt="66 fastback" />
        <div className="createUserDiv">
          <form onSubmit={createUser} method="POST">
            <p>Creating A New User</p>
            <p>Please make Username and Password 5 characters or more</p>
            <div className="createUserRow">
              <input id="emailInput" className="createUserInputs" type="email" name="email" placeholder="Enter email" required ref={emailRef} />
            </div>
            <div className="createUserRow">
              <input className="createUserInputs" type="password" name="password" placeholder="Enter password" required ref={passwordRef} />
            </div>
            <div className="createUserRow">
              <input className="createUserInputs" type="text" name="userName" placeholder="Enter username" required ref={userNameRef} />
            </div>
            <div className="createUserRow">
              <input className="createUserInputs" type="text" name="address" placeholder="Enter address" required ref={addressRef} />
            </div>
            <div className="createUserRow">
              <input className="createUserInputs" type="text" name="city" placeholder="Enter city" required ref={cityRef} />
            </div>
            <div className="createUserRow">
              <input id="state" className="createUserInputs" type="text" name="state" placeholder="Enter state" required ref={stateRef} />

              <input id="zip" className="createUserInputs" type="text" name="zip" placeholder="Enter zip" required ref={zipRef} />
            </div>
            <div className="buttonRow mb-1">
              <button className="userButtons" type="submit">Submit</button>
              <button id="cancelButton" className="userButtons" type="button" onClick={() => { setJustLoaded(true); }}>Cancel</button>
            </div>
          </form>
        </div>
        <img className="createPic2" src="../images/ford34.png" alt="91 mustang lx" />
      </div>
    </div>
  );
};

export default Create;
