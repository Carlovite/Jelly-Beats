import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/CarouselComponent";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <CarouselComponent></CarouselComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
