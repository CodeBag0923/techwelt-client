import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'

import 'react-phone-number-input/style.css'
import "./ViewUser.css"

const ViewUser = () => {
    const getData = useLocation();
    const data = {
        address: getData.state.address,
        name: getData.state.name,
        username: getData.state.username,
        email: getData.state.email,
        mobile: getData.state.mobile,
        country: getData.state.country,
        company: getData.state.company,
        role: getData.state.role,
        img: getData.state.img
    }

    const handleNumber = (value) => { }

    return (
        <div className="view-user-main w-100 h-100">
            <p>View User</p>
            <div className='view-user-div1 d-flex justify-content-center flex-column p-5 mx-5'>
                <div className='person-view-user-sub1-view-user-div1 d-flex justify-content-center position-relative'>
                    <img src={data.img ? data.img : './assets/common_user.png'} alt='none' className='person-view-user' />
                </div >
                <div className='view-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Name</label>
                        <input className='normal-input' disabled value={data.name} />
                    </div>
                    <div className='sub2-subsub1-sub1-view-user-div1 d-flex flex-column position-relative'>
                        <label>Username</label>
                        <input className='normal-input' disabled value={data.username} />
                        <input className='position-absolute d-flex justify-content-center align-items-center' type='checkbox' />
                    </div>
                </div>
                <div className='view-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Email</label>
                        <input className='normal-input' disabled value={data.email} />
                    </div>
                    <div className='sub1-subsub2-sub1-view-user-div1'>
                        <label>Mobile No.</label>
                        <div className='ma'>
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
                <div className='view-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Country</label>
                        <input className='normal-input' disabled value={data.country} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Address</label>
                        <input className='normal-input' disabled value={data.address} />
                    </div>
                </div>
                <div className='view-input-container d-flex justify-content-evenly mb-5'>
                    <div className='d-flex flex-column'>
                        <label>User Type</label>
                        <input className='normal-input' disabled value={data.role} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Company</label>
                        <input className='normal-input' disabled value={data.company} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser;
