import React, { useState } from "react";
import Try from "../try/Try"
import { Alert } from "bootstrap";
import { ConfirmDialog, formatDate, formatTime } from "../../../utils/globals";
import { ConfirmHeader } from "../../../utils/ConfirmHeader";
import { useDispatch, useSelector } from "react-redux";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { cmdType } from "../../../common/common";
import { getResFromDev } from "../../../services/axios";
import { commandSetting } from "../../../services/axios";
import { Button, Confirm } from 'semantic-ui-react'

import "./InputOutput.css";

const InputOutput = () => {
  const token = useSelector((state) => state.auth.token);

  const [open, setOpen] = useState([]);

  const [digitalInput, setDigitalInput] = useState("");

  const [priority1, setPriority1] = useState("");
  const [priority2, setPriority2] = useState("");
  const [priority3, setPriority3] = useState("");
  const [priority4, setPriority4] = useState("");
  const [priority5, setPriority5] = useState("");
  const [priority6, setPriority6] = useState("");
  const [priority7, setPriority7] = useState("");
  const [priority8, setPriority8] = useState("");
  const [priority9, setPriority9] = useState("");
  const [priority10, setPriority10] = useState("");
  const [priority11, setPriority11] = useState("");
  const [priority12, setPriority12] = useState("");
  const [priority13, setPriority13] = useState("");
  const [priority14, setPriority14] = useState("");
  const [priority15, setPriority15] = useState("");
  const [priority16, setPriority16] = useState("");

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operand3, setOperand3] = useState("");
  const [operand4, setOperand4] = useState("");
  const [operand5, setOperand5] = useState("");
  const [operand6, setOperand6] = useState("");
  const [operand7, setOperand7] = useState("");
  const [operand8, setOperand8] = useState("");
  const [operand9, setOperand9] = useState("");
  const [operand10, setOperand10] = useState("");
  const [operand11, setOperand11] = useState("");
  const [operand12, setOperand12] = useState("");
  const [operand13, setOperand13] = useState("");
  const [operand14, setOperand14] = useState("");
  const [operand15, setOperand15] = useState("");
  const [operand16, setOperand16] = useState("");

  const [analogueInput1, setAnalogueInput1] = useState("");
  const [analogueInput, setAnalogueInput] = useState("");

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
  const [checkBox19, setCheckBox19] = useState(false)
  const [checkBox20, setCheckBox20] = useState(false)
  const [checkBox21, setCheckBox21] = useState(false)
  const [outputDate, setOutputDate] = useState("")
  const [inputDate, setInputDate] = useState("")
  const [axisXDate, setAxisXDate] = useState("")
  const [axisYDate, setAxisYDate] = useState("")
  const [axisZDate, setAxisZDate] = useState("")
  const [batteryLevelDate, setBatteryLevelDate] = useState("")
  const [batteryVoltageDate, setBatteryVoltageDate] = useState("")
  const [externalVoltageDate, setExternalVoltageDate] = useState("")
  const [analogueInputDate, setAnalogueInputDate] = useState("")


  // /////////////////////////////////////////////
  useState("Digital Input");
  const [accelerometerCalibrationAndGravityFilter, setAccelerometerCalibrationAndGravityFilter] = useState("Continuous");
  const [dataCodecToUseForDataTransmission, setDataCodecToUseForDataTransmission] = useState("Codec 8");
  const [batteryChargeMode, setBatteryChargeMode] = useState("Always");

  const handleOpen = (index) => {
    var temp = open;
    if (temp.includes(index)) {
      temp = temp.filter(item => item !== index);
    } else {
      temp.push(index);
    }
    setOpen([...temp]);
  }

  const handleSelect = (e) => {
    setDin(e.target.value);
  };

  const handleSelect1 = (e) => {
    setPriority1(e.target.value)
    setPriority(e.target.selectedIndex - 1)
  };

  const handleSelect2 = (e) => {
    setOperand1(e.target.value)
    setOperand(e.target.selectedIndex - 1)
  };

  const handleSelect15 = (e) => {
    setAnalogueInput("pin" + e.target.selectedIndex.toString())
  }

  const handleSelect18 = (e) => {
    setPriority2(e.target.value)
    setPriority10(e.target.selectedIndex - 1);
  };

  const handleSelect19 = (e) => {
    setOperand2(e.target.value)
    setOperand10(e.target.selectedIndex - 1);
  };

  const handleSelect20 = (e) => {
    setPriority3(e.target.value);
    setPriority11(e.target.selectedIndex - 1);
  };

  const handleSelect21 = (e) => {
    setPriority4(e.target.value);
    setPriority12(e.target.selectedIndex - 1);
  };

  const handleSelect22 = (e) => {
    setPriority5(e.target.value);
    setPriority13(e.target.selectedIndex - 1);
  };

  const handleSelect23 = (e) => {
    setPriority6(e.target.value);
    setPriority14(e.target.selectedIndex - 1);
  };

  const handleSelect24 = (e) => {
    setPriority7(e.target.value);
    setPriority15(e.target.selectedIndex - 1);
  };

  const handleSelect25 = (e) => {
    setPriority8(e.target.value);
    setPriority16(e.target.selectedIndex - 1);
  };

  const handleSelect26 = (e) => {
    setOperand3(e.target.value);
    setOperand11(e.target.selectedIndex - 1);
  };

  const handleSelect27 = (e) => {
    setOperand4(e.target.value);
    setOperand12(e.target.selectedIndex - 1);
  };

  const handleSelect28 = (e) => {
    setOperand5(e.target.value);
    setOperand13(e.target.selectedIndex - 1);
  };

  const handleSelect29 = (e) => {
    setOperand6(e.target.value);
    setOperand14(e.target.selectedIndex - 1);
  };

  const handleSelect30 = (e) => {
    setOperand7(e.target.value);
    setOperand15(e.target.selectedIndex - 1);
  };

  const handleSelect31 = (e) => {
    setOperand8(e.target.value);
    setOperand16(e.target.selectedIndex - 1);
  };

  const [ignore1, setIgnore1] = useState("")
  const [ignore2, setIgnore2] = useState("")
  const [ignore3, setIgnore3] = useState("")

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);
  const [checkBox5, setCheckBox5] = useState(false);
  const [checkBox6, setCheckBox6] = useState(false);
  const [checkBox7, setCheckBox7] = useState(false);
  const [checkBox8, setCheckBox8] = useState(false);
  const [checkBox9, setCheckBox9] = useState(false);
  const [checkBox10, setCheckBox10] = useState(false);
  const [checkBox11, setCheckBox11] = useState(false);
  const [checkBox12, setCheckBox12] = useState(false);
  const [checkBox13, setCheckBox13] = useState(false);
  //eventonly
  const [checkBox14, setCheckBox14] = useState(false);
  const [checkBox15, setCheckBox15] = useState(false);
  const [checkBox16, setCheckBox16] = useState(false);
  const [checkBox17, setCheckBox17] = useState(false);
  const [checkBox18, setCheckBox18] = useState(false);

  const [din, setDin] = useState("");
  const [priority, setPriority] = useState("");
  const [operand, setOperand] = useState("");
  const [highLevel, setHighLevel] = useState(0);
  const [highLevel1, setHighLevel1] = useState(0);
  const [highLevel2, setHighLevel2] = useState(0);
  const [highLevel3, setHighLevel3] = useState(0);
  const [highLevel4, setHighLevel4] = useState(0);
  const [highLevel5, setHighLevel5] = useState(0);
  const [highLevel6, setHighLevel6] = useState(0);
  const [highLevel7, setHighLevel7] = useState(0);

  const [average, setAverage] = useState(0);
  const [average1, setAverage1] = useState(0);
  const [average2, setAverage2] = useState(0);
  const [average3, setAverage3] = useState(0);
  const [average4, setAverage4] = useState(0);
  const [average5, setAverage5] = useState(0);
  const [average6, setAverage6] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");
  const [phoneNumber4, setPhoneNumber4] = useState("");
  const [phoneNumber5, setPhoneNumber5] = useState("");
  const [phoneNumber6, setPhoneNumber6] = useState("");
  const [phoneNumber7, setPhoneNumber7] = useState("");
  const [smsText, setSmsText] = useState("");
  const [smsText1, setSmsText1] = useState("");
  const [smsText2, setSmsText2] = useState("");
  const [smsText3, setSmsText3] = useState("");
  const [smsText4, setSmsText4] = useState("");
  const [smsText5, setSmsText5] = useState("");
  const [smsText6, setSmsText6] = useState("");
  const [smsText7, setSmsText7] = useState("");

  const [axisXEventOnly, setAxisXEventOnly] = useState(0)
  const [axisYEventOnly, setAxisYEventOnly] = useState(0)
  const [axisZEventOnly, setAxisZEventOnly] = useState(0)

  const handleSelectPhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleSelectPhoneNumber1 = (e) => {
    setPhoneNumber1(e.target.value)
  }

  const handleSelectPhoneNumber2 = (e) => {
    setPhoneNumber2(e.target.value)
  }

  const handleSelectPhoneNumber3 = (e) => {
    setPhoneNumber3(e.target.value)
  }

  const handleSelectPhoneNumber4 = (e) => {
    setPhoneNumber4(e.target.value)
  }

  const handleSelectPhoneNumber5 = (e) => {
    setPhoneNumber5(e.target.value)
  }

  const handleSelectPhoneNumber6 = (e) => {
    setPhoneNumber6(e.target.value)
  }

  const handleSelectPhoneNumber7 = (e) => {
    setPhoneNumber7(e.target.value)
  }

  const getData = useLocation();
  const data = {
    deviceImei: getData?.state?.deviceImei,
  }

  const sendDigitalOutput = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.DigitalOutput,
      params: {
        out1: (ignore1 === "" && "?") || (ignore1 !== "" && checkBox1 ? "1" : "0"),
        out2: (ignore2 === "" && "?") || (ignore2 !== "" && checkBox2 ? "1" : "0"),
        out3: (ignore3 === "" && "?") || (ignore3 !== "" && checkBox3 ? "1" : "0"),
        ignore1: (ignore1 === "" && "?") || (ignore1 !== "" && ignore1),
        ignore2: (ignore2 === "" && "?") || (ignore2 !== "" && ignore2),
        ignore3: (ignore3 === "" && "?") || (ignore3 !== "" && ignore3),
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);

  }

  const sendDigitalInput = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.DigitalInput,
      params: {
        din: din.toLowerCase(),
        priority: priority,
        operand: operand,
        highLevel: highLevel ? "1" : "0",
        lowLevel: "0",
        eventOnly: checkBox4 ? "1" : "0",
        average: average.toString(),
        sendSms: checkBox5 ? "1" : "0",
        phoneNo: checkBox5 ? phoneNumber : "0",
        sms: checkBox5 ? smsText : ""

      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
  }

  const sendDigitalAxisX = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AxisX,
      params: {
        priority: priority10,
        operand: operand10,
        highLevel: highLevel ? "1" : "0",
        lowLevel: "0",
        eventOnly: axisXEventOnly,
        average: average1.toString(),
        sendSms: checkBox7 ? "1" : "0",
        phoneNo: checkBox7 ? phoneNumber1 : "0",
        sms: checkBox7 ? smsText1 : ""
      },
      devImei: data?.deviceImei
    }

    var res = await commandSetting(sendCommandData);

  }

  const sendDigitalAxisY = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AxisY,
      params: {
        priority: priority13,
        operand: operand13,
        highLevel: highLevel4 ? "1" : "0",
        lowLevel: "0",
        eventOnly: axisYEventOnly,
        average: average3.toString(),
        sendSms: checkBox10 ? "1" : "0",
        phoneNo: checkBox10 ? phoneNumber4 : "0",
        sms: checkBox10 ? smsText4 : ""
      },
      devImei: data?.deviceImei
    }

    var res = await commandSetting(sendCommandData);

  }

  const sendDigitalAxisZ = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AxisZ,
      params: {
        priority: priority16,
        operand: operand16,
        highLevel: highLevel7 ? "1" : "0",
        lowLevel: "0",
        eventOnly: axisZEventOnly,
        average: average6.toString(),
        sendSms: checkBox13 ? "1" : "0",
        phoneNo: checkBox13 ? phoneNumber7 : "0",
        sms: checkBox13 ? smsText7 : ""
      },
      devImei: data?.deviceImei
    }

    var res = await commandSetting(sendCommandData);

  }

  const sendBatteryLevel = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.BatteryLevel,
      params: {
        priority: priority11,
        operand: operand11,
        highLevel: highLevel2 ? "1" : "0",
        lowLevel: "0",
        eventOnly: checkBox15 ? "1" : "0",
        sendSms: checkBox8 ? "1" : "0",
        phoneNo: checkBox8 ? phoneNumber2 : "0",
        sms: checkBox8 ? smsText2 : ""
      },
      devImei: data?.deviceImei
    }

    var res = await commandSetting(sendCommandData);

  }

  const sendBatteryVoltage = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.BatteryVoltage,
      params: {
        priority: priority12,
        operand: operand12,
        highLevel: highLevel3 ? "1" : "0",
        lowLevel: "0",
        eventOnly: checkBox16 ? "1" : "0",
        average: average2.toString(),
        sendSms: checkBox9 ? "1" : "0",
        phoneNo: checkBox9 ? phoneNumber3 : "0",
        sms: checkBox9 ? smsText3 : ""
      },
      devImei: data?.deviceImei
    }

    var res = await commandSetting(sendCommandData);

  }

  const sendExternalVoltage = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.ExternalVoltage,
      params: {
        priority: priority14,
        operand: operand14,
        highLevel: highLevel5 ? "1" : "0",
        lowLevel: "0",
        eventOnly: checkBox17 ? "1" : "0",
        average: average4.toString(),
        sendSms: checkBox11 ? "1" : "0",
        phoneNo: checkBox11 ? phoneNumber5 : "0",
        sms: checkBox11 ? smsText5 : ""
      },
      devImei: data?.deviceImei
    }

    var res = await commandSetting(sendCommandData);

  }

  const sendAnalogInput = async () => {
    if (!ConfirmDialog('Do you really want to send setting to selected devices?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AnalogueInput,
      params: {
        pin: analogueInput,
        priority: priority15,
        operand: operand15,
        highLevel: setHighLevel6 ? "1" : "0",
        lowLevel: "0",
        eventOnly: checkBox18 ? "1" : "0",
        average: average5.toString(),
        sendSms: checkBox12 ? "1" : "0",
        phoneNo: checkBox12 ? phoneNumber6 : "0",
        sms: checkBox12 ? smsText6 : ""
      },
      devImei: data?.deviceImei
    }
    var res = await commandSetting(sendCommandData);
  }

  const handleAverage = (e) => {
    if (e.target.value > 65535) {
      setAverage(65535)
      return;
    }
    setAverage(e.target.value)
  }
  const handleAverage1 = (e) => {
    if (e.target.value > 65535) {
      setAverage1(65535)
      return;
    }
    setAverage1(e.target.value)
  }
  const handleAverage2 = (e) => {
    if (e.target.value > 65535) {
      setAverage2(65535)
      return;
    }
    setAverage2(e.target.value)
  }
  const handleAverage3 = (e) => {
    if (e.target.value > 65535) {
      setAverage3(65535)
      return;
    }
    setAverage3(e.target.value)
  }
  const handleAverage4 = (e) => {
    if (e.target.value > 65535) {
      setAverage4(65535)
      return;
    }
    setAverage4(e.target.value)
  }
  const handleAverage5 = (e) => {
    if (e.target.value > 65535) {
      setAverage5(65535)
      return;
    }
    setAverage5(e.target.value)
  }

  const handleAverage6 = (e) => {
    if (e.target.value > 65535) {
      setAverage6(65535)
      return;
    }
    setAverage6(e.target.value)
  }

  const refreshOutput = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.DigitalOutput,
      deviceImei: data?.deviceImei
    }
    var res = await getResFromDev(sendCommandData);
    if (res !== undefined) {
      const currDate = new Date().toLocaleDateString();
      const currTime = new Date().toLocaleTimeString();
      console.log(currDate)
      console.log(currTime)
      let updateDateTime = formatDate(currDate) + ' ' + formatTime(currTime);
      setOutputDate(updateDateTime);
      setCheckBox1(res.data.result.dout1 === 1 ? true : false)
      setCheckBox2(res.data.result.dout2 === 1 ? true : false)
      setCheckBox3(res.data.result.dout3 === 1 ? true : false)
    }
    else {
      alert("Error Network")
    }
  }

  const refreshInput = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.DigitalInput,
      deviceImei: data?.deviceImei,
      din: din.toLowerCase(),
    }
    var res = await getResFromDev(sendCommandData);
    setCheckBox19(res.data.result.result === 1 ? true : false)
    let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
    setInputDate(updateDateTime);

  }

  const refreshAxisX = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AxisX,
      deviceImei: data?.deviceImei,
    }
    var res = await getResFromDev(sendCommandData);
    let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
    setAxisXDate(updateDateTime);
    setCheckBox6(res.data.result.result === 1 || res.data.result.result === "1" ? true : false)

  }

  const refreshAxisY = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AxisY,
      deviceImei: data?.deviceImei,
    }

    var res = await getResFromDev(sendCommandData);

    let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
    setAxisYDate(updateDateTime);
    setCheckBox20(res.data.result.result === 1 || res.data.result.result === "1" ? true : false)
  }

  const refreshAxisZ = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AxisZ,
      deviceImei: data?.deviceImei,
    }
    var res = await getResFromDev(sendCommandData);
    if (res && res.data) {
      let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
      setAxisZDate(updateDateTime);
      setCheckBox21(res.data.result.result === 1 || res.data.result.result === "1" ? true : false)
    }

  }

  const refreshAnalogInput = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.AnalogueInput,
      deviceImei: data?.deviceImei,
      pin: analogueInput,
    }

    var res = await getResFromDev(sendCommandData);
    if (res && res.data && res.data.result.updatedAt) {
      let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
      setAnalogueInputDate(updateDateTime);
      setAverage5(res.data.result.result)
    }

  }

  const refreshBatteryLevel = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.BatteryLevel,
      deviceImei: data?.deviceImei,
    }
    var res = await getResFromDev(sendCommandData);
    let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
    setBatteryLevelDate(updateDateTime);

  }

  const refreshBatteryVoltage = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.BatteryVoltage,
      deviceImei: data?.deviceImei,
    }
    var res = await getResFromDev(sendCommandData);
    let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
    setBatteryVoltageDate(updateDateTime);
    setAverage2(res.data.result.result)

  }

  const refreshExternalVoltage = async (e) => {
    if (!ConfirmDialog('Do you want to request the setting from device?')) {
      return;
    };
    const sendCommandData =
    {
      token: token,
      type: cmdType.ExternalVoltage,
      deviceImei: data?.deviceImei,
    }
    var res = await getResFromDev(sendCommandData);
    let updateDateTime = formatDate(res.data.result.updatedAt) + ' ' + formatTime(res.data.result.updatedAt);
    setExternalVoltageDate(updateDateTime);
    setAverage4(res.data.result.result)

  }

  return (
    <div className="sub1-input-output-div3 d-flex justify-content-evenly align-items-start overflow-auto p-4" id="sec1">
      <div className="col-md-4">
        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(1) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(1) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(1)}>
                <p className="my-1">Digital Outputs</p>
                <p className="my-1" style={{fontWeight: "400"}}>Change state of digital outputs</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshOutput}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendDigitalOutput}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(1)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(1) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(1) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{"outputDate"}</p>
            </div>
          </div>
          {open.includes(1) && (
            <div className="subsub2-sub1-subsub1-sub1-input-output-div3">
              <div className="sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                <div className="subsub1-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" checked={checkBox1} onChange={() => setCheckBox1(!checkBox1)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Output-1</p>
                  <div className="sub1-subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                    <input type="number" placeholder="Ignore" onChange={(e) => setIgnore1(e.target.value)} />
                    <p style={{ display: ignore1.length > 0 ? "block" : "none" }}>SEC</p>
                  </div>
                </div>

                <div className="subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" checked={checkBox2} onChange={() => setCheckBox2(!checkBox2)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Output-2</p>
                  <div className="sub1-subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3" >
                    <input type="number" placeholder="Ignore" onChange={(e) => setIgnore2(e.target.value)} />
                    <p style={{ display: ignore2.length > 0 ? "block" : "none" }}>SEC</p>
                  </div>
                </div>

                <div className="subsub3-sub1-subsub2-sub1-subsub1-sub1-input-output-div3">
                  <label className="input-output-switch">
                    <input type="checkbox" checked={checkBox3} onChange={() => setCheckBox3(!checkBox3)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p>Output-3</p>
                  <div className="sub1-subsub2-sub1-subsub2-sub1-subsub1-sub1-input-output-div3" >
                    <input type="number" placeholder="Ignore" onChange={(e) => setIgnore3(e.target.value)} />
                    <p style={{ display: ignore3.length > 0 ? "block" : "none" }}>SEC</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(2) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(2) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(2)}>
                <p className="my-1">Digital Input</p>
                <p className="my-1" style={{fontWeight: "400"}}>Digital input I/O parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshInput}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendDigitalInput}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(2)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(1) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(1) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{inputDate}</p>
            </div>
          </div>
          {open.includes(2) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="input-element d-flex flex-column justify-content-between position-relative mt-3 align-items-center"
                onFocus={() => setFocusLeft1(".1rem solid #FF0000")}
                onBlur={() => setFocusLeft1(".1rem solid #898A8D")}
                style={{ border: focusLeft1 }}
              >
                <div className="label position-absolute">
                  <label>Digital Input Pin</label>
                  <p>{din}</p>
                </div>
                <select className="element w-100 border-0" value={""} onChange={(e) => setDin(e.target.value)}>
                  <option selected></option>
                  <option>DIN1</option>
                  <option>DIN2</option>
                  <option>DIN3</option>
                  <option></option>
                </select>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0">OFF</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox19} onChange={(e) => setCheckBox19(!checkBox19)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft2(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft2(".1rem solid #898A8D")}
                  style={{ border: focusLeft2 }}>
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority1}</p>
                  </div>
                  <select className="element w-100 border-0" value="" onChange={(e) => handleSelect1(e)}>
                    <option selected></option>
                    <option >Disabled</option>
                    <option >Low</option>
                    <option >High</option>
                    <option >Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of digital input I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft3(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft3(".1rem solid #898A8D")}
                  style={{ border: focusLeft3 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand1}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect2(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of digital input I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft4(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft4(".1rem solid #898A8D")}
                  style={{ border: focusLeft4 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel} onChange={(e) => { if (e.target.value >= 1) setHighLevel(1); else setHighLevel(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of digital input value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft5(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft5(".1rem solid #898A8D")}
                  style={{ border: focusLeft5 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of digital input value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox14} onChange={() => setCheckBox14(!checkBox14)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">Event Only</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send digital input I/O element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft6(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft6(".1rem solid #898A8D")}
                  style={{ border: focusLeft6 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average} onChange={(e) => setAverage(e.target.value)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Digital Input 1 sample length to average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox5} onChange={() => setCheckBox5(!checkBox5)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of digital input event"} />
                </div>
              </div>

              {checkBox5 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText} onChange={(e) => setSmsText(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(3) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(3) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(3)}>
                <p className="my-1">Axis X</p>
                <p className="my-1" style={{fontWeight: "400"}}>Axis X parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshAxisX}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendDigitalAxisX}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(3)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(3) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(3) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{axisXDate}</p>
            </div>
          </div>
          {open.includes(3) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0">OFF</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox6} onChange={() => setCheckBox6(!checkBox6)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft7(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft7(".1rem solid #898A8D")}
                  style={{ border: focusLeft7 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority2}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect18(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of Axis X element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft8(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft8(".1rem solid #898A8D")}
                  style={{ border: focusLeft8 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand2}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect19(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of Axis X element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft9(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft9(".1rem solid #898A8D")}
                  style={{ border: focusLeft9 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel1} onChange={(e) => { if (e.target.value >= 1) setHighLevel1(1); else setHighLevel1(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of Axis X value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft10(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft10(".1rem solid #898A8D")}
                  style={{ border: focusLeft10 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of Axis X value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft11(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft11(".1rem solid #898A8D")}
                  style={{ border: focusLeft11 }}
                >
                  <div className="label position-absolute">
                    <label>Event Only</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={axisXEventOnly} onChange={(e) => { if (e.target.value >= 1) setAxisXEventOnly(1); else setHighLevel(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send Axis X element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusLeft12(".1rem solid #005EEC")}
                  onBlur={() => setFocusLeft12(".1rem solid #898A8D")}
                  style={{ border: focusLeft12 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average1} onChange={(e) => handleAverage1(e)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Axis X average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox7} onChange={() => setCheckBox7(!checkBox7)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of Axis X event"} />
                </div>
              </div>
              {checkBox7 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber1}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber1(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>

                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText1} onChange={(e) => setSmsText1(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="col-md-4">
        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(4) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(4) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(4)}>
                <p className="my-1">Battery Level</p>
                <p className="my-1" style={{fontWeight: "400"}}>Battery level I/O parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshBatteryLevel}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendBatteryLevel}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(4)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(4) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(4) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{batteryLevelDate}</p>
            </div>
          </div>
          {open.includes(4) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid1(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid1(".1rem solid #898A8D")}
                  style={{ border: focusMid1 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority3}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect20(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of Battery level I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid2(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid2(".1rem solid #898A8D")}
                  style={{ border: focusMid2 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand3}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect26(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of Battery level I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid3(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid3(".1rem solid #898A8D")}
                  style={{ border: focusMid3 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input type="number" className="element w-100 border-0" min={0} max={1} value={axisXEventOnly} onChange={(e) => { if (e.target.value >= 1) setAxisXEventOnly(1); else setAxisXEventOnly(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of Battery level value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid4(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid4(".1rem solid #898A8D")}
                  style={{ border: focusMid4 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of Battery level value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox15} onChange={() => setCheckBox15(!checkBox15)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">Event Only</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send Battery level I/O element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox8} onChange={() => setCheckBox8(!checkBox8)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of Battery level event"} />
                </div>
              </div>

              {checkBox8 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber2}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber2(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText2} onChange={(e) => setSmsText2(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(5) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(5) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(5)}>
                <p className="my-1">Battery Voltage</p>
                <p className="my-1" style={{fontWeight: "400"}}>Battery voltage I/O parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshBatteryVoltage}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendBatteryVoltage}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(5)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(5) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(5) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{batteryVoltageDate}</p>
            </div>
          </div>
          {open.includes(5) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusMid5(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid5(".1rem solid #898A8D")}
                  style={{ border: focusMid5 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority4}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect21(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of Battery voltage I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid6(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid6(".1rem solid #898A8D")}
                  style={{ border: focusMid6 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand4}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect27(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of Battery voltage I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid7(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid7(".1rem solid #898A8D")}
                  style={{ border: focusMid7 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel3} onChange={(e) => { if (e.target.value >= 1) setHighLevel3(1); else setHighLevel3(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of Battery voltage value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid8(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid8(".1rem solid #898A8D")}
                  style={{ border: focusMid8 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of Battery voltage value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox16} onChange={() => setCheckBox16(!checkBox16)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">Event Only</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send Battery voltage I/O element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid9(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid9(".1rem solid #898A8D")}
                  style={{ border: focusMid9 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average2} onChange={(e) => handleAverage2(e)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Battery voltage sample length to average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox9} onChange={() => setCheckBox9(!checkBox9)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of Battery voltage event"} />
                </div>
              </div>

              {checkBox9 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber3}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber3(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText3} onChange={(e) => setSmsText3(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(6) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(6) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(6)}>
                <p className="my-1">Axis Y</p>
                <p className="my-1" style={{fontWeight: "400"}}>Axis Y parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshAxisY}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendDigitalAxisY}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(6)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(6) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(6) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{batteryVoltageDate}</p>
            </div>
          </div>
          {open.includes(6) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0">OFF</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox20} onChange={() => setCheckBox20(!checkBox20)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid10(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid10(".1rem solid #898A8D")}
                  style={{ border: focusMid10 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority5}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect22(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of Axis X element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid11(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid11(".1rem solid #898A8D")}
                  style={{ border: focusMid11 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand5}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect20(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of Axis X element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid12(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid12(".1rem solid #898A8D")}
                  style={{ border: focusMid12 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel4} onChange={(e) => { if (e.target.value >= 1) setHighLevel4(1); else setHighLevel4(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of Axis X value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid13(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid13(".1rem solid #898A8D")}
                  style={{ border: focusMid13 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of Axis X value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid14(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid14(".1rem solid #898A8D")}
                  style={{ border: focusMid14 }}
                >
                  <div className="label position-absolute">
                    <label>Event Only</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={axisYEventOnly} onChange={(e) => { if (e.target.value >= 1) setAxisYEventOnly(1); else setAxisYEventOnly(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send Axis X element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusMid15(".1rem solid #005EEC")}
                  onBlur={() => setFocusMid15(".1rem solid #898A8D")}
                  style={{ border: focusMid15 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average3} onChange={(e) => handleAverage3(e)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Axis X average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox10} onChange={() => setCheckBox10(!checkBox10)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of Axis X event"} />
                </div>
              </div>
              {checkBox10 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusMid13(".1rem solid #005EEC")}
                      onBlur={() => setFocusMid13(".1rem solid #898A8D")}
                      style={{ border: focusMid13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber4}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber4(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>

                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusMid14(".1rem solid #005EEC")}
                      onBlur={() => setFocusMid14(".1rem solid #898A8D")}
                      style={{ border: focusMid14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText4} onChange={(e) => setSmsText4(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="col-md-4">
        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(7) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(7) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(7)}>
                <p className="my-1">External Voltage</p>
                <p className="my-1" style={{fontWeight: "400"}}>External voltage I/O parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshExternalVoltage}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendExternalVoltage}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(7)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(7) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(7) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{batteryVoltageDate}</p>
            </div>
          </div>
          {open.includes(7) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusRight1(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight1(".1rem solid #898A8D")}
                  style={{ border: focusRight1 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority6}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect23(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of External voltage I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight2(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight2(".1rem solid #898A8D")}
                  style={{ border: focusRight2 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand6}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect29(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of External voltage I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight3(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight3(".1rem solid #898A8D")}
                  style={{ border: focusRight3 }}>
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel5} onChange={(e) => { if (e.target.value >= 1) setHighLevel5(1); else setHighLevel5(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of External voltage value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight4(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight4(".1rem solid #898A8D")}
                  style={{ border: focusRight4 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of External voltage value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox17} onChange={() => setCheckBox17(!checkBox17)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">Event Only</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send External voltage I/O element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight5(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight5(".1rem solid #898A8D")}
                  style={{ border: focusRight5 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average4} onChange={(e) => handleAverage4(e)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"External voltage sample length to average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox11} onChange={() => setCheckBox11(!checkBox11)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of External voltage event"} />
                </div>
              </div>
              {checkBox11 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber5}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber5(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText5} onChange={(e) => setSmsText5(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(8) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(8) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(8)}>
                <p className="my-1">Analogue Input</p>
                <p className="my-1" style={{fontWeight: "400"}}>Analogue input I/O parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshAnalogInput}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendAnalogInput}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(8)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(8) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(8) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{batteryVoltageDate}</p>
            </div>
          </div>
          {open.includes(8) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                onFocus={() => setFocusRight6(".1rem solid #005EEC")}
                onBlur={() => setFocusRight6(".1rem solid #898A8D")}
                style={{ border: focusRight6 }}
              >
                <div className="label position-absolute">
                  <label>Analogue Input Pin</label>
                  <p>{analogueInput1}</p>
                </div>
                <select className="element w-100 border-0" value={""} onChange={(e) => {
                  setAnalogueInput1(e.target.value)
                  handleSelect15(e)
                }}>
                  <option selected></option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>

              {/* <div className="subsub2-sub1-subsub2-sub2-subsub1-sub1-input-output-div3">
                <p>OFF</p>
                <label className="input-output-switch">
                  <input type="checkbox" />
                  <span className="input-output-slider"></span>
                </label>
                <p>ON</p>
              </div> */}

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusRight7(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight7(".1rem solid #898A8D")}
                  style={{ border: focusRight7 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority7}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect24(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of analog input I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusRight8(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight8(".1rem solid #898A8D")}
                  style={{ border: focusRight8 }}                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand7}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect30(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of analog input I/O element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusRight9(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight9(".1rem solid #898A8D")}
                  style={{ border: focusRight9 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel6} onChange={(e) => { if (e.target.value >= 1) setHighLevel6(1); else setHighLevel6(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of analog input value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusRight10(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight10(".1rem solid #898A8D")}
                  style={{ border: focusRight10 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of analog input value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox18} onChange={() => setCheckBox18(!checkBox18)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">Event Only</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send analog input I/O element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                  onFocus={() => setFocusRight11(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight11(".1rem solid #898A8D")}
                  style={{ border: focusRight11 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average5} onChange={(e) => handleAverage5(e)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Analog Input 1 sample length to average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox12} onChange={() => setCheckBox12(!checkBox12)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of analog input event"} />
                </div>
              </div>
              {checkBox12 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber6}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber6(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex justify-content-center position-relative align-items-center gap-3"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText6} onChange={(e) => setSmsText6(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="mb-5">
          <div
            className="command-unit bg-white"
            style={{
              borderBottomLeftRadius: !open.includes(9) ? "1rem" : "0rem",
              borderBottomRightRadius: !open.includes(9) ? "1rem" : "0rem",
            }}
          >
            <div className="w-100 d-flex align-items-center justify-content-between px-4 title">
              <div className="d-flex flex-column justify-content-center py-1 cursor-pointer" onClick={() => handleOpen(9)}>
                <p className="my-1">Axis Z</p>
                <p className="my-1" style={{fontWeight: "400"}}>Axis Z parameters settings</p>
              </div>
              <div className="d-flex align-items-center px-0">
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/refresh.svg" 
                  alt="none"
                  onClick={refreshAxisZ}
                />
                <img
                  className="icon-hover cursor-pointer mr-3" 
                  src="./assets/S.svg"
                  alt="none"
                  onClick={sendDigitalAxisZ}
                />
                <img
                  className="cursor-pointer mr-3"
                  src="./assets/down.svg"
                  alt="none"
                  onClick={() => handleOpen(9)}
                />
              </div>
            </div>
            <div
              className="update-time d-flex align-items-center"
              style={{
                borderBottomLeftRadius: !open.includes(9) ? "1rem" : "0rem",
                borderBottomRightRadius: !open.includes(9) ? "1rem" : "0rem",
              }}
            >
              <p className="mb-0 pl-4 text-white">{batteryVoltageDate}</p>
            </div>
          </div>
          {open.includes(9) && (
            <div className="input-element-container bg-white d-flex flex-column align-items-center py-3 px-5">
              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0">OFF</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox21} onChange={(e) => setCheckBox21(!checkBox21)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight12(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight12(".1rem solid #898A8D")}
                  style={{ border: focusRight12 }}
                >
                  <div className="label position-absolute">
                    <label>Priority</label>
                    <p>{priority8}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect25(e)}>
                    <option selected></option>
                    <option>Disabled</option>
                    <option>Low</option>
                    <option>High</option>
                    <option>Panic</option>
                  </select>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Priority of Axis X element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight13(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight13(".1rem solid #898A8D")}
                  style={{ border: focusRight13 }}
                >
                  <div className="label position-absolute">
                    <label>Operand</label>
                    <p>{operand8}</p>
                  </div>
                  <select className="element w-100 border-0" value={""} onChange={(e) => handleSelect31(e)}>
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
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Operand of Axis X element"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight14(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight14(".1rem solid #898A8D")}
                  style={{ border: focusRight14 }}
                >
                  <div className="label position-absolute">
                    <label>High Level</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={highLevel7} onChange={(e) => { if (e.target.value >= 1) setHighLevel7(1); else setHighLevel7(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"High level of Axis X value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight15(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight15(".1rem solid #898A8D")}
                  style={{ border: focusRight15 }}
                >
                  <div className="label position-absolute">
                    <label>Low Level</label>
                    <input className="element w-100 border-0" type="number" />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Low level of Axis X value range"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight16(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight16(".1rem solid #898A8D")}
                  style={{ border: focusRight16 }}
                >
                  <div className="label position-absolute">
                    <label>Event Only</label>
                    <input className="element w-100 border-0" type="number" min={0} max={1} value={axisZEventOnly} onChange={(e) => { if (e.target.value >= 1) setAxisZEventOnly(1); else setAxisZEventOnly(0) }} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Send Axis X element either when event happens or in each record"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                  onFocus={() => setFocusRight17(".1rem solid #005EEC")}
                  onBlur={() => setFocusRight17(".1rem solid #898A8D")}
                  style={{ border: focusRight17 }}
                >
                  <div className="label position-absolute">
                    <label>Average</label>
                    <input className="element w-100 border-0" type="number" min="0" max="65535" value={average6} onChange={(e) => handleAverage6(e)} />
                  </div>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Axis X average"} />
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                <div className="input-element d-flex justify-content-center position-relative align-items-center border-0 gap-3">
                  <p className="mb-0 mr-5">Send SMS</p>
                  <label className="input-output-switch mb-0">
                    <input type="checkbox" checked={checkBox13} onChange={() => setCheckBox13(!checkBox13)} />
                    <span className="input-output-slider"></span>
                  </label>
                  <p className="mb-0">ON</p>
                </div>
                <div className="position-absolute" style={{right: '0'}}>
                  <Try text={"Enable sending SMS of Axis X event"} />
                </div>
              </div>
              {checkBox13 && (
                <>
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft13(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft13(".1rem solid #898A8D")}
                      style={{ border: focusLeft13 }}
                    >
                      <div className="label position-absolute">
                        <label>Phone Number</label>
                        <p>{phoneNumber7}</p>
                      </div>
                      <select className="element w-100 border-0" value={""} onChange={(e) => handleSelectPhoneNumber7(e)}>
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
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>

                  <div className="w-100 d-flex justify-content-center align-items-center mt-3 position-relative">
                    <div className="input-element d-flex flex-column justify-content-between position-relative align-items-center"
                      onFocus={() => setFocusLeft14(".1rem solid #005EEC")}
                      onBlur={() => setFocusLeft14(".1rem solid #898A8D")}
                      style={{ border: focusLeft14 }}
                    >
                      <div className="label position-absolute">
                        <label>SMS Text</label>
                        <input className="element w-100 border-0" style={{ padding: "1rem" }} value={smsText7} onChange={(e) => setSmsText7(e.target.value)} />
                      </div>
                    </div>
                    <div className="position-absolute" style={{right: '0'}}>
                      <Try text={"Operand of digital input I/O element"} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default InputOutput;
