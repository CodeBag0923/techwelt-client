import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { notification } from "antd";

import {
  getResponse,
  userRegister,
  resendVerifyEmail,
} from "../../services/axios";
import { CountryData } from "../../utils/mockup";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [fname, setFname] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameValid, setUserNameValid] = useState(false);
  const [email, setEmail] = useState("sdf");
  const [city, setCity] = useState("");
  const [phone, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fade, setFade] = useState(false);
  const [isCountyFocus, setIsCountryFocus] = useState(false);
  const [isMailSended, setIsMailSended] = useState(false);
  const [isInvalied, setIsInvalied] = useState({
    fName: false,
    uName: false,
    mNum: false,
    email: false,
    city: false,
    password: false,
    cpassword: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    var temp = [];
    if (city) {
      CountryData.map((country) => {
        country.states.map((state) => {
          if (state.state_name.toLowerCase().includes(city.toLowerCase())) {
            temp.push({
              state: state.state_name,
              country: country.country_name,
            });
          }
        });
      });
      setSuggestions(temp);
    } else {
      setSuggestions([]);
    }
    if (!isCountyFocus) {
      setSuggestions([]);
      let isTrue = false;
      CountryData.map((country) => {
        country.states.map((state) => {
          if (state.state_name + ", " + country.country_name === city)
            isTrue = true;
        });
      });
      if (!isTrue) {
        setCity("");
      }
    }
  }, [city, isCountyFocus]);

  useEffect(() => {
    const validatieUserName = debounce(async () => {
      if (userName) {
        var response = await getResponse("/auth/validateUserName", "post", {
          userName,
        });
        console.log(response);
        if (response.status === 200) {
          setUserNameValid(response.data);
        }
      }
    }, 1500);

    validatieUserName();

    return () => {
      validatieUserName.cancel();
    };
  }, [userName]);

  const resendMail = async (email) => {
    const result = await resendVerifyEmail({ email });
    if (result) {
      notification.success({
        placement: "topRight",
        description: "Email verification was sent.",
        duration: 3,
      });
    } else {
      notification.error({
        placement: "topRight",
        description: "Email verification was not sent.",
        duration: 3,
      });
    }
    setFade(false);
  };

  const signUp = async () => {
    setFade(true);
    const registerData = {
      fname: fname,
      userName: userName,
      email: email,
      password: password,
      phone: phone,
      city: city,
    };

    const invaild = {
      fName: false,
      uName: false,
      mNum: false,
      email: false,
      city: false,
      password: false,
      cpassword: false,
    };
    let total_flag = false;
    if (password !== cpassword) {
      invaild.cpassword = true;
      total_flag = true;
    }
    if (fname === "") {
      invaild.fName = true;
      total_flag = true;
    }
    if (userName === "") {
      invaild.uName = true;
      total_flag = true;
    }
    if (city === "") {
      invaild.city = true;
      total_flag = true;
    }
    if (phone === "") {
      invaild.mNum = true;
      total_flag = true;
    }
    if (email === "") {
      invaild.email = true;
      total_flag = true;
    }
    if (password === "") {
      invaild.password = true;
      total_flag = true;
    }
    if (password.length < 6) {
      invaild.password = true;
      total_flag = true;
    }
    if (!total_flag) {
      var data = await userRegister(registerData);
      if (data?.status === 200) {
        notification.success({
          placement: "topRight",
          description: "Welcome to out service!",
          duration: 3,
        });
        setIsMailSended(true);
      } else {
        notification.error({
          placement: "topRight",
          description: "Email verification was not sent.",
          duration: 3,
        });
      }
    } else {
      setIsInvalied(invaild);
    }
    setFade(false);
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
              {!isMailSended && (
                <>
                  <h3>SignUp</h3>

                  {isInvalied.fName && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">First name is required</div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4">
                    <img src="./assets/logname.svg" alt="none" />
                    <input
                      placeholder="First Name"
                      type="text"
                      onChange={(e) => {
                        setFname(e.target.value);
                        setIsInvalied({ ...isInvalied, fName: false });
                      }}
                    />
                  </div>
                  {isInvalied.uName && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">Username Not Available</div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4 position-relative">
                    <img src="./assets/logUser.svg" alt="none" />
                    <input
                      placeholder="Username"
                      type="text"
                      onChange={(e) => {
                        setUserName(e.target.value);
                        setIsInvalied({ ...isInvalied, uName: false });
                      }}
                    />
                    {userName && (
                      <img
                        className="my-auto position-absolute mr-0"
                        src={
                          userNameValid
                            ? "./assets/valid.svg"
                            : "./assets/invalid.svg"
                        }
                        style={{
                          width: "1.8rem",
                          right: "0.5rem",
                          bottom: "0.7rem",
                        }}
                        alt="none"
                      />
                    )}
                  </div>
                  {isInvalied.email && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">Email is required</div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4">
                    <img src="./assets/logmail.svg" alt="none" />
                    <input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsInvalied({ ...isInvalied, email: false });
                      }}
                    />
                  </div>
                  {isInvalied.mNum && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">Mobile number is required</div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4">
                    <img src="./assets/logmobile.svg" alt="none" />
                    <input
                      placeholder="Mobile Number"
                      type="number"
                      onChange={(e) => {
                        setMobile(e.target.value);
                        setIsInvalied({ ...isInvalied, mNum: false });
                      }}
                    />
                  </div>
                  {isInvalied.city && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">City is required</div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4 position-relative">
                    <img src="./assets/logcity.svg" alt="none" />
                    <input
                      placeholder="City"
                      type="text"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        setIsInvalied({ ...isInvalied, city: false });
                      }}
                      onFocus={() => {
                        setIsCountryFocus(true);
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          setIsCountryFocus(false);
                        }, 200);
                      }}
                    />
                    {city && (
                      <div className="suggestion position-absolute w-100 px-3 overflow-y-auto">
                        {suggestions.map((cityData, index) => (
                          <p
                            className="my-1 cursor-pointer"
                            key={index}
                            onClick={() => {
                              setCity(cityData.state + ", " + cityData.country);
                            }}
                          >
                            {cityData.state + ", " + cityData.country}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  {isInvalied.password && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">
                        Password should Not be less than 6
                      </div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4">
                    <img src="./assets/logLock.svg" alt="none" />
                    <input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setIsInvalied({ ...isInvalied, password: false });
                      }}
                    />
                  </div>
                  {isInvalied.cpassword && (
                    <div
                      className="input-container d-flex mb-2"
                      style={{ borderBottom: "0px", height: "0px" }}
                    >
                      <div className="error-box">Password Not Matching</div>
                    </div>
                  )}
                  <div className="input-container d-flex mb-4">
                    <img src="./assets/logLock.svg" alt="none" />
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      onChange={(e) => {
                        setCpassword(e.target.value);
                        setIsInvalied({ ...isInvalied, cpassword: false });
                      }}
                    />
                  </div>

                  <button
                    className="py-1"
                    onClick={() => {
                      setFade(true);
                      signUp();
                    }}
                  >
                    {!fade ? (
                      "SignUp"
                    ) : (
                      <img
                        src="./assets/loading.gif"
                        class="imgloading"
                        alt="none"
                      />
                    )}
                  </button>
                  <span className="have-account">
                    Already have account!{" "}
                    <p
                      style={{
                        textDecoration: "underLine",
                        fontSize: "2rem",
                        display: "inline",
                      }}
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </p>
                  </span>
                </>
              )}
              {isMailSended && (
                <div className="resend-email">
                  <h3>SingUp SuccessFully</h3>
                  <p style={{ fontSize: 16, color: "#28A745" }}>
                    Verification Email has been sent to below registered Email
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      color: "#ffffff",
                      borderBottom: "1px solid #ffffff",
                    }}
                  >
                    {email}
                  </p>
                  <button
                    className="py-1"
                    onClick={() => {
                      setFade(true);
                      resendMail(email);
                    }}
                  >
                    {!fade ? (
                      "Resend Email"
                    ) : (
                      <img
                        src="./assets/loading.gif"
                        class="imgloading"
                        alt="none"
                      />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          {!isMailSended && (
            <div className="subsub2-sub1-auth-right mt-5">
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img
                  src="./assets/Google.svg"
                  alt="none"
                  style={{ width: "12.6rem", height: "4.4rem" }}
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
