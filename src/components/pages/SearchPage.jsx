import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Jelly from "../../assets/drawing.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [resultsTrack, setResultsTrack] = useState([]);
  const [resultsProfile, setResultsProfile] = useState([]);
  const tracks = useSelector((state) => state.beats.stock);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].title.toLowerCase().includes(query.toLowerCase())) {
        setResultsTrack([...resultsTrack, tracks[i]]);
      } else if (tracks[i].uid.split("@")[0].includes(query)) {
        setResultsProfile([...resultsProfile, tracks[i]]);
      }
    }
  };

  useEffect(() => {
    setResultsProfile([]);
    setResultsTrack([]);
  }, []);

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={8} className="d-flex flex-column">
            <Form onSubmit={handleSubmit} className="w-50">
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search"
              />
            </Form>

            {resultsTrack.map((r) => {
              return (
                <>
                  <div
                    className="  text-white d-flex justify-content-around my-5 cardTrack rounded"
                    key={r.id}
                  >
                    <img
                      src={r.url ? r.url : "https://placedog.net/500"}
                      alt="Track pic"
                      width={90}
                      height={90}
                      className="ms-2 ombra"
                      onClick={() => navigate(`/details-page/${r.id}`)}
                    />
                    <div className="flex-grow-1 mx-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3
                          className="text-start mb-0 mx-2 TwClickable"
                          onClick={() => navigate(`/details-page/${r.id}`)}
                        >
                          {r.title}
                        </h3>
                        <h5
                          className="m-0 mx-2 TwClickable"
                          onClick={() => navigate(`/artist-page/${r.uid}`)}
                        >
                          {r.uid.split("@")[0]}
                        </h5>
                      </div>
                      <div className="d-flex w-100 align-items-center ">
                        <hr className="w-100 progress mb-1"></hr>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {resultsProfile.map((r, i) => {
              return (
                <>
                  <div
                    className="text-light d-flex align-items-center justify-content-start cardTrack rounded mt-3"
                    key={i}
                  >
                    <img
                      src={r.url ? r.url : "https://placedog.net/500"}
                      alt="profile"
                      width={60}
                      height={60}
                      className="rounded-circle m-2"
                      onClick={() => navigate(`/artist-page/${r.uid}`)}
                    ></img>
                    <h5
                      className="mb-0 mx-2"
                      onClick={() => navigate(`/artist-page/${r.uid}`)}
                    >
                      {r.uid.split("@")[0]}
                    </h5>
                  </div>
                </>
              );
            })}
          </Col>
          <Col md={4}>
            <img
              alt="jelly-fish"
              src={Jelly}
              width={200}
              className="z-3 smalljelly d-none d-md-flex"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              // initial={{ scale: 1 }}
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SearchPage;
