import { useRef, useState } from "react";
import "./App.css";
import Library from "./components/Library/Library";
import Player from "./components/Player/Player";
import Song from "./components/Song/Song";
import data from "./data";

function App() {
  const audioRef = useRef(null);
  const [status, setStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, SetCurrentSong] = useState(songs[0]);
  const [isPLaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animatePercentage: 0,
  });

  const timeUdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);

    const animate = Math.round((roundCurrent / roundDuration) * 100);

    setSongInfo({ ...songInfo, current, duration, animatePercentage: animate });
  };

  const toSongListHandler = () => {
    setStatus(true);
  };
  return (
    <div className="App">
      <div className={status ? "slider slider-move" : "slider"}>
        <div className="library-main">
          <Library
            audioRef={audioRef}
            songs={songs}
            SetCurrentSong={SetCurrentSong}
            setStatus={setStatus}
            isPLaying={isPLaying}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
          />
        </div>

        <div className="player-main">
          <i className="bx bxs-playlist" onClick={toSongListHandler}></i>
          <Song currentSong={currentSong} />
          <Player
            timeUdateHandler={timeUdateHandler}
            audioRef={audioRef}
            isPLaying={isPLaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setSongInfo={setSongInfo}
            songInfo={songInfo}
            songs={songs}
            SetCurrentSong={SetCurrentSong}
            setSongs={setSongs}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
