// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      {/* {app Container} */}
      {/* {videos} */}
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
        {/* <Video
          url="https://res.cloudinary.com/dcno2e4ns/video/upload/v1630327435/alpaka_jr7yl8.mp4"
          channel="Alpaka Action"
          description="Alpakas are awesome Animals =)"
          song="OH DEARRRR LORDDDD!!!!"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://res.cloudinary.com/dcno2e4ns/video/upload/v1630327434/koala_njiv6w.mp4"
          channel="Koala Home"
          description="BIG and CUDDLY"
          song="Cutenesssssssss OVERLOAAAAADD"
          likes={123}
          messages={456}
          shares={789}
        /> */}
      </div>
    </div>
  );
}

export default App;
