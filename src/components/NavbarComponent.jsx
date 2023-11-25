import { Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import CartIndicator from "./CartIndicator";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../redux/actions";

function NavbarComponent() {
  const location = useLocation();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.username);
  return (
    <>
      <Navbar
        bg="black"
        data-bs-theme="dark"
        className="border-bottom d-none d-md-flex sticky-top"
      >
        <div className="d-flex justify-content-between align-items-center w-100 mx-5">
          <Link to="/" className="me-5 text-light nav-link">
            LOGO
          </Link>
          <div className="d-flex">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
              ></Form.Control>
              <Button
                type="submit"
                variant="outline"
                className=" d-flex justify-content-center align-items-center"
                // onClick={() => navigate("/shopping-cart")}
              >
                <FaSearch></FaSearch>
              </Button>
            </Form>
            <Nav className="d-flex align-items-center">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
              <Link
                to="/tracks"
                className={
                  location.pathname === "/tracks"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Tracks
              </Link>
              <Link
                to="/upload"
                className={
                  location.pathname === "/upload"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Upload
              </Link>
              <Link
                to="/profile"
                className={
                  location.pathname === "/profile"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Profile
              </Link>
            </Nav>
          </div>

          <Nav className="">
            <CartIndicator></CartIndicator>
            {userInfo ? (
              <div
                className="d-flex justify-content-center align-items-center logout me-3"
                onClick={() => {
                  dispatch(setLogOut());
                }}
              >
                <span className="mx-2">Log Out</span>
                <BsArrowLeftSquareFill></BsArrowLeftSquareFill>
              </div>
            ) : (
              <></>
            )}
          </Nav>
        </div>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
