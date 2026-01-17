import React, { useState } from 'react';
import Factorial from './components/Factorial';
import Fibonacci from './components/Fibonacci';
import PrimeChecker from './components/PrimeChecker';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState(0);

  return (
    <div className="container">
      <h1>Math Utility App</h1>
      <div className="input-group">
        <label>Enter an Integer:</label>
        <input 
          type="number" 
          value={inputVal} 
          onChange={(e) => setInputVal(parseInt(e.target.value) || 0)} 
        />
      </div>

      <div className="grid">
        <Factorial n={inputVal} />
        <Fibonacci n={inputVal} />
        <PrimeChecker n={inputVal} />
      </div>
    </div>
  );
}

export default App;