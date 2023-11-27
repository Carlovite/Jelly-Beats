import { Col, Container, Row } from "react-bootstrap";
import TrackElement from "../TrackElement";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeats } from "../../redux/actions";

const TracksPage = () => {
  const dispatch = useDispatch();
  const beats = useSelector((state) => state.beats.stock);

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
