import { IoMdPause } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getBeatsRealTime } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";

function TrackElement() {
  const tracks = useSelector((state) => state.beats?.stock);

  const [isPlaying, setIsPlaying] = useState(tracks.map(() => true));

  const audioPlayers = tracks.map(() => React.createRef());

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userEmail);

  const togglePlayPause = (i) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[i] = !newIsPlaying[i];
    setIsPlaying(newIsPlaying);

    if (!newIsPlaying[i]) {
      audioPlayers[i].current.play();
      // console.log(newIsPlaying[i]);
    } else {
      audioPlayers[i].current.pause();
      // console.log(newIsPlaying[i]);
    }
  };

  useEffect(() => {
    dispatch(getBeatsRealTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {tracks.map((r, i) => {
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            // transition={{ duration: 0.8 }}
            className=" w-100 text-white d-flex justify-content-around my-5 cardTrack rounded"
            key={r.id}
          >
            <audio
              ref={audioPlayers[i]}
              src={r.audioMp3}
              preload="metadata"
            ></audio>

            {r.url ? (
              <img
                src={r.url}
                alt="Track pic"
                width={90}
                height={90}
                className="ms-2 ombra"
                onClick={() => navigate(`/details-page/${r.id}`)}
              />
            ) : (
              <Spinner animation="grow"></Spinner>
            )}

            <div className="flex-grow-1 mx-3">
              <div className="d-flex justify-content-between align-items-center">
                <h3
                  className="text-start mb-0 mx-2 TwClickable"
                  onClick={() => navigate(`/details-page/${r.id}`)}
                >
                  {r.title}
                </h3>
                <h5
                  className="m-0 mx-2 TwClickable"
                  onClick={() => navigate(`/artist-page/${r.uid}`)}
                >
                  {r.uid.split("@")[0]}
                </h5>
              </div>
              <div className="d-flex w-100 align-items-center ">
                <hr className="w-100 progress mb-1"></hr>
              </div>
              <Container className="mt-2 d-flex ">
                <Row className="flex-grow-1">
                  <Col sm={6} className="d-flex ps-2 justify-content-between">
                    <div className="d-flex">
                      <div
                        className="d-flex justify-content-center align-items-center TwClickable me-3"
                        onClick={() => togglePlayPause(i)}
                      >
                        {isPlaying[i] ? <IoMdPlayCircle /> : <IoMdPause />}
                      </div>

                      <div className="d-flex justify-content-center align-items-center TwClickable me-3">
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
                      <div>
                        <p className="mb-0">{r.price} $</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default TrackElement;
