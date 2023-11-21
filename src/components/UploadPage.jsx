import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UploadPage() {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6} className="my-3">
          <h2 className="text-white">Upload an item</h2>
          <Form className="bg-black text-light">
            <Form.Group className="mb-3" controlId="title">
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              placeholder="type"
            >
              <option>Type</option>
              <option value="1">Instrumental</option>
              <option value="2">Sound Kit</option>
              <option value="3">Service</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="description">
              <Form.Control type="text-area" placeholder="Description" />
            </Form.Group>
            <div className="my-3">
              <label className="me-3">Choose file: </label>
              <input
                ref={inputRef}
                onChange={handleDisplayFileDetails}
                className="d-none"
                type="file"
              />
              <button
                onClick={handleUpload}
                className={`btn btn-outline-${
                  uploadedFileName ? "primary" : "light"
                }`}
              >
                {uploadedFileName ? uploadedFileName : "Upload"}
              </button>
            </div>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UploadPage;
