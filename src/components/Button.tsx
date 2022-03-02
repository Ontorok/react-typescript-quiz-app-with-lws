import React from "react";
import classes from "../styles/Button.module.css";

type ButtonTypes = "button" | "submit" | "submit";

type Props = {
  children: string;
  type: ButtonTypes;
};

const Button = ({ children, type }: Props) => {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
