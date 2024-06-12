import React from "react";
import { useMediaQuery } from "@mui/material";

import "./EditRule.css";

const EditRule = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="edit-rule-main w-100">
      <div className="sub1-div1">
        <p className="px-5 text-white d-flex justify-content-center align-items-center">
          Edit Rule: <span className="ml-5">Engine ON</span>
        </p>
      </div>
      <div className="sub1-edit-rule-div2 d-flex justify-content-between my-5 bg-white mx-auto px-4 py-5">
        <div className="subsub1-sub1-edit-rule-div2 d-flex flex-column justify-content-between col-md-4">
          <input className="text-center" placeholder="Rule Name" />
          <select className="text-center">
            <option disabled selected>
              I/O Pin
            </option>
            <option></option>
            <option></option>
          </select>
          <div className="sub1-subsub1-sub1-edit-rule-div2 p-4 d-flex flex-column justify-content-center">
            <p>Alert Notifications:</p>
            <div className="subsub1-sub1-subsub1-sub1-edit-rule-div2 d-flex flex-column">
              <div className="d-flex align-items-center my-2 pl-4">
                <input type="checkbox" />
                <p className="ml-5 mb-0">Notification</p>
              </div>
              <div className="d-flex align-items-center my-2 pl-4">
                <input type="checkbox" />
                <p className="ml-5 mb-0">Email</p>
              </div>
              <div className="d-flex align-items-center my-2 pl-4">
                <input type="checkbox" />
                <p className="ml-5 mb-0">SMS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subsub2-sub1-edit-rule-div2 d-flex flex-column justify-content-between col-md-4">
          <select className="text-center">
            <option disabled selected>Device Brand</option>
            <option></option>
            <option></option>
          </select>
          <input className="text-center" placeholder="I/O Status"/>
          <div className="sub1-subsub2-sub1-edit-rule-div2 d-flex flex-column justify-content-center p-4">
            <div className="d-flex align-items-center my-2">
              <input type="radio" />
              <p className="ml-5 mb-0">HIGH</p>
            </div>
            <div  className="d-flex align-items-center my-2">
              <input type="radio"/>
              <p className="ml-5 mb-0">LOW</p>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-between my-2">
              <div className="d-flex align-items-center">
                <input type="radio"/>
                <p className="ml-5 mb-0">Greater Than</p>
              </div>
              <input className="px-2" type="number" />
            </div>
            <div className="w-100 d-flex align-items-center justify-content-between my-2">
              <div className="d-flex align-items-center">
                <input type="radio"/>
                <p className="ml-5 mb-0">Less Than</p>
              </div>
              <input className="px-2" type="number" />
            </div>
          </div>
        </div>
        <div className="subsub3-sub1-edit-rule-div2 col-md-4">
          <select className="text-center w-100">
            <option disabled selected>Device Model</option>
            <option></option>
            <option></option>
          </select>
        </div>
        {isMobile && (
          <div className="tab-button d-flex justify-content-evenly align-items-center mx-auto">
            <img src="./assets/Save.svg" alt="none"/>
            <button>Save</button>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="tab-button d-flex justify-content-evenly align-items-center mx-auto">
          <img src="./assets/Save.svg" alt="none"/>
          <button>Save</button>
        </div>
      )}
    </div>
  );
};

export default EditRule;
