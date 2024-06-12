import React, { useState } from "react";
import "./Accelerometer.css";
import Try from "../try/Try"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Accelerometer = () => {

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
  const [digitalInput, setDigitalInput] = useState("");
  const [priority1, setPriority1] = useState("");
  const [priority2, setPriority2] = useState("");
  const [priority3, setPriority3] = useState("");
  const [priority4, setPriority4] = useState("");
  const [priority5, setPriority5] = useState("");
  const [priority6, setPriority6] = useState("");
  const [priority7, setPriority7] = useState("");
  const [priority8, setPriority8] = useState("");
  const [towPriority1, setTowPriority1] = useState("");

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operand3, setOperand3] = useState("");
  const [operand4, setOperand4] = useState("");
  const [operand5, setOperand5] = useState("");
  const [operand6, setOperand6] = useState("");
  const [operand7, setOperand7] = useState("");
  const [operand8, setOperand8] = useState("");

  const [analogueInput, setAnalogueInput] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");
  const [phoneNumber4, setPhoneNumber4] = useState("");
  const [phoneNumber5, setPhoneNumber5] = useState("");

  const [smsText1, setSmsText1] = useState("");
  const [smsText2, setSmsText2] = useState("");
  const [smsText3, setSmsText3] = useState("");
  const [smsText4, setSmsText4] = useState("");
  const [smsText5, setSmsText5] = useState("");


  const [ignore1, setIgnore1] = useState("")
  const [ignore2, setIgnore2] = useState("")
  const [ignore3, setIgnore3] = useState("")
  const [mode, setMode] = useState("")
  const [carTrace, setCarTrace] = useState("")

  // //////////////////////////////////////////////
  const [focusLeft1, setFocusLeft1] = useState("")
  const [focusLeft2, setFocusLeft2] = useState("")
  const [focusLeft3, setFocusLeft3] = useState("")
  const [focusLeft4, setFocusLeft4] = useState("")
  const [focusLeft5, setFocusLeft5] = useState("")
  const [focusLeft6, setFocusLeft6] = useState("")
  const [focusLeft7, setFocusLeft7] = useState("")
  const [focusLeft8, setFocusLeft8] = useState("")
  const [focusLeft9, setFocusLeft9] = useState("")
  const [focusLeft10, setFocusLeft10] = useState("")
  const [focusLeft11, setFocusLeft11] = useState("")
  const [focusLeft12, setFocusLeft12] = useState("")
  const [focusLeft13, setFocusLeft13] = useState("")
  const [focusLeft14, setFocusLeft14] = useState("")

  const [focusMid1, setFocusMid1] = useState("")
  const [focusMid2, setFocusMid2] = useState("")
  const [focusMid3, setFocusMid3] = useState("")
  const [focusMid4, setFocusMid4] = useState("")
  const [focusMid5, setFocusMid5] = useState("")
  const [focusMid6, setFocusMid6] = useState("")
  const [focusMid7, setFocusMid7] = useState("")
  const [focusMid8, setFocusMid8] = useState("")
  const [focusMid9, setFocusMid9] = useState("")
  const [focusMid10, setFocusMid10] = useState("")
  const [focusMid11, setFocusMid11] = useState("")
  const [focusMid12, setFocusMid12] = useState("")
  const [focusMid13, setFocusMid13] = useState("")
  const [focusMid14, setFocusMid14] = useState("")
  const [focusMid15, setFocusMid15] = useState("")
  const [focusMid16, setFocusMid16] = useState("")
  const [focusMid17, setFocusMid17] = useState("")
  const [focusMid18, setFocusMid18] = useState("")
  const [focusMid19, setFocusMid19] = useState("")
  const [focusMid20, setFocusMid20] = useState("")
  const [focusMid21, setFocusMid21] = useState("")

  const [focusRight1, setFocusRight1] = useState("")
  const [focusRight2, setFocusRight2] = useState("")
  const [focusRight3, setFocusRight3] = useState("")
  const [focusRight4, setFocusRight4] = useState("")
  const [focusRight5, setFocusRight5] = useState("")
  const [focusRight6, setFocusRight6] = useState("")
  const [focusRight7, setFocusRight7] = useState("")
  const [focusRight8, setFocusRight8] = useState("")
  const [focusRight9, setFocusRight9] = useState("")
  const [focusRight10, setFocusRight10] = useState("")
  const [focusRight11, setFocusRight11] = useState("")
  const [focusRight12, setFocusRight12] = useState("")
  const [focusRight13, setFocusRight13] = useState("")
  const [focusRight14, setFocusRight14] = useState("")
  const [focusRight15, setFocusRight15] = useState("")
  const [focusRight16, setFocusRight16] = useState("")
  const [focusRight17, setFocusRight17] = useState("")


  const [unplug_priority, setUnplugPriority] = useState("");
  const [unplug_priority1, setUnplugPriority1] = useState("");
  const [unplug_event_check, setUnplugEventCheck] = useState(false);
  const [unplug_mode, setUnplugMode] = useState("Simple");
  const [unplug_send_sms_check, setUnplugSendSmsCheck] = useState(false);
  const [unplug_send_phoneumber, setUnplugSendSmsPassnumber] = useState(false);
  const [unplug_send_sms_text, setUnplugSendSmsText] = useState(false);

  const [crash_enable_check, setCrashEnableCheck] = useState(false);
  const [crash_out_data_rate, setCrashOutDataRate] = useState("");
  const [crash_acc_duration, setCrashAccDuration] = useState("");
  const [crash_gnss_duration, setCrashGnssDuration] = useState("");

  const [tow_priority, setTowPriority] = useState("");
  const [tow_record_check, setTowRecordCheck] = useState(false);
  const [tow_act_timeout, setTowActTimeOut] = useState("");
  const [tow_evt_timeout, setTowEvtTimeOut] = useState("");
  const [tow_threshold, setTowThreshold] = useState("");
  const [tow_angle, setTowAngle] = useState("");
  const [tow_duration, setTowDuration] = useState("");
  const [tow_call_check, setTowCallCheck] = useState(false);
  const [tow_send_sms_check, setTowSendSmsCheck] = useState(false);

  const [cd_priority, setCdPriority] = useState("");
  const [cd_priority1, setCdPriority1] = useState("");
  const [cd_duration, setCdDuration] = useState("")
  const [cd_threshold, setCdThreshold] = useState("")
  const [cd_car_trace, setCdCarTrace] = useState("")
  const [cd_car_trace1, setCdCarTrace1] = useState("")
  const [cd_send_sms_check, setCdSendSmsCheck] = useState(false)

  const [eid_priority, setEIDPriority] = useState("");
  const [eid_priority1, setEIDPriority1] = useState("");
  const [eid_stop_timeout, setEidStopTimeout] = useState("")
  const [eid_record_check, setEidRecordCheck] = useState(false)
  const [eid_move_timeout, setEidMoveTimeout] = useState("")
  const [eid_out_control_check, setEidOutControlCheck] = useState(false)
  const [eid_send_sms_check, setEidSendSmsCheck] = useState(false)


  const handleChangeUnPlugPriority = (e) => {
    setUnplugPriority(e.target.value)
    setUnplugPriority1(e.target.selectedIndex - 1)
  }

  const handleChangeUnplugEventCheck = () => {
    setUnplugEventCheck(!unplug_event_check)
  }

  const handleChangeUnplugMode = (e) => {
    setUnplugMode(e.target.value)
  }

  const handleChangeUnplugSendSmsCheck = () => {
    setUnplugSendSmsCheck(!unplug_send_sms_check)
  }

  const handleChangeCrashEnableCheck = () => {
    setCrashEnableCheck(!crash_enable_check)
  }

  const handleChangeCrashOutDataRate = (e) => {
    setCrashOutDataRate(e.target.value)
  }

  const handleChangeCrashAccDuration = (e) => {
    setCrashAccDuration(e.target.value)
  }

  const handleChangeCrashGnssDuration = (e) => {
    setCrashGnssDuration(e.target.value)
  }

  const handleChangeTowPriority = (e) => {
    setTowPriority(e.target.value)
    setTowPriority1(e.target.selectedIndex - 1)
  }

  const handleChangeTowRecordCheck = () => {
    setTowRecordCheck(!tow_record_check)
  }

  const handleChangeTowActTimeOut = (e) => {
    setTowActTimeOut(e.target.value)
  }

  const handleChangeTowEvtTimeOut = (e) => {
    setTowEvtTimeOut(e.target.value)
  }

  const handleChangeTowThreshold = (e) => {
    setTowThreshold(e.target.value)
  }

  const handleChangeTowAngle = (e) => {
    setTowAngle(e.target.value)
  }

  const handleChangeTowDuration = (e) => {
    setTowDuration(e.target.value)
  }

  const handleChangeTowCallCheck = () => {
    setTowCallCheck(!tow_call_check)
  }

  const handleChangeTowSendSmsCheck = () => {
    setTowSendSmsCheck(!tow_send_sms_check)
  }

  const handleChangeCdPriority = (e) => {
    setCdPriority(e.target.value)
    setCdPriority1(e.target.selectedIndex - 1)
  }

  const handleChangeCdDuration = (e) => {
    setCdDuration(e.target.value)
  }

  const handleChangeCdThreshold = (e) => {
    setCdThreshold(e.target.value)
  }

  const handleChangeCdSendSmsCheck = () => {
    setCdSendSmsCheck(!cd_send_sms_check)
  }

  const handleChangeCdCarTrace = (e) => {
    setCdCarTrace(e.target.value)
    setCdCarTrace1(e.target.selectedIndex - 1)
  }

  const handleChangeEIDPriority = (e) => {
    setEIDPriority(e.target.value)
    setEIDPriority1(e.target.selectedIndex - 1)
  }

  const handleChangeEidStopTimeout = (e) => {
    setEidStopTimeout(e.target.value)
  }

  const handleChangeEidRecordCheck = () => {
    setEidRecordCheck(!eid_record_check)
  }

  const handleChangeEidMoveTimeout = (e) => {
    setEidMoveTimeout(e.target.value)
  }



  const handleChangeEidOutControlCheck = () => {
    setEidOutControlCheck(!eid_out_control_check)
  }

  const handleChangeEidSendSmsCheck = () => {
    setEidSendSmsCheck(!eid_send_sms_check)
  }


  const handleSelectPhoneNumber1 = (e) => {
    setPhoneNumber1(e.target.value);
  }


  const handleSelectPhoneNumber2 = (e) => {
    setPhoneNumber2(e.target.value);
  }

  const handleSelectPhoneNumber3 = (e) => {
    setPhoneNumber3(e.target.value);
  }

  const handleSelectPhoneNumber4 = (e) => {
    setPhoneNumber4(e.target.value);
  }

  const handleSelectPhoneNumber5 = (e) => {
    setPhoneNumber5(e.target.value);
  }

  const sendCommonRequest = async (type, params) => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: type,
      params: params,
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Accelerometer.js:299 ~ sendCommonRequest ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
    return res;
  }

  const sendUnplugDetection = async () => {
    return sendCommonRequest(cmdType.UnplugDetection, {

      priority: unplug_priority1,
      evOnly: unplug_event_check ? "1" : "0",
      mode: unplug_mode == "Simple" ? "0" : "1",
      phoneNo: phoneNumber1,
      sms: smsText1,
    })
  }

  const sendCrashCounter = async () => {
    return sendCommonRequest(cmdType.CrashCounter, {

      on: crash_enable_check ? "1" : "0",
      rate: crash_out_data_rate,
      duration: crash_acc_duration,
      gnss: crash_gnss_duration
      // phoneNo:,
      // sms:,
    })
  }

  const sendTowDetection = async () => {
    return sendCommonRequest(cmdType.TowingDetection, {
      priority: towPriority1,
      evRec: tow_record_check ? "1" : "0",
      acTout: tow_act_timeout,
      evTout: tow_evt_timeout,
      threshold: tow_threshold,
      ang: tow_angle,
      duration: tow_duration,
      callOn: tow_call_check ? "1" : "0",
      phoneNo: phoneNumber3,
      sms: smsText3
    })
  }

  const sendCrashDetection = async () => {
    return sendCommonRequest(cmdType.CrashDetection, {
      priority: cd_priority1,
      duration: cd_duration,
      threshold: cd_threshold,
      carTrace: cd_car_trace1,
      phoneNo: phoneNumber4,
      sms: smsText4,
    })
  }

  const sendEidetection = async () => {
    return sendCommonRequest(cmdType.ExcessiveIdlingDetection, {
      priority: eid_priority1,
      evRec: eid_record_check ? "1" : "0",
      stopTout: eid_stop_timeout,
      moveTout: eid_move_timeout,
      outputCtl: eid_out_control_check ? "1" : "0",
      p1: "",
      p2: "",
      phoneNo: phoneNumber5,
      sms: smsText5

    })
  }




  // /////////////////////////////////////////////
  useState("Digital Input");
  const [
    accelerometerCalibrationAndGravityFilter,
    setAccelerometerCalibrationAndGravityFilter,
  ] = useState("Continuous");
  const [
    dataCodecToUseForDataTransmission,
    setDataCodecToUseForDataTransmission,
  ] = useState("Codec 8");
  const [batteryChargeMode, setBatteryChargeMode] = useState("Always");
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
  const handleSelect = (e) => {
    console.log(e.target.value);
    setDigitalInput(e.target.value);
  };
  const handleSelect1 = (e) => {
    console.log(e.target.value);
    setPriority1(e.target.value);
  };
  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
  };
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setPriority2(e.target.value);
  };
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setOperand2(e.target.value);
  };
  const handleSelect5 = (e) => {
    console.log(e.target.value);
    setPriority3(e.target.value);
  };
  const handleSelect6 = (e) => {
    console.log(e.target.value);
    setOperand3(e.target.value);
  };
  const handleSelect7 = (e) => {
    console.log(e.target.value);
    setCarTrace(e.target.value);
  };
  const handleSelect8 = (e) => {
    console.log(e.target.value);
    setOperand4(e.target.value);
  };
  const handleSelect9 = (e) => {
    console.log(e.target.value);
    setPriority5(e.target.value);
  };
  const handleSelect10 = (e) => {
    console.log(e.target.value);
    setOperand5(e.target.value);
  };
  const handleSelect11 = (e) => {
    console.log(e.target.value);
    setPriority6(e.target.value);
  };
  const handleSelect12 = (e) => {
    console.log(e.target.value);
    setOperand6(e.target.value);
  };
  const handleSelect13 = (e) => {
    console.log(e.target.value);
    setPriority7(e.target.value);
  };
  const handleSelect14 = (e) => {
    console.log(e.target.value);
    setOperand7(e.target.value);
  };
  const handleSelect15 = (e) => {
    console.log(e.target.value);
    setAnalogueInput(e.target.value);
  };
  const handleSelect16 = (e) => {
    console.log(e.target.value);
    setPriority8(e.target.value);
  };
  const handleSelect17 = (e) => {
    console.log(e.target.value);
    setOperand8(e.target.value);
  };
  const handleIgnore1 = (e) => {
    setIgnore1(e.target.value)
  }
  const handleIgnore2 = (e) => {
    setIgnore2(e.target.value)
  }
  const handleIgnore3 = (e) => {
    setIgnore3(e.target.value)
  }
  const handlFocus = (e) => {
    console.log(e)
  }
  const handlsend = () => {
    alert("helo")

  }
  return (
    <div className="sub1-accelerometer-div3" id="sec1">
      {/* main-box-left*/}
      <div className="subsub1-sub1-accelerometer-div3">

        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-accelerometer-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-accelerometer-div3"

            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >Unplug Detection</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
              <span
                onClick={() => handlLeft1(left1State)}
              >Unplug detection scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendUnplugDetection}
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
              className="sub2-subsub1-sub2-subsub1-sub1-accelerometer-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
                paddingTop: ".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-accelerometer-div3"
            style={{ display: left1, height: "26rem", paddingTop: "1rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                  onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                  style={{ border: focusLeft1 }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <label>Priority</label>
                    <p>{unplug_priority}</p>
                  </div>
                  <select value={""} onChange={handleChangeUnPlugPriority}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Unplug detection scenario priority"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={unplug_event_check} onChange={handleChangeUnplugEventCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <Try text={"If enabled, only eventual records of unplug detection will be sent"} />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                  onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                  style={{ border: focusLeft2 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <label>Mode</label>
                    <p>{unplug_mode}</p>
                  </div>
                  <select value={""} onChange={handleChangeUnplugMode}>
                    <option selected></option>
                    <option>Simple</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <Try text={"Unplug detection mode. Simple - according to external voltage only, advanced - external voltage and accelerometer"} />

              </div>

              {/* <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                 onFocus={()=>setFocusLeft6(".1rem solid #005EEC")}
                 onBlur={()=>setFocusLeft6(".1rem solid #898A8D")}
               style={{border:focusLeft6}}
                >
                  <label>Average</label>
                  <input type="number" />
                </div>
                <Try text={"Digital Input 1 sample length to average"}/>
              </div> */}

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <p>Send SMS</p>
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={unplug_send_sms_check} onChange={handleChangeUnplugSendSmsCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of unplug event"} style={{ marginleft: "8rem" }} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
            {
              unplug_send_sms_check ?
                <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3" >

                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>Phone Number</label>
                        <p>{phoneNumber1}</p>
                      </div>
                      <select value={""} onChange={(e) => handleSelectPhoneNumber1(e)}>
                        <option selected></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>



                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="subsub1-sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>SMS Text</label>
                        {/* <p>{phoneNumber}</p> */}
                      </div>
                      <input style={{ padding: "1rem" }} value={smsText1} onChange={(e) => setSmsText1(e.target.value)} />
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>
                </div>
                :
                <div>

                </div>
            }
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}
        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-accelerometer-div3"> */}
        <div className="sub2-subsub1-sub1-accelerometer-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-accelerometer-div3"

            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft2(left2State)}
            >Crash Counter</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
              <span
                onClick={() => handlLeft2(left2State)}
              >Crash detection scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendCrashCounter}
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
              className="sub2-subsub1-sub2-subsub1-sub1-accelerometer-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
                paddingTop: ".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-accelerometer-div3"
            style={{ display: left2, height: "16rem", paddingTop: "1rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">


              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={crash_enable_check} onChange={handleChangeCrashEnableCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>Enable</p>
                </div>
                {/* <Try text={"Send digital input I/O element either when event happens or in each record"}/> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                  style={{ border: focusLeft3 }}>
                  <label>Crash Even Output Data Rate</label>
                  <input type="number" value={crash_out_data_rate} onChange={handleChangeCrashOutDataRate} />
                  <p>Hz</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>



              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                  style={{ border: focusLeft4 }}>
                  <label>Acceleration  Duration</label>
                  <input type="number" value={crash_acc_duration} onChange={handleChangeCrashAccDuration} />
                  <p>Seconds</p>
                </div>
                <Try text={"Crash event monitoring duration of linear accelerometer values before and after event"} />

                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusLeft5(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft5(".1rem solid #898A8D")}
                  style={{ border: focusLeft5 }}>
                  <label>GNSS Duration</label>
                  <input type="number" value={crash_gnss_duration} onChange={handleChangeCrashGnssDuration} />
                  <p>Seconds</p>
                </div>
                <Try text={"Crash event monitoring duration of GNSS data before and after event"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>



            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub3-main-box-left*/}
      </div>
      {/* main-box-left*/}
























      {/* main-box-mid*/}
      <div className="subsub2-sub1-accelerometer-div3">
        {/* sub1-main-box-mid*/}
        <div className="sub2-subsub1-sub1-accelerometer-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-accelerometer-div3"

            style={{
              borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid1(mid1State)}
            >Towing Detection</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
              <span
                onClick={() => handlMid1(mid1State)}
              >Towing detection scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendTowDetection}
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
              className="sub2-subsub1-sub2-subsub1-sub1-accelerometer-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
                paddingTop: ".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-accelerometer-div3"
            style={{ display: mid1, height: "46rem", paddingTop: "1rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <label>Priority</label>
                    <p>{tow_priority}</p>
                  </div>
                  <select value={""} onChange={handleChangeTowPriority}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Towing detection scenario priority"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={tow_record_check} onChange={handleChangeTowRecordCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>Eventual Record</p>
                </div>
                <Try text={"Generate towing event"} />
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                  style={{ border: focusMid2 }}>
                  <label>Activation Timeout</label>
                  <input type="number" value={tow_act_timeout} onChange={handleChangeTowActTimeOut} />
                  <p>minutes</p>
                </div>
                <Try text={"Timeout to detect towing event if other conditions are met"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                  style={{ border: focusMid3 }}>
                  <label>Event Timeout</label>
                  <input type="number" value={tow_evt_timeout} onChange={handleChangeTowEvtTimeOut} />
                  <p>Seconds</p>
                </div>
                <Try text={"Timeout to check ignition state when acceleration and angle values are reached"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                  style={{ border: focusMid4 }}>
                  <label>Threshold</label>
                  <input type="number" value={tow_threshold} onChange={handleChangeTowThreshold} />
                  <p>mG</p>
                </div>
                <Try text={"Value used to detect towing when ignition is OFF"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusMid5(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid5(".1rem solid #898A8D")}
                  style={{ border: focusMid5 }}>
                  <label>Angle</label>
                  <input type="number" value={tow_angle} onChange={handleChangeTowAngle} />
                  <p>degrees</p>
                </div>
                <Try text={"Value used to detect towing when ignition is OFF"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusMid6(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid6(".1rem solid #898A8D")}
                  style={{ border: focusMid6 }}>
                  <label>Duration</label>
                  <input type="number" value={tow_duration} onChange={handleChangeTowDuration} />
                  <p>milliseconds</p>
                </div>
                <Try text={"Period to check acceleration and angle values"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <p>Call</p>
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={tow_call_check} onChange={handleChangeTowCallCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable/disable call to one of predefined phone numbers"} style={{ marginleft: "8rem" }} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <p>Send SMS</p>
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={tow_send_sms_check} onChange={handleChangeTowSendSmsCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of towing event"} style={{ marginleft: "8rem" }} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
            {
              tow_send_sms_check ?
                <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3" >

                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>Phone Number</label>
                        <p>{phoneNumber3}</p>
                      </div>
                      <select value={""} onChange={(e) => handleSelectPhoneNumber3(e)}>
                        <option selected></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>



                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="subsub1-sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>SMS Text</label>
                        {/* <p>{phoneNumber}</p> */}
                      </div>
                      <input style={{ padding: "1rem" }} value={smsText3} onChange={(e) => setSmsText3(e.target.value)} />
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>
                </div>
                :
                <div>

                </div>
            }
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-mid*/}

      </div>
      {/* main-box-mid*/}















      {/* main-box-right*/}
      <div className="subsub3-sub1-accelerometer-div3">
        {/* sub1-main-box-right*/}
        <div className="sub2-subsub1-sub1-accelerometer-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-accelerometer-div3"

            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight1(right1State)}
            >Crash Detection</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
              <span
                onClick={() => handlRight1(right1State)}
              >Crash detection scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendCrashDetection}
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
              className="sub2-subsub1-sub2-subsub1-sub1-accelerometer-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
                paddingTop: ".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-accelerometer-div3"
            style={{ display: right1, height: "30rem", paddingTop: "1rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                  onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                  style={{ border: focusRight1 }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <label>Priority</label>
                    <p>{cd_priority}</p>
                  </div>
                  <select value={""} onChange={handleChangeCdPriority}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Crash detection scenario priority"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: ".5rem"
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                  style={{ border: focusRight2, marginLeft: ".3rem" }}>
                  <label>Duration</label>
                  <input type="number" value={cd_duration} onChange={handleChangeCdDuration} />
                  <p>milliseconds</p>
                </div>
                <Try text={"Crash detection duration"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusRight4(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight4(".1rem solid #898A8D")}
                  style={{ border: focusRight4, marginLeft: ".3rem" }}>
                  <label>Threshold</label>
                  <input type="number" value={cd_threshold} onChange={handleChangeCdThreshold} />
                  <p>mG</p>
                </div>
                <Try text={"Value used to detect crash"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3" style={{ marginTop: "-.5rem" }}>
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                  onFocus={() => setFocusRight5(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight5(".1rem solid #898A8D")}
                  style={{ border: focusRight5, marginLeft: "-2rem" }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <label>Car Trace</label>
                    <p>{cd_car_trace}</p>
                  </div>
                  <select value={""} onChange={handleChangeCdCarTrace}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Trace Changes</option>
                    <option>Trace Full</option>
                  </select>
                </div>
                {/* <Try text={"Priority of digital input I/O element"}/> */}
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <p>Send SMS</p>
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={cd_send_sms_check} onChange={handleChangeCdSendSmsCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of crash event"} style={{ marginleft: "8rem" }} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
            {
              cd_send_sms_check ?
                <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3" >

                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>Phone Number</label>
                        <p>{phoneNumber4}</p>
                      </div>
                      <select value={""} onChange={(e) => handleSelectPhoneNumber4(e)}>
                        <option selected></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>



                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="subsub1-sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>SMS Text</label>
                        {/* <p>{phoneNumber}</p> */}
                      </div>
                      <input style={{ padding: "1rem" }} value={smsText4} onChange={(e) => setSmsText4(e.target.value)} />
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>
                </div>
                :
                <div>

                </div>
            }
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-accelerometer-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-accelerometer-div3"

            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight2(right2State)}
              style={{ width: "18rem" }}
            >Excessive Idling Detection</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
              <span
                onClick={() => handlRight2(right2State)}
              >Excessive idling detection scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-accelerometer-div3">
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover" style={{ cursor: "pointer" }}>
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendEidetection}
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
              className="sub2-subsub1-sub2-subsub1-sub1-accelerometer-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
                paddingTop: ".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-accelerometer-div3"
            style={{ display: right2, height: "34rem", paddingTop: "1rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3"
                  onFocus={() => setFocusRight6(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight6(".1rem solid #898A8D")}
                  style={{ border: focusRight6 }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <label>Priority</label>
                    <p>{eid_priority}</p>
                  </div>
                  <select value={""} onChange={handleChangeEIDPriority}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Excessive idling detection scenario priority"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <label className="accelerometer-switch">
                    <input type="checkbox" />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>Eventual Record</p>
                </div>
                <Try text={"Enable/disable eventual records with idling value"} />
              </div>

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusRight7(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight7(".1rem solid #898A8D")}
                  style={{ border: focusRight7 }}>
                  <label>Stop Timeout</label>
                  <input type="number" value={eid_stop_timeout} onChange={handleChangeEidStopTimeout} />
                  <p>seconds</p>
                </div>
                <Try text={"Timeout of vehicle beeing in idling state before scenario enables"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}

              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                  onFocus={() => setFocusRight8(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight8(".1rem solid #898A8D")}
                  style={{ border: focusRight8 }}>
                  <label>Move Timeout</label>
                  <input type="number" value={eid_move_timeout} onChange={handleChangeEidMoveTimeout} />
                  <p>Seconds</p>
                </div>
                <Try text={"Timeout of vehicle beeing in moving state before scenario disables"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <p>Output Control</p>
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={eid_out_control_check} onChange={handleChangeEidOutControlCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable/disable excessive idling output control"} style={{ marginleft: "8rem" }} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                  <p>Send SMS</p>
                  <label className="accelerometer-switch">
                    <input type="checkbox" checked={eid_send_sms_check} onChange={handleChangeEidSendSmsCheck} />
                    <span className="accelerometer-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of excessive idling event"} style={{ marginleft: "8rem" }} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
            {
              eid_send_sms_check ?
                <div className="sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3" >

                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>Phone Number</label>
                        <p>{phoneNumber5}</p>
                      </div>
                      <select value={""} onChange={(e) => handleSelectPhoneNumber5(e)}>
                        <option selected></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>



                  <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-accelerometer-div3">
                    <div
                      className="sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="subsub1-sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                        <label>SMS Text</label>
                        {/* <p>{phoneNumber}</p> */}
                      </div>
                      <input style={{ padding: "1rem" }} value={smsText5} onChange={(e) => setSmsText5(e.target.value)} />
                    </div>
                    <Try text={"Operand of digital input I/O element"} />

                    {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                  </div>
                </div>
                :
                <div>

                </div>
            }
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}

      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default Accelerometer;
