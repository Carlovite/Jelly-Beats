import next from "../assets/playerbuttons/next.png";
import prev from "../assets/playerbuttons/prev.png";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
                    src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
                    preload="metadata"
                  ></audio>

                  <Button
                    variant="outline-dark"
                    className="playerButtons"
                    onClick={backThirty}
                  >
                    <img width={15} height={15} src={prev} alt="prev" />
                  </Button>

                  <Button
                    variant="outline-dark"
                    className="playerButtons"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                    {/* <img width={15} height={15} src={play} alt="play" /> */}
                  </Button>

                  <Button
                    variant="outline-dark"
                    className="playerButtons"
                    onClick={forwardThirty}
                  >
                    <img width={15} height={15} src={next} alt="next" />
                  </Button>
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
