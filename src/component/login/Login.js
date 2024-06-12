import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";

import { signInUser, verifyEmail } from "../../services/axios";
import { SET_USER } from "../../redux/store/types";
import { getDevices } from "../../redux/actions/devices";

import "./Login.css";
import "../../store/preloader.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fade, setFade] = useState(false);
  const [isSended, setIsSended] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Dashboard");
    } else {
      const queryData = qs.parse(location.search.slice(1));
      if (queryData && queryData.userId) {
        const { userId, verifyToken } = queryData;
        if (!window.isSended) {
          verifyEmail({
            userId,
            verifyToken,
          });
          window.isSended = true;
        }
      }
    }
  }, [isAuthenticated, navigate]);

  const signIn = async () => {
    try {
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      function validateEmail(email) {
        return emailRegex.test(email);
      }

      var isEmail = validateEmail(email);
      let signInData;
      if (isEmail) {
        signInData = {
          type: "email",
          userId: email,
          password: password,
        };
      } else {
        signInData = {
          type: "id",
          userId: email,
          password: password,
        };
      }

      var res = await signInUser(signInData);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("role", res.data.user.role);
        dispatch({
          type: SET_USER,
          payload: res.data,
        });
        dispatch(getDevices({ token: res.data.token }));
      } else {
        setErrorMsg("Username or password is wrong!");
      }
      setFade(false);
    } catch (err) {
      console.log("🚀 ~ file: Login.js:59 ~ signIn ~ err:", err);
    }
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
              <h3>Login</h3>
              <div className="input-container d-flex">
                <img src="./assets/logUser.svg" alt="none" />
                <input
                  placeholder="Username or Email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  }}
                />
              </div>
              <div className="input-container d-flex">
                <img src="./assets/logLock.svg" alt="none" />
                <input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMsg("");
                  }}
                />
              </div>
              <p className="error">{errorMsg}</p>
              <span
                className="forgot-password"
                onClick={() => navigate("/Forgot")}
              >
                Forgot Password?
              </span>
              <button
                className="py-1"
                onClick={() => {
                  signIn();
                  setFade(true);
                }}
              >
                {!fade ? (
                  "Login"
                ) : (
                  <img
                    src="./assets/loading.gif"
                    className="imgloading"
                    alt="none"
                  />
                )}
              </button>
              <button
                className="py-1"
                onClick={() => {
                  navigate("/Signup");
                }}
              >
                SignUp
              </button>
            </div>
          </div>
          <div className="subsub2-sub1-auth-right mt-5">
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              <img
                src="./assets/Google.svg"
                alt="none"
                style={{ width: "12.6rem", height: "4.4rem" }}
              />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src="./assets/Facebook.svg"
                alt="none"
                style={{
                  width: "12.6rem",
                  height: "4.4rem",
                  marginLeft: "1rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
