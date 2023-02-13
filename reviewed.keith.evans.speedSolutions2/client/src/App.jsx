import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import api from './api';
import Header from './components/Header';
import Home from './components/Home';
import UserHome from './components/UserHome';
import Modal from './components/Modal';
import Footer from './components/Footer';

const NotFound = () => <h1>Page Not Found</h1>;

const App = () => {
  const [newUser, setNewUser] = useState(false);
  const [justLoaded, setJustLoaded] = useState(true);
  const [userData, setUserData] = useState((sessionStorage.getItem('myUser') === undefined) ? {} : JSON.parse(sessionStorage.getItem('myUser')));
  const [partData, setPartData] = useState();
  const [messageModal, setMessageModal] = useState(null);
  const [partInquiry, setPartInquiry] = useState();
  const [partsPageArr, setPartsPageArr] = useState();
  const [loggedOffHome, setLoggedOffHome] = useState(false);
  const partsArr = ['Enter Category', 'exhaust', 'engine', 'drivetrain', 'rearend', 'wheels', 'body', 'interior'];

  const goToParts = async () => {
    const partsView = await api.allParts();
    await setPartsPageArr(partsView.data);
  };
  console.log('partData', partData);

  useEffect(() => {
    goToParts();
  }, [partData]);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              newUser={newUser}
              setNewUser={setNewUser}
              justLoaded={justLoaded}
              setJustLoaded={setJustLoaded}
              userData={userData}
              setUserData={setUserData}
              messageModal={messageModal}
              setMessageModal={setMessageModal}
            />
          )}
        />
        <Route
          path="/userHome/*"
          element={(
            <UserHome
              userData={userData}
              setUserData={setUserData}
              partsArr={partsArr}
              partData={partData}
              setPartData={setPartData}
              setMessageModal={setMessageModal}
              partsPageArr={partsPageArr}
              setPartsPageArr={setPartsPageArr}
              loggedOffHome={loggedOffHome}
              setLoggedOffHome={setLoggedOffHome}
              goToParts={goToParts}
              partInquiry={partInquiry}
              setPartInquiry={setPartInquiry}
            />
          )}
        />
        <Route element={(<NotFound />)} />
      </Routes>
      {messageModal && (
        <Modal
          messageModal={messageModal}
          setMessageModal={setMessageModal}
          goToParts={goToParts}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
// <Routes>
//   {/* <Route path="/" element={<LandingPage />} /> */}
// </Routes>

// );

// export default App;
