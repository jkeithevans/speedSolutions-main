import React, { useState } from 'react';
import Comment from '../../components/Comment/Comment';

const LandingPage = () => {
  const [name, setName] = useState('Mike');
  const changeName = () => setName('Rob');

  // return (
  //   // <>
  //   //   <h1>Welcome to React!</h1>
  //   //   <h3>
  //   //     My name held in state
  //   //     {name}
  //   //   </h3>
  //   //   <button type="button" onClick={changeName}>Click to change my name in State</button>
  //   //   <Comment owner="Mike" time={new Date.toLocaleString()} text="Mikes Comment" />
  //   //   <Comment owner="Rob" time={new Date.toLocaleString()} text="Robs Comment" />
  //   // </>
  // );
};

export default LandingPage;
