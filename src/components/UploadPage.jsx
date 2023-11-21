import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UploadPage() {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const [newBeat, setNewBeat] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBeat);
    setNewBeat("");
  };

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
          <Form className="bg-black text-light" onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Control
                type="text"
                placeholder="Title"
                required
                onChange={(e) => setNewBeat(e.target.value)}
                value={newBeat}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="artist">
              <Form.Control type="text" placeholder="Artist" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bpm">
              <Form.Control type="number" placeholder="BPM" required />
            </Form.Group>

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
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UploadPage;
