import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdAddCircle, IoMdPause, IoMdPlayCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, deleteElement } from "../../redux/actions";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

import Profile from "./ProfilePage";

function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const IsUserLoggedIn = useSelector((state) => state.user.userEmail);
  const tracks = useSelector((state) => state.beats.stock);
  const [filtered, setFiltered] = useState([]);

  const [isPlaying, setIsPlaying] = useState(tracks.map(() => true));
  const audioPlayers = useRef(tracks.map(() => React.createRef()));

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

  useEffect(() => {
    let filteredBeat = tracks.filter((beat) => beat.uid === params.uid);
    setFiltered(filteredBeat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(params);
  return (
    <>
      {params.uid === IsUserLoggedIn ? (
        <Profile></Profile>
      ) : (
        <Container className="my-5">
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <h1> {params.uid.split("@")[0]}'s tracks</h1>
              {filtered.map((r, i) => {
                return (
                  <motion.div
                    className=" w-100 text-white d-flex justify-content-around rounded my-5 cardTrack"
                    key={r.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
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
                      className="ms-2 ombra "
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
                        <h5 className="m-0 mx-2">{r.artist}</h5>
                      </div>
                      <div className="d-flex w-100 align-items-center ">
                        <hr className="w-100 progress mb-1"></hr>
                      </div>
                      <Container className="mt-2 d-flex">
                        <Row className="flex-grow-1">
                          <Col
                            sm={6}
                            className="d-flex ps-2 justify-content-between"
                          >
                            <div className="d-flex">
                              <div
                                className="d-flex justify-content-center align-items-center TwClickable me-3"
                                onClick={() => togglePlayPause(i)}
                              >
                                {isPlaying[i] ? (
                                  <IoMdPlayCircle />
                                ) : (
                                  <IoMdPause />
                                )}
                              </div>

                              <div
                                className="d-flex justify-content-center align-items-center TwClickable me-3"
                                onClick={() => {
                                  dispatch(deleteElement(r.id));
                                }}
                              >
                                <FaHeart></FaHeart>
                              </div>
                              {IsUserLoggedIn ? (
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
                            </div>
                            <div>
                              <p className="mb-0">{r.price} $</p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </motion.div>
                );
              })}
            </Col>
            <Col md={8}></Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Details;
