import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './PartsForm.css';

const Email = ({ userData }) => {
  // console.log('in emails', userData.emailRefId[0]);
  const navigate = useNavigate();
  const viewedEmail = async (target) => {
    // console.log('in viewedEmails', target);
    try {
      const email = await api.removeViewedEmail(target);
      console.log('in email component', email.data.user);
      // navigate('/readEmail');
      // this is where i need to build a read email page and send it there with useNavigate('/readEmail')
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* make the email view with a table   */}
      <div id="partsPage">
        {userData.emailRefId.sort((a, b) => a.dateSent < b.dateSent).map((x, key) => (
          <h4
            id={x._id}
            key={key}
            className="text-light mt-3 btnFix"
            role="presentation"
            onClick={(e) => viewedEmail(e.target.id)}
          >
            {x.questionSubject}
            ,
            &nbsp;
            Sent:&nbsp;
            {new Date(x.dateSent).toString().slice(0, 15)}
          </h4>
          // <h4 id={x.dateSent} key={key} className="text-light mt-3 btnFix" onClick={(e) => viewedEmail(e.target.id)}>
          //   {x.questionSubject}
          //   Sent:
          //   {new Date(x.dateSent).toString().slice(0, 15)}
          // </h4>
        ))}
      </div>
    </>
  );
};

export default Email;

//  return (a.dateSent < b.dateSent)
//     ? 1
//     : (a.dateSent > b.dateSent)
//       ? -1
//       : 0
