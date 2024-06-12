import React, { useState } from "react";
import "./Connectivity.css";
import Try from "../try/Try"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Connectivity = () => {
  const deviceListData = useSelector((state) => state.devicesList);
  const { token, devices } = deviceListData;
  const getData = useLocation();
  const data = {
    deviceImei: getData?.state?.deviceImei,
  }

  const [left1, setLeft1] = useState("none");
  const [left1State, setLeft1State] = useState(false);
  const [left2, setLeft2] = useState("none");
  const [left2State, setLeft2State] = useState(false);
  const [left3, setLeft3] = useState("none");
  const [left3State, setLeft3State] = useState(false);
  // //////////////////////////////////
  const [mid1, setMid1] = useState("none");
  const [mid1State, setMid1State] = useState(false);
  const [mid2, setMid2] = useState("none");
  const [mid2State, setMid2State] = useState(false);
  const [mid3, setMid3] = useState("none");
  const [mid3State, setMid3State] = useState(false);
  const [mid4, setMid4] = useState("none");
  const [mid4State, setMid4State] = useState(false);
  // /////////////////////////////////////////
  const [right1, setRight1] = useState("none");
  const [right1State, setRight1State] = useState(false);
  const [right2, setRight2] = useState("none");
  const [right2State, setRight2State] = useState(false);
  const [right3, setRight3] = useState("none");
  const [right3State, setRight3State] = useState(false);
  const [right4, setRight4] = useState("none");
  const [right4State, setRight4State] = useState(false);
  const [records, setRecords] = useState("Newest First");
  const [server1, setServer1] = useState("TCP");
  const [server2, setServer2] = useState("TCP");
  const [ignitionDetectionSource, setIgnitionDetectionSource] =
    useState("Digital Input");
  const [mode, setMode] = useState("");
  const [
    dataCodecToUseForDataTransmission,
    setDataCodecToUseForDataTransmission,
  ] = useState("Codec 8");
  const [batteryChargeMode, setBatteryChargeMode] = useState("Always");

  // //////////////////////////////////////////////
  const [focusLeft1, setFocusLeft1] = useState("")
  const [focusLeft2, setFocusLeft2] = useState("")
  const [focusLeft3, setFocusLeft3] = useState("")
  const [focusLeft4, setFocusLeft4] = useState("")
  const [focusLeft5, setFocusLeft5] = useState("")
  const [focusLeft6, setFocusLeft6] = useState("")

  const [focusMid1, setFocusMid1] = useState("")
  const [focusMid2, setFocusMid2] = useState("")
  const [focusMid3, setFocusMid3] = useState("")
  const [focusMid4, setFocusMid4] = useState("")

  const [focusRight1, setFocusRight1] = useState("")
  const [focusRight2, setFocusRight2] = useState("")
  const [focusRight3, setFocusRight3] = useState("")
  const [focusRight4, setFocusRight4] = useState("")
  const [focusRight5, setFocusRight5] = useState(".1rem solid #898A8D")
  const [focusRight6, setFocusRight6] = useState("")
  const [focusRight7, setFocusRight7] = useState("")

  const [openLinkTimeOut, setOpenLinkTimeOut] = useState("");
  const [serverResponseTimeOut, setServerResponseTimeOut] = useState("");
  const [recordStoringOrder, setRecordStoringOrder] = useState("Newest First");
  const [recordStoringOrder1, setRecordStoringOrder1] = useState(0);

  const [tlsEnable, setTlsEnable] = useState(false);

  const [fotaCheck, setFotaCheck] = useState(false);
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [period, setPeriod] = useState("");

  const [networkPing, setNetworkPing] = useState("");

  const [grsHost, setGrsHost] = useState("");
  const [grsPort, setGrsPort] = useState("");
  const [grsProtocol, setGrsProtocol] = useState("");

  const [apnCheck, setApnCheck] = useState(false);
  const [apnName, setApnName] = useState("");
  const [apnUserName, setApnUsername] = useState("");
  const [apnPassword, setApnPassword] = useState("");

  const [gprsSMode, setGprsSMode] = useState("");
  const [gprsSMode1, setGprsSMode1] = useState("");
  const [gprsSHost, setGprsSHost] = useState("");
  const [gprsSPort, setGprsSPort] = useState("");
  const [gprsSProtocol, setGprsSProtocol] = useState("");

  const handleChangeSetOpenLinkTimeOut = (e) => {
    setOpenLinkTimeOut(e.target.value)
  }
  const handleChangeServerResponseTimeOut = (e) => {
    setServerResponseTimeOut(e.target.value)
  }

  const handleChangeRecordStoringOrder = (e) => {
    setRecordStoringOrder(e.target.value)
    setRecordStoringOrder1(e.target.selectedIndex - 1)
  }

  const handleChangeTlsEnable = () => {
    setTlsEnable(!tlsEnable)
  }

  const handleChangeFotaCheck = () => {
    setFotaCheck(!fotaCheck)
  }
  const handleChangeHost = (e) => {
    setHost(e.target.value)
  }

  const handleChangePort = (e) => {
    setPort(e.target.value)
  }

  const handleChangePeriod = (e) => {
    setPeriod(e.target.value)
  }

  const handleChangeNetworkPing = (e) => {
    setNetworkPing(e.target.value)
  }

  const handleChangeGrsHost = (e) => {
    setGrsHost(e.target.value)
  }

  const handleChangeGrsPort = (e) => {
    setGrsPort(e.target.value)
  }
  const handleChangeGrsProtocol = (e) => {
    setGrsProtocol(e.target.value)
  }

  const handleChangeApnCheck = () => {
    setApnCheck(!apnCheck)
  }
  const handleChangeApnName = (e) => {
    setApnName(e.target.value)
  }
  const handleChangeApnUserName = (e) => {
    setApnUsername(e.target.value)
  }

  const handleChangeApnPassword = (e) => {
    setApnPassword(e.target.value)
  }
  const handleChangeGprsSMode = (e) => {
    setGprsSMode(e.target.value)
    setGprsSMode1(e.target.selectedIndex - 1)
  }

  const handleChangeGprsSHost = (e) => {
    setGprsSHost(e.target.value)
  }

  const handleChangeGprsSPort = (e) => {
    setGprsSPort(e.target.value)
  }

  const handleChangeGprsSProtocol = (e) => {
    setGprsSProtocol(e.target.value)
  }

  // /////////////////////////////////////////////
  const handlLeft1 = (state) => {
    if (state == false) {
      setLeft1("block");
      setLeft1State(true);
    } else {
      setLeft1("none");
      setLeft1State(false);
    }
  };
  const handlLeft2 = (state) => {
    if (state == false) {
      setLeft2("block");
      setLeft2State(true);
    } else {
      setLeft2("none");
      setLeft2State(false);
    }
  };
  const handlLeft3 = (state) => {
    if (state == false) {
      setLeft3("block");
      setLeft3State(true);
    } else {
      setLeft3("none");
      setLeft3State(false);
    }
  };
  //////////////////////////////////////
  const handlMid1 = (state) => {
    if (state == false) {
      setMid1("block");
      setMid1State(true);
    } else {
      setMid1("none");
      setMid1State(false);
    }
  };
  const handlMid2 = (state) => {
    if (state == false) {
      setMid2("block");
      setMid2State(true);
    } else {
      setMid2("none");
      setMid2State(false);
    }
  };
  const handlMid3 = (state) => {
    if (state == false) {
      setMid3("block");
      setMid3State(true);
    } else {
      setMid3("none");
      setMid3State(false);
    }
  };
  const handlMid4 = (state) => {
    if (state == false) {
      setMid4("block");
      setMid4State(true);
    } else {
      setMid4("none");
      setMid4State(false);
    }
  };
  // ///////////////////////////
  const handlRight1 = (state) => {
    if (state == false) {
      setRight1("block");
      setRight1State(true);
    } else {
      setRight1("none");
      setRight1State(false);
    }
  };
  const handlRight2 = (state) => {
    if (state == false) {
      setRight2("block");
      setRight2State(true);
    } else {
      setRight2("none");
      setRight2State(false);
    }
  };
  const handlRight3 = (state) => {
    if (state == false) {
      setRight3("block");
      setRight3State(true);
    } else {
      setRight3("none");
      setRight3State(false);
    }
  };
  const handlRight4 = (state) => {
    if (state == false) {
      setRight4("block");
      setRight4State(true);
    } else {
      setRight4("none");
      setRight4State(false);
    }
  };
  const handleSelect0 = (e) => {
    console.log(e.target.value);
    setServer1(e.target.value);
  };
  const handleSelect6 = (e) => {
    console.log(e.target.value);
    setServer2(e.target.value);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setRecords(e.target.value);
  };
  const handleSelect1 = (e) => {
    console.log(e.target.value);
    setIgnitionDetectionSource(e.target.value);
  };
  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
  };
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setDataCodecToUseForDataTransmission(e.target.value);
  };
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setBatteryChargeMode(e.target.value);
  };


  const sendRecordsPrameter = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.RecordsParameters,
      params: {
        linkTimeOut: openLinkTimeOut,
        resTimeOut: serverResponseTimeOut,
        order: recordStoringOrder1,

      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:321 ~ sendRecordsPrameter ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendEnableConnectionOverTLS = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.EnableConnectionOverTLS,
      params: {
        tls: tlsEnable ? "1" : "0",

      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:339 ~ sendEnableConnectionOverTLS ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendFOTAWeb = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.FirmwareOverTheAirWebService,
      params: {
        tls: fotaCheck ? "1" : "0",
        host: host,
        port: port,
        period: period

      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:358 ~ sendFOTAWeb ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendNetworkingPing = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.NetworkPing,
      params: {
        tout: networkPing

      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:374 ~ sendNetworkingPing ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendGPRSServerSetup = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.GprsServerSetup,
      params: {
        host: grsHost,
        port: grsPort,
        protocol: grsProtocol === "TCP" ? "0" : "1"
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:391 ~ sendGPRSServerSetup ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendGPRSSetup = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.GprsSetup,
      params: {
        enable: apnCheck ? "1" : "0",
        apnName: apnName,
        apnUName: apnUserName,
        apnPwd: apnPassword
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:409 ~ sendGPRSSetup ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendGPRSSecondarySetup = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.SecondaryGprsServerSetup,
      params: {
        host: gprsSHost,
        port: gprsSPort,
        mode: gprsSMode1,
        protocol: gprsSProtocol == "TCP" ? "0" : "1"
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Connectivity.js:428 ~ sendGPRSSecondarySetup ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  return (
    <div className="sub1-connectivity-div3" id="sec3">
      {/* main-box-left*/}
      <div className="subsub1-sub1-connectivity-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-connectivity-div3">
          <div
            className="subsub1-sub1-subsub1-sub1-connectivity-div3"

            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >Records Parameters</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-connectivity-div3">
              {/* <span>
                PUBGObject motion detection is to be configured to determine device
                working mode. Other functionalities that depend on movement
                source are: power manager, fuel consumption and trip.
              </span> */}
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendRecordsPrameter}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlLeft1(left1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub1-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-connectivity-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-connectivity-div3">
              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                  style={{ border: focusLeft1 }}>
                  <label>Open Link Timeout</label>
                  <input type="number" value={openLinkTimeOut} onChange={handleChangeSetOpenLinkTimeOut} />
                  <p>Seconds</p>
                </div>
                <Try text={"Timeout to terminate connection between the device and backend server, 30 - 259200 seconds"} />

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
              >
                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                  style={{ border: focusLeft2 }}>
                  <label>Server Response Timeout</label>
                  <input type="number" value={serverResponseTimeOut} onChange={handleChangeServerResponseTimeOut} />
                  <p>Seconds</p>
                </div>
                <Try text={"Timeout to wait response from backend server, 5 - 300 seconds"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
              >
                <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                  style={{ border: focusLeft3 }}
                >
                  <div className="sub1-subsub3-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3">
                    <label>Records Storing Order</label>
                    <p>
                      {recordStoringOrder === "Newest First"
                        ? "Newest First"
                        : "Oldest First"}
                    </p>
                  </div>
                  <select value={""} onChange={(e) => handleChangeRecordStoringOrder(e)}>
                    <option selected></option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                </div>
                <Try text={"The parameter which defines how records are sent to the server"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-connectivity-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-connectivity-div3"

            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft2(left2State)}
            >Enable connection over TLS</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendEnableConnectionOverTLS}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlLeft2(left2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-connectivity-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
                <p>Enable connection over TLS</p>
              </div>
              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
                <div className="sub1-subsub2-sub1-subsub2-sub2-subsub1-sub1-connectivity-div3">
                  <label className="connectivity-switch">
                    <input type="checkbox" checked={tlsEnable} onChange={handleChangeTlsEnable} />
                    <span className="connectivity-slider"></span>
                  </label>
                  <p>TLS Enable</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}
        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-connectivity-div3"> */}
        <div className="sub3-subsub1-sub1-connectivity-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-connectivity-div3"

            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft3(left3State)}
            >FOTA Web</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendFOTAWeb}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlLeft3(left3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-connectivity-div3"
            style={{ display: left3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-connectivity-div3">
              <div className="import1-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3">
                <p>Enable connection over TLS</p>
              </div>
              <div className="import2-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3">
                <p>OFF</p>
                <label className="connectivity-switch">
                  <input type="checkbox" checked={fotaCheck} onChange={handleChangeFotaCheck} />
                  <span className="connectivity-slider"></span>
                </label>
                <p>ON</p>
              </div>
              <div className="subsub1-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3"
                onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                style={{ border: focusLeft4 }}>
                <label>Host</label>
                <input type="number" value={host} onChange={handleChangeHost} />
                {/* <p>Hours</p> */}
              </div>
              <div className="subsub2-sub1-subsub2-sub3-subsub1-sub1-connectivity-div3"
                onFocus={() => setFocusLeft5(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft5(".1rem solid #898A8D")}
                style={{ border: focusLeft5 }}>
                <label>Port</label>
                <input type="number" value={port} onChange={handleChangePort} />
              </div>


              <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                onFocus={() => setFocusLeft6(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft6(".1rem solid #898A8D")}
                style={{ border: focusLeft6 }}>
                <label>Period</label>
                <input type="number" value={period} onChange={handleChangePeriod} />
                <p>mins</p>
              </div>

            </div>
          </div>
        </div>
        {/* sub3-main-box-left*/}
      </div>






      {/* main-box-mid*/}
      <div className="subsub2-sub1-connectivity-div3">
        {/* sub1-main-box-mid*/}

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub2-sub1-connectivity-div3">
          <div
            className="subsub1-sub2-subsub2-sub1-connectivity-div3"

            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid2(mid2State)}
            >Network Ping</p>
            <div className="sub1-subsub1-sub2-subsub2-sub1-connectivity-div3">
              <span
                onClick={() => handlMid2(mid2State)}
              >
                Set up network ping with a certain timeout to prevent link close
                by the operator.{" "}
              </span>
              <div className="subsub1-sub1-subsub1-sub2-subsub2-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendNetworkingPing}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlMid2(mid2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub2-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub2-sub1-connectivity-div3"
            style={{ display: mid2 }}
          >
            <div className="import-subsub2-sub2-subsub2-sub1-connectivity-div3">
              <p>Network Ping</p>
            </div>
            <div className="sub1-subsub2-sub2-subsub2-sub1-connectivity-div3">
              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div className="subsub1-sub1-subsub2-sub2-subsub2-sub1-connectivity-div3"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}>
                  <label style={{ marginLeft: ".4rem" }}>Timeout</label>
                  <input type="number" value={networkPing} onChange={handleChangeNetworkPing} />
                  <p>Seconds</p>
                </div>
                <Try text={"Network ping timeout, range 0 - 300 seconds"} />

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub2-sub1-connectivity-div3">
          <div
            className="subsub1-sub3-subsub2-sub1-connectivity-div3"

            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid3(mid3State)}
            >GPRS Server Setup</p>
            <div className="sub1-subsub1-sub3-subsub2-sub1-connectivity-div3">
              <span
                onClick={() => handlMid3(mid3State)}
              >
                Setup server to send data by GPRS link. Note: after changing
                this setting device will be disconnected from current server.
              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub2-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendGPRSServerSetup}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlMid3(mid3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub2-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub2-sub1-connectivity-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub2-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3"
                onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                style={{ border: focusMid2 }}
              >
                <label>Host</label>
                <input type="number" value={grsHost} onChange={handleChangeGrsHost} />
              </div>
              <div className="subsub2-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3"
                onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                style={{ border: focusMid3 }}
              >
                <label>Port</label>
                <input type="number" value={grsPort} onChange={handleChangeGrsPort} />
              </div>

              <div className="subsub3-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3"
                onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                style={{ border: focusMid4 }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub3-subsub2-sub1-connectivity-div3">
                  <label style={{ paddingTop: ".3rem" }}>Server Protocol</label>
                  <p>{server1 == "TCP" ? "TCP" : "UDP"}</p>
                </div>
                <select value={""} onChange={handleChangeGrsProtocol} style={{ fontSize: "1.2rem" }}>
                  <option selected></option>
                  <option>TCP</option>
                  <option>UDP</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
        {/* sub4-main-box-mid*/}

        {/* sub4-main-box-mid*/}
      </div>
      {/* main-box-mid*/}






      {/* main-box-right*/}
      <div className="subsub3-sub1-connectivity-div3">
        {/* sub1-main-box-right*/}
        <div className="sub1-subsub3-sub1-connectivity-div3">
          <div
            className="subsub1-sub1-subsub3-sub1-connectivity-div3"


            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight1(right1State)}
            >GPRS Setup</p>
            <div className="sub1-subsub1-sub1-subsub3-sub1-connectivity-div3">
              <span
                onClick={() => handlRight1(right1State)}
              >
                Setup sending data by GPRS link. Note: after changing this
                setting device will be disconnected from current server.
              </span>
              <div className="subsub1-sub1-subsub1-sub1-subsub3-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendGPRSSetup}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlRight1(right1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub1-subsub3-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub3-sub1-connectivity-div3"
            style={{ display: right1 }}
          >
            <div className="sub1-subsub2-sub1-subsub3-sub1-connectivity-div3">
              <div className="import1-sub1-subsub2-subsub2-sub1-subsub3-sub1-connectivity-div3">
                <label className="connectivity-switch">
                  <input type="checkbox" checked={apnCheck} onChange={handleChangeApnCheck} />
                  <span className="connectivity-slider"></span>
                </label>
                <p>GPRS Enabled</p>
              </div>
              <div className="subsub1-sub1-subsub2-sub1-subsub3-sub1-connectivity-div3"
                onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                style={{ border: focusRight1 }}
              >
                <label>APN Name</label>
                <input type="text" value={apnName} onChange={handleChangeApnName} />
                {/* <p>Hours</p> */}
              </div>
              <div className="subsub2-sub1-subsub2-sub1-subsub3-sub1-connectivity-div3"
                onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                style={{ border: focusRight2 }}>
                <label>APN Username</label>
                <input type="text" value={apnUserName} onChange={handleChangeApnUserName} />
              </div>
              <div className="subsub3-sub1-subsub2-sub1-subsub3-sub1-connectivity-div3"
                onFocus={() => setFocusRight3(".1rem solid #005EEC")}
                onBlur={() => setFocusRight3(".1rem solid #898A8D")}
                style={{ border: focusRight3 }}>
                <label>APN Password</label>
                <input type="text" value={apnPassword} onChange={handleChangeApnPassword} />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub3-sub1-connectivity-div3">
          <div
            className="subsub1-sub2-subsub3-sub1-connectivity-div3"

            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight2(right2State)}
            >Secondary GPRS Server Setup</p>
            <div className="sub1-subsub1-sub2-subsub3-sub1-connectivity-div3">
              <div className="subsub1-sub1-subsub1-sub2-subsub3-sub1-connectivity-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendGPRSSecondarySetup}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlRight2(right2State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub3-sub1-connectivity-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub3-sub1-connectivity-div3"
            style={{ display: right2 }}
          >
            <div className="sub1-subsub2-sub2-subsub3-sub1-connectivity-div3">

              <div className="subsub1-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3"
                onFocus={() => setFocusRight4(".1rem solid #005EEC")}
                onBlur={() => setFocusRight4(".1rem solid #898A8D")}
                style={{ border: focusRight4 }}>
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3">
                  <label>Mode</label>
                  <p>{gprsSMode}</p>
                </div>
                <select value={""} onChange={(e) => handleChangeGprsSMode(e)}>
                  <option selected></option>
                  <option>Disable</option>
                  <option>Duplicate</option>
                  <option>Backup</option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3" style={{ width: "29.1rem", height: "3.3rem", border: focusRight5 }}
                onFocus={() => setFocusRight5(".1rem solid #005EEC")}
                onBlur={() => setFocusRight5(".1rem solid #898A8D")}
              >
                <label>Host</label>
                <input type="number" value={gprsSHost} onChange={handleChangeGprsSHost} />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3"
                onFocus={() => setFocusRight6(".1rem solid #005EEC")}
                onBlur={() => setFocusRight6(".1rem solid #898A8D")}
                style={{ border: focusRight6 }}>
                <label>Port</label>
                <input type="number" value={gprsSPort} onChange={handleChangeGprsSPort} />
              </div>




              <div className="subsub4-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3"
                onFocus={() => setFocusRight7(".1rem solid #005EEC")}
                onBlur={() => setFocusRight7(".1rem solid #898A8D")}
                style={{ border: focusRight7 }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub3-sub1-connectivity-div3">
                  <label>Server Protocol</label>
                  <p>{gprsSProtocol == "TCP" ? "TCP" : "UDP"}</p>
                </div>
                <select value={""} onChange={handleChangeGprsSProtocol}>
                  <option selected></option>
                  <option>TCP</option>
                  <option>UDP</option>
                </select>
              </div>

            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default Connectivity;
