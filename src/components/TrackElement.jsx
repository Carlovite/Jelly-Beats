import { Button } from "react-bootstrap";
import { IoMdPause } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { IoMdPlayCircle } from "react-icons/io";

function TrackElement() {
  return (
    <div className=" w-100 text-white d-flex justify-content-around my-4">
      <img
        src="https://placedog.net/100/100"
        alt="Track pic"
        width={90}
        height={90}
        className="ms-2"
      />
      <div className="flex-grow-1 mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-start mb-0 mx-2">Track Title</h3>
          <p className="m-0 mx-2">Artist name</p>
        </div>
        <div className="d-flex w-100 align-items-center">
          <hr className="flex-grow-1 mx-2"></hr>
        </div>
        <div className="d-flex">
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
            className="me-2 text-light d-flex justify-content-center align-items-center"
          >
            <FaHeart></FaHeart>
          </Button>
          <Button
            variant="black"
            className="me-2 text-light d-flex justify-content-center align-items-center"
          >
            <TiPlus></TiPlus>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TrackElement;
