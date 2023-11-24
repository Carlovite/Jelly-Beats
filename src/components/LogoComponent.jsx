import { Container, Navbar } from "react-bootstrap";

const LogoComponent = () => {
  return (
    <Navbar className="text-white sticky-top d-md-none" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default LogoComponent;
