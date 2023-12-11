import Nav from "react-bootstrap/Nav";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { Navbar } from "react-bootstrap";
import CartIndicator from "./CartIndicator";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { LogOutUser } from "../redux/actions";
import { IoHomeSharp } from "react-icons/io5";
// import { setLogOut } from "../redux/actions";

function NavbarMobile() {
  const location = useLocation();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userEmail);

  return (
    <>
      <Navbar
        className="fixed-bottom d-md-none bg-scuro pb-0"
        data-bs-theme="dark"
      >
        <Nav
          data-bs-theme="dark"
          className=" d-flex  my-2 w-100 align-items-center justify-content-evenly navlink"
        >
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
            to="/"
            className={
              location.pathname === "/" ? "nav-link  active " : "nav-link  "
            }
          >
            <IoHomeSharp></IoHomeSharp>
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
          <CartIndicator></CartIndicator>
          {userInfo ? (
            <div
              className="d-flex justify-content-center align-items-center logout me-3"
              onClick={() => {
                dispatch(LogOutUser());
              }}
            >
              <BsArrowLeftSquareFill></BsArrowLeftSquareFill>
            </div>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar>

      <br />
    </>
  );
}

export default NavbarMobile;
