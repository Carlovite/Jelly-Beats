import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/actions";

const LogInPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center">
          <Col sm={8}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(setUsername(inputValue));
              }}
            >
              <Form.Control
                placeholder="user"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></Form.Control>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LogInPage;
