import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchBar from "./components/search_bar/search_bar";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBPFfo6CusHteOMipoJgHKK0VYbicES7qE`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBPFfo6CusHteOMipoJgHKK0VYbicES7qE",
      requestOptions
    )
      .then((response) => response.json()) // 원래는 text인데 작업하기엔 json이 편함.
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
