import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { database } from "../Indexfirebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [bpm, setBpm] = useState("");
  const beatInput = useRef(null);
  const navigate = useNavigate();
  const [newBeat, setNewBeat] = useState([]);

  const [beats, setBeats] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "beats"), {
        title: title,
        artist: artist,
        bpm: bpm,
      });
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newBeat.trim();
    if (ing && !beats.includes(ing)) {
      setBeats((prevBeats) => [...prevBeats, ing]);
    }
    setNewBeat("");
    beatInput.current.focus();
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
          <Form className="bg-black text-light" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Control
                type="text"
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="artist">
              <Form.Control
                type="text"
                placeholder="Artist"
                required
                onChange={(e) => setArtist(e.target.value)}
                value={artist}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bpm">
              <Form.Control
                type="number"
                placeholder="BPM"
                required
                onChange={(e) => setBpm(e.target.value)}
                value={bpm}
              />
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
