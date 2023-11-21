import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent";

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="my-3 d-flex justify-content-center">
          <Col md={8}>
            <CarouselComponent></CarouselComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
