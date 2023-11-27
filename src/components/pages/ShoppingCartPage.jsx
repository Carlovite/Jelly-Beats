import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart.content);
  const IsUserLoggedIn = useSelector((state) => state.user.username);
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
                className="my-2 d-flex justify-content-start text-white"
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
                <img src={beat.imageUrl} alt="beat selected" className="me-2" />
                <span className="ms-2">{beat.title}</span>
              </div>
            ))}
          </div>
        </Col>
        <Row>
          <Col
            sm={12}
            className="fw-bold mb-3 ms-4 text-white d-flex justify-content-center"
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
        </Row>
      </Row>
    </Container>
  );
};

export default ShoppingCartPage;
