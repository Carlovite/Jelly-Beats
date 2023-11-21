import { Col, Container, Row } from "react-bootstrap";
import TrackElement from "../components/TrackElement";
import { useEffect, useState } from "react";
import { database } from "../Indexfirebase";
import { collection, getDocs } from "firebase/firestore";
const Profile = () => {
  const [beats, setBeats] = useState(null);
  useEffect(() => {
    const ref = collection(database, "beats");
    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setBeats(results);
      console.log(results);
    });
  }, []);
  return (
    <>
      <Container>
        <Row className="my-3 d-flex justify-content-center">
          <Col md={8}>{beats && <TrackElement beats={beats} />}</Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
