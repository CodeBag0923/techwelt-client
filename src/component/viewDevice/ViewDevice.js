import React,{ useState } from "react";
import { useLocation } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { useMediaQuery } from "@mui/material";

import 'react-phone-number-input/style.css'
import "./ViewDevice.css";

const ViewDevice = () => {
  const getData = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    vehicletype:"Car",
    plate:"",
    iemi:"",
    devicetype:"",
    model:"",
    camera:"",
    user:""
  });

  const data={
    vehicleType:getData.state.vehicleType,
    plate:getData.state.plate,
    imei:getData.state.imei,
    mobile:getData.state.mobile,
    device:getData.state.device,
    model:getData.state.model,
    camera:getData.state.camera,
    user:getData.state.user
  }

  const handlData=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleNumber=(value)=>{
    setPhoneNumber(value)
  }

  return (
    <div className="view-device-main w-100 h-100">
      <p>View Device/Vehicle</p>
      <div className="view-device-div1 d-flex justify-content-center p-5 mx-5">
        <div className="left-subsub1-sub1-view-device-div1 w-50 d-flex flex-column justify-content-evenly align-items-center">
          <div className="view-input-container d-flex flex-column mb-4 position-relative">
            <label>Vehicle Type</label>
            <select className="normal-input" value={data.vehicleType} name="vehicletype" onChange={handlData} disabled>
              <option selected>Car</option>
              <option>Bike</option>
            </select>
            {data.vehicletype === "Car" ? 
              <img className="vehicle-icon position-absolute" src="./assets/Car.svg" alt="none" /> : 
              <img className="vehicle-icon position-absolute" src="./assets/Bike.svg" alt="none" />}
          </div>
          <div className="view-input-container d-flex flex-column mb-4">
            <label>Plate No.</label>
            <input className="normal-input" value={data.plate} name="plate" type="text" disabled/>
          </div>
          <div className="view-input-container d-flex flex-column mb-4">
            <label>Device IMEI</label>
            <input className="normal-input" value={data.imei} name="iemi" type="text" disabled/>
          </div>
          <div className={`d-flex align-items-end ${isMobile && 'w-100'}`}>
            <div className="d-flex flex-column w-100">
              <div className="view-input-container d-flex flex-column mb-4">
                <label>Device Type</label>
                <select className="normal-input" name="devicetype" type="text" disabled>
                  <option selected disabled>{data.device}</option>
                </select>
              </div>
              <div className="view-input-container d-flex flex-column mb-4">
                <label>Device Model</label>
                <select className="normal-input" name="model" type="text" disabled>
                  <option disabled selected>{data.model}</option>
                </select>
              </div>
            </div>
            {isMobile && (
              <img className="ml-4 mb-3 mobile-image" src="./assets/eng.jpeg" alt="none" />
            )}
          </div>
          <div className={`d-flex align-items-end ${isMobile && 'w-100'}`}>
            <div className="d-flex flex-column w-100">
              <div className="view-input-container d-flex flex-column mb-4">
                <label>Camera (Optional)</label>
                <select className="normal-input" name="camera" type="text" disabled>
                  <option selected disabled>{data.camera}</option>
                </select>
              </div>
            </div>
            {isMobile && (
              <img className="ml-4 mb-3 mobile-image" src="./assets/image 11.png" alt="none" />
            )}
          </div>
          <div className="view-input-container d-flex flex-column mb-4">
            <label>Mobile No.</label>
            <div className='ma'>
              <PhoneInput
                className="phoneInput"
                placeholder="Enter phone number"
                value={data.mobile}
                onChange={handleNumber}
              />
            </div>
          </div>
          <div className="view-input-container d-flex flex-column mb-4">
            <label>Add to User (Optional)</label>
            <select className="normal-input" name="user" type="text" disabled>
              <option selected disabled>{data.user}</option>
            </select>
          </div>
        </div>
        {!isMobile && (
          <div className="right-subsub1-sub1-view-device-div1 w-50 d-flex flex-column justify-content-evenly align-items-center">
            <img src="./assets/eng.jpeg" alt="none"/>
            <img src="./assets/image 11.png" alt="none"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDevice;
