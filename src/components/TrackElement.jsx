import { Button } from "react-bootstrap";
import { IoMdPause } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function TrackElement() {
  const navigate = useNavigate();
  return (
    <div className=" w-100 text-white d-flex justify-content-around my-4">
      <img
        src="https://placedog.net/100/100"
        alt="Track pic"
        width={90}
        height={90}
        className="ms-2"
        onClick={() => navigate("/detail-page")}
      />
      <div className="flex-grow-1 mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-start mb-0 mx-2">Track Title</h3>
          <p className="m-0 mx-2">Artist name</p>
        </div>
        <div className="d-flex w-100 align-items-center">
          <hr className="flex-grow-1 mx-2"></hr>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <Button
              variant="black"
              className=" text-light d-flex justify-content-center align-items-center"
            >
              <IoMdPlayCircle></IoMdPlayCircle>
            </Button>
            <Button
              variant="black"
              className=" text-light d-flex justify-content-center align-items-center"
            >
              <IoMdPause></IoMdPause>
            </Button>
            <Button
              variant="black"
              className=" text-light d-flex justify-content-center align-items-center"
            >
              <FaHeart></FaHeart>
            </Button>
            <Button
              variant="black"
              className=" text-light d-flex justify-content-center align-items-center"
            >
              <IoMdAddCircle></IoMdAddCircle>
            </Button>
          </div>
          <div className="w-25 me-2">{/* <Player></Player> */}</div>
        </div>
      </div>
    </div>
  );
}

export default TrackElement;
