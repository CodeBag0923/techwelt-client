import React, { useState } from "react";
import "./Bluetooth.css";
import Try from "../try/Try"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Bluetooth = () => {
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
  const [bluetoothScenarioSetting, setBluetoothScenarioSetting] = useState("")
  const [securityMode1, setSecurityMode1] = useState("")
  const [beaconDetection, setBeaconDetection] = useState("")
  const [beaconRecords, setBeaconRecords] = useState("")
  const [connectionMode1, setConnectionMode1] = useState("")


  const [ignitionDetectionSource, setIgnitionDetectionSource] =
    useState("Digital Input");
  const [mode, setMode] = useState("");
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
  const [focusLeft6, setFocusLeft6] = useState("")
  const [focusLeft7, setFocusLeft7] = useState("")
  const [focusLeft8, setFocusLeft8] = useState("")

  const [focusMid1, setFocusMid1] = useState(".1rem solid #898A8D")
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
  const [focusMid22, setFocusMid22] = useState("")
  const [focusMid23, setFocusMid23] = useState("")
  const [focusMid24, setFocusMid24] = useState("")
  const [focusMid25, setFocusMid25] = useState("")
  const [focusMid26, setFocusMid26] = useState("")
  const [focusMid27, setFocusMid27] = useState("")
  const [focusMid28, setFocusMid28] = useState("")
  const [focusMid29, setFocusMid29] = useState("")

  const [focusRight1, setFocusRight1] = useState("")
  const [focusRight2, setFocusRight2] = useState("")
  const [focusRight3, setFocusRight3] = useState(".1rem solid #898A8D")
  const [focusRight4, setFocusRight4] = useState("")


  ////////////////////////////////////////////////////
  const [bluetoothScenario, setBluetoothScenario] = useState("")
  const [localName, setLocalName] = useState("")
  const [bluetoothPairing, setBluetoothPairing] = useState("")
  const [securityMode, setSecurityMode] = useState("")
  const [enableNonStopScan, setEnableNonStopScan] = useState("")
  const [bleScanDuration, setBleScanDuration] = useState("")
  const [scanRetriedUntilError, setScanRetriedUntilError] = useState("")
  const [btPowerLevel, setBtPowerLevel] = useState("")
  const [bleBroadcasting, setBleBroadcasting] = useState("")
  const [bleConectionControl, setbleConectionControl] = useState(false)
  const [connectionMode, setConnectionMode] = useState("")
  const [externalMac, setExternalMac] = useState("")
  const [externalName, setExternalName] = useState("")
  const [externalPin, setExternalPin] = useState("")

  const [bleBeaconUid1, setBleBeaconUid1] = useState("")
  const [bleBeaconUid2, setBleBeaconUid2] = useState("")
  const [bleBeaconUid3, setBleBeaconUid3] = useState("")
  const [bleBeaconUid4, setBleBeaconUid4] = useState("")
  const [bleBeaconUid5, setBleBeaconUid5] = useState("")
  const [bleBeaconUid6, setBleBeaconUid6] = useState("")
  const [bleBeaconUid7, setBleBeaconUid7] = useState("")
  const [bleBeaconUid8, setBleBeaconUid8] = useState("")
  const [bleBeaconUid9, setBleBeaconUid9] = useState("")
  const [bleBeaconUid10, setBleBeaconUid10] = useState("")
  const [bleBeaconUid11, setBleBeaconUid11] = useState("")
  const [bleBeaconUid12, setBleBeaconUid12] = useState("")
  const [bleBeaconUid13, setBleBeaconUid13] = useState("")
  const [bleBeaconUid14, setBleBeaconUid14] = useState("")
  const [bleBeaconUid15, setBleBeaconUid15] = useState("")
  const [bleBeaconUid16, setBleBeaconUid16] = useState("")
  const [bleBeaconUid17, setBleBeaconUid17] = useState("")
  const [bleBeaconUid18, setBleBeaconUid18] = useState("")
  const [bleBeaconUid19, setBleBeaconUid19] = useState("")
  const [bleBeaconUid20, setBleBeaconUid20] = useState("")
  const [bleBeaconUid21, setBleBeaconUid21] = useState("")
  const [bleBeaconUid22, setBleBeaconUid22] = useState("")
  const [bleBeaconUid23, setBleBeaconUid23] = useState("")
  const [bleBeaconUid24, setBleBeaconUid24] = useState("")
  const [bleBeaconUid25, setBleBeaconUid25] = useState("")

  const [bleDetection, setBleDetection] = useState("")
  const [beaconRecord, setBeaconRecord] = useState("")
  const [host, setHost] = useState("")
  const [port, setPort] = useState("")

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
    setBluetoothScenarioSetting(e.target.value);
  };
  const handleSelect1 = (e) => {
    console.log(e.target.value);
    setSecurityMode1(e.target.value);
  };
  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
  };
  const handleSelect3 = (e) => {
    console.log(e.target.value);
    setConnectionMode1(e.target.value);
  };
  const handleSelect4 = (e) => {
    console.log(e.target.value);
    setBeaconDetection(e.target.value);
  };
  const handleSelect5 = (e) => {
    console.log(e.target.value);
    setBeaconRecords(e.target.value);
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

  const sendBluetoothWorkMode = async () => {
    return sendCommonRequest(cmdType.BluetoothWorkMode, {
      setting: bluetoothScenario,
      lname: localName,
      pin: bluetoothPairing,
      mode: securityMode
    })
  }

  const sendBleCommonSetting = async () => {
    return sendCommonRequest(cmdType.BLEcommonSetting, {
      p1: bleScanDuration,
      p2: scanRetriedUntilError,
      p3: btPowerLevel,
      p4: bleBroadcasting
    })
  }
  const sendAutoConnectToExternalDevice = async () => {
    return sendCommonRequest(cmdType.AutoConnectToExternalDevice, {
      mode: connectionMode,
      mac: externalMac,
      name: externalName,
      pin: externalPin
    })
  }
  const sendAuthorizedBeaconslist = async () => {
    return sendCommonRequest(cmdType.AuthorizedBeaconsList, {
      p1: bleBeaconUid1,
      p2: bleBeaconUid2,
      p3: bleBeaconUid3,
      p4: bleBeaconUid4,
      p5: bleBeaconUid5,
      p6: bleBeaconUid6,
      p7: bleBeaconUid7,
      p8: bleBeaconUid8,
      p9: bleBeaconUid9,
      p10: bleBeaconUid10,
      p11: bleBeaconUid11,
      p12: bleBeaconUid12,
      p13: bleBeaconUid13,
      p14: bleBeaconUid14,
      p15: bleBeaconUid15,
      p16: bleBeaconUid16,
      p17: bleBeaconUid17,
      p18: bleBeaconUid18,
      p19: bleBeaconUid19,
      p20: bleBeaconUid20,
      p21: bleBeaconUid21,
      p22: bleBeaconUid22,
      p23: bleBeaconUid23,
      p24: bleBeaconUid24,
      p25: bleBeaconUid25,

    })
  }
  const sendBeaconSetting = async () => {
    return sendCommonRequest(cmdType.BeaconSettings, {
      detection: bleDetection,
      record: beaconRecord,
      host: host,
      port: port
    })
  }


  const onChangeBlueScenarioSetting = (e) => {
    handleSelect(e);
    setBluetoothScenario(e.target.selectedIndex - 1)
  }
  const onChangeLocalName = (e) => {
    setLocalName(e.target.value)
  }
  const onChangeBluetoothPairing = (e) => {
    setBluetoothPairing(e.target.value)
  }
  const onChangeSecurityMode = (e) => {
    setSecurityMode1(e.target.value)
    setSecurityMode(e.target.selectedIndex - 1)
  }

  const onChangeEnableNonStopScan = (e) => {
    setEnableNonStopScan(!enableNonStopScan)
  }

  const onChangeBleScanDuration = (e) => {
    setBleScanDuration(e.target.value)
  }

  const onChangeScanRetriedUntilError = (e) => {
    setScanRetriedUntilError(e.target.value)
  }

  const onChangeBtPowerLevel = (e) => {
    setBtPowerLevel(e.target.value)
  }

  const onChangeBleBroadcasting = (e) => {
    setBleBroadcasting(e.target.value)
  }

  const onChangebleConectionControl = (e) => {
    setbleConectionControl(!bleConectionControl)
  }

  const onChangeConnectionMode = (e) => {
    setConnectionMode(e.target.selectedIndex - 1)
  }

  const onChangeExternalMac = (e) => {
    setExternalMac(e.target.value)
  }

  const onChangeExternalName = (e) => {
    setExternalName(e.target.value)
  }

  const onChangeExternalPin = (e) => {
    setExternalPin(e.target.value)
  }

  const onChangeBleBeaconUid1 = (e) => {
    setBleBeaconUid1(e.target.value)
  }

  const onChangeBleBeaconUid2 = (e) => {
    setBleBeaconUid2(e.target.value)
  }
  const onChangeBleBeaconUid3 = (e) => {
    setBleBeaconUid3(e.target.value)
  }
  const onChangeBleBeaconUid4 = (e) => {
    setBleBeaconUid4(e.target.value)
  }
  const onChangeBleBeaconUid5 = (e) => {
    setBleBeaconUid5(e.target.value)
  }
  const onChangeBleBeaconUid6 = (e) => {
    setBleBeaconUid6(e.target.value)
  }
  const onChangeBleBeaconUid7 = (e) => {
    setBleBeaconUid7(e.target.value)
  }
  const onChangeBleBeaconUid8 = (e) => {
    setBleBeaconUid8(e.target.value)
  }
  const onChangeBleBeaconUid9 = (e) => {
    setBleBeaconUid9(e.target.value)
  }
  const onChangeBleBeaconUid10 = (e) => {
    setBleBeaconUid10(e.target.value)
  }
  const onChangeBleBeaconUid11 = (e) => {
    setBleBeaconUid11(e.target.value)
  }
  const onChangeBleBeaconUid12 = (e) => {
    setBleBeaconUid12(e.target.value)
  }
  const onChangeBleBeaconUid13 = (e) => {
    setBleBeaconUid13(e.target.value)
  }
  const onChangeBleBeaconUid14 = (e) => {
    setBleBeaconUid14(e.target.value)
  }
  const onChangeBleBeaconUid15 = (e) => {
    setBleBeaconUid15(e.target.value)
  }
  const onChangeBleBeaconUid16 = (e) => {
    setBleBeaconUid16(e.target.value)
  }
  const onChangeBleBeaconUid17 = (e) => {
    setBleBeaconUid17(e.target.value)
  }
  const onChangeBleBeaconUid18 = (e) => {
    setBleBeaconUid18(e.target.value)
  }
  const onChangeBleBeaconUid19 = (e) => {
    setBleBeaconUid19(e.target.value)
  }
  const onChangeBleBeaconUid20 = (e) => {
    setBleBeaconUid20(e.target.value)
  }
  const onChangeBleBeaconUid21 = (e) => {
    setBleBeaconUid21(e.target.value)
  }
  const onChangeBleBeaconUid22 = (e) => {
    setBleBeaconUid22(e.target.value)
  }
  const onChangeBleBeaconUid23 = (e) => {
    setBleBeaconUid23(e.target.value)
  }
  const onChangeBleBeaconUid24 = (e) => {
    setBleBeaconUid24(e.target.value)
  }
  const onChangeBleBeaconUid25 = (e) => {
    setBleBeaconUid25(e.target.value)
  }
  const onChangeBeaconDetection = (e) => {
    setBleDetection(e.target.selectedIndex - 1)
  }
  const onChangeBeaconRecords = (e) => {
    setBeaconRecord(e.target.selectedIndex - 1)
  }
  const onChangeHost = (e) => {
    setHost(e.target.value)
  }
  const onChangePort = (e) => {
    setPort(e.target.value)
  }





  return (
    <div className="sub1-bluetooth-div3" id="sec9">
      {/* main-box-left*/}
      <div className="subsub1-sub1-bluetooth-div3">
        {/* sub1-main-box-left*/}
        <div className="sub1-subsub1-sub1-bluetooth-div3">
          <div
            className="subsub1-sub1-subsub1-sub1-bluetooth-div3"

            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >Bluetooth work mode</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-bluetooth-div3">
              {/* <span>
                PUBGObject motion detection is to be configured to determine device
                working mode. Other functionalities that depend on movement
                source are: power manager, fuel consumption and trip.
              </span> */}
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-bluetooth-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendBluetoothWorkMode}
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
              className="sub2-subsub1-sub1-subsub1-sub1-bluetooth-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-bluetooth-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3">

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  marginBottom: ".5rem",

                }}
              >
                <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                  style={{ border: focusLeft1 }}
                >
                  <div className="sub1-subsub3-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3">
                    <label>Bluetooth Scenario Setting</label>
                    <p>
                      {bluetoothScenarioSetting}
                    </p>
                  </div>
                  <select value={""} onChange={(e) => onChangeBlueScenarioSetting(e)}>
                    <option selected></option>
                    <option>Disable</option>
                    <option>Enable Hidden</option>
                    <option>Enable Visible</option>

                  </select>
                </div>
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
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                  style={{ border: focusLeft2 }}  >
                  <label>Local Name</label>
                  <input type="text" value={localName} onChange={(e) => {
                    onChangeLocalName(e)
                  }} />
                  {/* <p>Seconds</p> */}
                </div>
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
                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                  style={{ border: focusLeft3 }}  >
                  <label>Bluetooth Pairing PIN Code</label>
                  <input type="number" value={bluetoothPairing} onChange={(e) => {
                    onChangeBluetoothPairing(e)
                  }} />
                  {/* <p>Seconds</p> */}
                </div>
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
                <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                  style={{ border: focusLeft4 }}  >
                  <div className="sub1-subsub3-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3">
                    <label>Security Mode</label>
                    <p>
                      {securityMode1}
                    </p>
                  </div>
                  <select value={""} onChange={(e) => onChangeSecurityMode(e)}>
                    <option selected></option>
                    <option>PIN Only</option>
                    <option>PIN and MAC</option>
                    <option>MAC Only</option>
                    <option>None</option>
                  </select>
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub1-main-box-left*/}

        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-bluetooth-div3"> */}
        <div className="sub3-subsub1-sub1-bluetooth-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-bluetooth-div3"

            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft3(left3State)}
            >BLE common settings</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-bluetooth-div3">
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-bluetooth-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendBleCommonSetting}
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
              className="sub2-subsub1-sub3-subsub1-sub1-bluetooth-div3"
              style={{
                borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-bluetooth-div3"
            style={{ display: left3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3">

              <div className="import2-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3">
                <p>Enable Non Stop Scan</p>
                <label className="bluetooth-switch">
                  <input type="checkbox" checked={enableNonStopScan} onChange={onChangeEnableNonStopScan} />
                  <span className="bluetooth-slider"></span>
                </label>
                <p>ON</p>
              </div>


              <div className="subsub1-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3"
                onFocus={() => setFocusLeft5(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft5(".1rem solid #898A8D")}
                style={{ border: focusLeft5 }}  >
                <label>BLE Scan Duration</label>
                <input type="number" value={bleScanDuration} onChange={(e) => onChangeBleScanDuration(e)} />
                <p>Seconds</p>
              </div>


              <div className="subsub2-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3"
                onFocus={() => setFocusLeft6(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft6(".1rem solid #898A8D")}
                style={{ border: focusLeft6 }}  >
                <label>Scan Retried until Error</label>
                <input type="number" value={scanRetriedUntilError} onChange={(e) => {
                  onChangeScanRetriedUntilError(e)
                }} />
              </div>



              <div className="subsub3-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3"
                onFocus={() => setFocusLeft7(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft7(".1rem solid #898A8D")}
                style={{ border: focusLeft7 }}  >
                <label>BT Power Level</label>
                <input type="number" checked={btPowerLevel} onChange={(e) => onChangeBtPowerLevel(e)} />
              </div>



              <div className="subsub3-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3"
                onFocus={() => setFocusLeft8(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft8(".1rem solid #898A8D")}
                style={{ border: focusLeft8 }}  >
                <label>BLE Broadcasting Service ID</label>
                <input type="number" value={bleBroadcasting} onChange={(e) => onChangeBleBroadcasting(e)} />
              </div>


              <div className="subsub4-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3">
                <div className="sub1-subsub4-sub1-subsub2-sub3-subsub1-sub1-bluetooth-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" checked={bleConectionControl} onChange={onChangebleConectionControl} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>BLE Connection Control</p>
                </div>
                <Try text={"If enabled - BLE connections are allowed to device. If disabled - then not allowed. When disabled - device can work as beacon."} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}

              </div>
            </div>
          </div>
        </div>
        {/* sub3-main-box-left*/}
      </div>










      {/* main-box-mid*/}
      <div className="subsub2-sub1-bluetooth-div3">
        {/* sub1-main-box-mid*/}

        {/* sub1-main-box-mid*/}
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub2-sub1-bluetooth-div3">
          <div
            className="subsub1-sub2-subsub2-sub1-bluetooth-div3"

            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid2(mid2State)}
            >Auto connect to external device</p>
            <div className="sub1-subsub1-sub2-subsub2-sub1-bluetooth-div3">
              {/* <span>
                Set up network ping with a certain timeout to prevent link close
                by the operator.{" "}
              </span> */}
              <div className="subsub1-sub1-subsub1-sub2-subsub2-sub1-bluetooth-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendAutoConnectToExternalDevice}
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
              className="sub2-subsub1-sub2-subsub2-sub1-bluetooth-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub2-sub1-bluetooth-div3"
            style={{ display: mid2 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3">

              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                  marginBottom: ".5rem",

                }}
              >
                <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}

                >
                  <div className="sub1-subsub3-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3">
                    <label>Connection Mode</label>
                    <p>
                      {connectionMode1}
                    </p>
                  </div>
                  <select value={""} onChange={(e) => {
                    handleSelect3(e)
                    onChangeConnectionMode(e)
                  }}>
                    <option selected></option>
                    <option>None</option>
                    <option>Handsfree</option>
                    <option>OBDII</option>
                    <option>Data Link</option>
                    <option>Inateck Scanner</option>
                    <option>User ID</option>


                  </select>
                </div>
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
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                  style={{ border: focusMid2 }}
                >
                  <label>External MAC</label>
                  <input type="text" value={externalMac} onChange={(e) => {
                    onChangeExternalMac(e)
                  }} />
                  {/* <p>Seconds</p> */}
                </div>
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
                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                  style={{ border: focusMid3 }} >
                  <label>External Name</label>
                  <input type="text" value={externalName} onChange={(e) => {
                    onChangeExternalName(e)
                  }} />
                  {/* <p>Seconds</p> */}
                </div>
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
                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-bluetooth-div3"
                  onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                  style={{ border: focusMid4 }}
                >
                  <label>External PIN</label>
                  <input type="number" value={externalPin} onChange={(e) => {
                    onChangeExternalPin(e)
                  }} />
                  {/* <p>Seconds</p> */}
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub2-sub1-bluetooth-div3">
          <div
            className="subsub1-sub3-subsub2-sub1-bluetooth-div3"

            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid3(mid3State)}
            >Authorized beacons list</p>
            <div className="sub1-subsub1-sub3-subsub2-sub1-bluetooth-div3">
              <span
                onClick={() => handlMid3(mid3State)}
              >
                The list of Authorized BLE Beacons. iBeacon format supported
                (e.g. 00026da64fa24e988024bc5b71e0893e-1111-CCCC) and
                Eddystone (e.g. 00026da64fa24e988024bc5b-111111111111).
              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub2-sub1-bluetooth-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendAuthorizedBeaconslist}
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
              className="sub2-subsub1-sub3-subsub2-sub1-bluetooth-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub2-sub1-bluetooth-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub2-sub1-bluetooth-div3">
              <input type="text" placeholder="BLE Beacon UID 1"
                onFocus={() => setFocusMid5(".1rem solid #005EEC")}
                onBlur={() => setFocusMid5(".1rem solid #898A8D")}
                style={{ border: focusMid5 }}
                value={bleBeaconUid1}
                onchange={(e) => {
                  onChangeBleBeaconUid1(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 2"
                onFocus={() => setFocusMid6(".1rem solid #005EEC")}
                onBlur={() => setFocusMid6(".1rem solid #898A8D")}
                style={{ border: focusMid6 }}
                value={bleBeaconUid2}
                onchange={(e) => {
                  onChangeBleBeaconUid2(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 3"
                onFocus={() => setFocusMid7(".1rem solid #005EEC")}
                onBlur={() => setFocusMid7(".1rem solid #898A8D")}
                style={{ border: focusMid7 }}
                value={bleBeaconUid3}
                onchange={(e) => {
                  onChangeBleBeaconUid3(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 4"
                onFocus={() => setFocusMid8(".1rem solid #005EEC")}
                onBlur={() => setFocusMid8(".1rem solid #898A8D")}
                style={{ border: focusMid8 }}
                value={bleBeaconUid4}
                onchange={(e) => {
                  onChangeBleBeaconUid4(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 5"
                onFocus={() => setFocusMid9(".1rem solid #005EEC")}
                onBlur={() => setFocusMid9(".1rem solid #898A8D")}
                style={{ border: focusMid9 }}
                value={bleBeaconUid5}
                onchange={(e) => {
                  onChangeBleBeaconUid5(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 6"
                onFocus={() => setFocusMid10(".1rem solid #005EEC")}
                onBlur={() => setFocusMid10(".1rem solid #898A8D")}
                style={{ border: focusMid10 }}
                value={bleBeaconUid6}
                onchange={(e) => {
                  onChangeBleBeaconUid6(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 7"
                onFocus={() => setFocusMid11(".1rem solid #005EEC")}
                onBlur={() => setFocusMid11(".1rem solid #898A8D")}
                style={{ border: focusMid11 }}
                value={bleBeaconUid7}
                onchange={(e) => {
                  onChangeBleBeaconUid7(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 8"
                onFocus={() => setFocusMid12(".1rem solid #005EEC")}
                onBlur={() => setFocusMid12(".1rem solid #898A8D")}
                style={{ border: focusMid12 }}
                value={bleBeaconUid8}
                onchange={(e) => {
                  onChangeBleBeaconUid8(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 9"
                onFocus={() => setFocusMid13(".1rem solid #005EEC")}
                onBlur={() => setFocusMid13(".1rem solid #898A8D")}
                style={{ border: focusMid13 }}
                value={bleBeaconUid9}
                onchange={(e) => {
                  onChangeBleBeaconUid9(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 10"
                onFocus={() => setFocusMid14(".1rem solid #005EEC")}
                onBlur={() => setFocusMid14(".1rem solid #898A8D")}
                style={{ border: focusMid14 }}
                value={bleBeaconUid10}
                onchange={(e) => {
                  onChangeBleBeaconUid10(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 11"
                onFocus={() => setFocusMid15(".1rem solid #005EEC")}
                onBlur={() => setFocusMid15(".1rem solid #898A8D")}
                style={{ border: focusMid15 }}
                value={bleBeaconUid11}
                onchange={(e) => {
                  onChangeBleBeaconUid11(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 12"
                onFocus={() => setFocusMid16(".1rem solid #005EEC")}
                onBlur={() => setFocusMid16(".1rem solid #898A8D")}
                style={{ border: focusMid16 }}
                value={bleBeaconUid12}
                onchange={(e) => {
                  onChangeBleBeaconUid12(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 13"
                onFocus={() => setFocusMid17(".1rem solid #005EEC")}
                onBlur={() => setFocusMid17(".1rem solid #898A8D")}
                style={{ border: focusMid17 }}
                value={bleBeaconUid13}
                onchange={(e) => {
                  onChangeBleBeaconUid13(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 14"
                onFocus={() => setFocusMid18(".1rem solid #005EEC")}
                onBlur={() => setFocusMid18(".1rem solid #898A8D")}
                style={{ border: focusMid18 }}
                value={bleBeaconUid14}
                onchange={(e) => {
                  onChangeBleBeaconUid14(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 15"
                onFocus={() => setFocusMid19(".1rem solid #005EEC")}
                onBlur={() => setFocusMid19(".1rem solid #898A8D")}
                style={{ border: focusMid19 }}
                value={bleBeaconUid15}
                onchange={(e) => {
                  onChangeBleBeaconUid15(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 16"
                onFocus={() => setFocusMid20(".1rem solid #005EEC")}
                onBlur={() => setFocusMid20(".1rem solid #898A8D")}
                style={{ border: focusMid20 }}
                value={bleBeaconUid16}
                onchange={(e) => {
                  onChangeBleBeaconUid16(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 17"
                onFocus={() => setFocusMid21(".1rem solid #005EEC")}
                onBlur={() => setFocusMid21(".1rem solid #898A8D")}
                style={{ border: focusMid21 }}
                value={bleBeaconUid17}
                onchange={(e) => {
                  onChangeBleBeaconUid17(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 18"
                onFocus={() => setFocusMid22(".1rem solid #005EEC")}
                onBlur={() => setFocusMid22(".1rem solid #898A8D")}
                style={{ border: focusMid22 }}
                value={bleBeaconUid18}
                onchange={(e) => {
                  onChangeBleBeaconUid18(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 19"
                onFocus={() => setFocusMid23(".1rem solid #005EEC")}
                onBlur={() => setFocusMid23(".1rem solid #898A8D")}
                style={{ border: focusMid23 }}
                value={bleBeaconUid19}
                onchange={(e) => {
                  onChangeBleBeaconUid19(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 20"
                onFocus={() => setFocusMid24(".1rem solid #005EEC")}
                onBlur={() => setFocusMid24(".1rem solid #898A8D")}
                style={{ border: focusMid24 }}
                value={bleBeaconUid20}
                onchange={(e) => {
                  onChangeBleBeaconUid20(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 21"
                onFocus={() => setFocusMid25(".1rem solid #005EEC")}
                onBlur={() => setFocusMid25(".1rem solid #898A8D")}
                style={{ border: focusMid25 }}
                onchange={(e) => {
                  onChangeBleBeaconUid21(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 22"
                onFocus={() => setFocusMid26(".1rem solid #005EEC")}
                onBlur={() => setFocusMid26(".1rem solid #898A8D")}
                style={{ border: focusMid26 }}
                value={bleBeaconUid22}
                onchange={(e) => {
                  onChangeBleBeaconUid22(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 23"
                onFocus={() => setFocusMid27(".1rem solid #005EEC")}
                onBlur={() => setFocusMid27(".1rem solid #898A8D")}
                style={{ border: focusMid27 }}
                value={bleBeaconUid23}
                onchange={(e) => {
                  onChangeBleBeaconUid23(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 24"
                onFocus={() => setFocusMid28(".1rem solid #005EEC")}
                onBlur={() => setFocusMid28(".1rem solid #898A8D")}
                style={{ border: focusMid28 }}
                value={bleBeaconUid24}
                onchange={(e) => {
                  onChangeBleBeaconUid24(e)
                }}
              />
              <input type="text" placeholder="BLE Beacon UID 25"
                onFocus={() => setFocusMid29(".1rem solid #005EEC")}
                onBlur={() => setFocusMid29(".1rem solid #898A8D")}
                style={{ border: focusMid29 }}
                value={bleBeaconUid25}
                onchange={(e) => {
                  onChangeBleBeaconUid25(e)
                }}
              />

            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}
        {/* sub4-main-box-mid*/}

      </div>
      {/* main-box-mid*/}









      {/* main-box-right*/}
      <div className="subsub3-sub1-bluetooth-div3">
        {/* sub1-main-box-right*/}

        {/* sub1-main-box-right*/}
        {/* sub2-main-box-right*/}
        <div className="sub2-subsub3-sub1-bluetooth-div3">
          <div
            className="subsub1-sub2-subsub3-sub1-bluetooth-div3"

            style={{
              borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlRight2(right2State)}
            >Beacon settings</p>
            <div className="sub1-subsub1-sub2-subsub3-sub1-bluetooth-div3">
              <div className="subsub1-sub1-subsub1-sub2-subsub3-sub1-bluetooth-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendBeaconSetting}
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
              className="sub2-subsub1-sub2-subsub3-sub1-bluetooth-div3"
              style={{
                borderBottomLeftRadius: right2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: right2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub3-sub1-bluetooth-div3"
            style={{ display: right2 }}
          >
            <div className="sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3">

              <div className="subsub1-sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3"
                onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                style={{ border: focusRight1 }}
              >
                <div className="sub1-subsub1-sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3">
                  <label>Beacon Detection</label>
                  <p>{beaconDetection}</p>
                </div>
                <select value={""} onChange={(e) => {
                  onChangeBeaconDetection(e)
                  handleSelect4(e)
                }}>
                  <option selected></option>
                  <option>Disabled</option>
                  <option>ALL</option>
                  <option>Configured</option>
                </select>
              </div>

              <div></div>
              <div className="subsub4-sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3"
                onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                style={{ border: focusRight2 }}
              >
                <div className="sub1-subsub4-sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3">
                  <label>Beacon Records</label>
                  <p>{beaconRecords}</p>
                </div>
                <select value={""} onChange={(e) => {
                  onChangeBeaconRecords(e)
                  handleSelect5(e)
                }}>
                  <option selected></option>
                  <option>Event</option>
                  <option>Periodic</option>
                </select>
              </div>

              <div className="subsub2-sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3" style={{ width: "29.1rem", height: "3.3rem", border: focusRight3 }}
                onFocus={() => setFocusRight3(".1rem solid #005EEC")}
                onBlur={() => setFocusRight3(".1rem solid #898A8D")}
              >
                <label>Host</label>
                <input type="number" value={host} onChange={(e) => {
                  onChangeHost(e)
                }} />
              </div>

              <div className="subsub3-sub1-subsub2-sub2-subsub3-sub1-bluetooth-div3"
                onFocus={() => setFocusRight4(".1rem solid #005EEC")}
                onBlur={() => setFocusRight4(".1rem solid #898A8D")}
                style={{ border: focusRight4 }} >
                <label>Port</label>
                <input type="number" value={port} onChange={(e) => {
                  onChangePort(e)
                }} />
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

export default Bluetooth;
