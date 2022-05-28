import React from "react";
import "./Library.css";
import LibrarySong from "./LibrarySong/LibrarySong";

export default function Library({
  songs,
  setStatus,
  SetCurrentSong,
  audioRef,
  isPLaying,
  setIsPlaying,
  setSongs,
}) {
  const sliderBackHandler = () => {
    setStatus(false);
  };
  return (
    <div className="library">
      <div className="library-head">
        <h2>My Playlist</h2>
        <i className="bx bx-right-arrow-alt" onClick={sliderBackHandler}></i>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setStatus={setStatus}
            songs={songs}
            SetCurrentSong={SetCurrentSong}
            key={song.id}
            currentSong={song}
            audioRef={audioRef}
            isPLaying={isPLaying}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}
