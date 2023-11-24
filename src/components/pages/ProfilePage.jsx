import { Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="my-3 d-flex justify-content-center ">
          <h2 className="text-white">Your tracks</h2>
          <Col md={8}></Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
