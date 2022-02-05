import React, { useState } from "react";

// import component
import CounterApp from "./components/CounterApp";

export default function App() {
  const [counterText, setCounterText] = useState(0);

  // increment
  const incrementCounter = (tempChildFunction) => {
    tempChildFunction();

    setCounterText(counterText + 1);
  };
  // decrement
  const decrementCounter = () => {
    if (counterText > 0) {
      setCounterText(counterText - 1);
    }
  };

  return (
    <div className="cotainer vh-100 vw-100 d-flex justify-content-center align-items-center">
      <CounterApp
        counterText={counterText}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
    </div>
  );
}
