import React, { useRef } from "react";
import classes from "../styles/ProgessBar.module.css";

type Props = {
  next: Function;
  prev: Function;
  submit: Function;
  progress: number;
};

function ProgessBar({ next, prev, submit, progress }: Props) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  function toggleTooptip() {}
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={() => prev()}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress}% Complete!
        </div>

        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooptip}
            onMouseOut={toggleTooptip}
          ></div>
        </div>
      </div>

      <div
        className={classes.nextButton}
        onClick={() => {
          progress === 100 ? submit() : next();
        }}
      >
        {progress === 100 ? (
          <span className="material-icons-outlined">save</span>
        ) : (
          <span className="material-icons-outlined">arrow_forward</span>
        )}
      </div>
    </div>
  );
}

export default ProgessBar;
