import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import DatePicker from "react-datepicker";
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

import "./Reports.css";

const ReportData = [
  {
    id: "1",
    plate: "DXB U12341",
    device: "Teltonika",
    model: "FMC130",
    imei: "49837593896789",
    company: "delta",
  },
  {
    id: "2",
    plate: "DXB U123452",
    device: "Ruptela",
    model: "FMC001",
    imei: "49837593896789",
    company: "deltas",
  },
  {
    id: "3",
    plate: "DXB U12343",
    device: "Teltonika",
    model: "FMC130",
    imei: "49837593896789",
    company: "delta",
  },
  {
    id: "4",
    plate: "DXB U123454",
    device: "Ruptela",
    model: "FMC001",
    imei: "49837593896789",
    company: "deltas",
  },
  {
    id: "5",
    plate: "DXB U12345",
    device: "Teltonika",
    model: "FMC130",
    imei: "49837593896789",
    company: "delta",
  }
];

const ReportTypes = [
  "Fuel",
  "Idle",
  "Connectivity",
  "Movement",
  "Ignition ON/OFF",
  "OverSpeed",
  "Crash",
  "Geofence",
  "GPS",
  "Low Battery",
  "No in Route",
  "Temperature"
];

const Reports = () => {
  const dropdownRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [exportType, setExportType] = useState(false);
  const [exportType1, setExportType1] = useState("none");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checks, setChecks] = useState([]);
  const [searchPlateText, setSearchPlateText] = useState("");
  const [searchDeviceText, setSearchDeviceText] = useState("Device Type");
  const [searchModelText, setSearchModelText] = useState("Device Model");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [data, setData] = useState(ReportData);
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const [searchFold, setSearchFold] = useState(true);

  useEffect(() => {
    setChecks(ReportData)
    const onClick = (e) => {
      if (e.target !== dropdownRef.current) {
        setIsDropdownDisplayed(false)
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    }
  }, [])

  useEffect(() => {
    setData(
      ReportData.filter((item) => {
        return (!searchPlateText || item.plate.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase())) 
          && (searchDeviceText === "Device Type" ? item.device : (!searchDeviceText || item.device === searchDeviceText)) 
          && (searchModelText === "Device Model" ? item.model : (!searchModelText || item.model === searchModelText)) 
          && (searchCompanyText === "Company" ? item.company : (!searchCompanyText || item.company === searchCompanyText));
      })
    )
  }, [searchPlateText, searchDeviceText, searchModelText, searchCompanyText]);

  const handlePlate = (event) => {
    const val = event.target.value;
    setSearchPlateText(val);
  };

  const handleDevice = (event) => {
    const val = event.target.value;
    setSearchDeviceText(val);
  };

  const handleModel = (event) => {
    const val = event.target.value;
    setSearchModelText(val);
  };

  const handleCompany = (event) => {
    const val = event.target.value;
    setSearchCompanyText(val);
  };

  const handleClear = () => {
    setSearchPlateText("")
    setSearchDeviceText("Device Type")
    setSearchModelText("Device Model")
    setSearchCompanyText("Company")
    setData(ReportData);
    setStartDate("");
    setEndDate("")
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tewmpUser = data.map((da) => { return { ...da, isChecked: checked } });
      setData(tewmpUser)
    } else {
      let tewmpUser = data.map((da) => da.plate === name ? { ...da, isChecked: checked } : da);
      setData(tewmpUser)
    }
  }

  return (
    <div className="reports-main w-100 h-100">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <p className="px-5 text-white d-flex justify-content-center align-items-center">
              Total reports <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex position-relative">
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownDisplayed((prevState) => !prevState)
                }}
              >
                <img src="./assets/report.svg" alt="none" />
                <label className="mb-0 text-white border-0">Report Type</label>
                <img className="down-arrow" src="./assets/whiteDown.svg" alt="none" />
              </div>
              <CSVLink
                data={ReportData}
                filename="Reports"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              {isDropdownDisplayed && (
                <div className="portal-report-types bg-white position-absolute p-3"
                  onClick={(e) => { e.stopPropagation() }} ref={dropdownRef}
                >
                  {ReportTypes.map((type, index) => (
                    <div key={index} className="d-flex">
                      <input type="checkbox" />
                      <span className="ml-2" for="check">{type}</span>
                    </div>
                  ))}
                </div>
              )}
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
                <span>Search report</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <input
                  className="field-input"
                  type="text"
                  placeholder="Plate No."
                  value={searchPlateText}
                  onChange={handlePlate}
                />
                <select
                  className="field-select"
                  value={searchDeviceText}
                  onChange={handleDevice}
                  style={{ color: searchDeviceText === "Device Type" ? "#7A7D8B" : "black" }}
                >
                  <option>Device Type</option>
                  <option style={{ color: "black" }}>Ruptela</option>
                  <option style={{ color: "black" }}>Teltonika</option>
                </select>
                <select
                  className="field-select"
                  value={searchModelText}
                  onChange={handleModel}
                  style={{ color: searchModelText === "Device Model" ? "#7A7D8B" : "black" }}
                >
                  <option>Device Model</option>
                  <option style={{ color: "black" }}>FMC001</option>
                  <option style={{ color: "black" }}>FMC130</option>
                </select>
                <div className="field-input">
                  <DatePicker
                    selected={startDate}
                    calendarClassName="rasta-stripes"
                    placeholderText="From"
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    timeInputLabel="Time:"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    showTimeInput
                  />
                </div>
                <div className="field-input">
                  <DatePicker
                    calendarClassName="rasta-stripes"
                    selected={endDate}
                    placeholderText="To"
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    timeInputLabel="Time:"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    showTimeInput
                  />
                </div>
                <select
                  className="field-select"
                  value={searchCompanyText}
                  onChange={handleCompany}
                  style={{ color: searchCompanyText === "Company" ? "#7A7D8B" : "black" }}
                >
                  <option>Company</option>
                  <option style={{ color: "black" }}>delta</option>
                  <option style={{ color: "black" }}>deltas</option>
                </select>
                <div
                  className="tab-button d-flex justify-content-center align-items-center px-4 ml-4"
                  onClick={() => handleClear()}
                >
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-reports-div2 py-3">
                <div className="mb-0 d-flex justify-content-center align-items-center">
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name='allSelect'
                    checked={data.filter(da => da?.isChecked !== true).length < 1}
                  />
                </div>
                <p className="mb-0 text-center">Plate No.</p>
                <p className="mb-0 text-center">Device Type</p>
                <p className="mb-0 text-center">Device Model</p>
                <p className="mb-0 text-center">IMEI</p>
                <p className="mb-0 text-center">Company</p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data.map((item, index) => {
                  return (
                    <div key={index} id="import-reports">
                      <p id="sub1-import-reports">{index + 1}</p>
                      <div className="subsub1-sub2-reports-div2">
                        <div className="item">
                          <input
                            type="checkbox"
                            name={item.plate}
                            onChange={handleChange}
                            checked={item?.isChecked || false}
                          />
                        </div>
                        <p className="item">{item?.plate}</p>
                        <p className="item">{item?.device}</p>
                        <p className="item">{item?.model}</p>
                        <p className="item">{item?.imei}</p>
                        <p className="item">{"delta"}</p>
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
          <div className="tab mobile-title mb-4">
            <div
              aria-current="page"
              className="px-3 d-flex justify-content-center py-2"
              style={{color: "white", backgroundColor: "#1A2678", borderRadius: "30px"}}
            >
              <div className="d-flex content align-items-center">
                <FontAwesomeIcon className="mr-4" icon={faFileContract} />
                Reports
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total Reports <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex position-relative">
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownDisplayed((prevState) => !prevState)
                }}
              >
                <img src="./assets/report.svg" alt="none" />
                <label className="mb-0 text-white border-0">Report Type</label>
                <img className="down-arrow" src="./assets/whiteDown.svg" alt="none" />
              </div>
              <CSVLink
                data={ReportData}
                filename="Reports"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              {isDropdownDisplayed && (
                <div className="portal-report-types bg-white position-absolute p-3"
                  onClick={(e) => { e.stopPropagation() }} ref={dropdownRef}
                >
                  {ReportTypes.map((type, index) => (
                    <div key={index} className="d-flex">
                      <input type="checkbox" />
                      <span className="ml-2" for="check">{type}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 px-4 w-100">
            <div className="sub1-subsub1-sub2-div1 d-flex align-items-center p-2">
              <img
                src="./assets/searchwithperson.svg"
                alt="none"
                className="search-icon-content"
              />
              <span>Search report</span>
              <img className="ml-auto accordion" style={!searchFold ? {transform: 'rotate(180deg)'} : {transform: 'none'}} src="./assets/arrow-down.png" alt="Arrow Down" onClick={() => setSearchFold(!searchFold)} />
            </div>
            {!searchFold && (
              <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Plate No."
                      value={searchPlateText}
                      onChange={handlePlate}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchDeviceText}
                      onChange={handleDevice}
                      style={{ color: searchDeviceText === "Device Type" ? "#7A7D8B" : "black" }}
                    >
                      <option>Device Type</option>
                      <option style={{ color: "black" }}>Ruptela</option>
                      <option style={{ color: "black" }}>Teltonika</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <div className="field-input">
                      <DatePicker
                        selected={startDate}
                        calendarClassName="rasta-stripes"
                        placeholderText="From"
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        showTimeInput
                      />
                    </div>
                  </div>
                  <div className="col-6 px-1">
                    <div className="field-input">
                      <DatePicker
                        calendarClassName="rasta-stripes"
                        selected={endDate}
                        placeholderText="To"
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        showTimeInput
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchModelText}
                      onChange={handleModel}
                      style={{ color: searchModelText === "Device Model" ? "#7A7D8B" : "black" }}
                    >
                      <option>Device Model</option>
                      <option style={{ color: "black" }}>FMC001</option>
                      <option style={{ color: "black" }}>FMC130</option>
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchCompanyText}
                      onChange={handleCompany}
                      style={{ color: searchCompanyText === "Company" ? "#7A7D8B" : "black" }}
                    >
                      <option>Company</option>
                      <option style={{ color: "black" }}>delta</option>
                      <option style={{ color: "black" }}>deltas</option>
                    </select>
                  </div>
                </div>
                <div className="tab-button d-flex justify-content-center align-items-center px-4 ml-auto py-1" onClick={() => handleClear()}>
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            )}
          </div>
          <div className={`sub2-div2 d-flex flex-column px-4 w-100 overflow-auto ml-0 ${searchFold && 'folded'}`}>
            {data?.map((item, index) => {
              return (
                <div id="import-reports" key={index}>
                  <p id="sub1-import-reports">{index + 1}</p>
                  <div className="subsub1-sub2-reports-div2 d-flex flex-column align-items-center py-2 px-3">
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
                      <p className="mb-0 px-2 col-4 text-white">IMEI</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.imei}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Company</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">delta</p>
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

export default Reports;
