import { useState } from "react";
import LoginComponent from "../LoginComponent";
import CreateAccComponent from "../CreateAccComponent";

const LogInPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mt-3 fw-bold">Welcome to AlphaBeat</h2>
        <h3 className="text-center ">New user?</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="login"
            id="login1"
            onChange={(e) => setHaveAccount(true)}
          />
          <label className="form-check-label" htmlFor="login">
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
          <label className="form-check-label" htmlFor="createAccount">
            create account
          </label>
        </div>
        {haveAccount ? (
          <LoginComponent></LoginComponent>
        ) : (
          <CreateAccComponent></CreateAccComponent>
        )}
      </div>
    </>
  );
};
export default LogInPage;
