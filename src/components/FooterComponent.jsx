import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div className="bg-scuro mt-auto">
      <Container className="p-3">
        <p className="text-center mb-0 text-white">
          AlphaBeat {new Date().getFullYear()}
        </p>
      </Container>
    </div>
  );
};
export default FooterComponent;
