import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const CartIndicator = () => {
  const cartLength = useSelector((state) => state.cart.content.length);
  const location = useLocation();
  const userInfo = useSelector((state) => state.user.username);

  return (
    <div>
      {userInfo ? (
        <Link
          to="/shopping-cart"
          className={
            location.pathname === "/shopping-cart"
              ? "nav-link  active "
              : "nav-link  "
          }
        >
          <FaShoppingCart className="mb-1"></FaShoppingCart>
          <span className="ms-2 mb-0">{cartLength}</span>
        </Link>
      ) : (
        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "nav-link  active " : "nav-link  "
          }
        >
          <span className="me-2 d-none d-md-inline">Log in</span>
          <BsArrowRightSquareFill></BsArrowRightSquareFill>
        </Link>
      )}
    </div>
  );
};
export default CartIndicator;
