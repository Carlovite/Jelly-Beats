import next from "../assets/playerbuttons/next.png";
import prev from "../assets/playerbuttons/prev.png";

import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import { IoMdPause, IoMdPlayCircle } from "react-icons/io";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const beats = useSelector((state) => state.beats.stock);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  return (
    <>
      <div className="container-fluid  bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex justify-content-evenly">
                  <audio
                    ref={audioPlayer}
                    src={beats[0].audioMp3}
                    preload="metadata"
                  ></audio>

                  <div
                    variant="outline-dark"
                    className="playerButtons d-flex justify-content-center align-items-center TwClickable mx-3"
                    onClick={backThirty}
                  >
                    <img width={15} height={15} src={prev} alt="prev" />
                  </div>

                  <div
                    variant="outline-dark"
                    className="playerButtons d-flex justify-content-center align-items-center TwClickable mx-3"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <IoMdPause /> : <IoMdPlayCircle />}
                  </div>

                  <div
                    variant="outline-dark"
                    className="playerButtons d-flex justify-content-center align-items-center TwClickable mx-3"
                    onClick={forwardThirty}
                  >
                    <img width={15} height={15} src={next} alt="next" />
                  </div>
                </div>
                <div className=" mt-3">
                  <input
                    className="progress"
                    type="range"
                    defaultValue="0"
                    ref={progressBar}
                    onChange={changeRange}
                  />
                </div>
                <div className="d-flex">
                  <div className="mx-0">{calculateTime(currentTime)}</div>
                  <div>
                    {duration && !isNaN(duration) && calculateTime(duration)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
