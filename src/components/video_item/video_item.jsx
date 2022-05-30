import React, { useRef } from "react";
import styles from "./vieo_item.module.css";

const VideoItem = ({
  video,
  video: { snippet },
  onVideoClick,
  display,
  background,
}) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  const mode = background === "white" ? styles.dark : styles.light;
  return (
    <li
      className={`${styles.container} ${displayType} ${mode}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={`${styles.video} ${mode}`}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default React.memo(VideoItem);
