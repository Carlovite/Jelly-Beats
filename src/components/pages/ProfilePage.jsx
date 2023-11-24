import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.user.username);
  return (
    <>
      <Container className="my-5">
        {userInfo ? (
          <Row>
            <p>Componente profilo</p>
          </Row>
        ) : (
          <h2 className="text-center text-white">You must Log in first!</h2>
        )}
      </Container>
    </>
  );
};
export default Profile;
