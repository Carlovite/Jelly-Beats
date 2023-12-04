import { Col, Container, Row } from "react-bootstrap";
import AsideComponent from "../AsideComponent";

import TrackElement from "../TrackElement";
import { useSelector } from "react-redux";

const Home = () => {
  const userInfo = useSelector((state) => state.user.userEmail);
  return (
    <Container className="">
      <h1 className="text-center mb-3">
        Welcome back, {userInfo.split("@")[0]}{" "}
      </h1>
      <Row className="d-flex my-5">
        <Col sm={12} md={8} className="mb-3">
          <h2 className="text-center">Tracks you might like</h2>
          <TrackElement></TrackElement>
        </Col>
        <Col md={4} className="text-light ">
          <h2 className="text-center">People you follow</h2>
          <AsideComponent></AsideComponent>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
