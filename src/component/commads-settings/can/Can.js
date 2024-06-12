import React, { useState } from "react";
import "./Can.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Can = () => {

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


  //_____________________________________________________
  const [numberOfDtc, setNumberOfDtc] = useState(false);
  const [engineLoad, setEngineLoad] = useState(false);
  const [coolant, setCoolant] = useState(false);
  const [shortFuel, setShortFuel] = useState(false);
  const [fuelPressure, setFuelPressure] = useState(false);
  const [intakeMap, setIntakeMap] = useState(false);
  const [enginePrm, setEnginePrm] = useState(false);
  const [vehicleSpeed, setVehicleSpeed] = useState(false);
  const [timingAdvance, setTimingAdvance] = useState(false);
  const [intakeAir, setIntakeAir] = useState(false);
  const [massAir, setMassAir] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const [runTime, setRuntime] = useState(false);
  const [distance, setDistance] = useState(false);
  const [relativeFuel, setRelativeFuel] = useState(false);
  const [directFuel, setDirectFuel] = useState(false);
  const [commandedEgr, setCommandEgr] = useState(false);
  const [egrError, setEgrError] = useState(false);
  const [fuelLevel, setFuelLevel] = useState(false);
  const [distanceTraveled, setDistanceTraveled] = useState(false);
  const [barometric, setBarometric] = useState(false);
  const [ctlVoltage, setCtlVoltage] = useState(false);
  const [absoluteLoad, setAbsoluteLoad] = useState(false);
  const [ambient, setAmbient] = useState(false);
  const [timeRun, setTimeRun] = useState(false);
  const [timeSince, setTimeSince] = useState(false);
  const [absoluteFuel, setAbsoluteFuel] = useState(false);
  const [hybridBattery, setHybridBattery] = useState(false);
  const [engineOil, setEngineOil] = useState(false);
  const [fuelInjection, setFuelInjection] = useState(false);
  const [engineFuelRate, setEngineFuelRate] = useState(false);


  const handleNumberOfDtc = () => {
    setNumberOfDtc(!numberOfDtc)
  }

  const handleEngineLoad = () => {
    setEngineLoad(!engineLoad)
  }


  const handleCoolant = () => {
    setCoolant(!coolant)
  }


  const handleShortFuel = () => {
    setShortFuel(!shortFuel)
  }


  const handleFuelPressure = () => {
    setFuelPressure(!fuelPressure)
  }


  const handleIntakeMap = () => {
    setIntakeMap(!intakeMap)
  }


  const handleEnginePrm = () => {
    setEnginePrm(!enginePrm)
  }


  const handleVehicleSpeed = () => {
    setVehicleSpeed(!vehicleSpeed)
  }


  const handleTimingAdvance = () => {
    setTimingAdvance(!timingAdvance)
  }


  const handleIntakeAir = () => {
    setIntakeAir(!intakeAir)
  }


  const handleMassAir = () => {
    setMassAir(!massAir)
  }


  const handleThrottle = () => {
    setThrottle(!throttle)
  }


  const handleRuntime = () => {
    setRuntime(!runTime)
  }


  const handleDistance = () => {
    setDistance(!distance)
  }


  const handleRelativeFuel = () => {
    setRelativeFuel(!relativeFuel)
  }


  const handleDirectFuel = () => {
    setDirectFuel(!directFuel)
  }


  const handleCommandEgr = () => {
    setCommandEgr(!commandedEgr)
  }


  const handleEgrError = () => {
    setEgrError(!egrError)
  }


  const handleFuelLevel = () => {
    setFuelLevel(!fuelLevel)
  }


  const handleDistanceTraveled = () => {
    setDistanceTraveled(!distanceTraveled)
  }


  const handleBarometric = () => {
    setBarometric(!barometric)
  }


  const handleCtlVoltage = () => {
    setCtlVoltage(!ctlVoltage)
  }


  const handleAbsoluteLoad = () => {
    setAbsoluteLoad(!absoluteLoad)
  }


  const handleAmbient = () => {
    setAmbient(!ambient)
  }


  const handleTimeRun = () => {
    setTimeRun(!timeRun)
  }


  const handleTimeSince = () => {
    setTimeSince(!timeSince)
  }


  const handleAbsoluteFuel = () => {
    setAbsoluteFuel(!absoluteFuel)
  }

  const handleHybridBattery = () => {
    setHybridBattery(!hybridBattery)
  }

  const handleEngineOil = () => {
    setEngineOil(!engineOil)
  }


  const handleFuelInjection = () => {
    setFuelInjection(!fuelInjection)
  }


  const handleEngineFuelRate = () => {
    setEngineFuelRate(!engineFuelRate)
  }



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
    console.log("🚀 ~ file: Can.js:442 ~ sendCommonRequest ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
    return res;
  }

  const sendToggleCanControlOpenUnlockAllDoors = async () => {
    return sendCommonRequest(cmdType.ToggleCanControlToOpenUnlockAllDoors, {})
  }
  const sendToggleCanControlOpenUnlockTrunk = async () => {
    return sendCommonRequest(cmdType.ToggleCanControlToOpenUnlockTrunk, {})
  }

  const sendToggleCanControlToBlockEngine = async () => {
    return sendCommonRequest(cmdType.ToggleCanControlToBlockEngine, {})
  }

  const sendToggleCanControlToCloselockAllDoors = async () => {
    return sendCommonRequest(cmdType.ToggleCanControlToCloselockAllDoors, {})
  }

  const sendToggleCanControlToFlashLights = async () => {
    return sendCommonRequest(cmdType.ToggleCanControlToFlashLights, {})
  }

  const sendToggleCanControlToUnblockEngine = async () => {
    return sendCommonRequest(cmdType.ToggleCanControlToUnblockEngine, {})
  }


  const sendCanParameters = async () => {
    return sendCommonRequest(cmdType.CanParam, {
      p1: numberOfDtc ? "1" : "0",
      p2: engineLoad ? "1" : "0",
      p3: coolant ? "1" : "0",
      p4: shortFuel ? "1" : "0",
      p5: fuelPressure ? "1" : "0",
      p6: intakeMap ? "1" : "0",
      p7: enginePrm ? "1" : "0",
      p8: vehicleSpeed ? "1" : "0",
      p9: timingAdvance ? "1" : "0",
      p10: intakeAir ? "1" : "0",
      p11: massAir ? "1" : "0",
      p12: throttle ? "1" : "0",
      p13: runTime ? "1" : "0",
      p14: distance ? "1" : "0",
      p15: relativeFuel ? "1" : "0",
      p16: directFuel ? "1" : "0",
      p17: commandedEgr ? "1" : "0",
      p18: egrError ? "1" : "0",
      p19: fuelLevel ? "1" : "0",
      p20: distanceTraveled ? "1" : "0",
      p21: barometric ? "1" : "0",
      p22: ctlVoltage ? "1" : "0",
      p23: absoluteLoad ? "1" : "0",
      p24: ambient ? "1" : "0",
      p25: timeRun ? "1" : "0",
      p26: timeSince ? "1" : "0",
      p27: absoluteFuel ? "1" : "0",
      p28: hybridBattery ? "1" : "0",
      p29: engineOil ? "1" : "0",
      p30: fuelInjection ? "1" : "0",
      p31: engineFuelRate ? "1" : "0",
      // p1:,
      // p2:,
      // p3:,
      // phoneNo:,
      // sms:
    })
  }



  return (
    <div className="sub1-can-div3" id="sec8">
      {/* main-box-left*/}
      <div className="subsub1-sub1-can-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-can-div3">
          <div

            className="subsub1-sub1-subsub1-sub1-can-div3"
            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >CAN Parameters</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-can-div3">
              <span
                onClick={() => handlLeft1(left1State)}
              >CAN parameters setup.</span>
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-can-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendCanParameters}
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
              className="sub2-subsub1-sub1-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-can-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-can-div3">
              <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-can-div3">
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={numberOfDtc} onChange={() => handleNumberOfDtc()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Number of DTC</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={engineLoad} onChange={() => handleEngineLoad()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Engine Load</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={coolant} onChange={() => handleCoolant()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Coolant Temperature</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={shortFuel} onChange={() => handleShortFuel()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Short Fuel Trim</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={fuelPressure} onChange={() => handleFuelPressure()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Fuel Pressure</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={intakeMap} onChange={() => handleIntakeMap()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Intake MAP</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={enginePrm} onChange={() => handleEnginePrm()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Engine RPM</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={vehicleSpeed} onChange={() => handleVehicleSpeed()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Vehicle Speed</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={timingAdvance} onChange={() => handleTimingAdvance()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Timing Advance</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={intakeAir} onChange={() => handleIntakeAir()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Intake Air Temperature</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={massAir} onChange={() => handleMassAir()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Mass Air Flow Rate</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={throttle} onChange={() => handleThrottle()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Throttle Position</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={runTime} onChange={() => handleRuntime()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Run Time Since Engine Start</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={distance} onChange={() => handleDistance()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Distance Traveled Since MIL On</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={relativeFuel} onChange={() => handleRelativeFuel()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Relative Fuel Rail Pressure</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={directFuel} onChange={() => handleDirectFuel()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Direct Fuel Rail Pressure</p>
                </div>

              </div>

              <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-can-div3">
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={commandedEgr} onChange={() => handleCommandEgr()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Commanded EGR</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={egrError} onChange={() => handleEgrError()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>EGR Error</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={fuelLevel} onChange={() => handleFuelLevel()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Fuel Level</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={distanceTraveled} onChange={() => handleDistanceTraveled()} />
                    <span className="can-slider"></span>
                  </label>
                  <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", lineHeight: "0rem", marginTop: "-.1rem" }}>
                    <p style={{ height: "50%" }}>Distance Traveled Since Trouble </p>
                    <p style={{ height: "50%", marginTop: "-.4rem" }}> Codes Cleared</p>
                  </div>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={barometric} onChange={() => handleBarometric()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Barometric Pressure</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={ctlVoltage} onChange={() => handleCtlVoltage()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Control Module Voltage</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={absoluteLoad} onChange={() => handleAbsoluteLoad()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Absolute Load Value</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={ambient} onChange={() => handleAmbient()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Ambient Air Temperature</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={timeRun} onChange={() => handleTimeRun()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Time Run With MIL On</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={timeSince} onChange={() => handleTimeSince()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Time Since Trouble Codes Cleared</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={absoluteFuel} onChange={() => handleAbsoluteFuel()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Absolute Fuel Rail Pressure</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={hybridBattery} onChange={() => handleHybridBattery()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Hybrid Battery Pack Remaining Life</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={engineOil} onChange={() => handleEngineOil()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Engine Oil Temperature</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={fuelInjection} onChange={() => handleFuelInjection()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Fuel Injection Timing</p>
                </div>
                <div>
                  <label className="can-switch">
                    <input type="checkbox" checked={engineFuelRate} onChange={() => handleEngineFuelRate()} />
                    <span className="can-slider"></span>
                  </label>
                  <p>Engine Fuel Rate</p>
                </div>

              </div>


            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}

      </div>
      {/* main-box-left*/}

      {/* main-box-mid*/}
      <div className="subsub2-sub1-can-div3">
        {/* sub1-main-box-mid*/}

        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
          // onClick={() => handlMid1(mid1State)}
          // style={{
          //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
          //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
          // }}
          >
            <p>Toggle CAN-CONTROL to open [unlock] all doors</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              {/* <span>Battery level I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendToggleCanControlOpenUnlockAllDoors}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                {/* ////////////////////////////// */}





                {/* //////////////////////////// */}
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  // style={{ marginLeft: "1rem" }}
                  onClick={() => handlMid1(mid1State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: mid1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: mid1, height: "21rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority3}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect5(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand3}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect6(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
              </div>

              <div
                className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
          // onClick={() => handlMid2(mid2State)}
          // style={{
          //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
          //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
          // }}
          >
            <p>Toggle CAN-CONTROL to open [unlock] trunk</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              {/* <span>Battery voltage I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendToggleCanControlOpenUnlockTrunk}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlMid2(mid2State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: mid2, height: "24.5rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority4}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect7(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand4}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect8(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-can-div3"
          // onClick={() => handlMid3(mid3State)}
          // style={{
          //   borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
          //   borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
          // }}
          >
            <p>Toggle CAN-CONTROL to block engine</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-can-div3">
              {/* <span>Axis Y parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendToggleCanControlToBlockEngine}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlMid3(mid3State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-can-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-can-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority5}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect9(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand5}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect10(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
      </div>
      {/* main-box-mid*/}







      {/* main-box-right*/}
      <div className="subsub3-sub1-can-div3">
        {/* sub1-main-box-right*/}
        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
          // onClick={() => handlRight1(right1State)}
          // style={{
          //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
          //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
          // }}
          >
            <p>Toggle CAN-CONTROL to close [lock] all doors</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              {/* <span>External voltage I/O parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendToggleCanControlToCloselockAllDoors}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlRight1(right1State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: right1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: right1, height: "25rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority6}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect11(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand6}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect12(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub2-subsub1-sub1-can-div3"
          // onClick={() => handlRight2(right2State)}
          // style={{
          //   borderBottomLeftRadius: left2State == false ? "1rem" : "0rem",
          //   borderBottomRightRadius: left2State == false ? "1rem" : "0rem",
          // }}
          >
            <p>Toggle CAN-CONTROL to flash lights</p>
            <div className="sub1-subsub1-sub2-subsub1-sub1-can-div3">
              <span>One flash of all turn lights ordered trough accidental / blinking turn light switch</span>
              <div className="subsub1-sub1-subsub1-sub2-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendToggleCanControlToFlashLights}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlRight2(right2State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub2-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub1-sub1-can-div3"
            style={{ display: right2, height: "33rem" }}
          >
            <div className="sub1-subsub2-sub2-subsub1-sub1-can-div3">
              <div
                className="subsub1-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ border: ".1rem solid #005EEC" }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Analogue Input Pin</label>
                  <p>{analogueInput}</p>
                </div>
                <select value={""} onChange={(e) => handleSelect15(e)}>
                  <option selected></option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <p>OFF</p>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority7}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect13(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand7}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect14(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub5-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>Event Only</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />

              </div>

              <div
                className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-.5rem" }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* sub2-main-box-right*/}
        {/* sub3-main-box-right*/}
        <div className="sub3-subsub1-sub1-can-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-can-div3"
          // onClick={() => handlRight3(right3State)}
          // style={{
          //   borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
          //   borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
          // }}
          >
            <p>Toggle CAN-CONTROL to unblock engine</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-can-div3">
              {/* <span>Axis Z parameters settings</span> */}
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-can-div3">
                {/* <img src="./assets/refresh.svg" alt="none" /> */}
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendToggleCanControlToUnblockEngine}
                    style={{ marginLeft: ".3rem" }}
                  />
                </div>
                {/* <img
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handlRight3(right3State)}
                /> */}
              </div>
            </div>
            <div
              className="sub2-subsub1-sub3-subsub1-sub1-can-div3"
              style={{
                borderBottomLeftRadius: right3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-can-div3"
            style={{ display: right3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-can-div3">
              <div
                className="subsub2-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <p>OFF</p>
                <label className="can-switch">
                  <input type="checkbox" />
                  <span className="can-slider"></span>
                </label>
                <p>ON</p>
              </div>

              <div
                className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                style={{ marginTop: "-1rem" }}
              >
                <div className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Priority</label>
                    <p>{priority8}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect16(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div
                  className="sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3"
                  style={{ border: ".1rem solid #898A8D" }}
                >
                  <div className="subsub1-sub1-subsub3-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                    <label>Operand</label>
                    <p>{operand8}</p>
                  </div>
                  <select value={""} onChange={(e) => handleSelect17(e)}>
                    <option selected></option>
                    <option>On Exit</option>
                    <option>On Enter</option>
                    <option>On Both</option>
                    <option>Monitoring</option>
                    <option>On Hysteresis</option>
                    <option>On Change</option>
                    <option>On Delta Change</option>
                  </select>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>High Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Low Level</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <label>Average</label>
                  <input type="number" />
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>

              <div className="subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                <div className="sub1-subsub6-sub1-subsub2-sub2-subsub1-sub1-can-div3">
                  <p>Send SMS</p>
                  <label className="can-switch">
                    <input type="checkbox" />
                    <span className="can-slider"></span>
                  </label>
                  <p>ON</p>
                </div>
                <img src="./assets/blueQuestion.svg" alt="none" />
              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-right*/}
      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default Can;
