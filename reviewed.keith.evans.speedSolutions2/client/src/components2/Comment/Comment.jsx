import React from 'react';

const Comment = ({ owner, time, text }) => (
  <div className="comment">
    <a href="/" className="author">{owner}</a>
    <div className="metaData">{time}</div>
    <div className="text">{text}</div>
  </div>
);

export default Comment;
