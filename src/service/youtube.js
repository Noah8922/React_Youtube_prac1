import axios from "axios"; // npm yarn을 사용하기 때문에 간단하게 import할 수 있는 것

class Youtube {
  constructor(key) {
    this.key = key;
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoID,
    }));
  }
}

export default Youtube;
