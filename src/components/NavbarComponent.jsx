import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import CartIndicator from "./CartIndicator";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../assets/jelly-beats.png";
import { LogOutUser } from "../redux/actions";

function NavbarComponent() {
  const location = useLocation();

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userEmail);
  return (
    <>
      <Navbar
        data-bs-theme="dark"
        className="border-bottom d-none d-md-flex sticky-top bg-scuro"
      >
        <div className="d-flex justify-content-between align-items-center w-100 mx-5">
          <Link to="/" className="me-5 text-light nav-link">
            <img src={Logo} alt="logo" width={100} height={50}></img>
          </Link>
          <div className="d-flex align-items-center">
            <Link
              to="/search"
              className={
                location.pathname === "/search" ? "nav-link active" : "nav-link"
              }
            >
              <FaSearch className="me-3"></FaSearch>
            </Link>

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
                  dispatch(LogOutUser());
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
