import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input';

import { CountryData } from "../../utils/mockup";
import { getResponse } from '../../services/axios';

import 'react-phone-number-input/style.css';
import "./AddUser.css";
import axios from 'axios';

const AddUser = () => {
    const navigate = useNavigate();

    const role = useSelector((state) => state.auth.user.role);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [avatarPath, setAvatarPath] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        country: "",
        address: "",
        usertype: "",
        company: ""
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

    const handleData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleNumber = (value) => {
        setPhoneNumber(value)
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

    const handleSubmit = () => {
        if (formData.name.length === 0) {
            alert("Please input your name!")
            return;
        }
        else if (formData.username.length === 0) {
            alert("Please input your username!")
            return;
        }
        else if (formData.email.length === 0) {
            alert("Please input your email!")
            return;
        }
        else if (phoneNumber.length === 0) {
            alert("Please input your mobile number!")
            return;
        }
        else if (formData.country.length === 0) {
            alert("Please input your country")
            return;
        }
        else if (formData.address.length === 0) {
            alert("Please input your address!")
            return;
        }
        else if (formData.usertype.length === 0) {
            alert("Please select your usertype!")
            return;
        }
        else if (formData.company.length === 0) {
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
            country: CountryData.at(formData.country).country_name,
            address: formData.address,
            role: formData.usertype,
            company: formData.company,
            image: avatarPath
        }
        var res = await getResponse('/api/users/addUser', 'post', sendData);
        if (res?.status == 200) {
            alert("User added successfully!")
            navigate("/Users")
        }
        else {
            alert(res?.data.message)
        }
    }

    return (
        <div className="add-user-main w-100 h-100">
            <p>Add User</p>
            <div className='add-user-div1 d-flex justify-content-center flex-column p-5 mx-5'>
                <div className='person-add-user-sub1-add-user-div1 d-flex justify-content-center position-relative'>
                    <input type='file' className='personfile position-absolute' accept='image/*' onChange={onChange} />
                    <img crossOrigin='*' src={avatarPath ? process.env.REACT_APP_URL + '/' + avatarPath : './assets/common_user.png'} alt='none' className='person-add-user object-fit-cover' />
                </div >
                <div className='add-input-container d-flex justify-content-evenly mb-5 gap-3'>
                    <div className='d-flex flex-column'>
                        <label>Name</label>
                        <input className='normal-input' name='name' type='text' value={formData.name} onChange={handleData} required />
                    </div>
                    <div className='sub2-subsub1-sub1-add-user-div1 d-flex flex-column position-relative'>
                        <label>Username</label>
                        <input className='normal-input' name='username' type='text' value={formData.username} onChange={handleData} required />
                        <input className='position-absolute d-flex justify-content-center align-items-center' type='checkbox' />
                    </div>
                </div>
                <div className='add-input-container d-flex justify-content-evenly mb-5 gap-3'>
                    <div className='d-flex flex-column'>
                        <label>Email</label>
                        <input className='normal-input' name='email' type='email' value={formData.email} onChange={handleData} required />
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Mobile No.</label>
                        <div className='ma'>
                            <PhoneInput
                                className="phoneInput"
                                placeholder="Enter phone number"
                                international
                                value={phoneNumber} onChange={handleNumber}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='add-input-container d-flex justify-content-evenly mb-5 gap-3'>
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
                        <input className='normal-input' name='address' type='text' value={formData.address} onChange={handleData} required />
                    </div>
                </div>
                <div className='add-input-container d-flex justify-content-evenly mb-5 gap-3'>
                    <div className='d-flex flex-column'>
                        <label>User Type</label>
                        <select className='normal-input' name='usertype' type='text' value={formData.usertype} onChange={handleData} required>
                            <option></option>
                            {role === "SuperAdmin" && <option>SuperAdmin</option>}
                            {role?.includes("Admin") && <option>Admin</option>}
                            <option>Client</option>
                        </select>                </div>
                    <div className='d-flex flex-column'>
                        <label>Company</label>
                        <select className='normal-input' name='company' type='text' value={formData.company} onChange={handleData} required>
                            <option  >Select Company</option>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                        </select>
                    </div>
                </div>
                <div className='subsub5-sub1-add-user-div1 d-flex justify-content-center' onClick={() => handleSubmit()} >
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddUser;
