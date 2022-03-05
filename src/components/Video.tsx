import React from "react";
import thumbnail from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";

type Props = {
  title: string;
  id: string;
  noq: number;
};

function Video({ title, id, noq }: Props): JSX.Element {
  return (
    <div className={classes.video}>
      <img src={thumbnail} alt="Thumbnail" />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Points : {noq * 5}</p>
      </div>
    </div>
  );
}

export default Video;
