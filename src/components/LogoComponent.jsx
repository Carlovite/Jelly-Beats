import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo2 from "../assets/jelly-beats.png";
import { motion } from "framer-motion";

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
            <motion.img
              whileHover={{ scale: 1.2 }}
              alt="logo-page"
              src={Logo2}
              width="90"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </div>
        </Link>
      </Container>
    </Navbar>
  );
};
export default LogoComponent;
