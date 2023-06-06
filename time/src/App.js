import './App.css';
import './index.css'
import React, { useState } from 'react';

const App =() => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setctime] = useState(time);

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setctime(time);
  };

  setInterval(UpdateTime,1000) 
  return(
    <>
      <h1> {ctime} </h1>
      {/* <button onClick={UpdateTime}> Get Time </button> */}
    </>

  );

  }

  export default App;
  