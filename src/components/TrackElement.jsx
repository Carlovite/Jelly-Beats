import { Button } from "react-bootstrap";

import { FaHeart } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

function TrackElement() {
  return (
    <div className=" w-100 text-white d-flex justify-content-around my-3">
      <img
        src="https://placedog.net/100/100"
        alt="Track pic"
        width={90}
        height={90}
        className="ms-2"
      />
      <div className="flex-grow-1 mx-3">
        <h3 className="text-start">Track Title</h3>
        <hr></hr>
        <div className="d-flex">
          <Button
            variant="black"
            className="me-2 text-light d-flex justify-content-center align-items-center"
          >
            <FaHeart className=""></FaHeart>
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
