import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { resetUser } from "../../services/axios";

import "./Forgot.css";

const Forgot = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [resetPass, setResetPass] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Dashboard");
    }
  }, [isAuthenticated]);

  const resetPassword = () => {
    if (resetPass == "") {
      alert("Username or Email is empty!");
      return;
    }
    const resetData = {
      email: resetPass,
    };
    // console.log(resetPass)
    resetUser(resetData);
    navigate("/login");
  };

  return (
    <div className="auth" id="auth">
      <div className="auth-left col-md-8 px-0">
        <img src="./assets/log.png" alt="logo" />
      </div>
      <div className="auth-right col-md-4 px-0 py-4">
        <img
          className="mb-5 main-logo"
          src="./assets/mainLogo.svg"
          alt="main-logo"
        />
        <div className="sub1-auth-right">
          <div className="main-form d-flex justify-content-center align-items-center">
            <div className="subsub1-sub1-auth-right">
              <h3>Reset Password</h3>
              <div className="input-container d-flex">
                <img src="./assets/logUser.svg" alt="none" />
                <input
                  placeholder="Username or Email"
                  type="email"
                  onChange={(i) => {
                    setResetPass(i.target.value);
                  }}
                />
              </div>
              <span className="reset">
                Reset link will be send to your registered Email
              </span>
              <button
                className="py-1"
                onClick={() => {
                  resetPassword();
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
