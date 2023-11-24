import { Col, Container, Row } from "react-bootstrap";
import AsideComponent from "../AsideComponent";
import CarouselComponent from "../CarouselComponent";

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="d-flex">
        <Col sm={12} md={8} className="mb-3">
          <CarouselComponent></CarouselComponent>
        </Col>
        <Col md={4} className="text-light text-center">
          <h2>People you follow</h2>
          <AsideComponent></AsideComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
