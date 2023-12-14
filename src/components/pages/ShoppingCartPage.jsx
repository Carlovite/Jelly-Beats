import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apple from "../../assets/applepay.png";
import paypal from "../../assets/paypal.png";
import { motion } from "framer-motion";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart.content);
  const IsUserLoggedIn = useSelector((state) => state.user.userEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cart);
  useEffect(() => {
    if (!IsUserLoggedIn) {
      navigate("/");
    }
  }, [IsUserLoggedIn, navigate]);

  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} className="  my-4">
          <h1 className="text-white text-center mb-3">SHOPPING-CART</h1>
          <div className="text-white">
            {cart.map((beat, i) => (
              <div
                key={i}
                className="my-3 d-flex justify-content-start align-items-center text-white"
              >
                <Button
                  variant=""
                  onClick={() => {
                    dispatch(removeFromCart(i));
                  }}
                  className="d-flex justify-content-center align-items-center TwClickable"
                >
                  <FaTrash />
                </Button>
                <img
                  src={beat.url}
                  alt="beat selected"
                  width={40}
                  height={40}
                  className="me-2"
                />
                <span className="ms-2">{beat.title + " -"} </span>
                <span className="ms-2">{beat.price + "$"}</span>
              </div>
            ))}
          </div>
        </Col>
        <Row>
          <Col
            sm={12}
            className="fw-bold mb-3 text-white d-flex justify-content-center"
          >
            TOTALE:{" "}
            {cart
              .reduce(
                (acc, currentValue) => acc + parseFloat(currentValue.price),
                0
              )
              .toFixed(2)}
            $
          </Col>
          <hr className="progress"></hr>

          <div className="d-flex justify-content-center">
            <motion.img
              alt="pay-button-applepay"
              src={apple}
              width={100}
              className="rounded mx-2"
              whileHover={{
                scale: 1.1,
              }}
            ></motion.img>
            <motion.img
              alt="pay-button-applepay"
              src={paypal}
              width={100}
              className="rounded mx-2"
              whileHover={{
                scale: 1.1,
              }}
            ></motion.img>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default ShoppingCartPage;
