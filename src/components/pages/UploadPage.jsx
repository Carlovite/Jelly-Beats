import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { database } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useSelector } from "react-redux";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [bpm, setBpm] = useState("");
  const [price, setPrice] = useState("");
  const IsUserLoggedIn = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((r) => {
      r.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
    if (!IsUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  console.log(imageList);

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
  const userInfo = useSelector((state) => state.user.username);
  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col md={6} className="">
          {userInfo ? (
            <>
              <h2 className="text-white">Upload a Track</h2>
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
                <Form.Group className="mb-3" controlId="price">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Control type="text-area" placeholder="Description" />
                </Form.Group>
                <div>
                  <input
                    type="file"
                    className="my-2"
                    onChange={(e) => {
                      setImageUpload(e.target.files[0]);
                    }}
                  ></input>
                  <Button onClick={uploadImage} className="my-2">
                    {" "}
                    Upload file
                  </Button>
                </div>
                <Button variant="primary" type="submit" className="my-2">
                  Send
                </Button>
              </Form>
            </>
          ) : (
            <h2 className="text-center text-white">You must Log in first!</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UploadPage;
