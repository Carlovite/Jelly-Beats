import { Col, Container, Row } from "react-bootstrap";
import TrackDetailsComponent from "../TrackDetailsComponent";

function Details() {
  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center ">
          <Col md={6}>
            <TrackDetailsComponent></TrackDetailsComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
