import { Col, Container, Row } from "react-bootstrap";
import TrackElement from "./TrackElement";
import AsideComponent from "./AsideComponent";

const Home = () => {
  return (
    <Container>
      <Row className="">
        <Col sm={12} md={8} className="d-flex flex-column align-items-center">
          <h2 className="text-light text-center decoration">
            Tracks you might Like
          </h2>
          <TrackElement></TrackElement>
        </Col>
        <Col md={4}>
          {/* className="border-start border-light" */}
          <h2 className="text-light text-center">Suggestions</h2>
          <p className="text-light text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            corporis praesentium molestias quidem fuga voluptates non tempore
            aperiam, dicta illum suscipit, facere expedita, eaque natus esse
            sint? Rem, quo eos.
          </p>
          <h2 className="text-light text-center">Your following</h2>
          <AsideComponent></AsideComponent>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
