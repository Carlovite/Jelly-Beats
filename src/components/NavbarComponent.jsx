import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" className="border-bottom ">
        <div className="d-flex justify-content-between align-items-center w-100 mx-5">
          <Navbar.Brand href="#home" className="me-5">
            HOME
          </Navbar.Brand>
          <div className="d-flex">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
              ></Form.Control>
              <Button
                variant="outline"
                className=" d-flex justify-content-center align-items-center"
              >
                <FaSearch></FaSearch>
              </Button>
            </Form>
            <Nav className="">
              <Nav.Link href="#home">Upload</Nav.Link>
              <Nav.Link href="#features">Profile</Nav.Link>
            </Nav>
          </div>
          <Nav className="">
            <Nav.Link href="#pricing"></Nav.Link>

            <Button
              variant="outline-light"
              className="d-flex justify-content-center align-items-center"
            >
              <FaShoppingCart></FaShoppingCart>
            </Button>
          </Nav>
        </div>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
