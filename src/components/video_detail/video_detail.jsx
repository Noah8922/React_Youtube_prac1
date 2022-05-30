import React from "react";
import styles from "./video_datail.module.css";

const VideoDetail = ({ video, video: { snippet }, background }) => {
  const mode = background === "white" ? styles.dark : styles.light;
  return (
    <section className={`${styles.detail} ${mode}`}>
      <iframe
        className={styles.video}
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
        title="video"
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
