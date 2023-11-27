import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const userInfo = useSelector((state) => state.user.authError);
  const navigate = useNavigate();
  const IsUserLoggedIn = useSelector((state) => state.user.userEmail);
  useEffect(() => {
    if (!IsUserLoggedIn) {
      navigate("/login");
    }
  }, [IsUserLoggedIn, navigate]);
  return (
    <>
      <Container className="my-5">
        {IsUserLoggedIn ? (
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
