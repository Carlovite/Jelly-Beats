import { Col, Container, Row } from "react-bootstrap";
import TrackElement from "../TrackElement";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeatsRealTime } from "../../redux/actions";
import Player from "../Player";

const TracksPage = () => {
  const dispatch = useDispatch();
  const beats = useSelector((state) => state.beats.stock);

  useEffect(() => {
    dispatch(getBeatsRealTime());
  }, []);

  return (
    <>
      <Container className="my-5">
        <Row className="my-2 d-flex justify-content-center">
          <Col md={8}>{beats && <TrackElement beats={beats} />}</Col>
        </Row>
        <Player></Player>
      </Container>
    </>
  );
};
export default TracksPage;
