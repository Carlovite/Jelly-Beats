import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AsideComponent = () => {
  const tracks = useSelector((state) => state.beats.stock);
  const [profiles, setProfiles] = useState([]);

  const filteredTracks = [];

  const removeDuplicates = (data) => {
    data.forEach((element) => {
      if (!filteredTracks.includes(element.uid)) {
        filteredTracks.push(element.uid);
      }
    });
    return filteredTracks;
  };

  useEffect(() => {
    removeDuplicates(tracks);
    console.log(filteredTracks);
    setProfiles(filteredTracks);
  }, []);
  const navigate = useNavigate();

  return (
    <>
      {profiles ? (
        <div className="text-light d-flex flex-column align-items-center justify-content-center">
          {profiles.map((r) => {
            return (
              <div key={r}>
                {/* <img
                src={r.url}
                alt="profile"
                width={60}
                height={60}
                className="rounded-circle m-2"
                onClick={() => navigate(`/artist-page/${r.uid}`)}
              ></img> */}
                <h5
                  className="mb-0 mx-2 my-3"
                  onClick={() => navigate(`/artist-page/${r}`)}
                >
                  {r.split("@")[0]}
                </h5>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>No profiles to follow</p>
        </div>
      )}
    </>
  );
};
export default AsideComponent;
