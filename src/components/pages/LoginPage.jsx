import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../redux/actions";

const LogInPage = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.user.authError);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
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
                e.preventDefault();
                dispatch(signInUser(userData));
                navigate("/");
              }}
            >
              <Form.Control
                placeholder="email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              ></Form.Control>
              <Form.Control
                placeholder="password"
                type="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              ></Form.Control>
              <Button type="submit">Log In</Button>
            </Form>
            {authError && <p>{authError}</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LogInPage;
