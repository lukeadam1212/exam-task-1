import React, { useState, useContext } from "react";
import { ClicksContext } from "./Task6";

function CompB() {
  // Hooks
  // -- state
  // ---- global
  const clicksContext = useContext(ClicksContext);
  const { s, dispatch } = clicksContext;
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

export default CompB;
