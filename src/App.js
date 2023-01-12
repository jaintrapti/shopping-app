import './App.css';
import React from 'react';
import HomeCon from "./container/HomeCon";
import "./index.css";
import HeaderCon from './container/HeaderCon';


function App() {
  return (
    <>
      <div className='container'>
      <HeaderCon />
         <HomeCon />
      </div>
    </>
  )
}

export default App;
