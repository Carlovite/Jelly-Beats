import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();

  return (
    <>
      {profiles ? (
        <div className="text-light d-flex flex-column align-items-center justify-content-center">
          {profiles.map((r) => {
            return (
              <div key={r}>
                <motion.h5
                  whileHover={{ scale: 1.2 }}
                  className="mb-0 mx-2 my-3"
                  onClick={() => navigate(`/artist-page/${r}`)}
                >
                  {r.split("@")[0]}
                </motion.h5>
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
