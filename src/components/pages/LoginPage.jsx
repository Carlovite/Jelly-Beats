import { useState } from "react";
import LoginComponent from "../LoginComponent";
import CreateAccComponent from "../CreateAccComponent";
import logo from "../../assets/jelly-beats.png";
import { motion } from "framer-motion";
import Jelly from "../../assets/drawing.png";
const LogInPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <>
      <div className="my-4 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center my-3 fw-bold">Welcome to </h2>
        <motion.img
          alt="logo"
          src={logo}
          width={400}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
        ></motion.img>
        {/* <h3 className="text-center mt-2">New user?</h3> */}
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="login"
            id="login1"
            onChange={(e) => setHaveAccount(true)}
          />
          <label className="form-check-label" htmlFor="login1">
            login
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="login"
            id="login2"
            onChange={(e) => setHaveAccount(false)}
          />
          <label className="form-check-label" htmlFor="login2">
            create account
          </label>
        </div>
        {haveAccount ? (
          <LoginComponent></LoginComponent>
        ) : (
          <CreateAccComponent></CreateAccComponent>
        )}
        <img
          alt="jelly-fish"
          src={Jelly}
          width={200}
          className="z-3 jello"
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          // initial={{ scale: 1 }}
        ></img>
      </div>
    </>
  );
};
export default LogInPage;
