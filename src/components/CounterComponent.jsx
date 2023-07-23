import React, { useState } from 'react';
import '../css/CounterComponent.css';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if(count > 0){
      setCount((prevCount) => prevCount - 1);
    }
    
  };

  return (
    <div className="counter-container">
      <p className="count">Count: {count}</p>
      <div className="button-container">
        <button className="button" onClick={handleIncrement}>Increment</button>
        <button className="button" onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterComponent;
