import React, { useEffect, useRef, useState } from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({
  currentSong,
  isPLaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  timeUdateHandler,
  songs,
  SetCurrentSong,
  setSongs,
}) {
  useEffect(() => {
    let newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    if (isPLaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  }, [currentSong]);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  const getTime = (time) => {
    if (time) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    } else {
      return "0:00";
    }
  };

  const playSongHandler = () => {
    if (isPLaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPLaying);
  };

  const skipTrackHandler = (track) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (track === "skip-forward") {
      SetCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }

    if (track === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        SetCurrentSong(songs[songs.length - 1]);
        return;
      }
      SetCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animatePercentage}%)`
  }

  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    SetCurrentSong(songs[(currentIndex + 1) % songs.length]);
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.current)}</p>

        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.current}
            type="range"
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>

        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <div className="skip-b-div">
          <FontAwesomeIcon
            className="skip-back"
            onClick={() => skipTrackHandler("skip-back")}
            icon={faAngleLeft}
            size="2x"
          />
        </div>
        <div className="play-div" onClick={playSongHandler}>
          <FontAwesomeIcon
            className="play"
            icon={isPLaying ? faPause : faPlay}
            size="2x"
          />
        </div>

        <div className="skip-f-div">
          <FontAwesomeIcon
            className="skip-forward"
            onClick={() => skipTrackHandler("skip-forward")}
            icon={faAngleRight}
            size="2x"
          />
        </div>

        <audio
          onTimeUpdate={timeUdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeUdateHandler}
          onEnded={songEndHandler}
        ></audio>
      </div>
    </div>
  );
}
