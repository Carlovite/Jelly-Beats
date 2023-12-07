import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const tracks = useSelector((state) => state.beats.stock);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].title === query) {
        navigate(`/details-page/${tracks[i].id}`);
      } else if (tracks[i].artist === query) {
        navigate(`/artist-page/${tracks[i].uid}`);
      }
    }
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Scrivi e premi Enter"
            />
          </Form>
        </Row>
      </Container>
    </>
  );
};
export default SearchPage;
