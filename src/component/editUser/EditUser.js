import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

import { CountryData } from "../../utils/mockup";
import { getResponse } from "../../services/axios";

import "react-phone-number-input/style.css";
import "./EditUser.css";

const EditUser = () => {
  const getData = useLocation();
  const navigate = useNavigate();

  const role = useSelector((state) => state.auth.user.role);

  const [phoneNumber, setPhoneNumber] = useState(getData.state.mobile);
  const [suggestions, setSuggestions] = useState([]);
  const [avatarPath, setAvatarPath] = useState(getData.state.image);
  const [formData, setFormData] = useState({
    address: getData.state.address,
    name: getData.state.name,
    username: getData.state.username,
    email: getData.state.email,
    mobile: getData.state.mobile,
    country: getData.state.country,
    company: getData.state.company,
    role: getData.state.role,
  })

  useEffect(() => {
    var temp = [];
    if (formData.country) {
      CountryData.map((country) => {
        country.states.map((state) => {
          if (state.state_name.toLowerCase().includes(formData.country.toLowerCase())) {
            temp.push({
              state: state.state_name,
              country: country.country_name
            })
          }
        })
      })
      setSuggestions(temp);
    } else {
      setSuggestions([]);
    }
  }, [formData.country])

  const handleNumber = (e) => {
    setPhoneNumber(e)
  };

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    if (formData.name.length === "") {
      alert("Please input your name!")
      return;
    }
    else if (formData.username === "") {
      alert("Please input your username!")
      return;
    }
    else if (formData.email === "") {
      alert("Please input your email!")
      return;
    }
    else if (phoneNumber === "") {
      alert("Please input your mobile number!")
      return;
    }
    else if (formData.country === "") {
      alert("Please input your country")
      return;
    }
    else if (formData.address === "") {
      alert("Please input your address!")
      return;
    }
    else if (formData.role === "") {
      alert("Please select your usertype!")
      return;
    }
    else if (formData.company === "") {
      alert("Please select your company!")
      return;
    }
    final()
  }

  const final = async () => {
    const sendData = {
      fname: formData.name,
      lname: formData.username,
      email: formData.email,
      phone: phoneNumber,
      country: formData.country,
      address: formData.address,
      role: formData.role,
      company: formData.company,
      image: avatarPath
    }
    var res = await getResponse('/api/users/updateUser', 'post', sendData);
    if (res?.status == 200) {
      alert("User updated successfully!")
      navigate("/Users")
    }
    else {
      alert(res?.data.message)
    }
  }

  const onChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      let formDataFile = new FormData();
      formDataFile.append('avatar', selectedFile);
      var result = await axios.post('/api/common/uploadAvatar', formDataFile, {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
      });
      setAvatarPath(result.data.filePath);
    }
  }

  return (
    <div className="edit-user-main">
      <p>Edit User</p>
      <div className='edit-user-div1 d-flex justify-content-center flex-column p-5 mx-5'>
        <div className='person-edit-user-sub1-edit-user-div1 d-flex justify-content-center position-relative'>
          <input 
            type='file' 
            className='personfile position-absolute' 
            accept='image/*' 
            onChange={onChange} 
          />
          <img 
            crossOrigin='*' 
            src={avatarPath ? process.env.REACT_APP_URL + '/' + avatarPath : './assets/common_user.png'} 
            alt="none" 
            className="person-edit-user object-fit-cover" 
          />
        </div>
        <div className='edit-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Name</label>
            <input className='normal-input' value={formData.name} type='text' name="name" onChange={handleData} />
          </div>
          <div className="sub2-subsub1-sub1-edit-user-div1 d-flex flex-column position-relative">
            <label>Username</label>
            <input className='normal-input' value={formData.username} type='text' name="username" onChange={handleData} />
            <input className='position-absolute d-flex justify-content-center align-items-center' type="checkbox" />
          </div>
        </div>
        <div className='edit-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>Email</label>
            <input className='normal-input' disabled value={formData.email} type='email' name="email" />
          </div>
          <div className='d-flex flex-column'>
            <label>Mobile No.</label>
            <div className="ma">
              <PhoneInput
                className="phoneInput"
                placeholder="Enter phone number"
                value={phoneNumber}
                international
                onChange={handleNumber}
                name="mobile"

              />
            </div>
          </div>
        </div>
        <div className='edit-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column position-relative'>
            <label>Country</label>
            <input className='normal-input' name='country' type='text' value={formData.country} onChange={handleData} required />
              {formData.country && (
                <div className='suggestion position-absolute w-100 px-3 overflow-y-auto bg-white'>
                  {suggestions.map((cityData, index) => (
                    <p 
                      className='my-1 cursor-pointer p-0' 
                      key={index}
                      onClick={() => setFormData({ ...formData, "country": cityData.state + ", " + cityData.country })}
                    >
                      {cityData.state + ", " + cityData.country}
                    </p>
                  ))}
                </div>
              )}
          </div>
          <div className='d-flex flex-column'>
            <label>Address</label>
            <input className='normal-input' type='text' value={formData.address} name="address" onChange={handleData} />
          </div>
        </div>
        <div className='edit-input-container d-flex justify-content-evenly mb-5'>
          <div className='d-flex flex-column'>
            <label>User Type</label>
            <select className='normal-input' type='text' name="role" onChange={handleData} >
              {role === "SuperAdmin" && <option>SuperAdmin</option>}
              {role?.includes("Admin") && <option>Admin</option>}
              <option>Client</option>
            </select>
          </div>
          <div className='d-flex flex-column'>
            <label>Company</label>
            <select className='normal-input' type='text' name="company" onChange={handleData} >
              <option>{formData.company}</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </select>

          </div>
        </div>
        <div className="subsub5-sub1-edit-user-div1 d-flex justify-content-center" onClick={() => handleSubmit()}>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
