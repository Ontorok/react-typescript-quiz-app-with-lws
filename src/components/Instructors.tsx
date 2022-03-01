import React from "react";
import { IInstructor } from "../models/instructor";
import classes from "../styles/Instructor.module.css";

const Instructors = (): JSX.Element => {
  const instructors: IInstructor[] = [
    {
      instructorId: "ins101",
      name: "Sumit Saha",
      img: "https://i.ibb.co/nstfMkZ/sumit-saha.jpg"
    },
    {
      instructorId: "ins102",
      name: "H M Nayeem",
      img: "https://i.ibb.co/wsLXKGb/hm-nayeem.jpg"
    },
    {
      instructorId: "ins103",
      name: "Anisul Islam",
      img: "https://i.ibb.co/YbDwysR/anisulhaque.jpg"
    },
    {
      instructorId: "ins104",
      name: "Saidur Rahman Shetu",
      img: "https://i.ibb.co/K24wzSw/shetu.webp"
    }
  ];
  return (
    <div className={classes.instructors}>
      {instructors.map((ins) => (
        <div className={classes.instructor} key={ins.instructorId}>
          <img src={ins.img} alt={ins.name} />
          <p>{ins.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
