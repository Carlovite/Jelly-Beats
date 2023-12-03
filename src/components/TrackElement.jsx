import { IoMdPause } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteElement } from "../redux/actions";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function TrackElement() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  const tracks = useSelector((state) => state.beats.stock);
  const [isPlaying, setIsPlaying] = useState(tracks.map(() => true));
  const audioPlayers = useRef(tracks.map(() => React.createRef()));
  // const audioPlayer = useRef(null);
  // const progressBar = useRef();
  // const animationRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userEmail);

  const togglePlayPause = (i) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[i] = !newIsPlaying[i];
    setIsPlaying(newIsPlaying);

    if (!newIsPlaying[i]) {
      audioPlayers.current[i].current.play();
      // console.log(newIsPlaying[i]);
    } else {
      audioPlayers.current[i].current.pause();
      // console.log(newIsPlaying[i]);
    }
  };

  return (
    <>
      {tracks.map((r, i) => {
        return (
          <div
            className=" w-100 text-white d-flex justify-content-around my-5 "
            key={r.id}
          >
            <audio
              ref={audioPlayers.current[i]}
              src={r.audioMp3}
              preload="metadata"
            ></audio>
            <img
              src={r.url ? r.url : "https://placedog.net/500"}
              alt="Track pic"
              width={90}
              height={90}
              className="ms-2 "
              onClick={() => navigate(`/details-page/${r.id}`)}
            />
            <div className="flex-grow-1 mx-3">
              <div className="d-flex justify-content-between align-items-center">
                <h3
                  className="text-start mb-0 mx-2 TwClickable"
                  onClick={() => navigate(`/details-page/${r.id}`)}
                >
                  {r.title}
                </h3>
                <p
                  className="m-0 mx-2 TwClickable"
                  onClick={() => navigate("/artist-page")}
                >
                  {r.artist}
                </p>
              </div>
              <div className="d-flex w-100 align-items-center ">
                <hr className="w-100 progress mb-1"></hr>
              </div>
              <Container className="mt-2">
                <Row className="">
                  <Col sm={6} className="d-flex ps-2">
                    <div
                      className="d-flex justify-content-center align-items-center TwClickable me-3"
                      onClick={() => togglePlayPause(i)}
                    >
                      {isPlaying[i] ? <IoMdPlayCircle /> : <IoMdPause />}
                    </div>

                    <div
                      className="d-flex justify-content-center align-items-center TwClickable me-3"
                      onClick={() => {
                        dispatch(deleteElement(r.id));
                      }}
                    >
                      <FaHeart></FaHeart>
                    </div>
                    {userInfo ? (
                      <div
                        className="d-flex justify-content-center align-items-center TwClickable me-3"
                        onClick={() => {
                          dispatch(addToCart(r));
                        }}
                      >
                        <IoMdAddCircle></IoMdAddCircle>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center lessImportant me-3">
                        <IoMdAddCircle></IoMdAddCircle>
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TrackElement;
