import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import { Container, Row, Col } from "react-bootstrap";
import "../src/assets/style.css";
import TrackElement from "./components/TrackElement";
import AsideComponent from "./components/AsideComponent";

function App() {
  return (
    <div className="App bg-black vh-100">
      <NavbarComponent></NavbarComponent>

      <Container>
        <Row className="">
          <Col md={8} className="d-flex flex-column align-items-center">
            <h2 className="text-light text-center">You might Like</h2>
            {/* <CarouselComponent></CarouselComponent> */}
            <TrackElement></TrackElement>
            <TrackElement></TrackElement>
            <TrackElement></TrackElement>
            <TrackElement></TrackElement>
            <TrackElement></TrackElement>
          </Col>
          <Col md={4}>
            {/* className="border-start border-light" */}
            <h2 className="text-light text-center">Suggestions</h2>
            <AsideComponent></AsideComponent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
