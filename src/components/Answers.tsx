import React from "react";
import { IOption } from "../models/option";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

type Props = {
  options: Array<IOption>;
  onChangeAnswer: Function;
  useAnalysis: boolean;
};

function Answers({ options, onChangeAnswer, useAnalysis }: Props) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index + 1}
          className={classes.answer}
          text={option.title}
        />
      ))}
    </div>
  );
}

export default Answers;
