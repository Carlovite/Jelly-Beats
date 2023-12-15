import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/actions";
import { motion } from "framer-motion";

const CreateAccComponent = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.user.authError);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-4 mb-5  pe-5">
        <Row className="d-flex justify-content-center">
          <h2 className="text-center text-white mb-3">CREATE AN ACCOUNT!</h2>
          <Col sm={4}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(createUser(userData));
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
                className="btn btn-primary m-2"
                type="submit"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                SIGN UP
              </motion.button>
            </Form>
            {authError && <p className="text-center text-white">{authError}</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateAccComponent;
