import { Col, Container, Row } from "react-bootstrap";

import Jelly from "../../assets/drawing.png";
import TrackElement from "../TrackElement";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Home = () => {
  const userInfo = useSelector((state) => state.user.userEmail);
  return (
    <Container className="">
      {userInfo ? (
        <h1 className="text-center mt-5 mb-3 Titoli">
          Welcome back, {userInfo.split("@")[0]}...
        </h1>
      ) : (
        <h1 className="text-center mt-5 mb-3">
          Login to start uploading your tracks!{" "}
        </h1>
      )}
      <hr className="progress"></hr>
      <Row className="d-flex my-4">
        <Col sm={12} md={8} className="">
          <h2 className="text-center">Tracks you might like</h2>
          <TrackElement></TrackElement>
        </Col>
        <Col
          sm={12}
          md={4}
          className="text-light mb-3 d-flex justify-content-center align-items-center"
        >
          <motion.img
            alt="jelly-fish"
            src={Jelly}
            width={200}
            className="z-3 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
          ></motion.img>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
