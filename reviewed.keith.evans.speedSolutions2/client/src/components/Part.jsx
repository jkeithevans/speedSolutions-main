import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PartsForm.css';

const Part = ({ partInquiry }) => {
  const navigate = useNavigate();
  const goToEmailPage = () => {
    navigate('/userHome/emailSeller');
  };

  return (
    <div className="partsPage text-light">
      <h1>{partInquiry.part}</h1>
      <h3>
        $
        {partInquiry.price}
      </h3>
      <h3>
        For:&nbsp;
        {partInquiry.vehicle}
      </h3>
      <h3>
        Date Posted:&nbsp;
        {partInquiry.datePosted}
      </h3>
      <h5>
        Send an email to:&nbsp;
        <span role="presentation" id={partInquiry.userId} onClick={() => goToEmailPage()}>{partInquiry.userName}</span>
      </h5>

      <ul>
        <li> Part Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus sint veniam, laborum sapiente asperiores eveniet sed nihil quasi id minus magnam dolores quod. Dolore sint asperiores quam nulla sequi..</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quisquam placeat dignissimos veniam excepturi sint voluptatem quam! Repellat error quia qui tempora, repellendus doloremque iure sequi itaque explicabo ea laborum..</li>
        <li>Allows the creation and deletion of a list.</li>
        <li>Is composed of several components.</li>
      </ul>
    </div>
  );
};

export default Part;
