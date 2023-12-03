import { Col, Container, Row } from "react-bootstrap";
import AsideComponent from "../AsideComponent";

import TrackElement from "../TrackElement";

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="d-flex">
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
