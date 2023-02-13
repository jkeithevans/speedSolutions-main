import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Login.css';

const Login = ({ setJustLoaded, setUserData, setMessageModal }) => {
  const passwordRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    document.getElementById('emailInput').focus();
  });
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      if (passwordRef.current.value.length < 5) {
        setMessageModal({ msg: 'Your password is 5 or morecharacters !', btn: 'Try Again' });
      } else {
        const payload = {
          password: passwordRef.current.value.toLowerCase(),
          email: emailRef.current.value,
        };
        const login = await api.loginUser(payload);
        const { user, success, message } = await login.data;
        if (success === false) {
          setMessageModal({ msg: message, btn: 'Try Again' });
        } else {
          await setUserData(user);
          await sessionStorage.setItem('myUser', JSON.stringify(user));
          await navigate('/userHome');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="homePage" className="container-fluid">
      <div className="row">
        <img id="loginPic1" src="../images/ford54.png" alt="" />
        <div className="loginUserDiv">

          <form onSubmit={loginUser} id="formCenter">
            <p>Login:</p>
            <div className="createUserRow">
              <input id="emailInput" className="createUserInputs" type="email" name="email" placeholder="Enter email" required ref={emailRef} />
            </div>

            <div className="createUserRow">
              <input className="createUserInputs" type="password" name="password" placeholder="Enter password" required ref={passwordRef} />
            </div>

            <div className="buttonRow mb-3">
              <button
                className="userButtons"
                type="submit"
              >
                Submit
              </button>
              <button
                id="cancelButton"
                className="userButtons"
                type="button"
                onClick={() => { setJustLoaded(true); }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <img id="loginPic2" src="../images/ford34.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
