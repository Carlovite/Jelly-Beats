import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const LogoComponent = () => {
  const location = useLocation();
  return (
    <Navbar
      className="text-white bg-black p-3 fixed-top d-md-none"
      data-bs-theme="dark"
    >
      <Container>
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link  active " : "nav-link  "
          }
        >
          <img
            alt=""
            src="https://placedog.net/80/100"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Alpha-beat
        </Link>
      </Container>
    </Navbar>
  );
};
export default LogoComponent;
