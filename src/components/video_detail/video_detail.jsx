import React from "react";
import styles from "./video_datail.module.css";

const VideoDetail = ({ video }) => {
  return <h1>{video.snippet.title}</h1>;
};

export default VideoDetail;
