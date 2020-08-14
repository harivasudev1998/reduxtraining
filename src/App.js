import React from 'react';
import FirstName from './container/firstname';
import Lastname from './container/lastname';
import Score from './container/score'
import Display from './container/display';
import './App.css';

function App() {
  return (
    <div >
      <FirstName />
      <br></br>
      <Lastname />
      <br></br>
      <Score/>
      <br></br>
      <Display/>
    </div>
  );
}

export default App;
