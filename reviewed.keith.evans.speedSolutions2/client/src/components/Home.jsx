import React from 'react';
import Create from './Create';
import Login from './Login';
import './Home.css';

const Home = (props) => {
  const {
    newUser,
    setNewUser,
    justLoaded,
    setJustLoaded,
    userData,
    setUserData,
    setMessageModal,
    setShowNav,
  } = props;

  return (
    <div className="homePage">
      <h1 className="text-center" id="welcome">Welcome to Speed Solutions</h1>
      <div className="row">
        { (justLoaded)
          ? (
            <div className="signIn">
              Welcome to Speed Solutions,   your one stop shop for new and used performance parts. If you are a new user, please create a profile. If not,  just login to your account
              <div id="buttonDiv" className="mt-3">
                <button
                  className="mr-2 userButtons"
                  type="button"
                  onClick={() => {
                    setNewUser(true);
                    setJustLoaded(false);
                  }}
                >
                  Create Profile
                </button>

                <button
                  className="ml-2 userButtons"
                  type="button"
                  id="loginProfile"
                  onClick={() => {
                    setJustLoaded(false);
                    setNewUser(false);
                  }}
                >
                  Login
                </button>

              </div>
            </div>
          )
          : (newUser)
            ? (
              <Create
                setJustLoaded={setJustLoaded}
                setMessageModal={setMessageModal}
                setUserData={setUserData}
                setShowNav={setShowNav}
              />
            )
            : (
              <Login
                setJustLoaded={setJustLoaded}
                setMessageModal={setMessageModal}
                setUserData={setUserData}
                setShowNav={setShowNav}
              />
            )}
      </div>
    </div>
  );
};

export default Home;
