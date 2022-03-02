import React from "react";
import classes from "../styles/Form.module.css";

type autoComplete = "off" | "on";

interface IProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  autoComplete: autoComplete;
  style: object;
}

const Form = (props: IProps) => {
  const { children, className, ...rest } = props;
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
