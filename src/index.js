import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
/** index.js가 호출되는 딱 한번만 만들어 질 것이다. */
/** 나중에 유닛테스트시에는 정해진 데이터를 리턴하는 class를 youtube={FakeClass} 이렇게 넣으면 되는듯 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
