import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import Logo from "../assets/Opera_senza_titolo.png";
import Logo2 from "../assets/jelly-beats.png";

const LogoComponent = () => {
  const location = useLocation();
  return (
    <Navbar
      className="text-white bg-scuro px-3 fixed-top d-md-none"
      data-bs-theme="dark"
    >
      <Container>
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link  active " : "nav-link  "
          }
        >
          <div className="d-flex justify-content-center align-items-center">
            <img
              alt="logo-page"
              src={Logo2}
              width="85"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            {/* <p className="mb-0 mx-2 logoTitle">Alpha-beat</p> */}
          </div>
        </Link>
      </Container>
    </Navbar>
  );
};
export default LogoComponent;
