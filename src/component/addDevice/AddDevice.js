import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { useMediaQuery, Autocomplete, TextField } from "@mui/material";

import { Teltonikas, Ruptelas, Cameras, Sensors } from "../../utils/mockup";
import { getResponse } from "../../services/axios";
import { GET_USERNAMELIST } from "../../redux/store/types";

import 'react-phone-number-input/style.css'
import "./AddDevice.css";

const AddDevice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const userList = useSelector((state) => state.devicesList.userList);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [path, setPath] = useState("./assets/Teltonika/FMB110_4000x4000_9.png");
  const [deviceType, setDeviceType] = useState('');
  const [deviceModels, setDeviceModels] = useState([]);
  const [formData, setFormData] = useState({
    vehicletype: "Car",
    plate: "",
    imei: "",
    devicetype: "",
    model: "",
    camera: "",
    sensor: "",
    mobileNo: "",
    user: ""
  });
  
  useEffect(() => {
    const getList = async () => {
      var response = await getResponse('/auth/userIdList', 'post');
      if (response.status === 200) {
        dispatch({
          type: GET_USERNAMELIST,
          payload: response.data
        })
      }
    }
    getList();
  }, [])

  useEffect(() => {
    setFormData((prev) => {
      if (deviceType === 'Teltonika') {
        setDeviceModels(Teltonikas);
        return {
          ...prev,
          devicetype: deviceType,
          model: Teltonikas[0].device
        }
      } else if (deviceType === 'Ruptela') {
        setDeviceModels(Ruptelas);
        return {
          ...prev,
          devicetype: deviceType,
          model: Ruptelas[0].device
        }
      } else {
        setDeviceModels([].concat(Teltonikas).concat(Ruptelas));
        return {
          ...prev,
          devicetype: deviceType,
          model: Teltonikas[0].device
        }
      }
    });
  }, [deviceType])

  const handleType = (e) => {
    setDeviceType(e.target.value);
    if (e.target.value == "Teltonika")
      setPath("./assets/Teltonika/FMB110_4000x4000_9.png")
    else if (e.target.value == 'Ruptela') {
      setPath("./assets/Ruptela/Plug5.png");
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleData = (e) => {
    if (formData.devicetype == "Teltonika")
      Teltonikas.map((item) => {
        if (item.device == e.target.value)
          setPath(item.path)
      })
    else {
      Ruptelas.map((item) => {
        if (item.device == e.target.value)
          setPath(item.path)
      })
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleNumber = (value) => {
    setPhoneNumber(value)
  }

  const handleModelSelect = (event, newValue) => {
    setFormData({ ...formData, 'model': newValue });
  }

  const handleUserSelect = (event, newValue) => {
    setFormData({ ...formData, 'user': newValue });
  }

  const handleSubmit = () => {
    if (formData.vehicletype.length === 0) {
      return;
    }
    else if (formData.plate.length === 0) {
      return;
    }
    else if (formData.imei.length !== 15) {
      alert("IMEI must be 15 digits")
      return;
    }
    else if (phoneNumber.length === 0) {
      return;
    }
    else if (formData.devicetype.length === 0) {
      return;
    }
    else if (formData.model.length === 0) {
      return;
    }
    else if (formData.user.length === 0) {
      return;
    }
    final()
  }

  const final = async () => {
    const sendData = {
      vehicleType: formData.vehicletype,
      vehicleNo: formData.plate,
      deviceImei: formData.imei,
      mobileNo: phoneNumber,
      deviceType: formData.devicetype,
      deviceModel: formData.model,
      camera: formData.camera,
      sensor: formData.sensor,
      addClient: formData.user
    }
    var res = await getResponse('/api/vehicles/create', 'post', sendData);
    if (res?.status == 200) {
      alert("New device added successfully!")
      navigate("/Devices")
    }
  }

  return (
    <div className="add-device-main w-100 h-100">
      <p>Add Device/Vehicle</p>
      <div className="add-device-div1 d-flex flex-column align-items-center p-5 mx-5">
        <div className={`d-flex w-100 mb-4 ${isMobile && 'flex-column'}`}>
          <div className="left-subsub1-sub1-add-device-div1 w-50 d-flex flex-column justify-content-evenly align-items-center">
            <div className="add-input-container d-flex flex-column mb-4 position-relative">
              <label>Vehicle Type</label>
              <select className="normal-input" value={formData.vehicletype} name="vehicletype" onChange={handleData} >
                <option selected>Car</option>
                <option>Bike</option>
              </select>
              {formData.vehicletype === "Car" ? 
                <img className="vehicle-icon position-absolute" src="./assets/Car.svg" alt="none" /> : 
                <img className="vehicle-icon position-absolute" src="./assets/Bike.svg" alt="none" />}
            </div>
            <div className="add-input-container d-flex flex-column mb-4">
              <label>Plate No.</label>
              <input className="normal-input" value={formData.plate} name="plate" type="text" maxLength={13} onChange={handleData} />
            </div>
            <div className="add-input-container d-flex flex-column mb-4">
              <label>Add to User (Optional)</label>
              <Autocomplete
                value={formData.user}
                onChange={handleUserSelect}
                options={userList.map(item => item.lname)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} style={{ fontSize: '1.6rem' }}>{option}</li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    style={{backgroundColor: 'white', height: '4rem', borderRadius: '.8rem', fontSize: '1.6rem', border: '.1rem solid #DFE0EB'}}
                  />
                )}
              />
            </div>
            <div className={`d-flex flex-column ${!isMobile && 'p-5 sensors'}`}>
              {!isMobile && <p className="p-0">Sensors / Accessories</p>}
              <div className={`add-input-container d-flex align-items-end ${isMobile && 'flex-row'}`}>
                <div className="d-flex flex-column col-8 px-0">
                  <div className="d-flex flex-column mb-4">
                    <label>Camera</label>
                    <select className="normal-input" value={formData.camera} name="camera" type="text" onChange={handleData} >
                      <option selected></option>
                      {Cameras.map((item) => (
                        <option key={item.label + 'cam'}>{item.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <img className="ml-4 mb-3 col-4" src={Cameras.filter(item => item.label === formData.camera)[0] ? Cameras.filter(item => item.label === formData.camera)[0].path : "./assets/image 11.png"} alt="none" />
              </div>
              <div className={`add-input-container d-flex align-items-end ${isMobile && 'flex-row'}`}>
                <div className="d-flex flex-column col-8 px-0">
                  <div className="d-flex flex-column mb-4">
                    <label>Temperature Sensor</label>
                    <select className="normal-input" value={formData.sensor} name="sensor" type="text" onChange={handleData} >
                      <option selected></option>
                      {Sensors.map((item) => (
                        <option key={item.label + 'sen'}>{item.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <img className="ml-4 mb-3 col-4" src="./assets/image 11.png" alt="none" />
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="right-subsub1-sub1-add-device-div1 w-50 d-flex flex-column p-5">
              <p className="p-0">Device Details</p>
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <div className="add-input-container d-flex flex-column mb-4">
                    <label>Device IMEI</label>
                    <input 
                      className="normal-input" 
                      value={formData.imei} 
                      name="imei" 
                      type="number" 
                      onChange={handleData} onInput={(e) => {
                        const value = e.target.value.slice(0, 15);
                        e.target.value = value.replace(/\D/, '');
                      }} 
                    />
                  </div>
                  <div className="add-input-container d-flex flex-column mb-4">
                    <label>Device Type</label>
                    <select className="normal-input" value={formData.devicetype} name="devicetype" type="text" onChange={(e) => {
                      handleType(e);
                    }}>
                      <option></option>
                      <option>Teltonika</option>
                      <option>Ruptela</option>
                    </select>
                  </div>
                  <div className="add-input-container d-flex flex-column mb-4">
                    <label>Device Model</label>
                    <Autocomplete
                      value={formData.model}
                      onChange={handleModelSelect}
                      options={deviceModels.map(item => item.device)}
                      getOptionLabel={(option) => option}
                      renderOption={(props, option) => (
                        <li {...props} style={{ fontSize: '1.6rem' }}>{option}</li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          style={{backgroundColor: 'white', height: '4rem', borderRadius: '.8rem', fontSize: '1.6rem', border: '.1rem solid #DFE0EB'}}
                        />
                      )}
                    />
                  </div>
                  <div className="add-input-container d-flex flex-column mb-4">
                    <label>Mobile No.</label>
                    <div className='ma'>
                      <PhoneInput
                        className="phoneInput"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        international
                        onChange={handleNumber}
                      />
                    </div>
                  </div>
                </div>
                <img className="col-4 h-100 object-fit-cover" src={path} alt="none" />
              </div>
            </div>
          ) : (
            <div className={`d-flex align-items-end ${isMobile && 'w-100'}`}>
              <div className="d-flex flex-column col-8 px-0">
                <div className="add-input-container d-flex flex-column mb-4">
                  <label>Device Type</label>
                  <select className="normal-input" value={formData.devicetype} name="devicetype" type="text" onChange={(e) => {
                    handleType(e);
                  }}>
                    <option>Teltonika</option>
                    <option>Ruptela</option>
                  </select>
                </div>
                <div className="add-input-container d-flex flex-column mb-4">
                  <label>Device Model</label>
                  <Autocomplete
                    value={formData.model}
                    onChange={handleModelSelect}
                    options={deviceModels.map(item => item.device)}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => (
                      <li {...props} style={{ fontSize: '1.6rem' }}>{option}</li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        style={{backgroundColor: 'white', height: '4rem', borderRadius: '.8rem', fontSize: '1.6rem', border: '.1rem solid #DFE0EB'}}
                      />
                    )}
                  />
                </div>
              </div>
              <img className="ml-4 mb-3 mobile-image col-4" src={path} alt="none" />
            </div>
          )}
        </div>
        <div className="sub5-right-subsub1-sub1-add-device-div1 d-flex justify-content-center w-100" onClick={() => handleSubmit()}>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
