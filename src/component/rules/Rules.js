import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Ruptelas, Teltonikas } from "../../utils/mockup";

import "./Rules.css";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";

const RuleData = [
  {
    id: "1",
    rule: "Enter Geofence Zone1",
    device: "Teltonika",
    model: "FMC001",
    pin: "DIN4",
    vehicle: "26",
    status: "Active",
  },
  {
    id: "2",
    rule: "Leaving Geofence",
    device: "Teltonika",
    model: "FMC001",
    pin: "DOUT1",
    vehicle: "26",
    status: "Active",
  },
  {
    id: "3",
    rule: "Ignition ON",
    device: "Teltonika",
    model: "FMC001",
    vehicle: "26",
    pin: "Device Accelerometer",
    status: "Active",
  },
  {
    id: "4",
    rule: "Ignition Enabled",
    device: "Teltonika",
    model: "FMC001",
    pin: "DIN4",
    vehicle: "26",
    status: "Deactivated",
  },
  {
    id: "5",
    rule: "OverSpeed 121Km/Hr",
    device: "Ruptela",
    model: "FMC001",
    pin: "DIN4",
    vehicle: "26",
    status: "Deactivated",
  },
];

const Rules = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [ruleStatus, setRuleStatus] = useState("");
  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [searchStatusText, setSearchStatusText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device");
  const [searchModelText, setSearchModelText] = useState("Model");
  const [searchRuleText, setSearchRuleText] = useState("Rule");
  const [data, setData] = useState(RuleData);
  const [ruleRemove, setRuleRemove] = useState("none");
  const [ruleRemoveId, setRuleRemoveId] = useState("");
  const [searchFold, setSearchFold] = useState(true);

  useEffect(() => {
    setData(
      RuleData.filter((item) => {
        return (
          (searchRuleText === "Rule" ? item.rule : !searchRuleText || item.rule === searchRuleText) &&
          (searchDeviceText === "Device" ? item.device : !searchDeviceText || item.device === searchDeviceText) &&
          (searchStatusText === "Status" ? item.status : !searchStatusText || item.status === searchStatusText) &&
          (searchModelText === "Model" ? item.device : !searchModelText || item.device === searchModelText)
        );
      })
    );
  }, [searchRuleText, searchDeviceText, searchStatusText, searchModelText]);

  const handleRule = (event) => {
    const val = event.target.value;
    setSearchRuleText(val);
  };

  const handleDevice = (event) => {
    const val = event.target.value;
    setSearchDeviceText(val);
  };

  const handleModel = (event) => {
    const val = event.target.value;
    setSearchModelText(val);
  };

  const handleStateColor = (event) => {
    const val = event.target.value;
    setSearchStatusText(val);
    if (val === "Active") {
      setStateColor("#63D16E");
    } else if (val === "Deactivated") {
      setStateColor("#FF3062");
    } else {
      setStateColor("#7A7D8B");
    }
  };

  const handleClear = () => {
    setSearchRuleText("Rule");
    setSearchDeviceText("Device");
    setSearchModelText("Model");
    setSearchStatusText("");
    setStateColor("grey");
    setData(RuleData);
  };

  const handleRemoveRule = (id) => {
    setRuleRemoveId(id);
    setRuleRemove("block");
    setTimeout(() => {
      setRuleRemoveId("");
      setRuleRemove("none");
    }, 2000);
  };

  const handleDialogBoxRuleState = (data) => {
  };

  const handleRuleStatus = (status) => {
    if (status === "Active") {
      setRuleStatus("Deactivated");
    } else {
      setRuleStatus("Activate");
    }
  };

  return (
    <div className="rules-main w-100 h-100">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <p className="px-5 text-white d-flex justify-content-center align-items-center">
              Total rules <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={()=>navigate("/AddRule")}
              >
                <img src="./assets/addbtn.svg" alt="none" />
                <button>Add rule</button>
              </div>
            </div>
          </div>
          <div className="sub2-div1 d-flex flex-column justify-content-end align-items-end w-100">
            <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 w-100">
              <div className="sub1-subsub1-sub2-div1 d-flex align-items-center my-2">
                <img
                  src="./assets/searchwithperson.svg"
                  alt="none"
                  className="search-icon-content"
                />
                <span>Search rule</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <select
                  className="field-select"
                  value={searchRuleText}
                  onChange={handleRule}
                  style={{color:searchRuleText=="Rule"?"#7A7D8B":"black"}}
                >
                  <option value="Rule">Rule Type</option>
                  <option>Enter Geofence Zone1</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Leaving Geofence</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Ignition ON</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Ignition OFF</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Ignition Disabled</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Ignition Enabled</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Crash</option>
                  <option style={{color:"black",backgroundColor:"white"}}>OverSpeed 121Km/Hr</option>
                  <option style={{color:"black",backgroundColor:"white"}}>Door Open</option>
                </select>
                <select
                  className="field-select"
                  value={searchDeviceText}
                  onChange={handleDevice}
                  style={{color:searchDeviceText=="Device"?"#7A7D8B":"black"}}
                >
                  <option key={0} selected value="Device">Device Type</option>
                  <option key={1} value="Teltonika" style={{color:"black"}}>Teltonika</option>
                  <option key={2} value="Ruptela" style={{color:"black"}}>Ruptela</option>
                </select>
                <select
                  className="field-select"
                  value={searchModelText}
                  onChange={handleModel}
                  style={{color:searchModelText=="Model"?"#7A7D8B":"black"}}
                >
                  <option selected value="Model">
                    Model
                  </option>
                  {searchDeviceText === "Ruptela"
                    ? Ruptelas.map((item) => {
                        return <option key={item.id} style={{color:"black",backgroundColor:"white"}}>{item.device}</option>;
                      })
                    : Teltonikas.map((item) => {
                        return <option key={item.id} style={{color:"black",backgroundColor:"white"}}>{item.device}</option>;
                      })}
                </select>
                <select
                  className="field-select"
                  style={{ color: stateColor }}
                  onChange={handleStateColor}
                  value={searchStatusText}
                >
                  <option selected value="Status">
                    Status
                  </option>
                  <option style={{ color: "#63D16E" }} value="Active">
                    Active
                  </option>
                  <option style={{ color: "#FF3062" }} value="Deactivated">
                    Deactivated
                  </option>
                </select>
                <div
                  className="tab-button d-flex justify-content-center align-items-center px-4 ml-4"
                  onClick={() => handleClear()}
                >
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-rules-div2 py-3">
                <p className="mb-0 text-center">Rule Type</p>
                <p className="mb-0 text-center">Device Type</p>
                <p className="mb-0 text-center">Device Model</p>
                <p className="mb-0 text-center">I/O Pin</p>
                <p className="mb-0 text-center">No. of Vehicles</p>
                <p className="mb-0 text-center">Status</p>
                <p className="mb-0 text-center"></p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data.map((item, index) => {
                  return (
                    <div key={index} id="import-rules">
                      <p id="sub1-import-rules">{item.id}</p>
                      <div className="subsub1-sub2-rules-div2">
                        <p className="item">{item.rule}</p>
                        <p className="item">{item.device}</p>
                        <p className="item">{item.model}</p>
                        <p className="item">{item.pin}</p>
                        <p className="item">{item.vehicle}</p>
                        <p className="item" style={{color: item.status === "Active" ? "#63D16E" : "#FF3062"}}>{item.status}</p>
                        <div className="rules-dropdown item d-flex position-relative">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle rules-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            onClick={() => handleRuleStatus(item.status)}
                          />
                          <div className="dropdown-menu rules-dropdown-div">
                            <div className="sub1-rules-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => navigate("/AddVehicle")}
                              >
                                <img
                                  src="./assets/AddCar.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Add Vehicle</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => navigate("/EditRule")}
                              >
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Edit</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveRule(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Remove</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{ width: ruleStatus === "Activate" ? "8.7rem" : "11.3rem" }}
                                onClick={() => handleDialogBoxRuleState(ruleStatus)}
                              >
                                <img
                                  src={
                                    ruleStatus === "Deactivated"
                                      ? "./assets/deactivate.svg"
                                      : "./assets/Activate.svg"
                                  }
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">{ruleStatus}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="rule-remove" style={{ display: ruleRemove }}>
                <h1>Id {ruleRemoveId} User has been Removed</h1>
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
                <FontAwesomeIcon className="mr-4" icon={faFileCircleCheck} />
                Rules
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total rules <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={()=>navigate("/AddRule")}
              >
                <img src="./assets/addbtn.svg" alt="none" />
                <button>Add rule</button>
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
              <span>Search rule</span>
              <img className="ml-auto accordion" style={!searchFold ? {transform: 'rotate(180deg)'} : {transform: 'none'}} src="./assets/arrow-down.png" alt="Arrow Down" onClick={() => setSearchFold(!searchFold)} />
            </div>
            {!searchFold && (
              <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchRuleText}
                      onChange={handleRule}
                      style={{color:searchRuleText=="Rule"?"#7A7D8B":"black"}}
                    >
                      <option value="Rule">Rule Type</option>
                      <option>Enter Geofence Zone1</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Leaving Geofence</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition ON</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition OFF</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition Disabled</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Ignition Enabled</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Crash</option>
                      <option style={{color:"black",backgroundColor:"white"}}>OverSpeed 121Km/Hr</option>
                      <option style={{color:"black",backgroundColor:"white"}}>Door Open</option>
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchDeviceText}
                      onChange={handleDevice}
                      style={{color:searchDeviceText=="Device"?"#7A7D8B":"black"}}
                    >
                      <option key={0} selected value="Device">Device Type</option>
                      <option key={1} value="Teltonika" style={{color:"black"}}>Teltonika</option>
                      <option key={2} value="Ruptela" style={{color:"black"}}>Ruptela</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchModelText}
                      onChange={handleModel}
                      style={{color:searchModelText=="Model"?"#7A7D8B":"black"}}
                    >
                      <option selected value="Model">
                        Model
                      </option>
                      {searchDeviceText === "Ruptela"
                        ? Ruptelas.map((item) => {
                            return <option key={item.id} style={{color:"black",backgroundColor:"white"}}>{item.device}</option>;
                          })
                        : Teltonikas.map((item) => {
                            return <option key={item.id} style={{color:"black",backgroundColor:"white"}}>{item.device}</option>;
                          })}
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      style={{ color: stateColor }}
                      onChange={handleStateColor}
                      value={searchStatusText}
                    >
                      <option selected value="Status">
                        Status
                      </option>
                      <option style={{ color: "#63D16E" }} value="Active">
                        Active
                      </option>
                      <option style={{ color: "#FF3062" }} value="Deactivated">
                        Deactivated
                      </option>
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
            {data?.map((item, index) => {
              return (
                <div id="import-rules" key={index}>
                  <p id="sub1-import-rules">{index + 1}</p>
                  <div className="subsub1-sub2-rules-div2 d-flex flex-column align-items-center py-2 px-3">
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Rule Type</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.rule}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Device Type</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.device}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Device Model</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.model}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">I/O Pin</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.pin}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">No. of Vehicles</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.vehicle}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Status</p>
                      <div className="mb-0 px-2 col-8 item justify-content-between">
                        <p className="item mb-0 justify-content-start" style={{color: item.status === "Active" ? "#63D16E" : "#FF3062"}}>{item.status}</p>
                        <div className="rules-dropdown d-flex position-relative justify-content-end">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle rules-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            onClick={() => handleRuleStatus(item.status)}
                          />
                          <div className="dropdown-menu rules-dropdown-div">
                            <div className="sub1-rules-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => navigate("/AddVehicle")}
                              >
                                <img
                                  src="./assets/AddCar.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Add Vehicle</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => navigate("/EditRule")}
                              >
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Edit</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveRule(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">Remove</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{ width: ruleStatus === "Activate" ? "8.7rem" : "11.3rem" }}
                                onClick={() => handleDialogBoxRuleState(ruleStatus)}
                              >
                                <img
                                  src={
                                    ruleStatus === "Deactivated"
                                      ? "./assets/deactivate.svg"
                                      : "./assets/Activate.svg"
                                  }
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">{ruleStatus}</p>
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

export default Rules;
