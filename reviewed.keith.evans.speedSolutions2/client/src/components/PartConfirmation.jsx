import React, { useRef, useState, useEffect }from 'react';
import './PartsForm.css';

const PartConfirmation = ({userData, partsData, setPartConfirmation, addPart, modifyForm}) => {
  // Use defaultValue when coming back to the form from here
  console.log("partconfirmation",partsData)
  return(
    <div className="confirm"> Is everything correct?
    <div>
    <div>Part Name: {partsData.part}</div>
    </div>
    <div>Price: ${partsData.price}</div>
    <div>Vehicle: {partsData.vehicle}</div>
    <div>Description: {partsData.description}</div>
    <div>Category: {partsData.category}</div> 
    <button type='button' onClick={()=> addPart(partsData)}>Confirm</button>
    <button type='button' onClick={()=> {modifyForm(partsData);
                                         setPartConfirmation(false); }}>Modify</button>
    </div>
  )
}

export default PartConfirmation;