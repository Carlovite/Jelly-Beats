import { Col, Container, Form, Row } from "react-bootstrap";

const LogInPage = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center">
          <Col sm={8}>
            <Form>
              <Form.Control placeholder="user"></Form.Control>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LogInPage;
