import React, { useState } from "react";
import "./Miscellaneous.css";
import Try from "../try/Try"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Miscellaneous = () => {


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

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operand3, setOperand3] = useState("");
  const [operand4, setOperand4] = useState("");
  const [operand5, setOperand5] = useState("");
  const [operand6, setOperand6] = useState("");
  const [operand7, setOperand7] = useState("");
  const [operand8, setOperand8] = useState("");
  const [source, setSource] = useState("")
  const [analogueInput, setAnalogueInput] = useState("");
  const [doutDeactivationViaDIN, setDoutDeactivationViaDIN] = useState("")
  const [scenarioPriority, setScenarioPriority] = useState("")
  const [doutControl, setDoutControl] = useState("")
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [smsText2, setSmsText2] = useState("");


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
  // //////////////////////////////////////////////
  const [focusLeft1, setFocusLeft1] = useState(".1rem solid #898A8D")
  const [focusLeft2, setFocusLeft2] = useState("")
  const [focusLeft3, setFocusLeft3] = useState("")
  const [focusLeft4, setFocusLeft4] = useState("")
  const [focusLeft5, setFocusLeft5] = useState("")

  const [focusMid1, setFocusMid1] = useState("")
  const [focusMid2, setFocusMid2] = useState("")
  const [focusMid3, setFocusMid3] = useState("")
  const [focusMid4, setFocusMid4] = useState("")
  const [focusMid5, setFocusMid5] = useState("")


  const [focusRight1, setFocusRight1] = useState("")
  const [focusRight2, setFocusRight2] = useState("")

  const [drive_priority, setDrivePriority] = useState("");
  const [drive_max_acc, setMaxAcc] = useState("");
  const [drive_max_brk, setMaxBrk] = useState("");
  const [drive_max_angle, setMaxAngle] = useState("");
  const [drive_source, setDriveSource] = useState("");
  const [drive_duration_check, setDriveDurationCheck] = useState(false);
  const [drive_send_sms, setDriveSendSms] = useState(false);

  const [overspeed_priority, setOverSpeedPriority] = useState("");
  const [overspeed_max_speed, setOverSpeedMaxSpeed] = useState("");
  const [overspeed_duration, setOverSpeedDuration] = useState(false);
  const [overspeed_send_sms, setOverSpeedSendSMS] = useState(false);

  const [dout_control1, setDoutControl1] = useState("")
  const [dout_deactivate, setDoutDeactivate] = useState("")
  const [dout_ignition, setDoutIgnition] = useState("")

  const [ignition_val, setIgnitionVal] = useState("")
  const [ignition_check, setIgnitionCheck] = useState(false)

  const [jm_priority, setJmPriority] = useState("Disabled");
  const [phoneNumber1, setPhoneNumber1] = useState("")
  const [smsText1, setSmsText1] = useState("")
  const [focusLeft13, setFocusLeft13] = useState("")
  const [focusLeft14, setFocusLeft14] = useState("")

  const handleChangeDrivePriority = (e) => {
    setDrivePriority(e.target.selectedIndex - 1);
  }

  const handleChangeMaxAcc = (e) => {
    setMaxAcc(e.target.value);
  }

  const handleChangeMaxBrk = (e) => {
    setMaxBrk(e.target.value);
  }

  const handleChangeMaxAngle = (e) => {
    setMaxAngle(e.target.value);
  }
  const handleChangeDriveSource = (e) => {
    setDriveSource(e.target.value);
  }

  const handleChangeDriveSendSms = (e) => {
    setDriveSendSms(!drive_send_sms);
  }
  const handleChangeDriveDurationCheck = (e) => {
    setDriveDurationCheck(e.target.value);
  }
  const handleSelectPhoneNumber1 = (e) => {
    setPhoneNumber1(e.target.value);
  }
  const handleSelectPhoneNumber2 = (e) => {
    setPhoneNumber2(e.target.value);
  }


  const handleChangeOverSpeedPriority = (e) => {
    setOverSpeedPriority(e.target.selectedIndex - 1);
  }

  const handleChangeOverSpeedMaxSpeed = (e) => {
    setOverSpeedMaxSpeed(e.target.value);
  }

  const handleChangeOverSpeedDuration = (e) => {
    setOverSpeedDuration(!overspeed_duration);
  }

  const handleChangeOverSpeedSendSMS = (e) => {
    setOverSpeedSendSMS(!overspeed_send_sms);
  }

  const handleChangeDoutControl1 = (e) => {
    setDoutControl1(e.target.selectedIndex - 1);
  }

  const handleChangeDoutDeactivate = (e) => {
    setDoutDeactivate(e.target.selectedIndex - 1);
  }

  const handleChangeDoutIgnition = (e) => {
    setDoutIgnition(e.target.value);
  }

  const handleChangeIgnitionVal = (e) => {
    setIgnitionVal(e.target.value);
  }

  const handleChangeIgnitionCheck = () => {
    setIgnitionCheck(!ignition_check);
  }


  const handleChangeJmPriority = (e) => {
    setJmPriority(e.target.selectedIndex - 1);
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
    console.log("🚀 ~ file: Miscellaneous.js:192 ~ sendCommonRequest ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
    return res;
  }

  const sendGreenDriving = async () => {
    return sendCommonRequest(cmdType.GreenDriving, {
      priority: drive_priority,
      mxAcc: drive_max_acc,
      mxBrak: drive_max_brk,
      mxAng: drive_max_angle,
      src: drive_source == "GPS" ? "1" : "0",
      duration: drive_duration_check ? "1" : "0",
      p1: "0",
      p2: "0",
      p3: "0",
      phoneNo: phoneNumber1,
      sms: smsText1
    })
  }

  const sendOverSpeed = async () => {
    return sendCommonRequest(cmdType.OverSpeeding, {
      priority: overspeed_priority,
      mxSpeed: overspeed_max_speed,
      p1: "0",
      p2: "0",
      phoneNo: phoneNumber2,
      sms: smsText2,

    })
  }


  const sendDoutControlViaIgnition = async () => {
    return sendCommonRequest(cmdType.DoutControlViaIgnition, {
      dctl: dout_control1,
      deact: dout_deactivate,
      tout: dout_ignition
    })
  }

  const sendIgnition = async () => {
    return sendCommonRequest(cmdType.IgnitionOnCounter, {
      on: ignition_check ? "1" : "0",
      val: ignition_val
    })
  }

  const sendJaming = async () => {
    return sendCommonRequest(cmdType.JammingWithTimeoutScenario, {
      priority: jm_priority,
    })
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
    setSource(e.target.value);
  };
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setPriority2(e.target.value);
  };
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setDoutDeactivationViaDIN(e.target.value);
  };
  const handleSelect5 = (e) => {
    console.log(e.target.value);
    setDoutControl(e.target.value);
  };
  const handleSelect6 = (e) => {
    console.log(e.target.value);
    setScenarioPriority(e.target.value);
  };
  const handleSelect7 = (e) => {
    console.log(e.target.value);
    setPriority4(e.target.value);
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
  return (
    <div className="sub1-miscellaneous-div3" id="sec6">
      {/* main-box-left*/}
      <div className="subsub1-sub1-miscellaneous-div3">
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-miscellaneous-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-miscellaneous-div3"

            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft2(left2State)}
            >Green Driving</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
              <span
                onClick={() => handlLeft2(left2State)}
              >Green driving scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendGreenDriving}
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
              className="sub2-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-miscellaneous-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                  style={{ border: focusLeft1 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                    <label>Priority</label>
                    <p>{priority1}</p>
                  </div>
                  <select value={""} onChange={(e) => {
                    handleSelect1(e)
                    handleChangeDrivePriority(e)
                  }}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Green driving detection scenario priority"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>




              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                  style={{ border: focusLeft2 }}>
                  <label>Max Acceleration</label>
                  <input type="number" value={drive_max_acc} onChange={handleChangeMaxAcc} />
                  <p>m/sec^2</p>
                </div>
                <Try text={"Max acceleration which can be reached without triggering harsh acceleration event"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                  style={{ border: focusLeft3 }}>
                  <label>Max Braking</label>
                  <input type="number" value={drive_max_brk} onChange={handleChangeMaxBrk} />
                  <p>m/sec^2</p>
                </div>
                <Try text={"Max braking which can be reached without triggering harsh braking event"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>



              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                  style={{ border: focusLeft4 }}>
                  <label>Max Angle</label>
                  <input type="number" value={drive_max_angle} onChange={handleChangeMaxAngle} />
                  <p>m/sec^2</p>
                </div>
                <Try text={"Max angle which can be reached without triggering harsh cornering event"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>




              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3" style={{ marginTop: ".3rem", marginLeft: "4rem" }}>
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusLeft5(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft5(".1rem solid #898A8D")}
                  style={{ border: focusLeft5, marginLeft: "-2rem" }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                    <label>Source</label>
                    <p>{source}</p>
                  </div>
                  <select value={""} onChange={(e) => {
                    handleSelect2(e)
                    handleChangeDriveSource(e)
                  }}>
                    <option selected></option>
                    <option>GPS</option>
                    <option></option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>










              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                //  style={{marginRight:"3.5rem"}}
                >
                  {/* <p>Send SMS</p> */}
                  <label className="miscellaneous-switch">
                    <input type="checkbox" checked={drive_duration_check} onChange={handleChangeDriveDurationCheck} />
                    <span className="miscellaneous-slider"></span>
                  </label>
                  <p>Duration</p>
                </div>
                <Try text={"Enable/disable duration"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
              <div className="subsub7-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"

                >
                  <p>Send SMS</p>
                  <label className="miscellaneous-switch">
                    <input type="checkbox" checked={drive_send_sms} onChange={handleChangeDriveSendSms} />
                    <span className="miscellaneous-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of green driving event"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              {
                drive_send_sms ?
                  <div>

                    <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div31">
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



                    <div className="subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div31">
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
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}

      </div>
      {/* main-box-left*/}









      {/* main-box-mid*/}
      <div className="subsub2-sub1-miscellaneous-div3">
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub1-sub1-miscellaneous-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-miscellaneous-div3"

            style={{
              borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid1(mid1State)}
            >Overspeeding</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
              <span
                onClick={() => handlMid1(mid1State)}
              >Overspeeding scenario settings</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendOverSpeed}
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
              className="sub2-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-miscellaneous-div3"
            style={{ display: mid1, height: "27rem" }}

          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                    <label>Priority</label>
                    <p>{priority2}</p>
                  </div>
                  <select value={""} onChange={(e) => {
                    handleSelect3(e)
                    handleChangeOverSpeedPriority(e)
                  }}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <Try text={"Green driving detection scenario priority"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                  style={{ border: focusMid2 }}>
                  <label>Max Speed</label>
                  <input type="number" value={overspeed_max_speed} onChange={handleChangeOverSpeedMaxSpeed} />
                  <p>km/h</p>
                </div>
                <Try text={"Max allowed speed"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                //  style={{marginRight:"1rem"}}
                >
                  {/* <p>Send SMS</p> */}
                  <label className="miscellaneous-switch">
                    <input type="checkbox" checked={overspeed_duration} onChange={handleChangeOverSpeedDuration} />
                    <span className="miscellaneous-slider"></span>
                  </label>
                  <p>Duration</p>
                </div>
                <Try text={"Enable/disable overspeeding output control"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>




              <div className="subsub7-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub7-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"

                >
                  <p>Send SMS</p>
                  <label className="miscellaneous-switch">
                    <input type="checkbox" checked={overspeed_send_sms} onChange={handleChangeOverSpeedSendSMS} />
                    <span className="miscellaneous-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <Try text={"Enable sending SMS of overspeeding event"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
              {
                overspeed_send_sms ?
                  <div>

                    <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div31">
                      <div
                        className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                        onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                        onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                        style={{ border: focusLeft13 }}
                      >
                        <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                          <label>Phone Number</label>
                          <p>{phoneNumber2}</p>
                        </div>
                        <select value={""} onChange={(e) => handleSelectPhoneNumber2(e)}>
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



                    <div className="subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div31">
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
                        <input style={{ padding: "1rem" }} value={smsText2} onChange={(e) => setSmsText2(e.target.value)} />
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
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-mid*/}
        {/* sub3-main-box-mid */}
        <div className="sub2-subsub1-sub1-miscellaneous-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-miscellaneous-div3"

            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              height: "7rem"
            }}
          >
            <p
              onClick={() => handlMid2(mid2State)}
              style={{ width: "14rem" }}
            >Dout control via ignition</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
              <span
                onClick={() => handlMid2(mid2State)}
                style={{ height: "4rem" }}
              >Once ignition status changes from ON to OFF and set timeout
                passes then selected DOUT is turned ON. Turning DOUT OFF
                is possible with a signal (voltage) applied to a configured DIN.</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
              >
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendDoutControlViaIgnition}
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
              className="sub2-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
                marginTop: "2.5rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-miscellaneous-div3"
            style={{ display: mid2, height: "14rem" }}

          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                style={{ marginLeft: "4rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                  style={{ border: focusMid3 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                    <label>Dout Control</label>
                    <p>{dout_control1}</p>
                  </div>
                  <select value={""}
                    onChange={(e) => { handleSelect5(e); handleChangeDoutControl1(e) }}
                  >
                    <option selected></option>
                    <option>None</option>
                    <option>DOUT1</option>
                    <option>DOUT2</option>
                    <option>DOUT3</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                style={{ marginTop: ".2rem", marginLeft: "4rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                  style={{ border: focusMid4 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                    <label>Dout Deactivation via DIN</label>
                    <p>{dout_deactivate}</p>
                  </div>
                  <select value={""} onChange={(e) => { handleSelect4(e); handleChangeDoutDeactivate(e); }}>
                    <option selected></option>
                    <option>None</option>
                    <option>DIN1</option>
                    <option>DIN2</option>
                    <option>DIN3</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


              <div
                style={{
                  display: "flex",
                  width: "auto",
                  marginLeft: "2rem",
                  // backgroundColor:"red"
                }}
              >
                <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusMid5(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid5(".1rem solid #898A8D")}
                  style={{ border: focusMid5 }}>
                  <label>Ignition OFF Timeout</label>
                  <input type="number" value={dout_ignition} onChange={handleChangeDoutIgnition} />
                  <p>seconds</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub3-main-box-mid */}
      </div>
      {/* main-box-mid*/}










      {/* main-box-right*/}
      <div className="subsub3-sub1-miscellaneous-div3">
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-miscellaneous-div3"
        // style={{width:"67.9rem"}}
        >
          <div
            className="subsub1-sub2-subsub1-sub1-miscellaneous-div3"

            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              // width:"67.9rem"
            }}
          >
            <p
              onClick={() => handlRight1(right1State)}
            >Ignition ON counter</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
            //  style={{width:"68rem"}}
            >
              {/* <span>Battery voltage I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendIgnition}
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
              className="sub2-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
                // width:"67.9rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-miscellaneous-div3"
            style={{
              display: right1, height: "10rem",
              // width:"67.9rem"
            }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">




              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem", marginLeft: "4rem" }}>
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                  <label className="miscellaneous-switch">
                    <input type="checkbox" checked={ignition_check} onChange={handleChangeIgnitionCheck} />
                    <span className="miscellaneous-slider"></span>
                  </label>
                  <p>Enable</p>
                </div>
              </div>



              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                  marginLeft: "4rem"
                }}
              >
                <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  style={{

                    // width:"29.1rem",
                    border: focusRight1
                  }}
                  onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                >
                  <label>Counter Value</label>
                  <input type="number" style={{ marginLeft: "1rem" }} value={ignition_val} onChange={handleChangeIgnitionVal} />
                  <p style={{ top: "1.4rem", right: "1rem" }}>Seconds</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>



            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
        {/* sub3-main-box-right */}
        <div className="sub2-subsub1-sub1-miscellaneous-div3"
        // style={{width:"67.9rem"}}
        >
          <div
            className="subsub1-sub2-subsub1-sub1-miscellaneous-div3"

            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              // width:"67.9rem"
            }}
          >
            <p
              onClick={() => handlRight2(right2State)}
              style={{ width: "18rem" }}
            >Jamming with timeout scenario</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
            //  style={{width:"68rem"}}
            >
              {/* <span>Battery voltage I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendJaming}
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
              className="sub2-subsub1-sub2-subsub1-sub1-miscellaneous-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
                // width:"67.9rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-miscellaneous-div3"
            style={{
              display: right2, height: "7rem",
              // width:"67.9rem"
            }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3"
                  onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                  style={{ border: focusRight2, marginLeft: "4rem" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-miscellaneous-div3">
                    <label>Scenario Priority</label>
                    <p>{scenarioPriority}</p>
                  </div>
                  <select value={""} onChange={(e) => { handleSelect6(e); handleChangeJmPriority(e) }}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low Priority</option>
                    <option>High Priority</option>
                    <option>Panic Priority</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>



            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub3-main-box-right */}
      </div>
      {/* main-box-right*/}
    </div >
  );
};

export default Miscellaneous;
