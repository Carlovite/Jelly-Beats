import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../redux/actions";
import { motion } from "framer-motion";
const LoginComponent = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.user.authError);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <Container className="my-5 pe-5">
        <Row className="d-flex justify-content-center">
          <h2 className="text-center text-white mb-3">
            Login to start Shopping!
          </h2>
          <Col sm={6}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(signInUser(userData));
                if (!authError) {
                  navigate("/");
                  console.log(userData);
                }
              }}
            >
              <Form.Control
                className="m-2"
                placeholder="email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              ></Form.Control>
              <Form.Control
                className="m-2"
                placeholder="password"
                type="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              ></Form.Control>

              <motion.button
                className="btn btn-primary"
                type="submit"
                whileHover={{ scale: 1.2 }}
              >
                SIGN IN
              </motion.button>
            </Form>
            {authError && <p className="text-center text-white">{authError}</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LoginComponent;
