import { Col, Container, Row } from "react-bootstrap";
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
import { motion } from "framer-motion";

function UploadPage() {
  const [title, setTitle] = useState("");

  const [bpm, setBpm] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [uid, setUid] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const [imgUrl, setImgUrl] = useState([]);

  const IsUserLoggedIn = useSelector((state) => state.user.userEmail);
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  const [mp3, setMp3] = useState("");

  const [audioMp3, setAudioMp3] = useState("");
  const [mp3Url, setMp3Url] = useState([]);

  function handleChangeAudio(event) {
    setMp3(event.target.files[0]);
  }

  const handleUploadAudio = () => {
    if (!mp3) {
      alert("Please upload an audio first!");
    }

    const storageRef = ref(storage, `/mp3/${mp3.name}`);
    const uploadTask = uploadBytesResumable(storageRef, mp3);
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {});
      }
    );
  };

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  function handleReset(r) {
    if (url !== "") {
      setUrl("");
    } else {
      setUrl(r);
    }
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
          console.log("entro qui?");
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
    listAll(ref(storage, "mp3")).then((audio) => {
      console.log(audio);
      audio.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setMp3Url((data) => [...data, url]);
        });
      });
    });
    setUid(IsUserLoggedIn);
    setReleaseDate(new Date().toDateString().split(" ").slice(1).join(" "));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "beats"), {
        title: title,
        date: releaseDate,
        bpm: bpm,
        price: price,
        url: url,
        audioMp3: audioMp3,
        uid: uid,
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
              <h2 className="text-white">Upload a Track:</h2>
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
                <Form.Group className="mb-3" controlId="user">
                  <Form.Control
                    type="text"
                    placeholder="user"
                    required
                    readOnly
                    value={uid.split("@")[0]}
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
                <Form.Select
                  aria-label="Track select"
                  value={audioMp3}
                  onChange={(e) => setAudioMp3(e.target.value)}
                  className="mb-3"
                >
                  <option>Select a track</option>
                  {mp3Url.map((url, i) => {
                    return (
                      <option value={url} key={"mp3" + i}>
                        {url}
                      </option>
                    );
                  })}
                </Form.Select>

                <Form.Group className="mb-3" controlId="url">
                  <Form.Control
                    type="text"
                    placeholder="Image url"
                    required
                    onChange={() => console.log("immagine caricata")}
                    value={url}
                  />
                </Form.Group>
                {imgUrl.map((r, i) => {
                  return (
                    <motion.img
                      key={"img" + i}
                      src={r}
                      alt="select one"
                      width={40}
                      height={40}
                      className="me-2"
                      onClick={() => handleReset(r)}
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.2 }}
                    />
                  );
                })}
                <br></br>
                <Form.Group className="my-3" controlId="date">
                  <Form.Control
                    type="text"
                    placeholder="date"
                    required
                    readOnly
                    value={releaseDate}
                  />
                </Form.Group>
                <motion.button
                  className="btn btn-primary m-2"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                >
                  SEND
                </motion.button>
              </Form>
              <div className="my-3">
                <h3 className="mb-2">Load audio:</h3>
                <div>
                  <input
                    type="file"
                    onChange={handleChangeAudio}
                    accept="/audio/mp3"
                    className="bottone"
                  />
                  <motion.button
                    className="btn btn-primary mx-2"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleUploadAudio}
                  >
                    UPLOAD MP3
                  </motion.button>
                </div>
              </div>
              <div className="my-3">
                <h3 className="mb-3">Load image:</h3>
                <input
                  className="bottone"
                  type="file"
                  onChange={handleChange}
                  accept="/image/*"
                />
                <motion.button
                  className="btn btn-primary mx-2 my-2"
                  whileHover={{ scale: 1.2 }}
                  onClick={handleUpload}
                  whileTap={{ scale: 0.9 }}
                >
                  UPLOAD IMAGE
                </motion.button>

                <p>{percent} "% done"</p>
              </div>
            </>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-center text-white mb-3">
                You must Log in first!
              </h2>
              <motion.div
                className="px-3 btn btn-primary"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/login")}
              >
                GO
              </motion.div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UploadPage;
