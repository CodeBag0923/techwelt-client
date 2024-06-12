import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { CSVLink } from "react-csv";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { removeDevice } from "../../services/axios";
import { Ruptelas, Teltonikas } from "../../utils/mockup";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/js/dist/dropdown";
import "./Devices.css";

const Devices = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const devices = useSelector((state) => state.devicesList.devices);

  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [searchPlateText, setSearchPlateText] = useState("");
  const [searchImeiText, setSearchImeiText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device");
  const [searchStatusText, setSearchStatusText] = useState("");
  const [searchModelText, setSearchModelText] = useState("Model");
  const [devicesData, setDevicesData] = useState(devices);
  const [deviceRemove, setDeviceRemove] = useState("none");
  const [deviceRemoveId, setDeviceRemoveId] = useState("");
  const [deviceRemoveImei, setDeviceRemoveImei] = useState("");
  const [searchFold, setSearchFold] = useState(true);

  useEffect(() => {
    setDevicesData(
      devices?.filter((item) => {
        return (!searchPlateText || item?.vehicle?.vehicleName.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase()))
          && (!searchImeiText || item?.vehicle?.deviceImei.toLocaleLowerCase().includes(searchImeiText.toLocaleLowerCase()))
          && (searchDeviceText === "Device" ? item.vehicle.deviceType : (!searchDeviceText || item.vehicle.deviceType === searchDeviceText))
          && (searchStatusText === "Status" ? item.vehicle.isConnected : (!searchStatusText || item.vehicle.isConnected === searchStatusText))
          && (searchModelText === "Model" ? item.vehicle.deviceModel : (!searchModelText || item.vehicle.deviceModel === searchModelText));
      })
    )
  }, [searchPlateText, searchImeiText, searchDeviceText, searchStatusText, searchModelText, devices]);

  const handlePlate = (event) => {
    const val = event.target.value;
    setSearchPlateText(val);
  };

  const handleImei = (event) => {
    const val = event.target.value;
    setSearchImeiText(val);
  };

  const handleDevice = (event) => {
    const val = event.target.value;
    setSearchDeviceText(val);
  };

  const handleModel = (value) => {
    const val = value.target.value;
    setSearchModelText(val)
  }

  const handleStateColor = (value) => {
    const val = value.target.value;
    setSearchStatusText(val);
    if (val === "Connected") {
      setStateColor("#63D16E");
    } else if (val === "Not Connected") {
      setStateColor("#FF3062");
    } else {
      setStateColor("#7A7D8B");
    }
  };

  const handleClear = () => {
    setSearchPlateText("")
    setSearchImeiText("")
    setSearchDeviceText("")
    setSearchModelText("")
    setSearchStatusText("")
    setStateColor("grey")
  }

  const handleViewDevice = (vehicleType, plate, imei, device, model, camera, mobile, user) => {
    navigate('/ViewDevice', { state: { vehicleType: vehicleType, plate: plate, imei: imei, device: device, model: model, camera: camera, mobile: mobile, user: user } })
  };

  const handleEditDevice = (vehicleType, plate, imei, device, model, camera, mobile, user) => {
    navigate('/EditDevice', { state: { vehicleType: vehicleType, plate: plate, imei: imei, device: device, model: model, camera: camera, mobile: mobile, user: user } })
  };

  const handleLocationClick = (data) => {
    if (data?.lng && data?.lat) {
      navigate('/Dashboard', {state: { lng: data.lng, lat: data.lat }})
    }
  }

  const handleRemoveDevice = async (imei) => {
    const removeDeviceData = {
      token: localStorage.getItem("token"),
      deviceImei: imei
    }
    await removeDevice(removeDeviceData);
    // const tokenData = {
    //   token: localStorage.getItem("token")
    // };
    // dispatch(getDevices(tokenData));
    // setDevicesData(devices);
  };

  return (
    <div className="devices-main">
      {!isMobile ? (
        <div className="devices-div1">
          <div className="sub1-div1">
            <p className="px-5">Total devices<span className="ml-3">{devicesData?.length}</span></p>
            <div className="subsub1-sub1-div1">
              <CSVLink
                data={devicesData}
                filename="Devices"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/addbtn.svg" alt="none" onClick={() => navigate("/AddDevice")} />
                <button onClick={() => navigate("/AddDevice")}>
                  Add Device
                </button>
              </div>
            </div>
          </div>
          <div className="sub2-div1">
            <div className="subsub1-sub2-div1 py-2">
              <div className="sub1-subsub1-sub2-div1 my-2">
                <img
                  src="./assets/searchwithperson.svg"
                  alt="none"
                  className="search-icon-content"
                />
                <span>Search device</span>
              </div>
              <div className="sub2-subsub1-sub2-div1">
                <input
                  className="field-input"
                  type="text"
                  placeholder="Plate No."
                  value={searchPlateText}
                  onChange={handlePlate}
                />
                <input
                  className="field-input"
                  type="numder"
                  placeholder="IMEI"
                  value={searchImeiText}
                  onChange={handleImei}
                />
                <select
                  className="field-select"
                  value={searchDeviceText}
                  onChange={handleDevice}
                  style={{ color: searchDeviceText == "Device" ? "grey" : "black" }}
                >
                  <option key={0} selected value="Device">Device</option>
                  <option key={1} value="Teltonika">Teltonika</option>
                  <option key={2} value="Ruptela">Ruptela</option>
                </select>
                <select
                  className="field-select"
                  value={searchModelText}
                  onChange={handleModel}
                  style={{ color: searchModelText == "Model" ? "grey" : "black" }}
                >
                  <option selected value="Model">Model</option>
                  {searchDeviceText == "Ruptela" ? Ruptelas.map((item) => {
                    return (
                      <option key={item.id} style={{ color: "black", backgroundColor: "white" }} value={item.device}>{item.device}</option>
                    )
                  }) : Teltonikas.map((item) => {
                    return (
                      <option key={item.id} style={{ color: "black", backgroundColor: "white" }} value={item.device}>{item.device}</option>
                    )
                  })}
                </select>
                <select className="field-select">
                  <option>Company</option>
                </select>
                <select
                  className="field-select"
                  style={{ color: stateColor }}
                  onChange={handleStateColor}
                  value={searchStatusText}
                >
                  <option selected value="Status">Status</option>
                  <option style={{ color: "#63D16E" }} value="Connected">Connected</option>
                  <option style={{ color: "#FF3062" }} value="Not Connected">Not Connected</option>
                  <option style={{ color: "#7A7D8B" }} value="Idle">Idle</option>
                </select>
                <div className="tab-button d-flex justify-content-center align-items-center px-4 ml-4" onClick={() => handleClear()}>
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-devices-div2 py-3">
                <p className="mb-0">Plate No.</p>
                <p className="mb-0">Device</p>
                <p className="mb-0">Model</p>
                <p className="mb-0">IMEI No.</p>
                <p className="mb-0">Last Location</p>
                <p className="mb-0">Company</p>
                <p className="mb-0">Status</p>
                <p className="mb-0"></p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {devicesData?.map((item, index) => {
                  return (
                    <div id="import-devices">
                      <p id="sub1-import-devices">{index + 1}</p>
                      <div className="subsub1-sub2-devices-div2">
                        <p className="item">{item?.vehicle?.vehicleName}</p>
                        <p className="item">{item?.vehicle?.deviceType}</p>
                        <p className="item">{item?.vehicle?.deviceModel}</p>
                        <p className="item">{item?.vehicle?.deviceImei}</p>
                        <div className="import-gps-time-devices item">
                          <p className="text-center">
                            GPS:{" "}
                            <span className="cursor-pointer" onClick={() => handleLocationClick(item?.vehicle?.teltonikas?.at(item?.vehicle?.teltonikas - 1))} style={{color: 'rgb(133 29 209)'}}>
                              {item?.vehicle?.teltonikas?.at(item?.vehicle?.teltonikas - 1)?.lat + ", " + item?.vehicle?.teltonikas?.at(item?.vehicle?.teltonikas - 1)?.lng}
                            </span>
                          </p>
                          <p className="text-center">
                            Time: <span className="ml-1">{item?.vehicle?.createdAt}</span>
                          </p>
                        </div>
                        <p className="item">{"delta"}</p>
                        <p className="item"
                          style={{
                            color:
                              item?.vehicle?.isConnected == "Connected"
                                ? "#63D16E" : item?.vehicle?.isConnected == "Not Connected" ? "#FF3062" : "#7A7D8B",
                          }}
                        >
                          {item?.vehicle?.isConnected}
                        </p>
                        <div className="devices-dropdown item d-flex position-relative">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle devices-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />
                          <div className="dropdown-menu devices-dropdown-div">
                            <div className="sub1--devices-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div className="d-flex align-items-center cursor-pointer" onClick={() => handleViewDevice(item?.vehicle?.vehicleType, item?.vehicle?.vehicleName, item?.vehicle?.deviceImei, item?.vehicle?.deviceType, item?.vehicle?.deviceModel, item?.vehicle?.camera, item?.vehicle?.mobileNo, item?.user)}>
                                <img
                                  src="./assets/view.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "2rem" }}
                                />
                                <p className="mb-0 ml-2">View</p>
                              </div>
                              <div className="d-flex align-items-center cursor-pointer" onClick={() => handleEditDevice(item?.vehicle?.vehicleType, item?.vehicle?.vehicleName, item?.vehicle?.deviceImei, item?.vehicle?.deviceType, item?.vehicle?.deviceModel, item?.vehicle?.camera, item?.vehicle?.mobileNo, item?.user)}>
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Edit</p>
                              </div>
                              <div className="d-flex align-items-center cursor-pointer" onClick={() => handleRemoveDevice(item?.vehicle?.deviceImei)}>
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Remove</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="device-remove" style={{ display: deviceRemove, lineHeight: ".5rem" }}>
                <h1>Id {deviceRemoveId} Device has been Removed</h1>
                <h1>with this IMEI No {deviceRemoveImei}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="tab mobile-title mb-4">
            <div
              aria-current="page"
              className="px-3 d-flex justify-content-center py-2"
              style={{color: "white", backgroundColor: "#1A2678", borderRadius: "30px"}}
            >
              <div className="d-flex content align-items-center">
                <FontAwesomeIcon className="mr-4" icon={faMicrochip} />
                Devices
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total devices <span className="ml-3">{devicesData?.length}</span>
            </p>
            <div className="d-flex">
              <CSVLink
                data={devicesData}
                filename="Devices"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/addbtn.svg" alt="none" onClick={() => navigate("/AddDevice")} />
                <button onClick={() => navigate("/AddDevice")}>
                  Add Device
                </button>
              </div>
            </div>
          </div>
          <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 px-4 w-100">
            <div className="sub1-subsub1-sub2-div1 d-flex align-items-center p-2">
              <img
                src="./assets/searchwithperson.svg"
                alt="none"
                className="search-icon-content"
              />
              <span>Search device</span>
              <img className="ml-auto accordion" style={!searchFold ? {transform: 'rotate(180deg)'} : {transform: 'none'}} src="./assets/arrow-down.png" alt="Arrow Down" onClick={() => setSearchFold(!searchFold)} />
            </div>
            {!searchFold && (
              <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Plate No."
                      value={searchPlateText}
                      onChange={handlePlate}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="numder"
                      placeholder="IMEI"
                      value={searchImeiText}
                      onChange={handleImei}
                    />
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchDeviceText}
                      onChange={handleDevice}
                      style={{ color: searchDeviceText == "Device" ? "grey" : "black" }}
                    >
                      <option key={0} selected value="Device">Device</option>
                      <option key={1} value="Teltonika">Teltonika</option>
                      <option key={2} value="Ruptela">Ruptela</option>
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchModelText}
                      onChange={handleModel}
                      style={{ color: searchModelText == "Model" ? "grey" : "black" }}
                    >
                      <option selected value="Model">Model</option>
                      {searchDeviceText == "Ruptela" ? Ruptelas.map((item) => {
                        return (
                          <option key={item.id} style={{ color: "black", backgroundColor: "white" }} value={item.device}>{item.device}</option>
                        )
                      }) : Teltonikas.map((item) => {
                        return (
                          <option key={item.id} style={{ color: "black", backgroundColor: "white" }} value={item.device}>{item.device}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select className="field-select">
                      <option>Company</option>
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      style={{ color: stateColor }}
                      onChange={handleStateColor}
                      value={searchStatusText}
                    >
                      <option selected value="Status">Status</option>
                      <option style={{ color: "#63D16E" }} value="Connected">Connected</option>
                      <option style={{ color: "#FF3062" }} value="Not Connected">Not Connected</option>
                      <option style={{ color: "#7A7D8B" }} value="Idle">Idle</option>
                    </select>
                  </div>
                </div>
                <div className="tab-button d-flex justify-content-center align-items-center px-4 ml-auto py-1" onClick={() => handleClear()}>
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            )}
          </div>
          <div className={`sub2-div2 d-flex flex-column px-4 w-100 overflow-auto ml-0 ${searchFold && 'folded'}`}>
            {devicesData?.map((item, index) => {
              return (
                <div id="import-devices" key={index}>
                  <p id="sub1-import-devices">{index + 1}</p>
                  <div className="subsub1-sub2-devices-div2 d-flex flex-column align-items-center py-2 px-3">
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Plate No.</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.vehicle?.vehicleName}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Device</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.vehicle?.deviceType}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Model</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.vehicle?.deviceModel}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">IMEI</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.vehicle?.deviceImei}</p>
                    </div>
                    <div className="d-flex flex-row align-items-start w-100">
                      <p className="mb-0 px-2 col-4 text-white">Last Location</p>
                      <div className="import-gps-time-devices mb-0 px-2 col-8 item justify-content-start flex-column">
                        <p>
                          GPS: 
                          <span className="cursor-pointer" onClick={() => handleLocationClick(item?.vehicle?.teltonikas?.at(item?.vehicle?.teltonikas - 1))} style={{color: 'rgb(133 29 209)'}}>
                            {item?.vehicle?.teltonikas?.at(item?.vehicle?.teltonikas - 1)?.lat + ", " + item?.vehicle?.teltonikas?.at(item?.vehicle?.teltonikas - 1)?.lng}
                          </span>
                        </p>
                        <p>
                          Time: <span className="ml-1">{item?.vehicle?.createdAt}</span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Company</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">delta</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Status</p>
                      <div className="mb-0 px-2 col-8 item justify-content-between">
                        <p className="item mb-0 justify-content-start"
                          style={{
                            color:
                              item?.vehicle?.isConnected == "Connected"
                                ? "#63D16E" : item?.vehicle?.isConnected == "Not Connected" ? "#FF3062" : "#7A7D8B",
                          }}
                        >
                          {item?.vehicle?.isConnected}
                        </p>
                        <div className="devices-dropdown d-flex position-relative">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle devices-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />
                          <div className="dropdown-menu devices-dropdown-div">
                            <div className="sub1--devices-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div className="d-flex align-items-center cursor-pointer" onClick={() => handleViewDevice(item?.vehicle?.vehicleType, item?.vehicle?.vehicleName, item?.vehicle?.deviceImei, item?.vehicle?.deviceType, item?.vehicle?.deviceModel, item?.vehicle?.camera, item?.vehicle?.mobileNo, item?.user)}>
                                <img
                                  src="./assets/view.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "2rem" }}
                                />
                                <p className="mb-0 ml-2">View</p>
                              </div>
                              <div className="d-flex align-items-center cursor-pointer" onClick={() => handleEditDevice(item?.vehicle?.vehicleType, item?.vehicle?.vehicleName, item?.vehicle?.deviceImei, item?.vehicle?.deviceType, item?.vehicle?.deviceModel, item?.vehicle?.camera, item?.vehicle?.mobileNo, item?.user)}>
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Edit</p>
                              </div>
                              <div className="d-flex align-items-center cursor-pointer" onClick={() => handleRemoveDevice(item?.vehicle?.deviceImei)}>
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Remove</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Devices;
