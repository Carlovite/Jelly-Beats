import { Col, Container, Row } from "react-bootstrap";
import TrackElement from "../TrackElement";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getBeats } from "../../redux/actions";

const TracksPage = () => {
  const dispatch = useDispatch();
  const beats = useSelector((state) => state.beats.stock);
  // const [beats, setBeats] = useState(null);

  // useEffect(() => {
  //   const ref = collection(database, "beats");
  //   getDocs(ref).then((snapshot) => {
  //     let results = [];
  //     snapshot.docs.forEach((doc) => {
  //       results.push({ id: doc.id, ...doc.data() });
  //     });
  //     setBeats(results);
  //     console.log(results);
  //   });
  // }, []);

  useEffect(() => {
    dispatch(getBeats());
  }, []);

  return (
    <>
      <Container className="my-5">
        <Row className="my-2 d-flex justify-content-center">
          <Col md={8}>{beats && <TrackElement beats={beats} />}</Col>
        </Row>
      </Container>
    </>
  );
};
export default TracksPage;
