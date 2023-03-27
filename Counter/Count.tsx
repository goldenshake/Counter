import React, { useState } from "react";
import "./Count.css";
const Count = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container-fluid">
      <div className="text-center position-absolute top-50 start-50 translate-middle">
        <h4 className="display-4">{count}</h4>
        <button onClick={increment} className="btn btn-success m-1">
          +
        </button>
        <button onClick={decrement} className="btn btn-success m-1">
          -
        </button>
        <p className="display-6">Simple Counter</p>
      </div>
    </div>
  );
};

export default Count;
