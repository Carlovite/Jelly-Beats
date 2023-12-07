import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { IoMdPause, IoMdPlayCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteElement } from "../../redux/actions";
import { MdModeEditOutline } from "react-icons/md";

const Profile = () => {
  // const userInfo = useSelector((state) => state.user.authError);
  const navigate = useNavigate();
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
    let filteredBeat = tracks.filter((beat) => beat.uid === IsUserLoggedIn);
    setFiltered(filteredBeat);
  }, []);

  return (
    <>
      <Container className="my-5">
        {IsUserLoggedIn ? (
          filtered[0] ? (
            <Row>
              <Col sm={8}>
                <h1 className="mt-5 text-center">
                  Your Tracks, {IsUserLoggedIn.split("@")[0]}{" "}
                </h1>
                {filtered.map((r, i) => {
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
                        className="ms-2 ombra"
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
                        <Container className="mt-2">
                          <Row className="w-100 d-flex ">
                            <Col
                              sm={12}
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
                              </div>
                              <div
                                className="d-flex justify-content-center align-items-center TwClickable "
                                onClick={() => {}}
                              >
                                <MdModeEditOutline></MdModeEditOutline>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          ) : (
            <h1 className="text-center">
              Upload a track!, {IsUserLoggedIn.split("@")[0]}!{" "}
            </h1>
          )
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-center text-white">You must Log in first!</h2>
            <Button className="px-3" onClick={() => navigate("/login")}>
              go
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};
export default Profile;
