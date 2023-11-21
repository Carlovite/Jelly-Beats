import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent";

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col md={8}>
            <CarouselComponent></CarouselComponent>
          </Col>
          <Col md={4}>
            <h2 className="text-center my-3 text-light">Tracks you liked</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
