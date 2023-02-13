import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import Tech from './Tech';
import List from './List/List';
import PartsPage from './PartsPage';
import Part from './Part';
import EmailSeller from './EmailSeller';
import Email from './Email';
// import PartConfirmation from './PartConfirmation';

const UserNavigation = (props) => {
  const {
    userData,
    setUserData,
    partsArr,
    partData,
    setPartData,
    partInquiry,
    setPartInquiry,
    partConfirmation,
    setPartConfirmation,
    setLoggedOffHome,
    setMessageModal,
    partsPageArr,
    setPartsPageArr,
    goToParts,
    setHome,
  } = props;

  return (
    <>
      <UserNavBar
        userData={userData}
        goToParts={goToParts}
        setLoggedOffHome={setLoggedOffHome}
      />
      <Routes>
        <Route
          path="/sellMyParts"
          element={(
            <List
              userData={userData}
              setUserData={setUserData}
              partsArr={partsArr}
              partData={partData}
              setPartData={setPartData}
              partConfirmation={partConfirmation}
              setPartConfirmation={setPartConfirmation}
              setMessageModal={setMessageModal}
            />
          )}
        />
        <Route
          path="/parts"
          element={(
            <PartsPage
              userData={userData}
              partsPageArr={partsPageArr}
              goToParts={goToParts}
              setPartInquiry={setPartInquiry}
            />
          )}
        />
        <Route
          path="/tech"
          element={<Tech />}
        />
        <Route
          path="/viewPart"
          element={(
            <Part
              userData={userData}
              partInquiry={partInquiry}
            />
          )}
        />
        <Route
          path="/emailSeller"
          element={(
            <EmailSeller
              userData={userData}
              partInquiry={partInquiry}
            />
          )}
        />
        <Route
          path="/emails"
          element={(
            <Email
              userData={userData}
              setPartsPageArr={setPartsPageArr}
            />
          )}
        />
      </Routes>
    </>
  );
};

export default UserNavigation;
