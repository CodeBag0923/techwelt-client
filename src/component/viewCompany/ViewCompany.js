import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import "./ViewCompany.css";

const ViewCompany = () => {
  const getData = useLocation();
  const data = {
    companyName: getData.state.companyName,
    username: getData.state.username,
    email: getData.state.email,
    mobile: getData.state.mobile,
    country_name: getData.state.country_name,
    address: getData.state.address,
    img: getData.state.img,
  };

  const handleNumber = (value) => { };

  return (
    <div className="view-company-main w-100 h-100">
      <p>View Company</p>
      <div className="view-company-div1 d-flex justify-content-center flex-column p-5 mx-5">
        <div className="person-view-company-sub1-view-company-div1 d-flex justify-content-center position-relative">
          <img
            src={data.img}
            alt="none"
            className="person-view-company"
          />
        </div>
        <div className='add-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Name</label>
            <input className='normal-input' disabled value={data.companyName} />
          </div>
          <div className="sub2-subsub1-sub1-view-company-div1 d-flex flex-column position-relative">
            <label>Username</label>
            <input className='normal-input' disabled value={data.username} />
            <input className='position-absolute d-flex justify-content-center align-items-center' type="checkbox" />
          </div>
        </div>
        <div className='add-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Email</label>
            <input className='normal-input' disabled value={data.email} />
          </div>
          <div className='d-flex flex-column'>
            <label>Mobile No.</label>
            <div className="ma">
              <PhoneInput
                className="phoneInput"
                placeholder="Enter phone number"
                value={data.mobile}
                readOnly={true}
                onChange={handleNumber}
              />
            </div>
          </div>
        </div>
        <div className='add-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Country</label>
            <input className='normal-input' disabled value={data.country_name} />
          </div>
          <div className='d-flex flex-column'>
            <label>Address</label>
            <input className='normal-input' disabled value={data.address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCompany;
