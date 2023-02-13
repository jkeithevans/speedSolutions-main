import React from 'react';
import PartsForm from '../PartsForm';

const List = ({
  userData,
  setUserData,
  partsArr,
  partData,
  setPartData,
  partConfirmation,
  setPartConfirmation,
  setMessageModal,
}) => (
  <>
    <main className="listPage">
      <div className="listGroup">
        <PartsForm
          userData={userData}
          setUserData={setUserData}
          partsArr={partsArr}
          partData={partData}
          setPartData={setPartData}
          partConfirmation={partConfirmation}
          setPartConfirmation={setPartConfirmation}
          setMessageModal={setMessageModal}
        />
      </div>
    </main>
  </>
);

export default List;
