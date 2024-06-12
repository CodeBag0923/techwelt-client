import React, { useState } from "react";
import "./SystemParams.css";
import { useSelector } from "react-redux";
import { cmdType } from "../../../common/common";
import { useLocation } from "react-router-dom";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";

const SystemParams = () => {
  const deviceListData = useSelector((state) => state.devicesList);
  const { token } = deviceListData;
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
  const [sleepMode, setSleepMode] = useState("Disable");
  const [ignitionDetectionSource, setIgnitionDetectionSource] = useState("Digital Input")
  const [accelerometerCalibrationAndGravityFilter, setAccelerometerCalibrationAndGravityFilter] = useState("Continuous")
  const [dataCodecToUseForDataTransmission, setDataCodecToUseForDataTransmission] = useState("Codec 8")
  const [batteryChargeMode, setBatteryChargeMode] = useState("Always")
  const [staticNavigationSource, setStaticNavigationSource] = useState("");

  const [ignation, setIgnation] = useState(false)
  const [movementSource, setMovementSource] = useState(false)
  const [gps, setGps] = useState(false)
  const [canSpeed, setCanSpeed] = useState(false)
  const [staticNavigation, setStaticNavigation] = useState(false)

  // //////////////////////////////////////////////
  const [focusLeft1, setFocusLeft1] = useState("")
  const [focusLeft2, setFocusLeft2] = useState("")
  const [focusLeft3, setFocusLeft3] = useState("")
  const [focusLeft4, setFocusLeft4] = useState("")

  ////////////////////////////////////////////////
  const [focusMid1, setFocusMid1] = useState("")


  const [focusRight1, setFocusRight1] = useState("")
  const [focusRight2, setFocusRight2] = useState("")
  const [focusRight3, setFocusRight3] = useState("")
  const [focusRight4, setFocusRight4] = useState("")


  const [resynchronization, setResyncronization] = useState("")
  const [ntpServer1, setNtpServer1] = useState("")
  const [ntpServer2, setNtpServer2] = useState("")

  const [beidou, setBeidou] = useState("");
  const [glonass, setGlonass] = useState("");
  const [galileo, setGalileo] = useState("");
  const [gps1, setGps1] = useState("");
  const [led, setLed] = useState(false);
  const [filter, setFilter] = useState(false)


  const getData = useLocation();
  const data = {
    deviceImei: getData?.state?.deviceImei,
  }
  const handleChangeMotionDetection = (ignation_mode) => {
    switch (ignation_mode) {

      case 0:// ignation 

        if (!ignation) {

          setCanSpeed(false);
          setGps(false);
          setMovementSource(false);
          setIgnation(true);
          console.log("result:", ignation, canSpeed, gps, canSpeed)
          return;
        }
        setIgnation(false);
        break;
      case 1: //movement senor
        if (!movementSource) {

          setCanSpeed(false);
          setGps(false);
          setMovementSource(true);
          setIgnation(false);
          console.log("result:", ignation, canSpeed, gps, canSpeed)
          return;
        }
        setMovementSource(false);
        break;
      case 2: //GPS
        if (!gps) {

          setCanSpeed(false);
          setGps(true);
          setMovementSource(false);
          setIgnation(false);
          console.log("result:", ignation, canSpeed, gps, canSpeed)
          return;
        }
        setGps(false)
        break;
      case 3: //can speed:
        if (!canSpeed) {

          setCanSpeed(true);
          setGps(false);
          setMovementSource(false);
          setIgnation(false);
          console.log("result:", ignation, canSpeed, gps, canSpeed)
          return;
        }
        setCanSpeed(false);
        break;
      default:
        break;
    }
  }

  const handleChangeGNSSDetection = (mode) => {
    switch (mode) {

      case 0:// beidou 

        if (!beidou) {

          setBeidou(true);
          setGalileo(false);
          setGlonass(false);
          setGps1(false);
          return;
        }
        setBeidou(false);
        break;
      case 1: //glonass
        if (!glonass) {

          setBeidou(false);
          setGalileo(false);
          setGlonass(true);
          setGps1(false);
          return;
        }
        setGlonass(false);
        break;
      case 2: // galileo
        if (!galileo) {

          setBeidou(false);
          setGalileo(true);
          setGlonass(false);
          setGps1(false);
          return;
        }
        setGalileo(false)
        break;
      case 3: //gps
        if (!gps1) {

          setBeidou(false);
          setGalileo(false);
          setGlonass(false);
          setGps1(true);
          return;
        }
        setGps1(false);
        break;
      default:
        break;
    }
  }

  // /////////////////////////////////////////////
  const handlLeft1 = (state) => {
    if (state === false) {
      setLeft1("block");
      setLeft1State(true);
    } else {
      setLeft1("none");
      setLeft1State(false);
    }
  };
  const handlLeft2 = (state) => {
    if (state === false) {
      setLeft2("block");
      setLeft2State(true);
    } else {
      setLeft2("none");
      setLeft2State(false);
    }
  };
  const handlLeft3 = (state) => {
    if (state === false) {
      setLeft3("block");
      setLeft3State(true);
    } else {
      setLeft3("none");
      setLeft3State(false);
    }
  };
  //////////////////////////////////////
  const handlMid1 = (state) => {
    if (state === false) {
      setMid1("block");
      setMid1State(true);
    } else {
      setMid1("none");
      setMid1State(false);
    }
  };
  const handlMid2 = (state) => {
    if (state === false) {
      setMid2("block");
      setMid2State(true);
    } else {
      setMid2("none");
      setMid2State(false);
    }
  };
  const handlMid3 = (state) => {
    if (state === false) {
      setMid3("block");
      setMid3State(true);
    } else {
      setMid3("none");
      setMid3State(false);
    }
  };
  const handlMid4 = (state) => {
    if (state === false) {
      setMid4("block");
      setMid4State(true);
    } else {
      setMid4("none");
      setMid4State(false);
    }
  };
  // ///////////////////////////
  const handlRight1 = (state) => {
    if (state === false) {
      setRight1("block");
      setRight1State(true);
    } else {
      setRight1("none");
      setRight1State(false);
    }
  };
  const handlRight2 = (state) => {
    if (state === false) {
      setRight2("block");
      setRight2State(true);
    } else {
      setRight2("none");
      setRight2State(false);
    }
  };
  const handlRight3 = (state) => {
    if (state === false) {
      setRight3("block");
      setRight3State(true);
    } else {
      setRight3("none");
      setRight3State(false);
    }
  };
  const handlRight4 = (state) => {
    if (state === false) {
      setRight4("block");
      setRight4State(true);
    } else {
      setRight4("none");
      setRight4State(false);
    }
  };
  const handleSelect = (e) => {
    console.log(e.target.value)
    setSleepMode(e.target.value)
  }
  const handleSelect1 = (e) => {
    console.log(e.target.value)
    setIgnitionDetectionSource(e.target.value)
  }
  const handleSelect2 = (e) => {
    console.log(e.target.value)
    setAccelerometerCalibrationAndGravityFilter(e.target.value)
  }
  const handleSelect3 = (e) => {
    console.log(e.target.value)
    setDataCodecToUseForDataTransmission(e.target.value)
  }
  const handleSelect4 = (e) => {
    console.log(e.target.value)
    setBatteryChargeMode(e.target.value)
  }
  const handleSelect5 = (e) => {
    console.log(e.target.value)
    setStaticNavigationSource(e.target.value)
  }

  const getOpt = () => {
    return movementSource ? "1" : gps ? "2" : canSpeed ? "3" : "0"
  }

  const getOpt1 = () => {
    return beidou ? "0" : glonass ? "1" : galileo ? "2" : "3"
  }

  const sendMotionSource = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.MotionDetection,
      params: {
        opt: getOpt()
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)
  }

  const sendSleepMode = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.SleepMode,
      params: {
        mode: sleepMode === "Disable" ? "0" : "1"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)
  }



  const sendNetworkTime = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.NetworkTimeProtocalServer,
      params: {
        period: resynchronization,
        server1: ntpServer1,
        server2: ntpServer2,
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }


  const sendStaticNavigation = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.StaticNavigation,
      params: {
        on: staticNavigation ? "1" : "0",
        src: staticNavigationSource === "Movement" ? "0" : staticNavigationSource === "Ignition" ? "1" : "2"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }


  const sendMotionDetectionSource = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.MotionDetection,
      params: {
        opt: getOpt1()
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  const sendGetVerCommandReponse = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.GetverCommandResponse,
      params: {
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  const sendLedIndication = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.LedIndication,
      params: {
        on: led ? "1" : "0"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  const sendIgnationDetection = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.IgnitionDetectionSource,
      params: {
        src: ignitionDetectionSource === "Digital Input" ? "1" : "0"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  const sendAccelerator = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AccelerometerCalibrationAndGravityFilter,
      params: {
        mode: accelerometerCalibrationAndGravityFilter === "Continuous" ? "1" : "0",
        filter: filter ? "1" : "0"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  const sendDataCodec = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.DataCodecToUseForDataTransmission,
      params: {
        codec: dataCodecToUseForDataTransmission === "Codec 8" ? "1" : "0"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  const sendBatteryCharge = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.BatteryChargeMode,
      params: {
        mode: batteryChargeMode === "Always" ? "1" : "0"
      },
      devImei: data?.deviceImei
    }
    console.log("🚀 ~ file: InputOutput.js:431 ~ sendDigitalInput ~ sendCommandData:", sendCommandData)
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:425 ~ sendDigitalOutput ~ res:", res)

  }

  return (
    <div className="sub1-system-params-div3" id="sec2">
      {/* main-box-left*/}
      <div className="subsub1-sub1-system-params-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-system-params-div3">
          <div
            className="subsub1-sub1-subsub1-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >Motion Detection Source</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-system-params-div3">
              <span
                onClick={() => handlLeft1(left1State)}
              >
                Object motion detection is to be configured to determine device
                working mode. Other functionalities that depend on movement
                source are: power manager, fuel consumption and trip.
              </span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendMotionSource}
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
              className="sub2-subsub1-sub1-subsub1-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-system-params-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-system-params-div3">
              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={ignation} onChange={() => {
                    handleChangeMotionDetection(0)
                  }} />
                  <span className="system-params-slider"></span>
                </label>
                <p>Ignition</p>
              </div>

              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={movementSource} onChange={() => handleChangeMotionDetection(1)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>Movement Sensor</p>
              </div>

              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={gps} onChange={() => handleChangeMotionDetection(2)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>GPS</p>
              </div>

              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={canSpeed} onChange={() => handleChangeMotionDetection(3)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>CAN SPeed</p>
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-system-params-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft2(left2State)}
            >Sleep Mode</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-system-params-div3">
              <span
                onClick={() => handlLeft2(left2State)}
              >
                Device power saving mode setup. In sleep mode module reduces level of power consumption by turning GPS module to sleep. In deep sleep mode module turns GPS module to sleep and device is deregistered from GSM network (device do not receive SMS in deep sleep). In Online Deep Sleep mode device works as in Deep Sleep mode, but without deregistering from GSM network.
              </span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendSleepMode}
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
              className="sub2-subsub1-sub2-subsub1-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-system-params-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub2-subsub1-sub1-system-params-div3"
                onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                style={{ border: focusLeft1 }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub1-sub1-system-params-div3">
                  <label>Sleep Mode</label>
                  <p>{sleepMode == "Disable" ? "Disable" : "Enable"}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect(e)}>
                  <option selected></option>
                  <option >Disable</option>
                  <option>Enable</option>
                </select>

              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}
        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-system-params-div3"> */}
        <div className="sub3-subsub1-sub1-system-params-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft3(left3State)}
            >Network Time Protocol server</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-system-params-div3">

              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendNetworkTime}
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
              className="sub2-subsub1-sub3-subsub1-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
              }}
            >
              <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-system-params-div3"
            style={{ display: left3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub1-sub1-system-params-div3"
                onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                style={{ border: focusLeft2 }}>
                <label>Re-synchronization Period</label>
                <input type="number" value={resynchronization} onChange={(e) => {
                  setResyncronization(e.target.value)
                }} />
                <p>Hours</p>
              </div>
              <div className="subsub2-sub1-subsub2-sub3-subsub1-sub1-system-params-div3"
                onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                style={{ border: focusLeft3 }}>
                <label>NTP Server 1</label>
                <input type="type" value={ntpServer1} onChange={(e) => {
                  setNtpServer1(e.target.value)
                }} />
              </div>
              <div className="subsub3-sub1-subsub2-sub3-subsub1-sub1-system-params-div3"
                onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                style={{ border: focusLeft4 }}>
                <label>NTP Server 2</label>
                <input type="type" value={ntpServer2} onChange={(e) => {
                  setNtpServer2(e.target.value)
                }} />
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-left*/}
      </div>








      {/* main-box-mid*/}
      <div className="subsub2-sub1-system-params-div3">
        {/* sub1-main-box-mid*/}


        <div className="sub3-subsub1-sub1-input-output-div3" style={{ marginBottom: "1rem" }}>
          <div
            className="subsub1-sub3-subsub1-sub1-input-output-div3"

            style={{
              borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              height: "6rem"
            }}
          >
            <p
              onClick={() => handlMid1(mid1State)}
            >Static Navigation</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-input-output-div3" style={{ height: "2.5rem" }}>
              <span
                onClick={() => handlMid1(mid1State)}
              >Static Navigation Mode is a filter, which filters out track jumps when the object is not moving.</span>
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-input-output-div3">
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendStaticNavigation}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlMid1(mid1State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-input-output-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span style={{ paddingTop: ".2rem" }}>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-input-output-div3"
            style={{ display: mid1, height: "8rem" }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-input-output-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" checked={staticNavigation} onChange={(e) => {
                    setStaticNavigation(!staticNavigation)
                  }} />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                    <label>Static Navigation Source</label>
                    <p>{staticNavigationSource}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect5(e)}>
                    <option selected></option>
                    <option>Movement</option>
                    <option>Ignition</option>
                    <option>Movement or Ignition</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

            </div>
          </div>
        </div>
        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub2-sub1-system-params-div3">
          <div
            className="subsub1-sub2-subsub2-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid2(mid2State)}
            >Motion Detection Source</p>
            <div className="sub1-subsub1-sub2-subsub2-sub1-system-params-div3">
              <span
                onClick={() => handlMid2(mid2State)}
              >
                Object motion detection is to be configured to determine device working mode. Other functionalities that depend on movement source are: power manager, fuel consumption and trip.
              </span>
              <div className="subsub1-sub1-subsub1-sub2-subsub2-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendMotionDetectionSource}
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
              className="sub2-subsub1-sub2-subsub2-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub2-sub1-system-params-div3"
            style={{ display: mid2 }}
          >
            <div className="sub1-subsub2-sub2-subsub2-sub1-system-params-div3">
              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={beidou} onChange={() => handleChangeGNSSDetection(0)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>Beidou</p>
              </div>

              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={glonass} onChange={() => handleChangeGNSSDetection(1)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>Glonass</p>
              </div>

              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={galileo} onChange={() => handleChangeGNSSDetection(2)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>Galileo</p>
              </div>

              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={gps1} onChange={() => handleChangeGNSSDetection(3)} />
                  <span className="system-params-slider"></span>
                </label>
                <p>GPS</p>
              </div>
            </div>
          </div>
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub2-sub1-system-params-div3">
          <div
            className="subsub1-sub3-subsub2-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid3(mid3State)}
            >getver command response</p>
            <div className="sub1-subsub1-sub3-subsub2-sub1-system-params-div3">
              <span
                onClick={() => handlMid3(mid3State)}
              >
                Readonly settings to check device firmware and hardware info              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub2-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendGetVerCommandReponse}
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
              className="sub2-subsub1-sub3-subsub2-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub2-sub1-system-params-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
                <label>Firmware Version</label>
                <input type="number" disabled />
              </div>
              <div className="subsub2-sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
                <label>GPS Chip Version</label>
                <input type="type" disabled />
              </div>
              <div className="subsub3-sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
                <label>Hardware Model</label>
                <input type="type" disabled />
              </div>
              <div className="subsub4-sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
                <label>IMEI</label>
                <input type="type" disabled />
              </div>
              <div className="subsub5-sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
                <label>Init Time</label>
                <input type="type" disabled />
              </div>
              <div className="subsub6-sub1-subsub2-sub3-subsub2-sub1-system-params-div3">
                <label>Uptime (Seconds)</label>
                <input type="type" disabled />
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
        {/* sub4-main-box-mid*/}
        <div className="sub4-subsub2-sub1-system-params-div3">
          <div
            className="subsub1-sub4-subsub2-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: mid4State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid4State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid4(mid4State)}
            >LED Indication</p>
            <div className="sub1-subsub1-sub4-subsub2-sub1-system-params-div3">
              {/* <span>
              Object motion detection is to be configured to determine device working mode. Other functionalities that depend on movement source are: power manager, fuel consumption and trip.
              </span> */}
              <div className="subsub1-sub1-subsub1-sub4-subsub2-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendLedIndication}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlMid4(mid4State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub4-subsub2-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: mid4State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid4State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub4-subsub2-sub1-system-params-div3"
            style={{ display: mid4 }}
          >
            <div className="sub1-subsub2-sub4-subsub2-sub1-system-params-div3">
              <div style={{ display: "flex" }}>
                <label className="system-params-switch">
                  <input type="checkbox" checked={led} onChange={() => setLed(!led)} />
                  <span className="system-params-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* sub4-main-box-mid*/}
      </div>
      {/* main-box-mid*/}
















      {/* main-box-right*/}
      <div className="subsub3-sub1-system-params-div3">
        {/* sub1-main-box-right*/}
        <div className="sub1-subsub3-sub1-system-params-div3">
          <div
            className="subsub1-sub1-subsub3-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight1(right1State)}
            >Ignition Detection Source</p>
            <div className="sub1-subsub1-sub1-subsub3-sub1-system-params-div3">
              <span
                onClick={() => handlRight1(right1State)}
              >
                Ignition source is configurable and used to determine vehicle ignition status. Ignition status is used in power management and the following functionalities: eco driving, excessive idling, fuel consumption, over speeding, towing and trip.              </span>
              <div className="subsub1-sub1-subsub1-sub1-subsub3-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendIgnationDetection}
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
              className="sub2-subsub1-sub1-subsub3-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub3-sub1-system-params-div3"
            style={{ display: right1 }}
          >
            <div className="sub1-subsub2-sub1-subsub3-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub3-sub1-system-params-div3"
                onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                style={{ border: focusRight1 }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub1-subsub3-sub1-system-params-div3">
                  <label>Ignition Source</label>
                  <p>{ignitionDetectionSource == "Digital Input" ? "Digital Input" : "Enable"}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect1(e)}>
                  <option selected></option>
                  <option >Digital Input</option>
                  <option></option>
                </select>

              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub3-sub1-system-params-div3">
          <div
            className="subsub1-sub2-subsub3-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight2(right2State)}
            >Accelerometer calibration and gravity filter</p>
            <div className="sub1-subsub1-sub2-subsub3-sub1-system-params-div3">
              <span
                onClick={() => handlRight2(right2State)}
              >
                Object motion detection is to be configured to determine device working mode. Other functionalities that depend on movement source are: power manager, fuel consumption and trip.
              </span>
              <div className="subsub1-sub1-subsub1-sub2-subsub3-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendAccelerator}
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
              className="sub2-subsub1-sub2-subsub3-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub3-sub1-system-params-div3"
            style={{ display: right2 }}
          >
            <div className="sub1-subsub2-sub2-subsub3-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub2-subsub3-sub1-system-params-div3"
                onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                style={{ border: focusRight2 }}>
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub3-sub1-system-params-div3">
                  <label>Sleep Mode</label>
                  <p>{accelerometerCalibrationAndGravityFilter === "Continuous" ? "Continuous" : ""}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect2(e)}>
                  <option selected></option>
                  <option >Continuous</option>
                  <option></option>
                </select>

              </div>

              {/* <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem",backgroundColor:"green"}}>
              <label className="system-params-switch">
                  <input type="checkbox" />
                  <span className="system-params-slider"></span>
                </label>
                <p>Enable Gravity Filter</p>
                </div> */}
            </div>
            <div className="import-system-params-checkbox" >
              <label className="system-params-switch">
                <input type="checkbox" checked={filter} onChange={() => {
                  setFilter(!filter)
                }} />
                <span className="system-params-slider"></span>
              </label>
              <p>Enable Gravity Filter</p>
            </div>

          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
        {/* sub3-main-box-right*/}
        <div className="sub3-subsub3-sub1-system-params-div3">
          <div
            className="subsub1-sub3-subsub3-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: right3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight3(right3State)}
            >Data codec to use for data transmission</p>
            <div className="sub1-subsub1-sub3-subsub3-sub1-system-params-div3">
              <span
                onClick={() => handlRight3(right3State)}
              >
                Object motion detection is to be configured to determine device working mode. Other functionalities that depend on movement source are: power manager, fuel consumption and trip.
              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub3-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendDataCodec}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlRight3(right3State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub3-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: right3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub3-sub1-system-params-div3"
            style={{ display: right3 }}
          >
            <div className="sub1-subsub2-sub3-subsub3-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub3-sub1-system-params-div3"
                onFocus={() => setFocusRight3(".1rem solid #005EEC")}
                onBlur={() => setFocusRight3(".1rem solid #898A8D")}
                style={{ border: focusRight3 }}>
                <div className="sub1-subsub1-sub1-subsub2-sub3-subsub3-sub1-system-params-div3">
                  <label>Data Codec</label>
                  <p>{dataCodecToUseForDataTransmission == "Codec 8" ? "Codec 8" : ""}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect3(e)}>
                  <option selected></option>
                  <option >Codec 8</option>
                  <option></option>
                </select>

              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub3-main-box-right*/}
        {/* sub4-main-box-right*/}
        <div className="sub4-subsub3-sub1-system-params-div3">
          <div
            className="subsub1-sub4-subsub3-sub1-system-params-div3"

            style={{
              borderBottomLeftRadius: right4State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right4State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight4(right4State)}
            >Battery charge mode</p>
            <div className="sub1-subsub1-sub4-subsub3-sub1-system-params-div3">

              <div className="subsub1-sub1-subsub1-sub4-subsub3-sub1-system-params-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendBatteryCharge}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                <img
                  src="./assets/down.svg"
                  alt="none"
                  style={{ marginLeft: ".2rem", cursor: "pointer" }}
                  onClick={() => handlRight4(right4State)}
                />
              </div>
            </div>
            <div
              className="sub2-subsub1-sub4-subsub3-sub1-system-params-div3"
              style={{
                borderBottomLeftRadius: right4State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right4State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub4-subsub3-sub1-system-params-div3"
            style={{ display: right4 }}
          >
            <div className="sub1-subsub2-sub4-subsub3-sub1-system-params-div3">
              <div className="subsub1-sub1-subsub2-sub4-subsub3-sub1-system-params-div3"
                onFocus={() => setFocusRight4(".1rem solid #005EEC")}
                onBlur={() => setFocusRight4(".1rem solid #898A8D")}
                style={{ border: focusRight4 }}>
                <div className="sub1-subsub1-sub1-subsub2-sub4-subsub3-sub1-system-params-div3">
                  <label>Mode</label>
                  <p>{batteryChargeMode == "Always" ? "Always" : ""}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect4(e)}>
                  <option selected></option>
                  <option >Always</option>
                  <option></option>
                </select>

              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub4-main-box-right*/}
      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default SystemParams;
