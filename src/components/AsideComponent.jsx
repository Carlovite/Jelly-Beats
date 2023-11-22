import { useNavigate } from "react-router-dom";

const AsideComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-light d-flex align-items-center justify-content-center">
        <img
          src="https://placedog.net/500"
          alt="profile"
          width={60}
          height={60}
          className="rounded-circle m-2"
          onClick={() => navigate("/artist-page")}
        ></img>
        <h5 className="mb-0 mx-2" onClick={() => navigate("/artist-page")}>
          Artist name
        </h5>
      </div>
    </>
  );
};
export default AsideComponent;
