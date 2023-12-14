import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { database } from "../../firebase";
import { deleteElement } from "../../redux/actions";

function EditPage() {
  const params = useParams();
  const tracks = useSelector((state) => state.beats.stock);
  const [titolo, setTitolo] = useState("");
  const [price, setPrice] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [bpm, setBpm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const trackToedit = doc(database, "beats", filtered.id);
      const data = await getDoc(trackToedit);
      if (data.exists()) {
        setDoc(trackToedit, {
          ...filtered,
          title: titolo,
          price: price,
          bpm: bpm,
        });
        navigate("/");
      } else throw new Error("Data was not found");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let filteredBeat = tracks.find((beat) => beat.id === params.id);
    setFiltered(filteredBeat);
    setTitolo(filteredBeat.title);
    setPrice(filteredBeat.price);
    setBpm(filteredBeat.bpm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="my-5">
        <Row className="d-flex flex-column align-items-center justify-content-center w-100">
          <h2>Edit Track</h2>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={filtered.title}
                  onChange={(e) => setTitolo(e.target.value)}
                  value={titolo}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="bpm">
                <Form.Control
                  type="number"
                  placeholder={filtered.bpm}
                  onChange={(e) => setBpm(e.target.value)}
                  value={bpm}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Control
                  type="number"
                  placeholder={filtered.price}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </Form.Group>
              <motion.button
                className="btn btn-primary m-2"
                whileHover={{ scale: 1.2 }}
                type="submit"
              >
                UPDATE
              </motion.button>
            </Form>
          </Col>

          <motion.div
            className="d-flex justify-content-center align-items-center TwClickable me-3 btn btn-primary w-25"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              dispatch(deleteElement(filtered.id));
            }}
          >
            <p className="mb-0">DELETE TRACK</p>
          </motion.div>
        </Row>
      </Container>
    </>
  );
}

export default EditPage;
