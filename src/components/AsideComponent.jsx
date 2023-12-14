import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AsideComponent = () => {
  const tracks = useSelector((state) => state.beats.stock);
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  const filteredTracks = [];
  const IsUserLoggedIn = useSelector((state) => state.user.userEmail);

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
    // console.log(filteredTracks);
    setProfiles(filteredTracks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {profiles ? (
        <div className="text-light d-flex flex-column align-items-center justify-content-center">
          {profiles
            .filter((profiles) => profiles !== IsUserLoggedIn)
            .map((r) => {
              return (
                <div key={r}>
                  <motion.h5
                    whileHover={{ scale: 1.2 }}
                    className="  my-1"
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
