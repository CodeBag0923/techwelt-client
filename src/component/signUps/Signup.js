import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

import { getResponse, userRegister } from "../../services/axios";
import { CountryData } from "../../utils/mockup";

const Signup = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [fname, setFname] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameValid, setUserNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fade, setFade] = useState(false);
  const [isCountyFocus, setIsCountryFocus] = useState(false);

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
          // if (state.state_name.toLowerCase().includes(city.toLowerCase())) {
          //   temp.push({
          //     state: state.state_name,
          //     country: country.country_name,
          //   });
          // }
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

    if (password !== cpassword) {
      alert("password not confirmed!");
      setFade(false);
      return;
    }
    if (fname === "") {
      alert("First Name is empty!");
      setFade(false);
      return;
    }
    if (userName === "") {
      alert("Last Name is empty!");
      setFade(false);
      return;
    }
    if (email === "") {
      alert("Email field is empty!");
      setFade(false);
      return;
    }
    if (password === "") {
      alert("Password field is empty!");
      setFade(false);
      return;
    }
    if (password.length < 6) {
      alert("Password should not be less than 6 digits!");
      setFade(false);
      return;
    } else var data = await userRegister(registerData);
    if (data?.status === 200) {
      alert("Verify Email Sent!");
    } else {
      alert(data.data.message);
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
              <h3>SignUp</h3>
              <div className="input-container d-flex mb-4">
                <img src="./assets/logname.svg" alt="none" />
                <input
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="input-container d-flex mb-4 position-relative">
                <img src="./assets/logUser.svg" alt="none" />
                <input
                  placeholder="Username"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
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
              <div className="input-container d-flex mb-4">
                <img src="./assets/logmail.svg" alt="none" />
                <input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container d-flex mb-4">
                <img src="./assets/logmobile.svg" alt="none" />
                <input
                  placeholder="Mobile Number"
                  type="number"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="input-container d-flex mb-4 position-relative">
                <img src="./assets/logcity.svg" alt="none" />
                <input
                  placeholder="City"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onFocus={() => {
                    setIsCountryFocus(true);
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setIsCountryFocus(false);
                    }, 100);
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
              <div className="input-container d-flex mb-4">
                <img src="./assets/logLock.svg" alt="none" />
                <input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-container d-flex mb-4">
                <img src="./assets/logLock.svg" alt="none" />
                <input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) => setCpassword(e.target.value)}
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

export default Signup;
