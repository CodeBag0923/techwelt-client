import React,{useState,useEffect} from "react";
import { useMediaQuery } from "@mui/material";
import { CSVLink } from "react-csv";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import "react-datepicker/dist/react-datepicker.css";
import "./Alerts.css";

const AlertData = [
  {
    id: "1",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "2",
    plate: "DXB U123455",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltas",
  },
  {
    id: "3",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "4",
    plate: "DXB U123455",
    alert: "Enter Geofences",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltass",
  },
  {
    id: "5",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "6",
    plate: "DXB U123455",
    alert: "Enter Geofences",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltas",
  },
  {
    id: "7",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "8",
    plate: "DXB U123455",
    alert: "Enter Geofences",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltas",
  },
  {
    id: "9",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "10",
    plate: "DXB U123455",
    alert: "Enter Geofences",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltass",
  },
  {
    id: "11",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "12",
    plate: "DXB U123455",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltass",
  },
  {
    id: "13",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "14",
    plate: "DXB U123455",
    alert: "Enter Geofences",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltass",
  },
  {
    id: "15",
    plate: "DXB U12345",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "delta",
  },
  {
    id: "16",
    plate: "DXB U123455",
    alert: "Enter Geofence",
    location: {
      gps: "24.35164,54.514485",
      path: "AI Nahyan St,Duabi ,UAE",
    },
    time:"11/12/2023 10:31 PM",
    company: "deltass",
  }
];

const Alerts = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchPlateText, setSearchPlateText] = useState("");
  const [searchAlertText, setSearchAlertText] = useState("");
  const [searchImeiText, setSearchImeiText] = useState("");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [data, setData] = useState(AlertData);
  const [searchFold, setSearchFold] = useState(true);

  useEffect(() => {
    setData(
      AlertData.filter((item)=>{
        return (!searchPlateText || item.plate.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase())) 
          && (!searchAlertText || item.alert.toLocaleLowerCase().includes(searchAlertText.toLocaleLowerCase())) 
          && (searchCompanyText=="Company" ? item.company : (!searchCompanyText || item.company===searchCompanyText));
      })
    )
  }, [searchPlateText,searchAlertText,searchCompanyText]);

  const handlePlate = (event) => {
    const val = event.target.value;
    setSearchPlateText(val);
  };

  const handleImei = (event) => {
    const val = event.target.value;
    setSearchImeiText(val);
  };

  const handleAlert = (event) => {
    const val = event.target.value;
    setSearchAlertText(val);
  };

  const handleCompany = (event) => {
    const val = event.target.value;
    setSearchCompanyText(val);
  };

  const handleClear=()=>{
    setSearchPlateText("");
    setSearchAlertText("");
    setSearchCompanyText("Company");
    setData(AlertData);
    setStartDate("");
    setEndDate("");
  }

  return (
    <div className="alerts-main w-100 h-100">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <p className="px-5 text-white d-flex justify-content-center align-items-center">
              Total alerts <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <CSVLink
                data={AlertData}
                filename="Alert"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly mx-1 align-items-center">
                  <img src="./assets/export.svg" alt="none"/>
                  <button>Export</button>
                </div>
              </CSVLink>
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
                <span>Search alert</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <input
                  className="field-input"
                  type="text"
                  placeholder="Plate No."
                  value={searchPlateText}
                  onChange={handlePlate}
                />
                <input
                  className="field-input"
                  type="text"
                  placeholder="Alert Type"
                  value={searchAlertText}
                  onChange={handleAlert}
                />
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
                  style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
                >
                  <option>Company</option>
                  <option>delta</option>
                  <option>deltas</option>
                  <option>deltass</option>
                </select>
                <div className="tab-button d-flex justify-content-center align-items-center px-4 ml-4" onClick={() => handleClear()}>
                  <img src="./assets/clear.svg" alt="none"/>
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-alerts-div2 py-3">
                <p className="mb-0 text-center">Plate No.</p>
                <p className="mb-0 text-center">Alert Type</p>
                <p className="mb-0 text-center">Location</p>
                <p className="mb-0 text-center">Time</p>
                <p className="mb-0 text-center">Company</p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data.map((item, index)=>{
                  return (
                    <div key={index} id="import-alerts">
                      <p id="sub1-import-alerts">{item.id}</p>
                      <div className="subsub1-sub2-alerts-div2">
                        <p className="item">{item.plate}</p>
                        <p className="item">{item.alert}</p>
                        <div className="item text-center flex-column">
                          <a href='https://goo.gl/maps/sb8f95HXVLo6e7st8' target='_blank' className="sub1-import-gps-path-alerts" style={{textDecoration:"none",color:"#1A3096"}} rel="noreferrer">{item.location.gps}</a>
                          <p>{item.location.path}</p>
                        </div>
                        <p className="item">{item.time}</p>
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
          <div className="tab mobile-title mb-4">
            <div
              aria-current="page"
              className="px-3 d-flex justify-content-center py-2"
              style={{color: "white", backgroundColor: "#1A2678", borderRadius: "30px"}}
            >
              <div className="d-flex content align-items-center">
                <FontAwesomeIcon className="mr-4" icon={faBell} />
                Alerts
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total alerts <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <CSVLink
                data={AlertData}
                filename="Alert"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly mx-1 align-items-center">
                  <img src="./assets/export.svg" alt="none"/>
                  <button>Export</button>
                </div>
              </CSVLink>
            </div>
          </div>
          <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 px-4 w-100">
            <div className="sub1-subsub1-sub2-div1 d-flex align-items-center p-2">
              <img
                src="./assets/searchwithperson.svg"
                alt="none"
                className="search-icon-content"
              />
              <span>Search alert</span>
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
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Alert Type"
                      value={searchAlertText}
                      onChange={handleAlert}
                    />
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
                    <input
                      className="field-input"
                      type="numder"
                      placeholder="IMEI"
                      value={searchImeiText}
                      onChange={handleImei}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchCompanyText}
                      onChange={handleCompany}
                      style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
                    >
                      <option>Company</option>
                      <option>delta</option>
                      <option>deltas</option>
                      <option>deltass</option>
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
                <div id="import-alerts" key={index}>
                  <p id="sub1-import-alerts">{index + 1}</p>
                  <div className="subsub1-sub2-alerts-div2 d-flex flex-column align-items-center py-2 px-3">
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Plate No.</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.plate}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Alert Type</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.alert}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Location</p>
                      <div className="text-center mb-0 px-2 col-8 item justify-content-start flex-column align-items-start">
                        <a href='https://goo.gl/maps/sb8f95HXVLo6e7st8' target='_blank' className="sub1-import-gps-path-alerts" style={{textDecoration:"none",color:"rgb(212 227 208)"}} rel="noreferrer">{item.location.gps}</a>
                        <p className="mb-0">{item.location.path}</p>
                      </div>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Time</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.time}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Company</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.company}</p>
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

export default Alerts;
