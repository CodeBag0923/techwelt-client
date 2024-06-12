import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

import { CountryData } from "../../utils/mockup";

import "react-phone-number-input/style.css";
import "./EditCompany.css";

const EditCompany = () => {
  const getData = useLocation();

  const [phoneNumber, setPhoneNumber] = useState(getData.state.mobile);
  const [formData, setFormData] = useState({
    companyName: getData.state.companyName,
    username: getData.state.username,
    email: getData.state.email,
    country_name: getData.state.country_name,
    address:getData.state.address,
    img: getData.state.img,
  })

  const handleNumber = (e) => {
    setPhoneNumber(e)
  };

  const handlData=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handlSubmit=()=>{
    if(formData.companyName.length===0){
        alert("sorry n")
    }
    else if(formData.username.length===0){
        alert("sorry u")
    }
    else if(formData.email.length===0){
        alert("sorry e")
    }
    else if(phoneNumber.length===0){
        alert("sorry p")
    }
    else if(formData.country_name.length===0){
        alert("sorry coun")
    }
    else if(formData.address.length===0){
        alert("sorry ut")
    }
    final()
  }

  const final=()=>{
    const sendData={
      companyName:formData.companyName,
      username:formData.username,
      email:formData.email,
      mobile:phoneNumber,
      country_name:formData.country_name,
      address:formData.address,
    }
  }

  return (
    <div className="edit-company-main w-100 h-100">
      <p>Edit Company</p>
      <div className="edit-company-div1 d-flex justify-content-center flex-column p-5 mx-5">
        <div className="person-edit-company-sub1-edit-company-div1 d-flex justify-content-center position-relative">
          <input type="file" className="personfile position-absolute" />
          <img src={formData.img} alt="none" className="person-edit-company" onChange={handlData} />
        </div>
        <div className='add-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Name</label>
            <input className='normal-input' value={formData.companyName} type='text' name="companyName"  onChange={handlData} />
          </div>
          <div className="sub2-subsub1-sub1-edit-company-div1 d-flex flex-column position-relative">
            <label>Username</label>
            <input className='normal-input' value={formData.username} type='text'name="username"  onChange={handlData} />
            <input className='position-absolute d-flex justify-content-center align-items-center' type="checkbox" />
          </div>
        </div>
        <div className='add-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Email</label>
            <input className='normal-input' value={formData.email} type='email' name="email"  onChange={handlData}  />
          </div>
          <div className='d-flex flex-column'>
            <label>Mobile No.</label>
            <div className="ma">
              <PhoneInput
                className="phoneInput"
                placeholder="Enter phone number"
                value={getData.state.mobile}
                onChange={handleNumber}
                name="mobile"
                
              />
            </div>
          </div>
        </div>
        <div className='add-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Country</label>
            <select className='normal-input' type='text' name="country" onChange={handlData} >
              <option>{formData.country_name}</option>
              {CountryData.map((item, index) => {
                return (
                  <option value={item.country_id} key={index}>
                    {item.country_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='d-flex flex-column'>
            <label>Address</label>
            <input className='normal-input' type='text' value={formData.address} name="address" onChange={handlData} />
          </div>
        </div>
        <div className="subsub5-sub1-edit-company-div1 d-flex justify-content-center" onClick={()=>handlSubmit()}>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default EditCompany;
