import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CategorySelection from './CategorySelection';
import UserNavigation from './UserNavigation';
import api from '../api';
import './UserHome.css';

const UserHome = ({
  userData,
  setUserData,
  partsArr,
  partData,
  setPartData,
  setMessageModal,
  loggedOffHome,
  setLoggedOffHome,
  partsPageArr,
  setPartsPageArr,
  goToParts,
  partInquiry,
  setPartInquiry,
}) => {
  const [partConfirmation, setPartConfirmation] = useState(false);
  // useEffect(() => console.log('in useEffect on UserHome', userData), [userData]);
  const navigate = useNavigate();

  const getParts = async (category) => {
    const part = await api.findByCategory(category);
    setPartsPageArr(part.data);
    navigate('/userHome/parts');
  };
  console.log('hillbillys gay', userData);

  const getNewEmail = userData.emailRefId.filter((email) => email.new);
  console.log(getNewEmail.length);
  return (
    (userData)
      ? (
        <>
          <div id="grid">
            <div id="greeting">
              <h1 className="nameSize text-center">
                Welcome&nbsp;
                {userData.userName}
              </h1>
            </div>
            <div id="partsNav" className="text-light">
              <i><b>Parts Nav</b></i>
              <div id="partsNavList">
                {partsArr.map((category, key) => (category !== 'Enter Category')
                && (
                <CategorySelection
                  key={key}
                  getParts={getParts}
                  category={category}
                  setLoggedOffHome={setLoggedOffHome}
                />
                ))}
                <NavLink to="/userHome/emails">
                  <div
                    id="emailStyle"
                    role="presentation"
                    onClick={() => setLoggedOffHome(true)}
                  >
                    Emails
                    <span id={(getNewEmail.length > 0) ? 'emailDot' : null}>{(getNewEmail.length > 0) && getNewEmail.length }</span>
                  </div>
                </NavLink>
              </div>
            </div>
            <div id="userOptions">
              <UserNavigation
                userData={userData}
                setUserData={setUserData}
                partsArr={partsArr}
                partData={partData}
                setPartData={setPartData}
                partInquiry={partInquiry}
                setPartInquiry={setPartInquiry}
                partConfirmation={partConfirmation}
                setPartConfirmation={setPartConfirmation}
                loggedOffHome={loggedOffHome}
                setLoggedOffHome={setLoggedOffHome}
                setMessageModal={setMessageModal}
                partsPageArr={partsPageArr}
                goToParts={goToParts}
              />
              {(!loggedOffHome) && (
                <div className="text-light">
                  <div className="">Welcome Home</div>
                  <div>Browse the parts sections, all the parts, post your unwanted parts or checkout the tech tips page.</div>
                </div>
              )}
            </div>

          </div>
        </>
      )
      : <div>loading</div>
  );
};

export default UserHome;
