import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchBar from "./components/search_bar/search_bar";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  /** 주의
   * 여기서 Youtube 클래스를 만드는 경우가 있다.
   * const youtube = new Youtube() <- 여기에는 두가지 문제가 있는데
   * 1. App이라는 함수를 호출 할 때마다 새로운 youtube라는 오브젝트를 만든다는 점
   * 2. 나중에 mock class를 제공하기 어렵다. (유닛테스트에도 네트워크 통신을 할 것이다. )
   */

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) // 가독성 GOOOD ^^b
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
