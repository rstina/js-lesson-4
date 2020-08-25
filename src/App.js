import React from 'react';
import './App.css';
import { useState } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  let [headline, setHeadline] = useState("Hej")
  return (
    <div className="App">
      <Component1 setHeadline={setHeadline}/>
      <Component2 setHeadline={setHeadline}/>
    </div>
  );
}

export default App;
