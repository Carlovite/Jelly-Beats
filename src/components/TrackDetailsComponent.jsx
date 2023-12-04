import { format } from "date-fns";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle, IoMdPause, IoMdPlayCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { addToCart } from "../redux/actions";

function TrackDetailsComponent() {
  const params = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userEmail);
  const tracks = useSelector((state) => state.beats.stock);
  const data = format(
    new Date(
      2023,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 31)
    ),
    "MM/dd/yyyy"
  );
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
  }, []);

  return (
    <>
      <div className="d-flex flex-column bg-dark text-light rounded mx-3 p-4 ombra align-items-center">
        <audio
          ref={audioPlayer}
          src={filtered.audioMp3}
          preload="metadata"
        ></audio>
        <div className="d-flex justify-content-center mb-3">
          <img
            src={filtered.url ? filtered.url : "https://placedog.net/500"}
            alt="profile"
            width={200}
            height={200}
          ></img>
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
                className="btn btn-outline-dark TwClickable"
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
          {/* <p className="text-center Fs8 mb-3 mx-3">INFORMATION</p> */}
          <div>
            <div className="d-flex mx-3 align-items-center w-100 justify-content-between">
              <span className=" Fs8 mb-2">Published:</span>
              <span className="lessImportant Fs8 mb-2">{data} </span>
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
