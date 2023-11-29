import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TrackDetailsComponent() {
  const params = useParams();

  const tracks = useSelector((state) => state.beats.stock);

  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    let filteredBeat = tracks.filter((beat) => beat.id === params.id);
    setFiltered(filteredBeat[0]);
  }, []);

  return (
    <>
      <div className="d-flex flex-column bg-dark text-light rounded mx-3 p-4 ombra ">
        <div className="d-flex justify-content-center mb-3">
          <img
            src="https://placedog.net/500"
            alt="profile"
            width={200}
            height={200}
          ></img>
        </div>
        <h3 className="text-center TwClickable">{filtered.title}</h3>
        <p className="Fs8 text-center TwClickable">{filtered.artist}</p>
        <div className="d-flex align-items-center justify-content-between w-100  px-3 mb-2">
          <div className="d-flex align-items-center">
            <span>Like</span>
            <Button variant="dark" className="p-1 btn btn-outline-dark">
              <FaHeart className="mx-2 TwClickable"></FaHeart>
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <Button variant="btn btn-outline-dark TwClickable">
              <span>Add to cart</span>
              <IoMdAddCircle className="mx-2"></IoMdAddCircle>
            </Button>
          </div>
        </div>
        <hr></hr>
        <p className="text-center Fs8 mb-3 mx-3">INFORMATION</p>
        <div className="d-flex mx-3 align-items-center justify-content-between">
          <span className=" Fs8 mb-2">Published:</span>
          <span className="lessImportant Fs8 mb-2"> ciao </span>
        </div>
        <div className="d-flex mx-3 align-items-center justify-content-between">
          <span className=" Fs8 mb-2">BPM:</span>
          <span className="lessImportant Fs8 mb-2"> {filtered.bpm} </span>
        </div>
        <div className="d-flex mx-3 align-items-center justify-content-between">
          <span className=" Fs8 mb-2">Key:</span>
          <span className="lessImportant Fs8 mb-2"> ciao </span>
        </div>
        <div className="d-flex mx-3 align-items-center justify-content-between">
          <span className=" Fs8 mb-2">Streams:</span>
          <span className="lessImportant Fs8 mb-2"> ciao </span>
        </div>
      </div>
    </>
  );
}
export default TrackDetailsComponent;
