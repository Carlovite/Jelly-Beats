import { Col, Container, Row } from "react-bootstrap";
import TrackDetailsComponent from "../TrackDetailsComponent";

function Details() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <TrackDetailsComponent></TrackDetailsComponent>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
