import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center">
          <h2 className="text-center text-white mb-3">
            Login to start Shopping!
          </h2>
          <Col sm={8}>
            <Form
              onSubmit={(e) => {
                navigate("/");
                e.preventDefault();
                if (inputValue.trim() !== "") {
                  dispatch(setUsername(inputValue));
                } else {
                  console.log("Please enter a valid username!");
                }
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
