import React, { useState } from "react";
import "./Configuration.css";
import Try from "../try/Try"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { commandSetting } from "../../../services/axios";
import { ConfirmDialog } from "../../../utils/globals";
const Configuration = () => {
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

  const [focusRight1, setFocusRight1] = useState("")
  const [focusRight2, setFocusRight2] = useState("")
  const [focusRight3, setFocusRight3] = useState("")

  const [allowSmsSendCheck, setAllowSmsSendCheck] = useState(false);
  const [predefined, setPredefind] = useState("");
  const [incomingCallAction, setIncomingCallAction] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [phone4, setPhone4] = useState("");
  const [phone5, setPhone5] = useState("");
  const [phone6, setPhone6] = useState("");
  const [phone7, setPhone7] = useState("");
  const [phone8, setPhone8] = useState("");
  const [phone9, setPhone9] = useState("");
  const [phone10, setPhone10] = useState("");
  const [hemisphere, setHemisphere] = useState("")
  const [timezone, setTimeZone] = useState("")
  const [recordsStoringOrder, setRecordStoringOrder] = useState("");
  const [recordsStoringOrderCheck, setRecordsStoringOrderCheck] = useState(false);
  const handleChangeAllowSmsSendCheck = () => {
    setAllowSmsSendCheck(!allowSmsSendCheck)
  }
  const handleChangePredefind = (e) => {
    setPredefind(e.target.value)
  }

  const handleChangeIncomingCallAction = (e) => {
    setIncomingCallAction(e.target.value)
  }

  const handleChangePhone1 = (e) => {
    setPhone1(e.target.value)
  }

  const handleChangePhone2 = (e) => {
    setPhone2(e.target.value)
  }

  const handleChangePhone3 = (e) => {
    setPhone3(e.target.value)
  }

  const handleChangePhone4 = (e) => {
    setPhone4(e.target.value)
  }

  const handleChangePhone5 = (e) => {
    setPhone5(e.target.value)
  }

  const handleChangePhone6 = (e) => {
    setPhone6(e.target.value)
  }

  const handleChangePhone7 = (e) => {
    setPhone7(e.target.value)
  }

  const handleChangePhone8 = (e) => {
    setPhone8(e.target.value)
  }

  const handleChangePhone9 = (e) => {
    setPhone9(e.target.value)
  }

  const handleChangePhone10 = (e) => {
    setPhone10(e.target.value)
  }

  const handleChangeHemisphere = (e) => {
    setHemisphere(e.target.value)
  }
  const handleChangeTimezone = (e) => {
    setTimeZone(e.target.value)
  }
  const handleChangeRecordStoringOrder = (e) => {
    setRecordStoringOrder(e.target.value)
  }
  const handleChangeRecordsStoringOrderCheck = () => {
    setRecordsStoringOrderCheck(!recordsStoringOrderCheck)
  }

  const sendSmsReportSendingParams = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.SmsReportSendingParams,
      params: {
        allow: allowSmsSendCheck ? "1" : "0",
        phoneNo: predefined
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Configuration.js:163 ~ sendSmsReportSendingParams ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendIncomingCallAction = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.IncomingCallAction,
      params: {
        action: incomingCallAction
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Configuration.js:178 ~ sendIncomingCallAction ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendPhoneNumbers = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.PhoneNumbers,
      params: {

      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: Configuration.js:193 ~ sendPhoneNumbers ~ sendCommandData:", sendCommandData)
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
  }

  const sendSmsEventTimezone = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.SmsEventTimeZone,
      params: {
        zone: timezone
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
    console.log("🚀 ~ file: InputOutput.js:452 ~ sendDigitalInput ~ res:", res)
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
    // setRecordsStoringOrder(e.target.value);
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
  return (
    <div className="sub1-configuration-div3" id="sec4">
      {/* main-box-left*/}
      <div className="subsub1-sub1-configuration-div3">
        {/* sub1-main-box-left*/}

        {/* sub2-main-box-left*/}
        {/* sub3-main-box-left*/}
        {/* <div className="sub3-subsub1-sub1-configuration-div3"> */}
        <div className="sub3-subsub1-sub1-configuration-div3">
          <div
            className="subsub1-sub3-subsub1-sub1-configuration-div3"

            style={{
              borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft3(left3State)}
            >SMS report sending parameters</p>
            <div className="sub1-subsub1-sub3-subsub1-sub1-configuration-div3">
              <div className="subsub1-sub1-subsub1-sub3-subsub1-sub1-configuration-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendSmsReportSendingParams}
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
              className="sub2-subsub1-sub3-subsub1-sub1-configuration-div3"
              style={{
                borderBottomLeftRadius: left3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub1-sub1-configuration-div3"
            style={{ display: left3 }}
          >
            <div className="sub1-subsub2-sub3-subsub1-sub1-configuration-div3">
              <div className="import2-sub1-subsub2-sub3-subsub1-sub1-configuration-div3">
                <label className="configuration-switch">
                  <input type="checkbox" checked={allowSmsSendCheck} onChange={handleChangeAllowSmsSendCheck} />
                  <span className="configuration-slider"></span>
                </label>
                <p>Allow SMS Data Sending</p>
              </div>
              <input type="text" placeholder="Predefined Phone Number"
                onFocus={() => setFocusLeft1(".1rem solid #005EEC")}
                onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                style={{ border: focusLeft1 }}
                value={predefined}
                onChange={handleChangePredefind}
              />
            </div>
          </div>
        </div>
        {/* sub3-main-box-left*/}
      </div>












      {/* main-box-mid*/}
      <div className="subsub2-sub1-configuration-div3">
        {/* sub2-main-box-mid*/}
        <div className="sub2-subsub2-sub1-configuration-div3">
          <div
            className="subsub1-sub2-subsub2-sub1-configuration-div3"

            style={{
              borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid2(mid2State)}
            >Incoming Call Action</p>
            <div className="sub1-subsub1-sub2-subsub2-sub1-configuration-div3">
              <span
                onClick={() => handlMid2(mid2State)}
              >
                Set up network ping with a certain timeout to prevent link close by the operator.
              </span>
              <div className="subsub1-sub1-subsub1-sub2-subsub2-sub1-configuration-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendIncomingCallAction}
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
              className="sub2-subsub1-sub2-subsub2-sub1-configuration-div3"
              style={{
                borderBottomLeftRadius: mid2State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid2State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub2-subsub2-sub1-configuration-div3"
            style={{ display: mid2 }}
          >
            <div className="sub1-subsub2-sub2-subsub2-sub1-configuration-div3">
              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
              >
                <div className="subsub1-sub1-subsub2-sub2-subsub2-sub1-configuration-div3"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}   >
                  <label style={{ marginLeft: ".4rem" }}>Action</label>
                  <input type="text"
                    value={incomingCallAction}
                    onChange={handleChangeIncomingCallAction}
                  // value="Do Nothing"
                  />
                  {/* <p>Seconds</p> */}
                </div>
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* sub2-main-box-mid*/}

        {/* sub3-main-box-mid*/}
        <div className="sub3-subsub2-sub1-configuration-div3">
          <div
            className="subsub1-sub3-subsub2-sub1-configuration-div3"

            style={{
              borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
              borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlMid3(mid3State)}
            >Phone Numbers</p>
            <div className="sub1-subsub1-sub3-subsub2-sub1-configuration-div3">
              <span
                onClick={() => handlMid3(mid3State)}
              >
                Predefined GSM phone numbers
              </span>
              <div className="subsub1-sub1-subsub1-sub3-subsub2-sub1-configuration-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendPhoneNumbers}
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
              className="sub2-subsub1-sub3-subsub2-sub1-configuration-div3"
              style={{
                borderBottomLeftRadius: mid3State == false ? "1rem" : "0rem",
                borderBottomRightRadius: mid3State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub3-subsub2-sub1-configuration-div3"
            style={{ display: mid3 }}
          >
            <div className="sub1-subsub2-sub3-subsub2-sub1-configuration-div3">
              <input type="number" placeholder="Phone Number 1"
                onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                style={{ border: focusMid2 }}
                value={phone1}
                onChange={handleChangePhone1}
              />
              <input type="number" placeholder="Phone Number 2"
                onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                style={{ border: focusMid3 }}
                value={phone2}
                onChange={handleChangePhone2}
              />
              <input type="number" placeholder="Phone Number 3"
                onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                style={{ border: focusMid4 }}
                value={phone3}
                onChange={handleChangePhone3}
              />
              <input type="number" placeholder="Phone Number 4"
                onFocus={() => setFocusMid5(".1rem solid #005EEC")}
                onBlur={() => setFocusMid5(".1rem solid #898A8D")}
                style={{ border: focusMid5 }}
                value={phone4}
                onChange={handleChangePhone4}
              />
              <input type="number" placeholder="Phone Number 5"
                onFocus={() => setFocusMid6(".1rem solid #005EEC")}
                onBlur={() => setFocusMid6(".1rem solid #898A8D")}
                style={{ border: focusMid6 }}
                value={phone5}
                onChange={handleChangePhone5}
              />
              <input type="number" placeholder="Phone Number 6"
                onFocus={() => setFocusMid7(".1rem solid #005EEC")}
                onBlur={() => setFocusMid7(".1rem solid #898A8D")}
                style={{ border: focusMid7 }}
                value={phone6}
                onChange={handleChangePhone6}
              />
              <input type="number" placeholder="Phone Number 7"
                onFocus={() => setFocusMid8(".1rem solid #005EEC")}
                onBlur={() => setFocusMid8(".1rem solid #898A8D")}
                style={{ border: focusMid8 }}
                value={phone7}
                onChange={handleChangePhone7}
              />
              <input type="number" placeholder="Phone Number 8"
                onFocus={() => setFocusMid9(".1rem solid #005EEC")}
                onBlur={() => setFocusMid9(".1rem solid #898A8D")}
                style={{ border: focusMid9 }}
                value={phone8}
                onChange={handleChangePhone8}
              />
              <input type="number" placeholder="Phone Number 9"
                onFocus={() => setFocusMid10(".1rem solid #005EEC")}
                onBlur={() => setFocusMid10(".1rem solid #898A8D")}
                style={{ border: focusMid10 }}
                value={phone9}
                onChange={handleChangePhone9}
              />
              <input type="number" placeholder="Phone Number 10"
                onFocus={() => setFocusMid11(".1rem solid #005EEC")}
                onBlur={() => setFocusMid11(".1rem solid #898A8D")}
                style={{ border: focusMid11 }}
                value={phone10}
                onChange={handleChangePhone10}
              />

            </div>
          </div>
        </div>
        {/* sub3-main-box-mid*/}

      </div>
      {/* main-box-mid*/}










      {/* main-box-right*/}
      <div className="subsub3-sub1-configuration-div3">
        {/* sub1-main-box-right*/}

        <div className="sub1-subsub1-sub1-configuration-div3">
          <div
            className="subsub1-sub1-subsub1-sub1-configuration-div3"

            style={{
              borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
              borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
            }}
          >
            <p
              onClick={() => handlLeft1(left1State)}
            >SMS event Time Zone</p>
            <div className="sub1-subsub1-sub1-subsub1-sub1-configuration-div3">
              {/* <span>
                PUBGObject motion detection is to be configured to determine device
                working mode. Other functionalities that depend on movement
                source are: power manager, fuel consumption and trip.
              </span> */}
              <div className="subsub1-sub1-subsub1-sub1-subsub1-sub1-configuration-div3">
                <div className="icon-hover">
                  <img src="./assets/refresh.svg" alt="none"
                    style={{ marginLeft: ".1rem" }}
                  />
                </div>
                <div className="icon-hover">
                  <img
                    src="./assets/S.svg"
                    alt="none"
                    onClick={sendSmsEventTimezone}
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
              className="sub2-subsub1-sub1-subsub1-sub1-configuration-div3"
              style={{
                borderBottomLeftRadius: left1State == false ? "1rem" : "0rem",
                borderBottomRightRadius: left1State == false ? "1rem" : "0rem",
              }}
            >
              <span>05-06-2023 12:30PM</span>
            </div>
          </div>
          <div
            className="subsub2-sub1-subsub1-sub1-configuration-div3"
            style={{ display: left1 }}
          >
            <div className="sub1-subsub2-sub1-subsub1-sub1-configuration-div3">
              <div
                style={{
                  display: "flex",
                  width: "36.6rem",
                  marginLeft: "7rem",
                  justifyContent: "space-between",
                }}
              >
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-configuration-div3"
                  onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                  style={{ border: focusRight1 }}
                >
                  <label>Hemisphere</label>
                  <input type="text" value={hemisphere} onChange={handleChangeHemisphere} />
                  {/* <p>Seconds</p> */}
                </div>
                <Try text={"Hemisphere: eastern or western"} />
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
                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-configuration-div3"
                  onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                  style={{ border: focusRight2 }}>
                  <label>Time Zone</label>
                  <input type="number" value={timezone} onChange={handleChangeTimezone} />
                  <p>Hours</p>
                </div>
                <Try text={"Time zone offset from 0 to 12"} />
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
                <div style={{ display: "flex" }}>
                  <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3"
                    onFocus={() => setFocusRight3(".1rem solid #005EEC")}
                    onBlur={() => setFocusRight3(".1rem solid #898A8D")}
                    style={{ border: focusRight3, position: "relative", width: "25.5rem" }}
                  >
                    <div className="sub1-subsub3-sub1-subsub2-sub1-subsub1-sub1-connectivity-div3">
                      <label>Records Storing Order</label>
                      {/* <p>
                        {recordsStoringOrder}
                      </p> */}
                    </div>
                    <select value={recordsStoringOrder} onChange={handleChangeRecordStoringOrder}>
                      <option selected></option>
                      <option>0</option>
                      <option>15</option>
                      <option>30</option>
                      <option>45</option>
                    </select>
                    <span>Minutes</span>
                  </div>
                  {/* <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-configuration-div3"
                onFocus={()=>setFocusRight3(".1rem solid #005EEC")}
                onBlur={()=>setFocusRight3(".1rem solid #898A8D")}
              style={{border:focusRight3}}>
                  <label>Half Time Zone</label>
                  <input type="number" />
                  <p>Minutes</p>
                </div> */}
                  <input type="checkbox" checked={recordsStoringOrderCheck} onChange={handleChangeRecordsStoringOrderCheck} />
                </div>
                <Try text={"Additional time zone offset"} />
                {/* <img src="./assets/blueQuestion.svg" alt="none" /> */}
              </div>


            </div>
          </div>
        </div>

        {/* sub1-main-box-right*/}

      </div>
      {/* main-box-right*/}
    </div>
  );
};

export default Configuration;
