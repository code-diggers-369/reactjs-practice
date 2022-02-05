import React from "react";

export default function CounterApp({
  counterText,
  incrementCounter,
  decrementCounter,
}) {
  const childFunction = () => {
    alert("Code Diggers");
  };

  return (
    <div className="d-flex justify-content-around vw-100">
      <button
        className="btn btn-success"
        onClick={() => incrementCounter(childFunction)}
      >
        +
      </button>
      <span className="h1">{counterText}</span>
      <button className="btn btn-danger" onClick={() => decrementCounter(200)}>
        -
      </button>
    </div>
  );
}
