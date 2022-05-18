import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

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
  return <VideoList videos={videos} />;
}

export default App;
