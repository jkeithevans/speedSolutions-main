import React from 'react';
import ListItem from './List/ListItem';
import './PartsForm.css';

const PartsPage = ({ partsPageArr, setPartInquiry }) => (
  <>
    {partsPageArr.length === 0
      ? <div className="text-light">No parts available</div>
      : (
        <div id="partsPage">
          {partsPageArr
            .map((part) => <ListItem part={part} key={part._id} setPartInquiry={setPartInquiry} />)}
        </div>
      )}
  </>
);

export default PartsPage;
