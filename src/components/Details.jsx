import { Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
function Details() {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <div className="d-flex flex-column bg-dark text-light rounded p-4">
              <div className="d-flex justify-content-center mb-3">
                <img
                  src="https://placedog.net/500"
                  alt="profile"
                  width={200}
                  height={200}
                ></img>
              </div>
              <h3 className="text-center">Track Title</h3>
              <p className="Fs8 text-center lessImportant">Artist name</p>
              <div className="d-flex align-items-center justify-content-between w-100  px-3 mb-3">
                <div className="d-flex align-items-center">
                  <span>Like</span>
                  <FaHeart className="mx-2"></FaHeart>
                </div>
                <div className="d-flex align-items-center">
                  <span>Add to cart</span>
                  <IoMdAddCircle className="mx-2"></IoMdAddCircle>
                </div>
              </div>
              <hr></hr>
              <p className="lessImportant text-start Fs8 mb-3 mx-3">
                INFORMATION
              </p>
              <div className="d-flex mx-3 align-items-center justify-content-between">
                <span className=" Fs8 mb-2">Published:</span>
                <span className="lessImportant Fs8 mb-2"> ciao </span>
              </div>
              <div className="d-flex mx-3 align-items-center justify-content-between">
                <span className=" Fs8 mb-2">BPM:</span>
                <span className="lessImportant Fs8 mb-2"> ciao </span>
              </div>
              <div className="d-flex mx-3 align-items-center justify-content-between">
                <span className=" Fs8 mb-2">Key:</span>
                <span className="lessImportant Fs8 mb-2"> ciao </span>
              </div>
              <div className="d-flex mx-3 align-items-center justify-content-between">
                <span className=" Fs8 mb-2">Streams:</span>
                <span className="lessImportant Fs8 mb-2"> ciao </span>
              </div>
            </div>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
