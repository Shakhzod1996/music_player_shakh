import React from "react";

export default function LibrarySong({
  currentSong,
  setStatus,
  SetCurrentSong,
  songs,
  audioRef,
  isPLaying,
  setIsPlaying,
  setSongs

}) {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((item) => {
      return item.id === currentSong.id;
    });
    setStatus(false);
    SetCurrentSong(selectedSong[0]);
    audioRef.current.play();
    if (isPLaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play() 
        })
      }
    } 

    let newSongs = songs.map(song => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
        active: false

        }
      }
    });

    setSongs(newSongs)
  };

  return (
    <div className={`library-song ${currentSong.active ? "selected": ''}`} onClick={songSelectHandler}>
      <img src={currentSong.cover} alt={currentSong.name} />
      <div className="right-song">
        <h4>{currentSong.name}</h4>
        <h5>{currentSong.artist}</h5>
      </div>
    </div>
  );
}
