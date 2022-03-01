import React from "react";
import classes from "../styles/Illustration.module.css";

type Props = {
  imgSource: string;
};

const Illustration = (props: Props) => {
  const { imgSource } = props;
  return (
    <div className={classes.illustration}>
      <img src={imgSource} alt="SignUp" />
    </div>
  );
};

export default Illustration;
