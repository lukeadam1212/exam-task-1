import React from "react";
import "./Button.css";

const Button = ({ buttonClass, text }) => {
  return <button className={buttonClass}>{text}</button>;
};

export default Button;
