import React from "react";
import { IVideo } from "../models/video";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
const videos: IVideo[] = [
  {
    youtubeID: "lb7wT1gVU7Y",
    title: "#01 JavaScript Bangla Tutorial | Introduction to JavaScript",
    noq: 4
  },
  {
    youtubeID: "WC-g0JtEIwM",
    title: "#01 JavaScript Bangla Tutorial | Introduction to JavaScript",
    noq: 4
  },
  {
    youtubeID: "CHnTTzD1pAQ",
    title: "#01 JavaScript Bangla Tutorial | Introduction to JavaScript",
    noq: 4
  },
  {
    youtubeID: "PHy8h0BixKA",
    title: "#01 JavaScript Bangla Tutorial | Introduction to JavaScript",
    noq: 4
  }
];

function Videos(): JSX.Element {
  return (
    <div className={classes.videos}>
      {videos.map(({ youtubeID, title, noq }) => (
        <Video key={youtubeID} title={title} id={youtubeID} noq={noq} />
      ))}
    </div>
  );
}

export default Videos;
