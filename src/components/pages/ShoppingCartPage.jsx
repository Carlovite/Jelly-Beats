import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart.content);
  const dispatch = useDispatch();
  console.log(cart);
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
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: i,
                    });
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
            {cart.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.price),
              0
            )}
            $
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ShoppingCartPage;
