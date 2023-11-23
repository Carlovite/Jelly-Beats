import { IoMdPause } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function TrackElement(beatSelected) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      {beatSelected.beats.map((r) => {
        return (
          <div
            className=" w-100 text-white d-flex justify-content-around my-5 "
            key={r.id}
          >
            <img
              src="https://placedog.net/100/100"
              alt="Track pic"
              width={90}
              height={90}
              className="ms-2 "
              onClick={() => navigate("/details-page")}
            />
            <div className="flex-grow-1 mx-3">
              <div className="d-flex justify-content-between align-items-center">
                <h3
                  className="text-start mb-0 mx-2 TwClickable"
                  onClick={() => navigate("/details-page")}
                >
                  {r.title}
                </h3>
                <p
                  className="m-0 mx-2 TwClickable"
                  onClick={() => navigate("/artist-page")}
                >
                  {r.artist}
                </p>
              </div>
              <div className="d-flex w-100 align-items-center">
                <hr className="flex-grow-1 mx-2"></hr>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <div className="d-flex justify-content-center align-items-center TwClickable mx-3">
                    <IoMdPlayCircle></IoMdPlayCircle>
                  </div>
                  <div className="d-flex justify-content-center align-items-center TwClickable me-3">
                    <IoMdPause></IoMdPause>
                  </div>
                  <div className="d-flex justify-content-center align-items-center TwClickable me-3">
                    <FaHeart></FaHeart>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center TwClickable me-3"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: r,
                      });
                    }}
                  >
                    <IoMdAddCircle></IoMdAddCircle>
                  </div>
                </div>
                <div className="w-25 me-2">{/* <Player></Player> */}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TrackElement;
