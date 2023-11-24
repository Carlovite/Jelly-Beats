import Nav from "react-bootstrap/Nav";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavbarMobile() {
  const location = useLocation();
  // const navigate = useNavigate();
  const cartLength = useSelector((state) => state.cart.content.length);

  return (
    <>
      <Navbar
        className="fixed-bottom d-md-none bg-black pb-0"
        data-bs-theme="dark"
      >
        <Nav
          data-bs-theme="dark"
          className=" d-flex  my-2 w-100 align-items-center justify-content-evenly navlink"
        >
          {/* <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link  active " : "nav-link  "
            }
          >
            <HiHome></HiHome>
          </Link> */}
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
            to="/tracks"
            className={
              location.pathname === "/tracks"
                ? "nav-link  active "
                : "nav-link  "
            }
          >
            <IoMusicalNotesSharp></IoMusicalNotesSharp>
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
            <FaShoppingCart className="mb-1"></FaShoppingCart>
            <span className="ms-2 mb-0">{cartLength}</span>
          </Link>
        </Nav>
      </Navbar>

      <br />
    </>
  );
}

export default NavbarMobile;
