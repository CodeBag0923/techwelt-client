import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import { commandSetting } from "../../services/axios";
import {
  SWITCH_MENU_VISIBLE,
  SWITCH_SIDEBAR_VISIBLE,
} from "../../redux/store/types";
import { getDevices } from "../../redux/actions/devices";

import "./SideBar.css";

const connectStatus = [
  {
    id: 1,
    label: "Online",
    value: "Connected",
    icon: "./assets/Online.svg",
    color: "#28A745",
  },
  {
    id: 2,
    label: "Offline",
    value: "Not Connected",
    icon: "./assets/Offline.svg",
    color: "#D01400",
  },
  {
    id: 3,
    label: "Idle",
    value: "Idle",
    icon: "./assets/Idle.svg",
    color: "#F89823",
  },
];

const vehicleTypes = [
  {
    id: 1,
    label: "Car",
    icon: "./assets/Car.svg",
  },
  {
    id: 2,
    label: "Bike",
    icon: "./assets/Bike.svg",
  },
];

const SideBar = (props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const modalRef = useRef();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const devices = useSelector((state) => state.devicesList.devices);
  const showMenu = useSelector((state) => state.global.showMenu);
  const showSidebar = useSelector((state) => state.global.showSidebar);

  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [simState, setSimState] = useState(false);
  const [boardColor, setBoardColor] = useState(
    ".1rem solid rgb(158, 154, 154, 50%)"
  );
  const [uploadImg, setUploadImg] = useState("./assets/Pic11.svg");
  const [uploadText, setUploadText] = useState("Upload Config");
  const [enginebtn, setEnginebtn] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isUploadDialogShow, setIsUploadDialogShow] = useState(false);
  const [connectedTag, setConnectedTag] = useState("");
  const [vehicleTypeTag, setVehicleTypeTag] = useState("");
  const [selectedVeh, setSelectedVeh] = useState(null);
  const [selectedVehData, setSelectedVehData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const tokenData = {
        token: localStorage.getItem("token"),
      };
      (async () => {
        dispatch(getDevices(tokenData));
      })();
      setTimeout(() => {
        dispatch(getDevices(tokenData), 180000);
      });
    }
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedVeh(null);
      }
    };

    if (selectedVeh) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedVeh]);

  useEffect(() => {
    if (devices?.length > 0) {
      var result =
        devices.length > 0 &&
        devices?.filter(
          (item, index) =>
            (!connectedTag || item?.vehicle?.isConnected === connectedTag) &&
            (!vehicleTypeTag || item?.vehicle?.title === vehicleTypeTag)
        );
      setFilteredVehicles(result);
    }
  }, [connectedTag, vehicleTypeTag, devices]);

  const sendCommandData = async (imei) => {
    const sendData = {
      token: localStorage.getItem("token"),
      type: "EngineOn",
      params: {
        on: enginebtn ? "1" : "0",
      },
      devImei: imei,
    };
    var res = await commandSetting(sendData);
    console.log("🚀 ~ file: SideBar.js:82 ~ sendCommandData ~ res:", res);
    // if (res.data.status === 200) {
    //   alert("Successfully engine start!")
    // }
    // else {
    //   alert("Something went wrong!")
    // }
  };

  const handleLocation = (id) => {
    console.log(location.pathname);
    if (!devices) {
      console.log("device");
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }
    if (location.pathname === "/Dashboard") {
      var lat =
        devices?.at(id)?.vehicle?.teltonikas[
          devices?.at(id)?.vehicle?.teltonikas?.length - 1
        ]?.lat;
      var lng =
        devices?.at(id)?.vehicle?.teltonikas[
          devices?.at(id)?.vehicle?.teltonikas?.length - 1
        ]?.lng;
      props?.locatePosition({ lat: lat, lng: lng });
    }
  };

  const handleNavigation = (id) => {
    console.log("handleNavigation");
    if (!devices) {
      console.log("device");
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }
    if (location.pathname === "/Dashboard") {
      var lat =
        devices?.at(id)?.vehicle?.teltonikas[
          devices?.at(id)?.vehicle?.teltonikas?.length - 1
        ]?.lat;
      var lng =
        devices?.at(id)?.vehicle?.teltonikas[
          devices?.at(id)?.vehicle?.teltonikas?.length - 1
        ]?.lng;
      props?.navigatePosition({ lat: lat, lng: lng });
    }
  };

  const handle1 = (title, id) => {
    setBoardColor(id);
    if (title === "Car") {
    } else {
    }
  };

  const handleEngine = (e, imei) => {
    console.log(e.target.checked);
    let state = e.target.checked;
    if (state === false) {
      // state=false;
      // console.log(state);
      setEnginebtn(true);
    } else {
      // state=true;
      // console.log(state);
      setEnginebtn(false);
    }
    sendCommandData(imei);
  };

  const handlUpload = () => {
    setUploadImg("./assets/Pic12.svg");
    setUploadText("Update In Progres");
    setIsUploadDialogShow(!isUploadDialogShow);
    setTimeout(() => {
      setUploadImg("./assets/Pic11.svg");
      setUploadText("Upload Config");
    }, 2000);
  };

  const formatDate = (props) => {
    var jj = new Date(props);
    return jj.toLocaleDateString("en-GB") === "Invalid Date"
      ? ""
      : jj.toLocaleDateString("en-GB");
  };

  const formatTime = (props) => {
    var jj = new Date(props);
    return jj.toLocaleTimeString() === "Invalid Date"
      ? ""
      : jj.toLocaleTimeString();
  };

  const handleColor = (status) => {
    if (status === "Connected") {
      return "#28A745";
    } else if (status === "Not Connected") {
      return "#FF0000";
    } else if (status === "Idle") {
      return "#F89823";
    }
  };

  const handleText = (data) => {
    const val = data.target.value;
    setSearchText(val);
  };

  const handleTagClick = (value, type) => {
    switch (type) {
      case 0:
        setConnectedTag(value === connectedTag ? "" : value);
        break;
      case 1:
        setVehicleTypeTag(value === vehicleTypeTag ? "" : value);
        break;
      default:
        break;
    }
  };

  const handleVehClick = (value) => {
    setSelectedVeh(value === selectedVeh ? null : value);

    if (value && value !== selectedVeh) {
      setSelectedVehData(
        devices?.filter((d) => d.vehicle.deviceImei === value)[0]
      );
    }

    var element = document.getElementById("veh-" + value);
    var rect = element.getBoundingClientRect();
  };

  const handleMobileMenuControlClick = () => {
    dispatch({ type: SWITCH_SIDEBAR_VISIBLE, payload: !showSidebar });
    dispatch({ type: SWITCH_MENU_VISIBLE, payload: false });
  };

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <>
      {isMobile ? (
        <>
          {!showMenu && (
            <div
              className={`position-absolute d-flex justify-content-center align-items-center menu-icon w-100 ${
                showSidebar ? "up-arrow" : "down-arrow"
              }`}
              onClick={handleMobileMenuControlClick}
            >
              <img className="" src="./assets/arrow.svg" alt="arrow" />
            </div>
          )}
          {showSidebar && (
            <div className="position-absolute w-100 h-100">
              <div className="main-sidebar d-flex flex-column h-100 position-relative">
                <div className="filter d-flex flex-column my-5">
                  <div className="d-flex justify-content-between align-items-center px-5 mx-5 my-1">
                    {connectStatus.map((item) => (
                      <div
                        key={item.id}
                        className={`connected ${
                          connectedTag === item.value && "selected"
                        } d-flex flex-column align-items-center justify-content-center py-1`}
                        style={{ color: item.color }}
                        onClick={() => handleTagClick(item.value, 0)}
                      >
                        <img className="my-1" src={item.icon} alt="none" />
                        <p className="my-0">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-5 mx-5 my-1">
                    {vehicleTypes.map((item) => (
                      <div
                        key={item.id}
                        className={`connected ${
                          vehicleTypeTag === item.label && "selected"
                        } d-flex flex-column align-items-center justify-content-center py-2`}
                        onClick={() => handleTagClick(item.label, 1)}
                      >
                        <img className="my-1" src={item.icon} alt="none" />
                        <p className="my-0">{item.label}</p>
                      </div>
                    ))}
                    <div className="connected"></div>
                  </div>
                  <div className="sub1-div5 d-flex justify-content-end mt-4">
                    <p className="text-center text-white px-4 py-1 mb-2">
                      Total Vehicles: &nbsp; {filteredVehicles?.length}
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="subsub1-sub2-div5 w-100 d-flex justify-content-evenly position-relative align-items-center">
                      <img
                        className="position-absolute"
                        src="./assets/user2.svg"
                        alt="none"
                      />
                      <select
                        className="w-100 text-center"
                        placeholder="Owner Name"
                      >
                        <option>Owner Name</option>
                        <option></option>
                        <option></option>
                      </select>
                    </div>
                    <input
                      className="filter-input w-100 mt-3 text-center"
                      placeholder="Search"
                      value={searchText}
                      onChange={(value) => handleText(value)}
                    />
                  </div>
                </div>
                <div className="horizontal-bar m-3"></div>
                <div className="device-container overflow-auto px-1">
                  {filteredVehicles?.map((item, index) => {
                    return (
                      <div
                        key={item.vehicle.deviceImei}
                        id={"veh-" + item.vehicle.deviceImei}
                        className={`sub1-div6 d-flex my-2 py-3 ${
                          item.vehicle.deviceImei === selectedVeh && "selected"
                        }`}
                        onClick={() => handleVehClick(item.vehicle.deviceImei)}
                      >
                        <div className="left-sub1-div6 d-flex flex-column justify-content-between align-items-center px-2 py-4">
                          <img
                            src={
                              item.vehicle.title === "Car"
                                ? "./assets/Car.svg"
                                : "./assets/Bike.svg"
                            }
                            alt="none"
                            className="my-2"
                          />
                          <span
                            className="text-white my-1 text-center w-100"
                            style={{
                              backgroundColor: handleColor(
                                item.vehicle.isConnected
                              ),
                            }}
                          >
                            {item?.vehicle?.isConnected}
                          </span>
                        </div>
                        <div className="vertical-bar"></div>
                        <div className="right-sub1-div6 d-flex flex-column px-2 justify-content-between">
                          <span>{item.vehicle.vehicleName}</span>
                          <div className="right-sub1-div6-sub1 d-flex align-items-center">
                            <img src="./assets/calender.png" alt="none" />
                            <p className="mb-0">
                              {formatDate(
                                item?.vehicle?.teltonikas?.at(0)?.updatedAt
                              )}
                            </p>
                            <p className="mb-0">
                              {formatTime(
                                item?.vehicle?.teltonikas?.at(0)?.updatedAt
                              )}
                            </p>
                          </div>
                          <div className="right-sub1-div6-sub2 d-flex justify-content-evenly">
                            <img
                              src="./assets/I.svg"
                              id="mark"
                              alt="none"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handle1();
                              }}
                            />
                            <img
                              src="./assets/Pointer.svg"
                              id="location"
                              alt="none"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleLocation(index);
                              }}
                            />
                            <img
                              src="./assets/Location.svg"
                              id="navigation"
                              alt="none"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleNavigation(index);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {selectedVeh && (
                  <div
                    ref={modalRef}
                    className="main-car-portal-side-bar position-absolute"
                  >
                    <div className="position-relative">
                      <img
                        className="car-close-portal-side-bar"
                        src="./assets/Close.svg"
                        alt="none"
                        onClick={() => setSelectedVeh(null)}
                      />
                      <div className="car-portal-side-bar d-flex justify-content-center align-items-center">
                        <div className="sub1-car-portal-side-bar bg-white">
                          <div className="subsub1-sub1-car-portal-side-bar d-flex px-4 py-3 w-100 align-items-center">
                            <img src="./assets/uber.png" alt="none" />
                            <p className="mb-0 ml-5">UBER</p>
                          </div>
                          <div className="subsub2-sub1-car-portal-side-bar d-flex align-items-center my-1 py-3 px-4">
                            <img src="./assets/Car.svg" alt="none" />
                            <p className="ml-3 mb-0">
                              {selectedVehData?.vehicle?.vehicleName}
                            </p>
                          </div>
                          <div className="subsub3-sub1-car-portal-side-bar my-1 py-2 px-4">
                            <div className="sub1-subsub3-sub1-car-portal-side-bar d-flex align-items-center">
                              <img src="./assets/arrow.png" alt="none" />
                              <p
                                className="mb-0 ml-4"
                                style={{
                                  color: handleColor(
                                    selectedVehData?.vehicle?.isConnected
                                  ),
                                }}
                              >
                                {selectedVehData?.vehicle?.isConnected}
                              </p>
                            </div>
                            <div className="sub2-subsub3-sub1-car-portal-side-bar d-flex justify-content-center mt-2">
                              <p className="mb-0">
                                {formatDate(
                                  selectedVehData?.vehicle?.teltonikas?.at(0)
                                    ?.updatedAt
                                )}
                              </p>
                              <p className="mb-0 ml-2">
                                {formatTime(
                                  selectedVehData?.vehicle?.teltonikas?.at(0)
                                    ?.updatedAt
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="subsub3-sub1-car-portal-side-bar my-1 py-2 px-4">
                            <div className="sub1-subsub3-sub1-car-portal-side-bar d-flex align-items-center">
                              <img src="./assets/gps.png" alt="none" />
                              <p className="mb-0 ml-4">
                                {selectedVehData?.vehicle?.gpsFixed === 1
                                  ? "Not Fixed"
                                  : "GPS Fixed"}
                              </p>
                            </div>
                            <div className="sub2-subsub3-sub1-car-portal-side-bar d-flex justify-content-center mt-2">
                              <p className="mb-0">
                                {formatDate(
                                  selectedVehData?.vehicle?.teltonikas?.at(0)
                                    ?.updatedAt
                                )}
                              </p>
                              <p className="mb-0 ml-2">
                                {formatTime(
                                  selectedVehData?.vehicle?.teltonikas?.at(0)
                                    ?.updatedAt
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="subsub5-sub1-car-portal-side-bar">
                            <img src="./assets/eng.jpeg" alt="none" />
                          </div>
                          <div className="subsub6-sub1-car-portal-side-bar d-flex justify-content-center align-items-center">
                            <p className="mb-0">
                              IMEI: {selectedVehData?.vehicle?.deviceImei}
                            </p>
                          </div>
                        </div>

                        <div className="sub2-car-portal-side-bar h-100 d-flex flex-column justify-content-between align-items-center px-0 py-5">
                          <div className="subsub1-sub2-car-portal-side-bar w-100 d-flex">
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src="./assets/Pic1.svg" alt="none" />
                              <p className="mt-5 mb-0 text-white">
                                {selectedVehData?.vehicle?.teltonikas
                                  ?.length !== 0
                                  ? selectedVehData?.vehicle?.teltonikas[
                                      selectedVehData?.vehicle?.teltonikas
                                        ?.length - 1
                                    ]?.speed
                                  : ""}
                                KM/HR
                              </p>
                            </div>
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src={"./assets/Key.svg"} alt="none" />
                              <p className="mt-5 mb-0 text-white text-center">
                                Engine {selectedVehData?.vehicle?.engineStatus}
                              </p>
                            </div>
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src="./assets/Pic3.svg" alt="none" />
                              <p className="mt-5 mb-0 text-white">
                                {selectedVehData?.vehicle?.teltonikas.length !==
                                0
                                  ? selectedVehData?.vehicle?.teltonikas[
                                      selectedVehData?.vehicle?.teltonikas
                                        ?.length - 1
                                    ]?.fuel
                                  : ""}
                                L
                              </p>
                            </div>
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src="./assets/Pic4.svg" alt="none" />
                              <p className="mt-5 mb-0 text-white">
                                {selectedVehData?.vehicle?.temperature} C
                              </p>
                            </div>
                          </div>
                          <div className="horizontal-bar w-100"></div>
                          <div className="subsub1-sub2-car-portal-side-bar w-100 d-flex">
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src="./assets/Pic5.svg" alt="none" />
                              {/* <img src="./assets/Pic5.svg" alt="none" style={{ display: !simState ? "flex" : "none" }} /> */}
                              {/* <div style={{ width: "13.5rem", height: "6.7rem", position: "relative", marginLeft: "1rem", marginTop: "-1rem", display: simState ? "flex" : "none" }}>
                              <img src="./assets/close.svg" alt="none" style={{ width: "1.5rem", height: "1.5rem", position: "absolute", right: "-2.3rem" }} onClick={() => closeSimCard()} />
                              <div style={{ width: "15.2rem", height: "6.2rem", backgroundColor: "white", marginTop: ".8rem", borderRadius: ".8rem", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", display: "flex", }}>
                                <p style={{ width: "13.4rem", height: "1.2rem", fontSize: "1.2rem" }}>SIM No. {selectedVehData?.vehicle?.mobileNo}</p>
                                <p style={{ width: "13.4rem", height: "1.2rem", fontSize: "1.2rem" }}>ICCID {selectedVehData?.vehicle?.iccid}</p>
                              </div>
                            </div> */}
                              <img
                                className="mt-5 mb-0"
                                style={{ width: "1.5rem", height: "1.5rem" }}
                                src="./assets/Group.svg"
                                alt="none"
                                onClick={() => setSimState(true)}
                              />
                            </div>
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src="./assets/Battery.svg" alt="none" />
                              <p className="mt-5 mb-0 text-white">
                                {selectedVehData?.vehicle?.batteryVolt
                                  ?.toString()
                                  ?.slice(0, 3)}
                                V
                              </p>
                            </div>
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img src="./assets/Pic7.svg" alt="none" />
                              <p className="mt-5 mb-0 text-white">Camera</p>
                              {/* <img className="mt-5 mb-0" style={{width: "1.5rem", height: "1.5rem"}} src="./assets/Group.svg" alt="none" /> */}
                            </div>
                          </div>
                          <div className="horizontal-bar w-100"></div>
                          <div className="subsub1-sub2-car-portal-side-bar w-100 d-flex">
                            <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                              <img
                                src={
                                  enginebtn === false
                                    ? "./assets/Pic13.svg"
                                    : "./assets/Pic2.svg"
                                }
                                alt="none"
                              />
                              <label className="car-switch mt-5">
                                <input
                                  type="checkbox"
                                  onClick={(e) => {
                                    handleEngine(
                                      e,
                                      selectedVehData?.vehicle.deviceImei
                                    );
                                  }}
                                />
                                <span className="car-slider">
                                  <div className="car-on-off">
                                    <p className="car-p">ON</p>
                                    <p
                                      className="car-p"
                                      style={{ marginRight: ".5rem" }}
                                    >
                                      OFF
                                    </p>
                                  </div>
                                </span>
                              </label>
                            </div>
                            <div
                              className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center"
                              onClick={() => {
                                navigate("/History", {
                                  state: {
                                    deviceImei:
                                      selectedVehData?.vehicle?.deviceImei,
                                    vehicleType:
                                      selectedVehData?.vehicle?.title,
                                    vehicleName:
                                      selectedVehData?.vehicle?.vehicleName,
                                    selectedVeh: selectedVeh,
                                  },
                                });
                              }}
                            >
                              <img src="./assets/Pic9.svg" alt="none" />
                              <p className="mt-5 mb-0 text-white">History</p>
                            </div>
                            <div
                              className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center cursor-pointer"
                              onClick={() => {
                                navigate("/CommandsSettings", {
                                  state: {
                                    Name: selectedVehData?.vehicle.vehicleName,
                                    device:
                                      selectedVehData?.vehicle.deviceType +
                                      " " +
                                      selectedVehData?.vehicle.deviceModel,
                                    deviceImei:
                                      selectedVehData?.vehicle?.deviceImei,
                                  },
                                });
                              }}
                            >
                              <img src="./assets/Pic10.svg" alt="none" />
                              <p className="text-center text-white mt-5 mb-0">
                                Commands
                                <br />
                                Setting
                              </p>
                            </div>
                            <div
                              className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center"
                              onClick={() => handlUpload()}
                            >
                              <img src={uploadImg} alt="none" />
                              <p
                                className="mb-0 mt-5"
                                style={{
                                  color:
                                    uploadText === "Upload Config"
                                      ? "white"
                                      : "#F89823",
                                }}
                              >
                                {uploadText}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      : ''
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="d-flex flex-column sidebar">
          <div className="logo py-1 d-flex align-items-end ml-4">
            <img
              src="./assets/logo.png"
              alt="none"
              onClick={() => navigate("/Dashboard")}
            />
            <p className="ml-3">TECHWELT</p>
          </div>
          <div className="main-sidebar d-flex flex-column h-100 py-4 position-relative">
            <div className="filter px-2 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center px-3 my-1">
                {connectStatus.map((item) => (
                  <div
                    key={item.id}
                    className={`connected ${
                      connectedTag === item.value && "selected"
                    } d-flex flex-column align-items-center justify-content-center py-1`}
                    style={{ color: item.color }}
                    onClick={() => handleTagClick(item.value, 0)}
                  >
                    <img className="my-1" src={item.icon} alt="none" />
                    <p className="my-0">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between align-items-center px-3 my-1">
                {vehicleTypes.map((item) => (
                  <div
                    key={item.id}
                    className={`connected ${
                      vehicleTypeTag === item.label && "selected"
                    } d-flex flex-column align-items-center justify-content-center py-2`}
                    onClick={() => handleTagClick(item.label, 1)}
                  >
                    <img className="my-1" src={item.icon} alt="none" />
                    <p className="my-0">{item.label}</p>
                  </div>
                ))}
                <div className="connected"></div>
              </div>
              <div className="sub1-div5 d-flex justify-content-end mr-3 mt-4">
                <p className="text-center text-white px-4 py-1 mb-2">
                  Total Vehicles: &nbsp; {filteredVehicles?.length}
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="subsub1-sub2-div5 w-100 d-flex justify-content-evenly position-relative align-items-center">
                  <img
                    className="position-absolute"
                    src="./assets/user2.svg"
                    alt="none"
                  />
                  <select
                    className="w-100 text-center"
                    placeholder="Owner Name"
                  >
                    <option>Owner Name</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                <input
                  className="filter-input w-100 mt-3 text-center"
                  placeholder="Search"
                  value={searchText}
                  onChange={(value) => handleText(value)}
                />
              </div>
            </div>
            <div className="horizontal-bar m-3"></div>
            <div className="device-container overflow-auto px-2">
              {filteredVehicles?.map((item, index) => {
                return (
                  <div
                    key={item.vehicle.deviceImei}
                    id={"veh-" + item.vehicle.deviceImei}
                    className={`sub1-div6 d-flex my-2 py-2 ${
                      item.vehicle.deviceImei === selectedVeh && "selected"
                    }`}
                    onClick={() => handleVehClick(item.vehicle.deviceImei)}
                  >
                    <div className="left-sub1-div6 d-flex flex-column justify-content-center align-items-center px-2">
                      <img
                        src={
                          item.vehicle.title === "Car"
                            ? "./assets/Car.svg"
                            : "./assets/Bike.svg"
                        }
                        alt="none"
                        className="my-2"
                      />
                      <span
                        className="text-white my-1 text-center w-100"
                        style={{
                          backgroundColor: handleColor(
                            item.vehicle.isConnected
                          ),
                        }}
                      >
                        {item?.vehicle?.isConnected}
                      </span>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="right-sub1-div6 d-flex flex-column px-2 justify-content-between">
                      <span>{item.vehicle.vehicleName}</span>
                      <div className="right-sub1-div6-sub1 d-flex align-items-center">
                        <img src="./assets/calender.png" alt="none" />
                        <p className="mb-0">
                          {formatDate(
                            item?.vehicle?.teltonikas?.at(0)?.updatedAt
                          )}
                        </p>
                        <p className="mb-0">
                          {formatTime(
                            item?.vehicle?.teltonikas?.at(0)?.updatedAt
                          )}
                        </p>
                      </div>
                      <div className="right-sub1-div6-sub2 d-flex justify-content-evenly">
                        <img
                          src="./assets/I.svg"
                          id="mark"
                          alt="none"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handle1();
                          }}
                        />
                        <img
                          src="./assets/Pointer.svg"
                          id="location"
                          alt="none"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleLocation(index);
                          }}
                        />
                        <img
                          src="./assets/Location.svg"
                          id="navigation"
                          alt="none"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleNavigation(index);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {selectedVeh && (
              <div
                ref={modalRef}
                className="main-car-portal-side-bar position-absolute"
              >
                <div className="position-relative">
                  <img
                    className="car-close-portal-side-bar"
                    src="./assets/Close.svg"
                    alt="none"
                    onClick={() => setSelectedVeh(null)}
                  />
                  <div className="car-portal-side-bar d-flex justify-content-center align-items-center">
                    <div className="sub1-car-portal-side-bar bg-white">
                      <div className="subsub1-sub1-car-portal-side-bar d-flex px-4 py-3 w-100 align-items-center">
                        <img src="./assets/uber.png" alt="none" />
                        <p className="mb-0 ml-5">UBER</p>
                      </div>
                      <div className="subsub2-sub1-car-portal-side-bar d-flex align-items-center my-1 py-3 px-4">
                        <img src="./assets/Car.svg" alt="none" />
                        <p className="ml-3 mb-0">
                          {selectedVehData?.vehicle?.vehicleName}
                        </p>
                      </div>
                      <div className="subsub3-sub1-car-portal-side-bar my-1 py-2 px-4">
                        <div className="sub1-subsub3-sub1-car-portal-side-bar d-flex align-items-center">
                          <img src="./assets/arrow.png" alt="none" />
                          <p
                            className="mb-0 ml-4"
                            style={{
                              color: handleColor(
                                selectedVehData?.vehicle?.isConnected
                              ),
                            }}
                          >
                            {selectedVehData?.vehicle?.isConnected}
                          </p>
                        </div>
                        <div className="sub2-subsub3-sub1-car-portal-side-bar d-flex justify-content-center mt-2">
                          <p className="mb-0">
                            {formatDate(
                              selectedVehData?.vehicle?.teltonikas?.at(0)
                                ?.updatedAt
                            )}
                          </p>
                          <p className="mb-0 ml-2">
                            {formatTime(
                              selectedVehData?.vehicle?.teltonikas?.at(0)
                                ?.updatedAt
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="subsub3-sub1-car-portal-side-bar my-1 py-2 px-4">
                        <div className="sub1-subsub3-sub1-car-portal-side-bar d-flex align-items-center">
                          <img src="./assets/gps.png" alt="none" />
                          <p className="mb-0 ml-4">
                            {selectedVehData?.vehicle?.gpsFixed === 1
                              ? "Not Fixed"
                              : "GPS Fixed"}
                          </p>
                        </div>
                        <div className="sub2-subsub3-sub1-car-portal-side-bar d-flex justify-content-center mt-2">
                          <p className="mb-0">
                            {formatDate(
                              selectedVehData?.vehicle?.teltonikas?.at(0)
                                ?.updatedAt
                            )}
                          </p>
                          <p className="mb-0 ml-2">
                            {formatTime(
                              selectedVehData?.vehicle?.teltonikas?.at(0)
                                ?.updatedAt
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="subsub5-sub1-car-portal-side-bar">
                        <img src="./assets/eng.jpeg" alt="none" />
                      </div>
                      <div className="subsub6-sub1-car-portal-side-bar d-flex justify-content-center align-items-center">
                        <p className="mb-0">
                          IMEI: {selectedVehData?.vehicle?.deviceImei}
                        </p>
                      </div>
                    </div>

                    <div className="sub2-car-portal-side-bar h-100 d-flex flex-column justify-content-between align-items-center px-0 py-5">
                      <div className="subsub1-sub2-car-portal-side-bar w-100 d-flex">
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src="./assets/Pic1.svg" alt="none" />
                          <p className="mt-5 mb-0 text-white">
                            {selectedVehData?.vehicle?.teltonikas?.length !== 0
                              ? selectedVehData?.vehicle?.teltonikas[
                                  selectedVehData?.vehicle?.teltonikas?.length -
                                    1
                                ]?.speed
                              : ""}
                            KM/HR
                          </p>
                        </div>
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src={"./assets/Key.svg"} alt="none" />
                          <p className="mt-5 mb-0 text-white text-center">
                            Engine {selectedVehData?.vehicle?.engineStatus}
                          </p>
                        </div>
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src="./assets/Pic3.svg" alt="none" />
                          <p className="mt-5 mb-0 text-white">
                            {selectedVehData?.vehicle?.teltonikas.length !== 0
                              ? selectedVehData?.vehicle?.teltonikas[
                                  selectedVehData?.vehicle?.teltonikas?.length -
                                    1
                                ]?.fuel
                              : ""}
                            L
                          </p>
                        </div>
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src="./assets/Pic4.svg" alt="none" />
                          <p className="mt-5 mb-0 text-white">
                            {selectedVehData?.vehicle?.temperature} C
                          </p>
                        </div>
                      </div>
                      <div className="horizontal-bar w-100"></div>
                      <div className="subsub1-sub2-car-portal-side-bar w-100 d-flex">
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src="./assets/Pic5.svg" alt="none" />
                          {/* <img src="./assets/Pic5.svg" alt="none" style={{ display: !simState ? "flex" : "none" }} /> */}
                          {/* <div style={{ width: "13.5rem", height: "6.7rem", position: "relative", marginLeft: "1rem", marginTop: "-1rem", display: simState ? "flex" : "none" }}>
                          <img src="./assets/close.svg" alt="none" style={{ width: "1.5rem", height: "1.5rem", position: "absolute", right: "-2.3rem" }} onClick={() => closeSimCard()} />
                          <div style={{ width: "15.2rem", height: "6.2rem", backgroundColor: "white", marginTop: ".8rem", borderRadius: ".8rem", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", display: "flex", }}>
                            <p style={{ width: "13.4rem", height: "1.2rem", fontSize: "1.2rem" }}>SIM No. {selectedVehData?.vehicle?.mobileNo}</p>
                            <p style={{ width: "13.4rem", height: "1.2rem", fontSize: "1.2rem" }}>ICCID {selectedVehData?.vehicle?.iccid}</p>
                          </div>
                        </div> */}
                          <img
                            className="mt-5 mb-0"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                            src="./assets/Group.svg"
                            alt="none"
                            onClick={() => setSimState(true)}
                          />
                        </div>
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src="./assets/Battery.svg" alt="none" />
                          <p className="mt-5 mb-0 text-white">
                            {selectedVehData?.vehicle?.batteryVolt
                              ?.toString()
                              ?.slice(0, 3)}
                            V
                          </p>
                        </div>
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img src="./assets/Pic7.svg" alt="none" />
                          <p className="mt-5 mb-0 text-white">Camera</p>
                          {/* <img className="mt-5 mb-0" style={{width: "1.5rem", height: "1.5rem"}} src="./assets/Group.svg" alt="none" /> */}
                        </div>
                      </div>
                      <div className="horizontal-bar w-100"></div>
                      <div className="subsub1-sub2-car-portal-side-bar w-100 d-flex">
                        <div className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center">
                          <img
                            src={
                              enginebtn === false
                                ? "./assets/Pic13.svg"
                                : "./assets/Pic2.svg"
                            }
                            alt="none"
                          />
                          <label className="car-switch mt-5">
                            <input
                              type="checkbox"
                              onClick={(e) => {
                                handleEngine(
                                  e,
                                  selectedVehData?.vehicle.deviceImei
                                );
                              }}
                            />
                            <span className="car-slider">
                              <div className="car-on-off">
                                <p className="car-p">ON</p>
                                <p
                                  className="car-p"
                                  style={{ marginRight: ".5rem" }}
                                >
                                  OFF
                                </p>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div
                          className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center"
                          onClick={() => {
                            navigate("/History", {
                              state: {
                                deviceImei:
                                  selectedVehData?.vehicle?.deviceImei,
                                vehicleType: selectedVehData?.vehicle?.title,
                                vehicleName:
                                  selectedVehData?.vehicle?.vehicleName,
                                selectedVeh: selectedVeh,
                              },
                            });
                          }}
                        >
                          <img src="./assets/Pic9.svg" alt="none" />
                          <p className="mt-5 mb-0 text-white">History</p>
                        </div>
                        <div
                          className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center cursor-pointer"
                          onClick={() => {
                            navigate("/CommandsSettings", {
                              state: {
                                Name: selectedVehData?.vehicle.vehicleName,
                                device:
                                  selectedVehData?.vehicle.deviceType +
                                  " " +
                                  selectedVehData?.vehicle.deviceModel,
                                deviceImei:
                                  selectedVehData?.vehicle?.deviceImei,
                              },
                            });
                          }}
                        >
                          <img src="./assets/Pic10.svg" alt="none" />
                          <p className="text-center text-white mt-5 mb-0">
                            Commands
                            <br />
                            Setting
                          </p>
                        </div>
                        <div
                          className="sub1-subsub1-sub2-car-portal-side-bar d-flex col-3 flex-column align-items-center"
                          onClick={() => handlUpload()}
                        >
                          <img src={uploadImg} alt="none" />
                          <p
                            className="mb-0 mt-5"
                            style={{
                              color:
                                uploadText === "Upload Config"
                                  ? "white"
                                  : "#F89823",
                            }}
                          >
                            {uploadText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  : ''
                </div>
              </div>
            )}
            {/* <div className="main-car-portal-side-bar">
            <div className="upload-config-class">
              <div className="upload-type-style">
                <p>File:</p>
                <input type="file" name="configFile" onChange={(e) => handleFileChange(e)} />
  
              </div>
              <div className="upload-type-style">
                <p>Type:</p>
                <input type="text" />
              </div>
              <div className="upload-type-style">
                <p>Company:</p>
                <input type="text" />
              </div>
              <div className="upload-type-style">
                <p>Description:</p>
                <input type="text" />
              </div>
              <button onClick={handleUploadConfigFile}>Submit</button>
            </div>
          </div>  */}
            {/* <div className="main-truck-portal-side-bar" style={{ display: truckPortal }}>
            <div className="truck-close-portal-side-bar" style={{ cursor: "pointer" }}>
              <img
                src="./assets/Close.svg"
                alt="none"
                onClick={() => handleClose()}
              />
            </div>
            <div className="truck-portal-side-bar">
              {devicesDataMockUp ?
                <div className="sub1-truck-portal-side-bar">
                  <div className="subsub1-sub1-truck-portal-side-bar">
                    <img src="./assets/uber.png" alt="none" />
                    <p>UBER</p>
                  </div>
                  <div className="subsub2-sub1-truck-portal-side-bar">
                    <img src="./assets/truck.svg" alt="none" />
                    <p>{selectedVehData?.vehicle?.vehicleName}</p>
                  </div>
                  <div className="subsub3-sub1-truck-portal-side-bar">
                    <div className="sub1-subsub3-sub1-truck-portal-side-bar">
                      <img src="./assets/arrow.png" alt="none" />
                      <p style={{ color: handleColor(devicesDataMockUp?.at(selectedVeh)?.vehicle?.isConnected) }}>{devicesDataMockUp?.at(selectedVeh)?.vehicle?.isConnected}</p>
                    </div>
                    <div className="sub2-subsub3-sub1-truck-portal-side-bar">
                      <p>{formatDate(devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.at(0)?.updatedAt)}</p>
                      <p>{formatTime(devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.at(0)?.updatedAt)}</p>
                    </div>
                  </div>
                  <div className="subsub4-sub1-truck-portal-side-bar">
                    <div className="sub1-subsub4-sub1-truck-portal-side-bar">
                      <img src="./assets/gps.svg" alt="none" />
                      <p>Not Fixed</p>
                    </div>
  
                    <div className="sub2-subsub4-sub1-truck-portal-side-bar">
                      <p>{formatDate(devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.at(0)?.updatedAt)}</p>
                      <p>{formatTime(devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.at(0)?.updatedAt)}</p>
                    </div>
                  </div>
                  <div className="subsub5-sub1-truck-portal-side-bar">
                    <img src="./assets/eng.jpeg" alt="none" />
                  </div>
                  <div className="subsub6-sub1-truck-portal-side-bar">
                    <p>IMEI: {devicesDataMockUp?.at(selectedVeh)?.vehicle?.deviceImei}</p>
                  </div>
                </div> : ''
              }
  
              <div className="sub2-truck-portal-side-bar">
                <div className="subsub1-sub2-truck-portal-side-bar">
                  <div className="sub1-subsub1-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic1.svg" alt="none" />
                    <p style={{ marginLeft: 10 }}>{devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas.length !== 0 ?
                      devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas[devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.length - 1]?.speed
                      : ""}KM/HR</p>
                  </div>
                  <div className="sub2-subsub1-sub2-truck-portal-side-bar">
                    <img src={engineState === true ? "./assets/Pic2.svg" : "./assets/Pic13.svg"} alt="none" />
                    <p>Engine {devicesDataMockUp?.at(selectedVeh)?.vehicle?.engineSate}</p>
                  </div>
                  <div className="sub3-subsub1-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic3.svg" alt="none" />
                    <p>{devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas.length !== 0 ?
                      devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas[devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.length - 1]?.fuel
                      : ""}L</p>
                  </div>
                  <div className="sub4-subsub1-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic3.svg" alt="none" />
                    <p>{devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas.length !== 0 ?
                      devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas[devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.length - 1]?.fuel
                      : ""}L</p>
                  </div>
                  <div className="sub5-subsub1-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic3.svg" alt="none" />
                    <p>{devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas.length !== 0 ?
                      devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas[devicesDataMockUp?.at(selectedVeh)?.vehicle?.teltonikas?.length - 1]?.fuel
                      : ""}L</p>
                  </div>
                </div>
                <div
                  style={{
                    width: "48.2rem",
                    backgroundColor: "grey",
                    height: ".1rem",
                  }}
                >
                  <hr />
                </div>
                <div className="subsub2-sub2-truck-portal-side-bar">
                  <div className="sub1-subsub2-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic4.svg" alt="none" />
                    <p>{devicesDataMockUp?.at(0)?.vehicle?.temperature} C</p>
                  </div>
                  <div className="sub2-subsub2-sub2-car-portal-side-bar" style={{ cursor: "pointer" }} >
                    <img src="./assets/Pic5.svg" alt="none" style={{ display: !simState ? "flex" : "none" }} />
                    <div style={{ width: "13.5rem", height: "6.7rem", position: "relative", marginLeft: "1rem", marginTop: "-1rem", display: simState ? "flex" : "none" }}>
                      <img src="./assets/close.svg" alt="none" style={{ width: "1.5rem", height: "1.5rem", position: "absolute", right: "-2.3rem" }} onClick={() => closeSimCard()} />
                      <div style={{ width: "15.2rem", height: "6.2rem", backgroundColor: "white", marginTop: ".8rem", borderRadius: ".8rem", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", display: "flex", }}>
                        <p style={{ width: "13.4rem", height: "1.2rem", fontSize: "1.2rem" }}>SIM No. {devicesDataMockUp?.at(selectedVeh)?.vehicle?.mobileNo}</p>
                        <p style={{ width: "13.4rem", height: "1.2rem", fontSize: "1.2rem" }}>ICCID {devicesDataMockUp?.at(selectedVeh)?.vehicle?.iccid}</p>
                      </div>
                    </div>
                    <img src="./assets/Group.svg" alt="none" onClick={() => setSimState(true)} />
                  </div>
                  <div className="sub3-subsub2-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic6.svg" alt="none" />
                    <p>{devicesDataMockUp?.at(0)?.vehicle?.batteryVolt?.toString()?.slice(0, 3)}V</p>
                  </div>
                  <div className="sub4-subsub2-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic7.svg" alt="none" />
                    <img src="./assets/Group.svg" alt="none" />
                  </div>
                  <div className="sub5-subsub2-sub2-truck-portal-side-bar">
                    <img src="./assets/Pic8.svg" alt="none" />
                    <img src="./assets/Group.svg" alt="none" />
                  </div>
                </div>
                <div
                  style={{
                    width: "48.2rem",
                    backgroundColor: "grey",
                    height: ".1rem",
                  }}
                >
                  <hr />
                </div>
                <div className="subsub3-sub2-truck-portal-side-bar">
                  <div className="sub1-subsub3-sub2-truck-portal-side-bar">
                    <img src={enginebtn === false ? "./assets/Pic13.svg" : "./assets/Pic2.svg"} alt="none" />
                    <label className="truck-switch">
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          handleEngine(e);
                        }}
                      />
                      <span className="truck-slider">
                        <div className="truck-on-off">
                          <p className="truck-p">ON</p>
                          <p className="truck-p" style={{ marginRight: ".5rem" }}>OFF</p>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="sub2-subsub3-sub2-truck-portal-side-bar" onClick={() => navigate("/History", { state: { deviceImei: devicesDataMockUp?.at(selectedVeh)?.vehicle?.deviceImei } })} style={{ cursor: "pointer" }}>
                    <img src="./assets/Pic9.svg" alt="none" />
                    <p>History</p>
                  </div>
                  <div className="sub3-subsub3-sub2-truck-portal-side-bar"
                    onClick={() => {
                      navigate("/CommandsSettings", { state: { Name: devicesDataMockUp?.at(selectedVeh)?.vehicle.vehicleName, device: devicesDataMockUp?.at(selectedVeh)?.vehicle.deviceType + ' ' + devicesDataMockUp?.at(selectedVeh)?.vehicle.deviceModel, deviceImei: devicesDataMockUp?.at(selectedVeh)?.vehicle?.deviceImei } });
  
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="./assets/Pic10.svg" alt="none" />
                    <div className="sub1-sub3-subsub3-sub2-truck-portal-side-bar">
                      <p>Commands</p>
                      <p>Setting</p>
                    </div>
                  </div>
                  <div className="sub4-subsub3-sub2-truck-portal-side-bar" onClick={() => handlUpload()} style={{ cursor: "pointer" }}>
                    <img src={uploadImg} alt="none" />
                    <p style={{ color: uploadText === "Upload Config" ? "white" : "#F89823" }}>{uploadText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
