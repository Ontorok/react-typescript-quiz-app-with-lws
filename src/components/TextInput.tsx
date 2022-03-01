import React from "react";
import classes from "../styles/TextInput.module.css";
type inputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "button"
  | "datetime-local"
  | "email"
  | "file"
  | "button"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "button"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type Props = {
  type: inputTypes;
  placeholder: string;
  icon: string;
};

const TextInput = (props: Props) => {
  const { type, placeholder, icon } = props;
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
