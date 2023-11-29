import { Col, Container, Row } from "react-bootstrap";
import UploadImgComp from "../UploadImgComp";

const UploadPageFinal = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <UploadImgComp></UploadImgComp>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UploadPageFinal;
