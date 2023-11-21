import { Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { MdUpload } from "react-icons/md";

function NavbarMobile() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Nav className=" d-flex d-md-none text-light mb-2 fixed-bottom align-items-center justify-content-evenly">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link  active " : "nav-link  "
            }
          >
            <HiHome></HiHome>
          </Link>
          <Link
            to="/search"
            className={
              location.pathname === "/search"
                ? "nav-link  active "
                : "nav-link  "
            }
          >
            <FaSearch></FaSearch>
          </Link>
          <Link
            to="/upload"
            className={
              location.pathname === "/upload"
                ? "nav-link  active "
                : "nav-link  "
            }
          >
            <MdUpload></MdUpload>
          </Link>
          <Link
            to="/profile"
            className={
              location.pathname === "/profile"
                ? "nav-link  active "
                : "nav-link  "
            }
          >
            <MdAccountCircle></MdAccountCircle>
          </Link>
          <Link
            to="/shopping-cart"
            className={
              location.pathname === "/shopping-cart"
                ? "nav-link  active "
                : "nav-link  "
            }
          >
            <FaShoppingCart></FaShoppingCart>
          </Link>
        </Nav>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarMobile;
