import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './PartsForm.css';

const EmailSeller = ({ userData, partInquiry }) => {
  const navigate = useNavigate();
  const textRef = useRef();
  const subject = useRef();

  // CREATE AN EMAIL SCHEMA that way it creates id to push and pull from the newEmails array
  console.log('in Email the Seller', userData, partInquiry);
  const sendEmail = async (e) => {
    e.preventDefault();
    const payload = {
      new: true,
      recievedFrom: userData.userName,
      recievedFromId: userData._id,
      recievedFromEmail: userData.email,
      question: textRef.current.value,
      questionSubject: subject.current.value,
      dateSent: new Date(),
    };
    const newEmail = await api.attachEmail(payload, partInquiry.userId);
    console.log('newEmail', newEmail.data);
    navigate('/userHome/parts');
  };

  return (
    <>
      <h3 className="text-light">
        Email&nbsp;
        {partInquiry.userName}
      </h3>
      <form onSubmit={sendEmail}>
        <input type="text" ref={subject} placeholder="Enter Subject" />
        <textarea name="" id="" cols="30" rows="10" ref={textRef} />
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </>
  );
};

export default EmailSeller;
