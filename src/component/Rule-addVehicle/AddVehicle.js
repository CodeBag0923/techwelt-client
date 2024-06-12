import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import checkbox from "rc-checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Teltonikas, Ruptelas } from "../../utils/mockup";

import "./AddVehicle.css";

const AddVehicle = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const AddVehicle = [
    {
      id: "1",
      plate: "DXB U12341",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896789",
      company: "Delta",
    },
    {
      id: "1",
      plate: "DXB U12342",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896789",
      company: "Delta",
    },
    {
      id: "1",
      plate: "DXB U12343",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896789",
      company: "Delta",
    },
    {
      id: "1",
      plate: "DXB U12344",
      device: "Teltonika",
      model: "FMC001",
      iemi: "49837593896780",
      company: "Delta",
    }
  ];

  const [exportType, setExportType] = useState(false);
  const [exportType1, setExportType1] = useState("none");
  const [searchPlateText, setSearchPlateText] = useState("Plate");
  const [searchImeiText, setSearchImeiText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device");
  const [searchModelText, setSearchModelText] = useState("Model");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [data, setData] = useState(AddVehicle);

  useEffect(() => {
    setData(
      AddVehicle.filter((item)=>{
        return (searchPlateText=="Plate"?item.plate : (!searchPlateText || item.plate===searchPlateText)) && (!searchImeiText || item.iemi.toLocaleLowerCase().includes(searchImeiText.toLocaleLowerCase())) && (searchDeviceText=="Device"?item.device : (!searchDeviceText || item.device===searchDeviceText)) && (searchModelText=="Model" ? item.device : (!searchModelText || item.device===searchModelText))&& (searchCompanyText=="Company" ? item.company : (!searchCompanyText || item.company===searchCompanyText));
                                                                                                  
      })
    )
  }, [searchPlateText,searchImeiText,searchDeviceText,searchModelText,searchCompanyText]);

  const handlExportType = () => {
    if (exportType) {
      setExportType1("block");
      setExportType(false);
    } else {
      setExportType1("none");
      setExportType(true);
    }
  };

  const handlePlate=(value)=>{
    const val = value.target.value;
    setSearchPlateText(val);
  };

  const handleCompany=(value)=>{
    const val = value.target.value;
    setSearchCompanyText(val);
  };

  const handleImei=(value)=>{
    const val = value.target.value;
    setSearchImeiText(val);
  };

  const handleDevice=(value)=>{
    const val = value.target.value;
    if (val === "Teltonika") {
      setSearchDeviceText(val);
    } else if (val === "Ruptela") {
      setSearchDeviceText(val);
    } else {
      setSearchDeviceText(val);
      setData(AddVehicle);
    }
  };

  const handleModel =(value)=>{
    const val = value.target.value;
    if(val==="Model"){
      setSearchModelText(val)
    }
    else{
      setSearchModelText(val)
    }
  }

  const handleClear=()=>{
    setSearchPlateText("Plate")
    setSearchImeiText("")
    setSearchDeviceText("Device")
    setSearchModelText("Model")
    setSearchCompanyText("Company")
    setData(AddVehicle);
  }

  const handleChange=(e)=>{
    const {name,checked}=e.target;
    if(name==="allSelect"){
      let tewmpUser=data.map((da)=>{return{...da,isChecked:checked}});
      setData(tewmpUser)
    }else{
      let tewmpUser = data.map((da)=>da.plate===name?{...da,isChecked:checked}:da);
      setData(tewmpUser)
    }
  }

  return (
    <div className="addvehicle-main">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <div className="import-sub1-addvehicle-div1 d-flex h-100 justify-content-between">
              <p className="px-5 text-white d-flex justify-content-center align-items-center">
                Total vehicles <span className="ml-3">35</span>
              </p>
              <p className="px-5 text-white d-flex justify-content-center align-items-center">
                Rule: Geofence
              </p>
            </div>
            <div className="d-flex">
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/Save.svg" alt="none" />
                <button>Save</button>
              </div>
            </div>
          </div>
          <div className="sub2-div1 d-flex flex-column justify-content-end align-items-end w-100">
            <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 w-100">
              <div className="sub1-subsub1-sub2-div1 d-flex align-items-center my-2">
                <img
                  src="./assets/searchwithperson.svg"
                  alt="none"
                  className="search-icon-content"
                />
                <span>Search vehicle</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <select
                  className="field-input"
                  value={searchPlateText}
                  onChange={(value) => handlePlate(value)}
                  style={{color:searchPlateText=="Plate"?"#7A7D8B":"black"}}
                >
                  <option value="Plate">Plate No.</option>
                  <option style={{color:"black"}}>DXB U12345</option>
                  <option style={{color:"black"}}>DXB U12245</option>
                </select>
                <select
                  className="field-input"
                  value={searchDeviceText}
                  onChange={(value) => handleDevice(value)}
                  style={{color:searchDeviceText=="Device"?"#7A7D8B":"black"}}
                >
                  <option selected value="Device">
                    Device
                  </option>
                  <option value="Teltonika" style={{color:"black"}}>Teltonika</option>
                  <option value="Ruptela" style={{color:"black"}}>Ruptela</option>
                </select>
                <select
                  className="field-input"
                  value={searchModelText}
                  onChange={(value) => handleModel(value)}
                  style={{color:searchModelText=="Model"?"#7A7D8B":"black"}}
                >
                  <option selected value="Model">Device Model</option>
                {searchDeviceText=="Ruptela" ?
                  Ruptelas.map((item) => (
                    <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>
                  )) : 
                  Teltonikas.map((item) => (
                    <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>
                  ))
                }  
                </select>
                <input
                  className="field-input"
                  type="numder"
                  placeholder="Device IMEI"
                  value={searchImeiText}
                  onChange={(value) => handleImei(value)}
                />
                <select
                  className="field-input"
                  value={searchCompanyText}
                  onChange={(value) => handleCompany(value)}
                  style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
                >
                  <option value="Company">Company</option>
                  <option style={{color:"black"}}>Delta</option>
                </select>
                <div
                  className="tab-button d-flex justify-content-center align-items-center px-4 ml-4"
                  onClick={()=>handleClear()}
                >
                  <img
                    src="./assets/clear.svg"
                    alt="none"
                  />
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-addvehicle-div2 py-3">
                <div className="mb-0 d-flex justify-content-center align-items-center">
                  <input
                    type='checkbox'
                    onChange={handleChange}
                    name='allSelect'
                    checked={data.filter(da=>da?.isChecked !== true).length < 1}
                  />
                </div>
                <p className="mb-0 text-center">Plate No.</p>
                <p className="mb-0 text-center">Device Type</p>
                <p className="mb-0 text-center">Device Model</p>
                <p className="mb-0 text-center">Device IMEI</p>
                <p className="mb-0 text-center">Company</p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data.map((item, index) => {
                  return (
                    <div key={index} id="import-addvehicle">
                      <p id="sub1-import-addvehicle">{item.id}</p>
                      <div className="subsub1-sub2-addvehicle-div2">
                        <div className='item'>
                          <input
                            type="checkbox" 
                            name={item.plate}
                            onChange={handleChange}
                            checked={item?.isChecked || false}
                          />
                        </div>
                        <p className="item">{item.plate}</p>
                        <p className="item">{item.device}</p>
                        <p className="item">{item.model}</p>
                        <p className="item">{item.iemi}</p>
                        <p className="item">{item.company}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="mobile-title px-5 text-white d-flex justify-content-center align-items-center">
            Rule: Geofence
          </p>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total vehicles <span className="ml-3">35</span>
            </p>
            <div className="d-flex">
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/Save.svg" alt="none" />
                <button>Save</button>
              </div>
            </div>
          </div>
          <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 px-4 w-100">
            <div className="sub1-subsub1-sub2-div1 d-flex align-items-center p-2">
              <img
                src="./assets/searchwithperson.svg"
                alt="none"
                className="search-icon-content"
              />
              <span>Search vehicle</span>
            </div>
            <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
              <select
                className="field-input"
                value={searchPlateText}
                onChange={(value) => handlePlate(value)}
                style={{color:searchPlateText=="Plate"?"#7A7D8B":"black"}}
              >
                <option value="Plate">Plate No.</option>
                <option style={{color:"black"}}>DXB U12345</option>
                <option style={{color:"black"}}>DXB U12245</option>
              </select>
              <select
                className="field-input"
                value={searchDeviceText}
                onChange={(value) => handleDevice(value)}
                style={{color:searchDeviceText=="Device"?"#7A7D8B":"black"}}
              >
                <option selected value="Device">
                  Device
                </option>
                <option value="Teltonika" style={{color:"black"}}>Teltonika</option>
                <option value="Ruptela" style={{color:"black"}}>Ruptela</option>
              </select>
              <select
                className="field-input"
                value={searchModelText}
                onChange={(value) => handleModel(value)}
                style={{color:searchModelText=="Model"?"#7A7D8B":"black"}}
              >
                <option selected value="Model">Device Model</option>
              {searchDeviceText=="Ruptela" ?
                Ruptelas.map((item) => (
                  <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>
                )) : 
                Teltonikas.map((item) => (
                  <option style={{color:"black",backgroundColor:"white"}}>{item.device}</option>
                ))
              }  
              </select>
              <input
                className="field-input"
                type="numder"
                placeholder="Device IMEI"
                value={searchImeiText}
                onChange={(value) => handleImei(value)}
              />
              <select
                className="field-input"
                value={searchCompanyText}
                onChange={(value) => handleCompany(value)}
                style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
              >
                <option value="Company">Company</option>
                <option style={{color:"black"}}>Delta</option>
              </select>
              <div className="tab-button d-flex justify-content-center align-items-center px-4 ml-auto py-1" onClick={() => handleClear()}>
                <img src="./assets/clear.svg" alt="none" />
                <button>Clear</button>
              </div>
            </div>
          </div>
          <div className="d-flex mt-3 w-100 ml-5 pl-3">
            <input
              className="ml-5"
              type='checkbox'
              onChange={handleChange}
              name='allSelect'
              checked={data.filter(da=>da?.isChecked !== true).length < 1}
            />
            <p className="mb-0 ml-3" style={{fontSize: '1.8rem', fontFamily: 'rregular'}}>Select All</p>
          </div>
          <div className="sub2-div2 d-flex flex-column px-4 w-100 overflow-auto ml-0">
            {data?.map((item, index) => {
              return (
                <div id="import-addvehicle" key={index}>
                  <p id="sub1-import-addvehicle">{index + 1}</p>
                  <div className="subsub1-sub2-addvehicle-div2 d-flex align-items-center py-2">
                    <div className="item col-1 align-items-center px-1">
                      <input
                        type='checkbox'
                        onChange={handleChange}
                        name='allSelect'
                        checked={data.filter(da=>da?.isChecked !== true).length < 1}
                      />
                    </div>
                    <div className="d-flex flex-column col-11 px-2">
                      <div className="d-flex w-100">
                        <p className="mb-0 px-2 col-4 text-white">Plate No.</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">{item?.plate}</p>
                      </div>
                      <div className="d-flex w-100">
                        <p className="mb-0 px-2 col-4 text-white">Device Type</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">{item?.device}</p>
                      </div>
                      <div className="d-flex w-100">
                        <p className="mb-0 px-2 col-4 text-white">Device Model</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">{item?.model}</p>
                      </div>
                      <div className="d-flex w-100">
                        <p className="mb-0 px-2 col-4 text-white">Device IMEI</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">{item?.iemi}</p>
                      </div>
                      <div className="d-flex w-100">
                        <p className="mb-0 px-2 col-4 text-white">Company</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">{item?.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVehicle;
