import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle, IoMdPause, IoMdPlayCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { addToCart } from "../redux/actions";
import { Spinner } from "react-bootstrap";

function TrackDetailsComponent() {
  const params = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userEmail);
  const tracks = useSelector((state) => state.beats.stock);

  const keys = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const scales = ["min", "Maj"];
  const [filtered, setFiltered] = useState([]);
  const audioPlayer = useRef(null);

  const randomKeys = keys[Math.floor(Math.random() * keys.length)];
  const randomScales = scales[Math.floor(Math.random() * 2)];
  const randomViews = Math.floor(Math.random() * 1000);

  const togglePlayPause = () => {
    const newIsPlaying = isPlaying;

    setIsPlaying(!newIsPlaying);

    if (newIsPlaying) {
      audioPlayer.current.play();
      // console.log(newIsPlaying[i]);
    } else {
      audioPlayer.current.pause();
      // console.log(newIsPlaying[i]);
    }
  };

  useEffect(() => {
    let filteredBeat = tracks.filter((beat) => beat.id === params.id);
    setFiltered(filteredBeat[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex flex-column cardTrack text-light rounded mx-3 p-4 ombra align-items-center">
        <audio
          ref={audioPlayer}
          src={filtered.audioMp3}
          preload="metadata"
        ></audio>
        <div className="d-flex justify-content-center mb-3">
          {filtered.url ? (
            <img
              src={filtered.url}
              alt="profile"
              width={200}
              height={200}
            ></img>
          ) : (
            <Spinner animation="grow"></Spinner>
          )}
        </div>
        <div className="w-25">
          <h3 className=" text-center">{filtered.title}</h3>
          <p className=" text-center TwClickable">{filtered.artist}</p>
        </div>
        <div className="d-flex align-items-center justify-content-evenly w-100  px-3 mb-2">
          <div className="d-flex align-items-center ">
            <span className="mb-0">Play</span>
            <div
              className="d-flex justify-content-center align-items-center TwClickable me-3 p-1 mb-1"
              onClick={() => togglePlayPause()}
            >
              {isPlaying ? <IoMdPlayCircle /> : <IoMdPause />}
            </div>
          </div>
          <div className="d-flex align-items-center TwClickable me-2">
            <span className="">Like</span>
            <div className="p-1 ">
              <FaHeart className="mx-2"></FaHeart>
            </div>
          </div>
          <div className="d-flex align-items-center">
            {userInfo ? (
              <div
                className=" TwClickable"
                onClick={() => {
                  dispatch(addToCart(filtered));
                }}
              >
                <span>Add to cart</span>
                <IoMdAddCircle className="mx-2"></IoMdAddCircle>
              </div>
            ) : (
              <div className=" lessImportant">
                <span>Add to cart</span>
                <IoMdAddCircle className="mx-2"></IoMdAddCircle>
              </div>
            )}
          </div>
        </div>
        <hr className="progress"></hr>
        <div className="d-flex justify-content-around w-100">
          <div>
            <div className="d-flex mx-3 align-items-center w-100 justify-content-between">
              <span className=" Fs8 mb-2">Published:</span>
              <span className="lessImportant Fs8 mb-2">{filtered.date} </span>
            </div>
            <div className="d-flex mx-3 align-items-center w-100  justify-content-between">
              <span className=" Fs8 mb-2">BPM:</span>
              <span className="lessImportant Fs8 mb-2"> {filtered.bpm} </span>
            </div>
          </div>
          <div>
            <div className="d-flex mx-3 align-items-center w-100  justify-content-between">
              <span className=" Fs8 mb-2">Key:</span>
              <span className="lessImportant Fs8 mb-2">
                {" "}
                {randomKeys + "-" + randomScales}
              </span>
            </div>
            <div className="d-flex mx-3 align-items-center w-100  justify-content-between">
              <span className=" Fs8 mb-2">Streams:</span>
              <span className="lessImportant Fs8 mb-2"> {randomViews} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrackDetailsComponent;
