import { Col, Container, Row } from "react-bootstrap";

import CarouselComponent from "./CarouselComponent";

const Home = () => {
  return (
    <Container>
      <Row className="d-flex flex-column align-items-center">
        <Col sm={12} md={8} className="">
          <CarouselComponent></CarouselComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
