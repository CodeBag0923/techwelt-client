import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useMediaQuery } from "@mui/material";

import { Teltonikas, Ruptelas } from "../../utils/mockup";
import { updateDevice } from "../../services/axios";
import { getUserNameList } from "../../services/axios";
import { GET_USERNAMELIST } from "../../redux/store/types";

import "react-phone-number-input/style.css";
import "./EditDevice.css";

const EditDevice = () => {
  const navigate = useNavigate();
  const getData = useLocation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const deviceListData = useSelector((state) => state.devicesList);

  const [deviceType, setDeviceType] = useState(getData.state.device);
  const [path, setPath] = useState("./assets/Teltonika/FMB110_4000x4000_9.png");
  const [phoneNumber, setPhoneNumber] = useState(getData.state.mobile);
  const [carType, setCarType] = useState("truck");
  const [formData, setFormData] = useState({
    vehicleType: getData.state.vehicleType,
    plate: getData.state.plate,
    imei: getData.state.imei,
    deviceType: getData.state.device,
    model: getData.state.model,
    camera: getData.state.camera,
    mobile: getData.state.mobile,
    user: getData.state.user,
  });
  
  const { token, userList } = deviceListData;

  useEffect(() => {
    const getList = async () => {
      var userNameList = await getUserNameList();
      dispatch({
        type: GET_USERNAMELIST,
        payload: userNameList
      })
    }
    getList();
  }, []);

  useEffect(() => {
    setFormData((prev) => {
      if (deviceType === 'Teltonika') {
        return {
          ...prev,
          devicetype: deviceType,
          model: Teltonikas[0].device
        }
      } else if (deviceType === 'Ruptela') {
        return {
          ...prev,
          devicetype: deviceType,
          model: Ruptelas[0].device
        }
      }
    });
  }, [deviceType])

  const handlData = (e) => {
    if (formData.devicetype == "Ruptela")
      setPath("./assets/Ruptela/Plug5.png");
    else {
      Teltonikas.map((item) => {
        if (item.device == e.target.value)
          setPath(item.path)
      })
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNumber = (value) => {
    setPhoneNumber(value);
  };

  const handleType = (e) => {
    setDeviceType(e.target.value);
    if (e.target.value == "Teltonika")
      setPath("./assets/Teltonika/FMB110_4000x4000_9.png")
    else {
      setPath("./assets/Ruptela/Plug5.png");
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handlSubmit = () => {
    if (formData.vehicleType?.length === 0) {
      alert("sorry n");
    } else if (formData.plate?.length === 0) {
      alert("sorry u");
    } else if (formData.imei?.length < 15 || formData.imei.length > 15) {
      alert("IMEI must be 15 digits");
    } else if (phoneNumber?.length === 0) {
      alert("sorry p");
    } else if (formData.device?.length === 0) {
      alert("sorry coun");
    } else if (formData.model?.length === 0) {
      alert("sorry ad");
    } else if (formData.camera?.length === 0) {
      alert("sorry ut");
    } else if (formData.user?.length === 0) {
      alert("sorry com");
    }
    final();
  };

  const final = async () => {
    const sendData = {
      token: token,
      vehicleType: formData.vehicletype,
      vehicleNo: formData.plate,
      deviceImei: formData.imei,
      mobileNo: phoneNumber,
      deviceType: formData.devicetype,
      deviceModel: formData.model,
      camera: formData.camera,
      addClient: formData.user
    }
    var res = await updateDevice(sendData);

    if (res?.status == 200) {
      alert("Device updated successfully!")
    }
    navigate("/Devices")
  };

  return (
    <div className="edit-device-main w-100 h-100">
      <p>Edit Device/Vehicle</p>
      <div className="edit-device-div1 d-flex justify-content-center p-5 mx-5">
        <div className="left-subsub1-sub1-edit-device-div1 w-50 d-flex flex-column justify-content-evenly align-items-center">
          <div className="edit-input-container d-flex flex-column mb-4 position-relative">
            <label>Vehicle Type</label>
            <select
              className="normal-input"
              value={formData.vehicleType}
              name="vehicleType"
              onChange={handlData}
            >
              {/* <option disabled selected></option> */}
              <option selected>Car</option>
              <option>Truck</option>
            </select>
            {formData.vehicletype === "Car" ? 
              <img className="vehicle-icon position-absolute" src="./assets/Car.svg" alt="none" /> : 
              <img className="vehicle-icon position-absolute" src="./assets/Bike.svg" alt="none" />}
          </div>
          <div className="edit-input-container d-flex flex-column mb-4">
            <label>Plate No.</label>
            <input
              className="normal-input"
              value={formData.plate}
              name="plate"
              type="text"
              onChange={handlData}
            />
          </div>
          <div className="edit-input-container d-flex flex-column mb-4">
            <label>Device IMEI</label>
            <input
              className="normal-input"
              value={formData.imei}
              name="imei"
              type="number"
              onChange={handlData}
            />
          </div>
          <div className={`d-flex align-items-end ${isMobile && 'w-100'}`}>
            <div className="d-flex flex-column w-100">
              <div className="edit-input-container d-flex flex-column mb-4">
                <label>Device Type</label>
                <select className="normal-input" name="device" defaultValue={"Teltonika"} type="text" onChange={(e) => {
                  handleType(e);
                }}>
                  <option selected disabled></option>
                  {/* <option>{formData.device="Ruptela"? "Ruptela":"Teltonika"}</option> */}
                  <option>Teltonika</option>
                  <option>Ruptela</option>
                </select>
              </div>
              <div className="edit-input-container d-flex flex-column mb-4">
                <label>Device Model</label>
                <select
                  className="normal-input"
                  value={formData.model}
                  name="model"
                  type="text"
                  onChange={handlData}
                >
                  {formData.device == "Ruptela"
                    ? Ruptelas.map((item, index) => {
                      return <option key={index}>{item.device}</option>;
                    })
                    : Teltonikas.map((item, index) => {
                      return <option key={index}>{item.device}</option>;
                    })}
                </select>
              </div>
            </div>
            {isMobile && (
              <img className="ml-4 mb-3 mobile-image" src={path} alt="none" />
            )}
          </div>
          <div className={`d-flex align-items-end ${isMobile && 'w-100'}`}>
            <div className="d-flex flex-column w-100">
              <div className="edit-input-container d-flex flex-column mb-4">
                <label>Camera (Optional)</label>
                <select className="normal-input" name="camera" type="text" onChange={handlData}>
                  <option selected>{formData.camera}</option>
                  <option>{formData.camera == "b" ? "b" : "c"}</option>
                </select>
              </div>
            </div>
            {isMobile && (
              <img className="ml-4 mb-3 mobile-image" src="./assets/image 11.png" alt="none" />
            )}
          </div>
          <div className="edit-input-container d-flex flex-column mb-4">
            <label>Mobile No.</label>
            <div className="ma">
              <PhoneInput
                className="phoneInput"
                placeholder="Enter phone number"
                international
                value={phoneNumber}
                onChange={handleNumber}
              />
            </div>
          </div>
          <div className="edit-input-container d-flex flex-column mb-4">
            <label>Add to User (Optional)</label>
            <select className="normal-input" value={formData.user} name="user" type="text" onChange={handlData}>
              <option selected disabled></option>
              {userList?.map((item, index) => (
                <option key={index}>
                  {item.lname}
                </option>
              ))}
            </select>
          </div>
        </div>
        {!isMobile ? (
          <div className="right-subsub1-sub1-edit-device-div1 w-50 d-flex flex-column justify-content-evenly align-items-center">
            <img className="my-auto" src={path} alt="none" />
            <img className="my-auto" src="./assets/image 11.png" alt="none" />
            <div className="sub5-right-subsub1-sub1-edit-device-div1 my-auto" onClick={() => handlSubmit()}>
              <button>Submit</button>
            </div>
          </div>
        ) : (
          <div className="sub5-right-subsub1-sub1-edit-device-div1 my-5" onClick={() => handlSubmit()}>
            <button>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditDevice;
