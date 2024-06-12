import React, { useState } from "react";
import "./Tracking.css";
import Try from "../try/Try"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Tracking = () => {
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

  const [analogueInput, setAnalogueInput] = useState("");
  const [trackingOnDemandMode, setTrackingOnDemandMode] = useState("")

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
  const [focusLeft4, setFocusLeft4] = useState(".1rem solid #898A8D")
  const [focusLeft5, setFocusLeft5] = useState("")
  const [focusLeft6, setFocusLeft6] = useState("")
  const [focusLeft7, setFocusLeft7] = useState("")
  const [focusLeft8, setFocusLeft8] = useState("")
  const [focusLeft9, setFocusLeft9] = useState("")
  const [focusLeft10, setFocusLeft10] = useState("")
  const [focusLeft11, setFocusLeft11] = useState(".1rem solid #898A8D")
  const [focusLeft12, setFocusLeft12] = useState("")
  const [focusLeft13, setFocusLeft13] = useState("")
  const [focusLeft14, setFocusLeft14] = useState("")

  const [focusMid1, setFocusMid1] = useState(".1rem solid #898A8D")
  const [focusMid2, setFocusMid2] = useState("")
  const [focusMid3, setFocusMid3] = useState("")
  const [focusMid4, setFocusMid4] = useState(".1rem solid #898A8D")
  const [focusMid5, setFocusMid5] = useState("")
  const [focusMid6, setFocusMid6] = useState("")
  const [focusMid7, setFocusMid7] = useState("")
  const [focusMid8, setFocusMid8] = useState("")
  const [focusMid9, setFocusMid9] = useState("")
  const [focusMid10, setFocusMid10] = useState("")
  const [focusMid11, setFocusMid11] = useState("")
  const [focusMid12, setFocusMid12] = useState("")

  const [focusRight1, setFocusRight1] = useState(".1rem solid #898A8D")
  const [focusRight2, setFocusRight2] = useState("")
  const [focusRight3, setFocusRight3] = useState("")
  const [focusRight4, setFocusRight4] = useState(".1rem solid #898A8D")
  const [focusRight5, setFocusRight5] = useState("")
  const [focusRight6, setFocusRight6] = useState("")
  const [focusRight7, setFocusRight7] = useState("")
  const [focusRight8, setFocusRight8] = useState("")
  const [focusRight9, setFocusRight9] = useState("")
  const [focusRight10, setFocusRight10] = useState("")
  const [focusRight11, setFocusRight11] = useState("")

  const [hg_vehicle_drt, setHgVehicleDRT] = useState("");
  const [hg_vehicle_sr, setHgVehicleSR] = useState("");
  const [hg_vehicle_period, setHgVehiclePeriod] = useState("");
  const [hg_move_timeout, setHgMoveTimeOut] = useState("");
  const [hg_move_distance, setHgMoveDistance] = useState("");
  const [hg_move_ac, setHgMoveAC] = useState("");
  const [hg_move_sc, setHgMoveSC] = useState("");
  const [hg_move_sr, setHgMoveSR] = useState("");
  const [hg_move_sp, setHgMoveSP] = useState("");

  const [trip_priority, setTripPriority] = useState("Disabled");
  const [trip_priority1, setTripPriority1] = useState(0);
  const [trip_records_check, setTripRecordsCheck] = useState(false);
  const [trip_mode, setTripMode] = useState("Continuous");
  const [trip_start_speed, setTripStartSpeed] = useState("");
  const [trip_start_ignition, setTripStartIgnition] = useState("");
  const [trip_send_sms_check, setTripSendSmsCheck] = useState(false);
  const [trip_eco_score_alEvent, setTripEcoScoreAlEvent] = useState("");
  const [trip_eco_score_alEvent_check, setTripEcoScoreAlEventCheck] = useState(false);
  const [trip_remember_ibtn_check, setTripRememberIBtncheck] = useState(false)

  const [rgns_vehicle_drt, setRGNSVehicleDRT] = useState("");
  const [rgns_vehicle_sr, setRGNSVehicleSR] = useState("");
  const [rgns_vehicle_sp, setRGNSVehicleSP] = useState("");

  const [rgns_moving_timeout, setRGNSMovingTimeout] = useState("");
  const [rgns_moving_distance, setRGNSMovingDistance] = useState("");
  const [rgns_moving_ac, setRGNSMovingAC] = useState("");
  const [rgns_moving_sc, setRGNSMovingSC] = useState("");
  const [rgns_moving_sr, setRGNSMovingSR] = useState("");
  const [rgns_moving_sp, setRGNSMovingSP] = useState("");

  const [odometer_cal_source, setOdometerCalSource] = useState("GNSS");
  const [odometer_cal_source1, setOdometerCalSource1] = useState(0);
  const [odometer_init_val, setOdometerInitVal] = useState("");


  const [track_on_mode, setTrackOnMode] = useState("Stop");

  const [ugns_vehicle_drt, setUGNSVehicleDRT] = useState("");
  const [ugns_vehicle_sr, setUGNSVehicleSR] = useState("");
  const [ugns_vehicle_sp, setUGNSVehicleSP] = useState("");

  const [ugns_moving_timeout, setUGNSMovingTimeout] = useState("");
  const [ugns_moving_distance, setUGNSMovingDistance] = useState("");
  const [ugns_moving_ac, setUGNSMovingAC] = useState("");
  const [ugns_moving_sc, setUGNSMovingSC] = useState("");
  const [ugns_moving_sr, setUGNSMovingSR] = useState("");
  const [ugns_moving_sp, setUGNSMovingSP] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsText, setSmsText] = useState("")

  const [track_time_period, setTrackTimePeriod] = useState("");
  const [track_time_duration, setTrackTimeDuration] = useState("");

  const handleChangeHgVehicleDRT = (e) => {
    setHgVehicleDRT(e.target.value);
  }

  const handleChangeHgVehicleSR = (e) => {
    setHgVehicleSR(e.target.value);
  }

  const handleChangeHgVehiclePeriod = (e) => {
    setHgVehiclePeriod(e.target.value);
  }

  const handleChangeHgMoveTimeOut = (e) => {
    setHgMoveTimeOut(e.target.value);
  }

  const handleChangeHgMoveDistance = (e) => {
    setHgMoveDistance(e.target.value);
  }

  const handleChangeHgMoveAC = (e) => {
    setHgMoveAC(e.target.value);
  }

  const handleChangeHgMoveSC = (e) => {
    setHgMoveSC(e.target.value);
  }

  const handleChangeHgMoveSR = (e) => {
    setHgMoveSR(e.target.value);
  }

  const handleChangeHgMoveSP = (e) => {
    setHgMoveSP(e.target.value);
  }

  const handleChangeTripPriority = (e) => {
    setTripPriority(e.target.value);
    setTripPriority1(e.target.selectedIndex - 1);
  }

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleChangeTripRecordsCheck = (e) => {
    setTripRecordsCheck(!trip_records_check);
  }

  const handleChangeTripMode = (e) => {
    setTripMode(e.target.value);
  }

  const handleChangeTripStartSpeed = (e) => {
    setTripStartSpeed(e.target.value);
  }

  const handleChangeTripSendSmsCheck = (e) => {
    if (trip_send_sms_check) {
      setPhoneNumber("0")
      setSmsText("")
    }
    setTripSendSmsCheck(!trip_send_sms_check);

  }

  const handleChangeTripStartIgnition = (e) => {
    setTripStartIgnition(e.target.value);
  }

  const handleChangeTripEcoScoreAlEvent = (e) => {
    setTripEcoScoreAlEvent(e.target.value);
  }

  const handleChangeTripEcoScoreAlEventCheck = (e) => {
    setTripEcoScoreAlEventCheck(!trip_eco_score_alEvent_check);
  }

  const handleChangeTripRememberIBtncheck = (e) => {
    setTripRememberIBtncheck(!trip_remember_ibtn_check);
  }

  const handleChangeRGNSVehicleDRT = (e) => {
    setRGNSVehicleDRT(e.target.value);
  }

  const handleChangeRGNSVehicleSR = (e) => {
    setRGNSVehicleSR(e.target.value);
  }
  const handleChangeRGNSVehicleSP = (e) => {
    setRGNSVehicleSP(e.target.value);
  }

  const handleChangeRGNSMovingTimeout = (e) => {
    setRGNSMovingTimeout(e.target.value);
  }

  const handleChangeRGNSMovingDistance = (e) => {
    setRGNSMovingDistance(e.target.value);
  }

  const handleChangeRGNSMovingAC = (e) => {
    setRGNSMovingAC(e.target.value);
  }

  const handleChangeRGNSMovingSC = (e) => {
    setRGNSMovingSC(e.target.value);
  }

  const handleChangeRGNSMovingSR = (e) => {
    setRGNSMovingSR(e.target.value);
  }

  const handleChangeRGNSMovingSP = (e) => {
    setRGNSMovingSP(e.target.value);
  }

  const handleChangeOdometerCalSource = (e) => {
    setOdometerCalSource(e.target.value);
    setOdometerCalSource1(e.target.selectedIndex - 1);
  }

  const handleChangeOdometerInitVal = (e) => {
    setOdometerInitVal(e.target.value);
  }

  const handleChangeTrackOnMode = (e) => {
    setTrackOnMode(e.target.value);
  }


  const handleChangeUGNSVehicleDRT = (e) => {
    setUGNSVehicleDRT(e.target.value);
  }

  const handleChangeUGNSVehicleSR = (e) => {
    setUGNSVehicleSR(e.target.value);
  }

  const handleChangeUGNSVehicleSP = (e) => {
    setUGNSVehicleSP(e.target.value);
  }

  const handleChangeUGNSMovingTimeout = (e) => {
    setUGNSMovingTimeout(e.target.value);
  }

  const handleChangeUGNSMovingDistance = (e) => {
    setUGNSMovingDistance(e.target.value);
  }

  const handleChangeUGNSMovingAC = (e) => {
    setUGNSMovingAC(e.target.value);
  }

  const handleChangeUGNSMovingSC = (e) => {
    setUGNSMovingSC(e.target.value);
  }

  const handleChangeUGNSMovingSR = (e) => {
    setUGNSMovingSR(e.target.value);
  }

  const handleChangeUGNSMovingSP = (e) => {
    setUGNSMovingSP(e.target.value);
  }

  const handleChangeTrackTimePeriod = (e) => {
    setTrackTimePeriod(e.target.value);
  }

  const handleChangeTrackTimeDuration = (e) => {
    setTrackTimeDuration(e.target.value);
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
    console.log("🚀 ~ file: Tracking.js:349 ~ sendCommonRequest ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
    return res;
  }

  const sendHGNS = async () => {
    return sendCommonRequest(cmdType.HomeGsmNetwork, {
      recTout: hg_vehicle_drt,
      saveRec: hg_vehicle_sr,
      sendPeriod: hg_vehicle_period,
      tout: hg_move_timeout,
      distance: hg_move_distance,
      angChg: hg_move_ac,
      speedChg: hg_move_sc,
      msavRec: hg_move_sr,
      msendPeriod: hg_move_sp
    })
  }

  const sendTripScenarioParameters = async () => {
    return sendCommonRequest(cmdType.TripScenarioParam, {
      priority: trip_priority1,
      evRec: trip_records_check ? "1" : "0",
      mode: trip_mode === "Continuous" ? "1" : '0',
      startSp: trip_start_speed,
      tout: trip_start_ignition,
      phoneNo: phoneNumber,
      sms: smsText,
      eco: trip_eco_score_alEvent_check ? trip_eco_score_alEvent : "",
      remember: trip_remember_ibtn_check ? "1" : "0"
    })
  }

  const sendRoamingGSMNetwork = async () => {
    return sendCommonRequest(cmdType.RoamingGsmNetworkSettings, {
      recTout: rgns_vehicle_drt,
      saveRec: rgns_vehicle_sr,
      sendPeriod: rgns_vehicle_sp,
      tout: rgns_moving_timeout,
      distance: rgns_moving_distance,
      angChg: rgns_moving_ac,
      speedChg: rgns_moving_sc,
      msavRec: rgns_moving_sr,
      msendPeriod: rgns_moving_sp
    })
  }


  const sendUnknownGSMNetwork = async () => {
    return sendCommonRequest(cmdType.UnknownGsmNetwork, {
      recTout: ugns_vehicle_drt,
      saveRec: ugns_vehicle_sr,
      sendPeriod: ugns_vehicle_sp,
      tout: ugns_moving_timeout,
      distance: ugns_moving_distance,
      angChg: ugns_moving_ac,
      speedChg: ugns_moving_sc,
      msavRec: ugns_moving_sr,
      msendPeriod: ugns_moving_sp
    })
  }

  const sendOdometer = async () => {
    return sendCommonRequest(cmdType.Odometer, {
      calSrc: odometer_cal_source1,
      iov: odometer_init_val
    })
  }

  const sendTrackingOnDemandMode = async () => {
    return sendCommonRequest(cmdType.TrackingOnDemandMode, {
      on: track_on_mode == "Stop" ? "0" : "1",
    })
  }

  const sendTrackingOnDemandTiming = async () => {
    return sendCommonRequest(cmdType.TrackingOnDemandTiming, {
      period: track_time_period,
      duration: track_time_duration
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
    setOperand1(e.target.value);
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
    setTrackingOnDemandMode(e.target.value);
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
    <div className="sub1-tracking-div3" id="sec5">
      {/* main-box-left*/}
      <div className="subsub1-sub1-tracking-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-tracking-div3">
          <div

            className="subsub1-sub1-subsub1-sub1-tracking-div3"
            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >Home GSM Network Settings</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
              <span
                onClick={() => handlLeft1(left1State)}
              >Data acquisition parameters for home GSM network.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendHGNS}
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
              className="sub2-subsub1-sub1-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-tracking-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
                <p>Vehicle on Stop</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                    style={{ border: focusLeft1 }}>
                    <label>Data Recording Timeout</label>
                    <input type="number" value={hg_vehicle_drt} onChange={handleChangeHgVehicleDRT} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                    style={{ border: focusLeft2 }}>
                    <label>Saved Records</label>
                    <input type="number" value={hg_vehicle_sr} onChange={handleChangeHgVehicleSR} />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                    style={{ border: focusLeft3 }}>
                    <label>Send Period</label>
                    <input type="number" value={hg_vehicle_period} onChange={handleChangeHgVehiclePeriod} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
              </div>
              {/*  */}
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
                <p>Vehicle Moving</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                    style={{ border: focusLeft4 }}
                  >
                    <label>Timeout</label>
                    <input type="number" value={hg_move_timeout} onChange={handleChangeHgMoveTimeOut} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data by min period"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft5(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft5(".1rem solid #898A8D")}
                    style={{ border: focusLeft5 }}>
                    <label>Distance</label>
                    <input type="number" value={hg_move_distance} onChange={handleChangeHgMoveDistance} />
                    <p>Meters</p>
                  </div>
                  <Try text={"Minimal distance to acquire new record, 1 - 65535 meters, 0 means disable recording data by min distance"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft6(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft6(".1rem solid #898A8D")}
                    style={{ border: focusLeft6 }}>
                    <label>Angle Change</label>
                    <input type="number" value={hg_move_ac} onChange={handleChangeHgMoveAC} />
                    <p>Degrees</p>
                  </div>
                  <Try text={"Minimal angle change to acquire new record, 1 - 180 degrees, 0 means disable recording data by min angle change. Valid only if vehicle speed is more than 10 km/h"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft7(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft7(".1rem solid #898A8D")}
                    style={{ border: focusLeft7 }}>
                    <label>Speed Change</label>
                    <input type="number" value={hg_move_sc} onChange={handleChangeHgMoveSC} />
                    <p>Km/h</p>
                  </div>
                  <Try text={"Minimal speed change to acquire new record, 1 - 255 km/h, 0 means disable recording data by speed change"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft8(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft8(".1rem solid #898A8D")}
                    style={{ border: focusLeft8 }}>
                    <label>Saved Records</label>
                    <input type="number" value={hg_move_sr} onChange={handleChangeHgMoveSR} />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusLeft9(".1rem solid #005EEC")}
                    onBlur={() => setFocusLeft9(".1rem solid #898A8D")}
                    style={{ border: focusLeft9 }}>
                    <label>Send Period</label>
                    <input type="number" value={hg_move_sp} onChange={handleChangeHgMoveSP} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}
        {/* sub2-main-box-left*/}
        <div className="sub2-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-tracking-div3"

            style={{
              borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft2(left2State)}
            >Trip scenario parameters</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
              {/* <span>Digital input I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendTripScenarioParameters}
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
              className="sub2-subsub1-sub2-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-tracking-div3"
            style={{ display: left2 }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
              {/* <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <p>OFF</p>
                <label className="tracking-switch">
                  <input type="checkbox" />
                  <span className="tracking-slider"></span>
                </label>
                <p>ON</p>
              </div> */}

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusLeft10(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft10(".1rem solid #898A8D")}
                  style={{ border: focusLeft10 }}>
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                    <label>Priority</label>
                    <p>{trip_priority}</p>
                  </div>
                  <select value={""} onChange={handleChangeTripPriority}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>




              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                {/* <p>OFF</p> */}
                <label className="tracking-switch">
                  <input type="checkbox" checked={trip_records_check} onChange={handleChangeTripRecordsCheck} />
                  <span className="tracking-slider"></span>
                </label>
                <p>Eventual Records</p>
              </div>


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusLeft11(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft11(".1rem solid #898A8D")}
                  style={{ border: focusLeft11 }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                    <label>Mode</label>
                    <p>{trip_mode}</p>
                  </div>
                  <select value={""} onChange={handleChangeTripMode}>
                    <option selected></option>
                    <option>Continuous</option>
                    <option></option>

                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusLeft12(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft12(".1rem solid #898A8D")}
                  style={{ border: focusLeft12 }}>
                  <label>Start Speed</label>
                  <input type="number" value={trip_start_speed} onChange={handleChangeTripStartSpeed} />
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                  style={{ border: focusLeft13 }}>
                  <label>Ignition Off Timeout</label>
                  <input type="number" value={trip_start_ignition} onChange={handleChangeTripStartIgnition} />
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                  <p>Send SMS</p>
                  <label className="tracking-switch">
                    <input type="checkbox" checked={trip_send_sms_check} onChange={handleChangeTripSendSmsCheck} />
                    <span className="tracking-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
              </div>
              {
                trip_send_sms_check ?
                  <div>

                    <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                      <div
                        className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3"
                        onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                        onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                        style={{ border: focusLeft13 }}
                      >
                        <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                          <label>Phone Number</label>
                          <p>{phoneNumber}</p>
                        </div>
                        <select value={""} onChange={(e) => handleChangePhoneNumber(e)}>
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



                    <div className="subsub7-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
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
                        <input style={{ padding: "1rem" }} value={smsText} onChange={(e) => setSmsText(e.target.value)} />
                      </div>
                      <Try text={"Operand of digital input I/O element"} />

                      {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                    </div>
                  </div>
                  :
                  <div>

                  </div>
              }


              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3 "

              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  style={{ width: "25.5rem", border: focusLeft14 }}
                  onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft14(".1rem solid #898A8D")}

                >
                  <label>Eco Score Allowed Events</label>
                  <input type="number" value={trip_eco_score_alEvent} onChange={handleChangeTripEcoScoreAlEvent} />
                </div>
                <input type="checkbox" checked={trip_eco_score_alEvent_check} onChange={handleChangeTripEcoScoreAlEventCheck} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                  {/* <p>Send SMS</p> */}
                  <label className="tracking-switch">
                    <input type="checkbox" checked={trip_remember_ibtn_check} onChange={handleChangeTripRememberIBtncheck} />
                    <span className="tracking-slider"></span>
                  </label>
                  <p>Remember iButton</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-left*/}

      </div>
      {/* main-box-left*/}







      {/* main-box-mid*/}
      <div className="subsub2-sub1-tracking-div3">
        {/* sub1-main-box-mid*/}

        <div className="sub1-subsub1-sub1-tracking-div3">
          <div

            className="subsub1-sub1-subsub1-sub1-tracking-div3"
            style={{
              borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid1(mid1State)}
            >Raoming GSM Network Settings</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
              <span
                onClick={() => handlMid1(mid1State)}
              >Data acquisition parameters for roaming GSM network.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendRoamingGSMNetwork}
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
              className="sub2-subsub1-sub1-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-tracking-div3"
            style={{ display: mid1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
                <p>Vehicle on Stop</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                    style={{ border: focusMid1 }}
                  >
                    <label>Data Recording Timeout</label>
                    <input type="number" value={rgns_vehicle_drt} onChange={handleChangeRGNSVehicleDRT} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data"} />

                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                    style={{ border: focusMid2 }}>
                    <label>Saved Records</label>
                    <input type="number" value={rgns_vehicle_sr} onChange={handleChangeRGNSVehicleSR} />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                    style={{ border: focusMid3 }}>
                    <label>Send Period</label>
                    <input type="number" value={rgns_vehicle_sp} onChange={handleChangeRGNSVehicleSP} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
              </div>
              {/*  */}
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
                <p>Vehicle Moving</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                    style={{ border: focusMid4 }}
                  >
                    <label>Timeout</label>
                    <input type="number" value={rgns_moving_timeout} onChange={handleChangeRGNSMovingTimeout} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data by min period"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid5(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid5(".1rem solid #898A8D")}
                    style={{ border: focusMid5 }}>
                    <label>Distance</label>
                    <input type="number" value={rgns_moving_distance} onChange={handleChangeRGNSMovingDistance} />
                    <p>Meters</p>
                  </div>
                  <Try text={"Minimal distance to acquire new record, 1 - 65535 meters, 0 means disable recording data by min distance"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid6(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid6(".1rem solid #898A8D")}
                    style={{ border: focusMid6 }}>
                    <label>Angle Change</label>
                    <input type="number" value={rgns_moving_ac} onChange={handleChangeRGNSMovingAC} />
                    <p>Degrees</p>
                  </div>
                  <Try text={"Minimal angle change to acquire new record, 1 - 180 degrees, 0 means disable recording data by min angle change. Valid only if vehicle speed is more than 10 km/h"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid7(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid7(".1rem solid #898A8D")}
                    style={{ border: focusMid7 }}>
                    <label>Speed Change</label>
                    <input type="number" value={rgns_moving_sc} onChange={handleChangeRGNSMovingSC} />
                    <p>Km/h</p>
                  </div>
                  <Try text={"Minimal speed change to acquire new record, 1 - 255 km/h, 0 means disable recording data by speed change"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid8(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid8(".1rem solid #898A8D")}
                    style={{ border: focusMid8 }}>
                    <label>Saved Records</label>
                    <input type="number" value={rgns_moving_sr} onChange={handleChangeRGNSMovingSR} />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusMid9(".1rem solid #005EEC")}
                    onBlur={() => setFocusMid9(".1rem solid #898A8D")}
                    style={{ border: focusMid9 }}>
                    <label>Send Period</label>
                    <input type="number" value={rgns_moving_sp} onChange={handleChangeRGNSMovingSP} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-tracking-div3"

            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid2(mid2State)}
            >Odometer</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
              <span
                onClick={() => handlMid2(mid2State)}
              >Set odometer mode and initial value</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendOdometer}
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
              className="sub2-subsub1-sub2-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
                // paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-tracking-div3"
            style={{ display: mid2, height: "9rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-tracking-div3">


              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3"
                  style={{ marginBottom: "1rem", border: focusMid10 }}
                  onFocus={() => setFocusMid10(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid10(".1rem solid #898A8D")}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-tracking-div3">
                    <label>Calculation Source</label>
                    <p>{odometer_cal_source}</p>
                  </div>
                  <select value={""} onChange={handleChangeOdometerCalSource}>
                    <option selected></option>
                    <option>GNSS</option>
                    <option>OBD</option>
                    <option>LVCAN</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusMid11(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid11(".1rem solid #898A8D")}
                  style={{ border: focusMid11 }}
                >
                  <label>Initial Odometer Value</label>
                  <input type="number" value={odometer_init_val} onChange={handleChangeOdometerInitVal} />
                  <p>Km/h</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>







            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-tracking-div3"

            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid3(mid3State)}
            >Tracking on demand mode</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-tracking-div3">
              <span
                onClick={() => handlMid3(mid3State)}
              >
                Push device to start to generate high priority records and initiate data
                sending to server
              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendTrackingOnDemandMode}
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
              className="sub2-subsub1-sub3-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-tracking-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-tracking-div3">
              <div className="subsub1-sub1-subsub2-sub3-subsub1-sub1-tracking-div3"
                onFocus={() => setFocusMid12(".1rem solid #005EEC")}
                onBlur={() => setFocusMid12(".1rem solid #898A8D")}
                style={{ border: focusMid12 }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub3-subsub1-sub1-tracking-div3">
                  <label>On demand mode Tracking</label>
                  <p>{track_on_mode}</p>
                </div>
                <select value={""} onChange={handleChangeTrackOnMode}>
                  <option selected></option>
                  <option >Stop</option>
                  <option>Start</option>
                </select>

              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* sub3-main-box-mid*/}
      </div>
      {/* main-box-mid*/}







      {/* main-box-right*/}
      <div className="subsub3-sub1-tracking-div3">
        {/* sub1-main-box-right*/}
        <div className="sub1-subsub1-sub1-tracking-div3">
          <div

            className="subsub1-sub1-subsub1-sub1-tracking-div3"
            style={{
              borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight1(right1State)}
            >Unkown GSM Network Settings</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
              <span
                onClick={() => handlRight1(right1State)}
              >Data acquisition parameters for unkown GSM network.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendUnknownGSMNetwork}
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
              className="sub2-subsub1-sub1-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-tracking-div3"
            style={{ display: right1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
                <p>Vehicle on Stop</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                    style={{ border: focusRight1 }}>
                    <label>Data Recording Timeout</label>
                    <input type="number" value={ugns_vehicle_drt} onChange={handleChangeUGNSVehicleDRT} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data"} style={{ fontSize: "1rem" }} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                    style={{ border: focusRight2 }}
                  >
                    <label>Saved Records</label>
                    <input type="number" value={ugns_vehicle_sr} onChange={handleChangeUGNSVehicleSR} />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight3(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight3(".1rem solid #898A8D")}
                    style={{ border: focusRight3 }}>
                    <label>Send Period</label>
                    <input type="number" value={ugns_vehicle_sp} onChange={handleChangeUGNSVehicleSP} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
              </div>
              {/*  */}
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3">
                <p>Vehicle Moving</p>
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight4(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight4(".1rem solid #898A8D")}
                    style={{ border: focusRight4 }}
                  >
                    <label>Timeout</label>
                    <input type="number" value={ugns_moving_timeout} onChange={handleChangeUGNSMovingTimeout} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Time interval to acquire new record, 1 - 259200 seconds, 0 means disable recording data by min period"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight5(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight5(".1rem solid #898A8D")}
                    style={{ border: focusRight5 }}>
                    <label>Distance</label>
                    <input type="number" value={ugns_moving_distance} onChange={handleChangeUGNSMovingDistance} />
                    <p>Meters</p>
                  </div>
                  <Try text={"Minimal distance to acquire new record, 1 - 65535 meters, 0 means disable recording data by min distance"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight6(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight6(".1rem solid #898A8D")}
                    style={{ border: focusRight6 }}>
                    <label>Angle Change</label>
                    <input type="number" value={ugns_moving_ac} onChange={handleChangeUGNSMovingAC} />
                    <p>Degrees</p>
                  </div>
                  <Try text={"Minimal angle change to acquire new record, 1 - 180 degrees, 0 means disable recording data by min angle change. Valid only if vehicle speed is more than 10 km/h"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight7(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight7(".1rem solid #898A8D")}
                    style={{ border: focusRight7 }}>
                    <label>Speed Change</label>
                    <input type="number" value={ugns_moving_sc} onChange={handleChangeUGNSMovingSC} />
                    <p>Km/h</p>
                  </div>
                  <Try text={"Minimal speed change to acquire new record, 1 - 255 km/h, 0 means disable recording data by speed change"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight8(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight8(".1rem solid #898A8D")}
                    style={{ border: focusRight8 }}>
                    <label>Saved Records</label>
                    <input type="number" value={ugns_moving_sr} onChange={handleChangeUGNSMovingSR} />
                    {/* <p>Seconds</p> */}
                  </div>
                  <Try text={"Minimal number of records in one data packet that can be send to server, 1 - 255. Has higher priopity than [Send Period]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
                {/*  */}
                <div
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                    onFocus={() => setFocusRight9(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight9(".1rem solid #898A8D")}
                    style={{ border: focusRight9 }}>
                    <label>Send Period</label>
                    <input type="number" value={ugns_moving_sp} onChange={handleChangeUGNSMovingSP} />
                    <p>Seconds</p>
                  </div>
                  <Try text={"Frequency of sending data to server, 0 - 259200 seconds. Has lower priority than [Saved Records]"} />
                  {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-tracking-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-tracking-div3"

            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight2(right2State)}
            >Tracking on demand timing</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
              <span
                onClick={() => handlRight2(right2State)}
              >Tracking on demand: period and duration parameters.</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-tracking-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendTrackingOnDemandTiming}
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
              className="sub2-subsub1-sub2-subsub1-sub1-tracking-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
                // paddingTop:".1rem"
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-tracking-div3"
            style={{ display: right2, height: "9rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-tracking-div3">


              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                  marginTop: "1rem"
                }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusRight10(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight10(".1rem solid #898A8D")}
                  style={{ border: focusRight10 }}>
                  <label>Tracking Period</label>
                  <input type="number" value={track_time_period} onChange={handleChangeTrackTimePeriod} />
                  <p>Seconds</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub1-subsub1-sub1-tracking-div3"
                  onFocus={() => setFocusRight11(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight11(".1rem solid #898A8D")}
                  style={{ border: focusRight11 }}
                >
                  <label>Tracking Duration</label>
                  <input type="number" value={track_time_duration} onChange={handleChangeTrackTimeDuration} />
                  <p>Seconds</p>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
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

export default Tracking;
