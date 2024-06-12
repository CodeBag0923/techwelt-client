import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import { CountryData } from "../../utils/mockup";

import 'react-phone-number-input/style.css';
import "./AddCompany.css";

const AddCompany = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        country_name: "",
        address: ""
    })

    const handlData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleNumber = (value) => {
        setPhoneNumber(value)
    }

    const handlSubmit = () => {
        if (formData.name.length === 0) {
        }
        else if (formData.username.length === 0) {
        }
        else if (formData.email.length === 0) {
        }
        else if (phoneNumber.length === 0) {
        }
        else if (formData.country_name.length === 0) {
        }
        else if (formData.address.length === 0) {
        }
        final()
    }

    const final = () => {
        const sendData = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            mobile: phoneNumber,
            country_name: formData.country_name,
            address: formData.address,
        }
    }

    return (
        <div className="add-company-main w-100 h-100">
            <p>Add Company</p>
            <div className='add-company-div1 d-flex justify-content-center flex-column p-5 mx-5'>
                <div className='person-add-company-sub1-add-company-div1 d-flex justify-content-center position-relative'>
                    <input type='file' className='personfile position-absolute' />
                    <img src='./assets/uber.svg' alt='none' className='person-add-company' />
                </div >
                <div className='add-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Name</label>
                        <input className='normal-input' name='name' type='text' value={formData.name} onChange={handlData} required />
                    </div>
                    <div className='sub2-subsub1-sub1-add-company-div1 d-flex flex-column position-relative'>
                        <label>Username</label>
                        <input className='normal-input' name='username' type='text' value={formData.username} onChange={handlData} required />
                        <input className='position-absolute d-flex justify-content-center align-items-center' type='checkbox' />
                    </div>
                </div>
                <div className='add-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Email</label>
                        <input className='normal-input' name='email' type='email' value={formData.email} onChange={handlData} required />
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Mobile No.</label>
                        <div className='ma'>
                            <PhoneInput
                                className="phoneInput"
                                placeholder="Enter phone number"
                                value={phoneNumber} onChange={handleNumber}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='add-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Country</label>
                        <select className='normal-input' name='country_name' type='text' value={formData.country_name} onChange={handlData} required>
                            <option>Select Country</option>
                            {CountryData.map((item, index) => {
                                return (
                                    <option value={item.country_id} key={index}>{item.country_name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Address</label>
                        <input className='normal-input' name='address' type='text' value={formData.address} onChange={handlData} required />
                    </div>
                </div>
                <div className='subsub5-sub1-add-company-div1 d-flex justify-content-center' onClick={() => handlSubmit()} >
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddCompany;
