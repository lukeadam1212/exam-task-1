import React, { useState, useContext } from "react";
import { ClicksContext } from "../task-6/Task6";

function CompA1({ text }) {
  // Hooks
  // -- state
  // ---- global
  const clicksContext = useContext(ClicksContext);
  const { s, dispatch } = clicksContext;
  const [message, setMessage] = useState("");
  // ---- local

  // Custom functions
  const incrementHandler = () => {
    // changing global state
    s.clicks < 100
      ? dispatch({ type: "INCREMENT" })
      : dispatch({ type: "ValueTooHigh" });
  };
  const decrementHandler = () => {
    // changing global state
    s.clicks > -100
      ? dispatch({ type: "DECREMENT" })
      : dispatch({ type: "ValueTooLow" });
  };

  return (
    <div>
      <h2>CompB</h2>
      <button onClick={incrementHandler}>Increase </button>
      <button onClick={decrementHandler}>Decrease </button>
    </div>
  );
}

export default CompA1;
