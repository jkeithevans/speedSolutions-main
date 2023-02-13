import React, { useRef, useState } from 'react';
import DropDownMenu from './DropDownMenu';
import api from '../api';
import './PartsForm.css';

const PartsForm = ({
  userData, setUserData, partsArr, partData, setPartData, partConfirmation, setPartConfirmation, setMessageModal,
}) => {
  const [dropDownValue, setDropDownValue] = useState();

  const partRef = useRef('cecil');
  const priceRef = useRef();
  const vehicleRef = useRef();
  const descriptionRef = useRef();

  const addedPart = async (e) => {
    e.preventDefault();
    const payload = {
      part: partRef.current.value,
      price: priceRef.current.value,
      vehicle: vehicleRef.current.value,
      description: descriptionRef.current.value,
      category: dropDownValue,
      userRefId: userData._id,
      date: new Date(),
    };
    const partAdded = await api.addPart(payload, userData._id);
    console.log(partAdded.data);
    // let partAdded = await fetch(`/api/addNewPart/${userData._id}`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     part: partRef.current.value,
    //     price: priceRef.current.value,
    //     vehicle: vehicleRef.current.value,
    //     description: descriptionRef.current.value,
    //     category: dropDownValue,
    //     userRefId: userData._id,
    //     date: new Date(),
    //   }),
    // });
    // partAdded = await partAdded.json();
    setPartData(partAdded.data);
    setMessageModal({ msg: 'Browse Parts or Add More?', btnAlt: 'Browse Parts', btn: 'Add More' });
    partRef.current.value = '';
    priceRef.current.value = '';
    vehicleRef.current.value = '';
    descriptionRef.current.value = '';
  };

  //   const modifyForm = (part) => {
  //  try the property defaultValue to fix this function
  //     console.log("in modify form", part)
  //     // partRef.current.textContent = part.part;
  //     //  priceRef.current = part.price;
  //     partData = part.part
  //     // vehicleRef.current = part.vehicle;
  //     // descriptionRef.current = part.description;
  //     console.log(!partData)
  //   }

  const goHome = () => { window.location = '/#/userHome'; };
  return (
    <>
      {/* { (partConfirmation === false )
      ?   */}
      <form onSubmit={addedPart} className="listForm rounded mx-auto col-12" method="POST">
        <p className="text-center text-light mb-2 ">Post your new or used parts here!</p>
        <div className="form-group">
          <input
            id="partInput"
            className="addPartsInput col-8"
            type="text"
            name="part"
            placeholder="Enter part"
            required
            ref={partRef}
          />
          <input
            className="addPartsInput col-8 mt-1"
            type="number"
            name="price"
            placeholder="Enter price"
            required
            ref={priceRef}
          />
        </div>

        <div className="form-group">
          <input
            className="addPartsInput col-8"
            type="text"
            name="vehicle"
            placeholder="Enter vehicle"
            required
            ref={vehicleRef}
          />
          <input
            className="addPartsInput col-8 mt-1"
            type="text"
            name="description"
            placeholder="Enter description"
            required
            ref={descriptionRef}
          />
        </div>

        <div className="form-group">
          <DropDownMenu
            partsArr={partsArr}
            setDropDownValue={setDropDownValue}
          />
        </div>

        <div className="text-center ml-4 mt-2">
          <button className="partsButtons" type="submit">Submit</button>
          <button
            id="cancelButton"
            className="partsButtons"
            type="button"
            onClick={() => goHome()}
          >
            Cancel
          </button>
        </div>
      </form>
      {/* <form onSubmit={addPart} className="listForm rounded mx-auto col-12" method="POST">
        <p className="text-center text-light mb-2 ">Post your new or used parts here!</p>
        <div className="form-group">
          <label className="labelColor" htmlFor="part">
            Part Name:
            <input id="partInput" className="addPartsInput col-8" type="text" name="part" placeholder="Enter part" required ref={partRef} />
          </label>

          <label className="labelColor" id="priceLabel" htmlFor="price">
            Price:
            <input className="addPartsInput col-8 mt-1" type="number" name="price" placeholder="Enter price" required ref={priceRef} />
          </label>
        </div>

        <div className="form-group">
          <label className="labelColor " htmlFor="vehicle">
            Fits Vehicle:
            <input className="addPartsInput col-8" type="text" name="vehicle" placeholder="Enter vehicle" required ref={vehicleRef} />
          </label>

          <label className="labelColor " id="descriptionLabel" htmlFor="description">
            Description:
            <input className="addPartsInput col-8 mt-1" type="text" name="description" placeholder="Enter description" required ref={descriptionRef} />
          </label>
        </div>

        <div className="form-group">
           <label className="labelColor" id="categoryLabel">
          Category:
          <DropDownMenu
            partsArr={partsArr}
            setDropDownValue={setDropDownValue}
          />
           </label>
        </div>

        <div className="text-center ml-4 mt-2">
          <button
            className="partsButtons"
            type="submit"
          >
            Submit
          </button>
          <button
            id="cancelButton"
            className="partsButtons"
            type="button"
            onClick={() => goHome()}
          >
            Cancel
          </button>
        </div>

      </form> */}
      {/* : <PartConfirmation userData={userData}
                           partsData={partsData}
                           setpartConfirmation={setpartConfirmation}
                           addPart={addPart}
                           modifyForm={modifyForm}/>} */}
    </>
  );
};

export default PartsForm;
