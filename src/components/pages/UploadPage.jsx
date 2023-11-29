import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { database } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [bpm, setBpm] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const IsUserLoggedIn = useSelector((state) => state.user.userEmail);
  const navigate = useNavigate();

  const [file, setFile] = useState("");

  const [url, setUrl] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // console.log(url);
        });
      }
    );
  };

  useEffect(() => {
    listAll(ref(storage, "files")).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
    if (!IsUserLoggedIn) {
      navigate("/login");
    }
  }, []);
  console.log(imgUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "beats"), {
        title: title,
        artist: artist,
        bpm: bpm,
        price: price,
        url: url,
      });
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col md={6} className="">
          {IsUserLoggedIn ? (
            <>
              <h2 className="text-white">Upload a Track</h2>
              <Form className=" text-light" onSubmit={handleSubmit}>
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

                <div>
                  <input
                    type="file"
                    onChange={handleChange}
                    accept="/image/*"
                  />
                  <Button onClick={handleUpload}>Upload to Firebase</Button>
                  <p>{percent} "% done"</p>
                </div>
                <Form.Group className="mb-3" controlId="url">
                  <Form.Control
                    type="string"
                    placeholder="Image url"
                    required
                    onChange={() => setUrl(imgUrl)}
                    value={url}
                  />
                </Form.Group>

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
