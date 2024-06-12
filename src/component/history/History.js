import React, { useState } from "react";
import "./History.css";
import DatePicker from "react-datepicker";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const History = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const getData = useLocation();

  const data = {
    vehicleName: getData.state?.vehicleName,
    vehicleType: getData.state?.vehicleType,
    deviceImei: getData.state?.deviceImei,
    selectedVehicle: getData.state?.selectedVehicle
  }
  const handlNavigate = () => {
    if (startDate === "") {
      alert("Please select start date!")
      return;
    }
    else if (endDate === "") {
      alert("Please select end date!")
      return;
    }

    // // Convert the Date object to a Unix timestamp (in seconds)
    // const startTimeStamp = Math.floor(startDate.getTime() / 1000);
    // const endTimeStamp = Math.floor(endDate.getTime() / 1000);

    // if (startTimeStamp > endTimeStamp) {
    //   alert("End date must be later then start date!")
    //   return;
    // }

    navigate("/HistoryPlayBack", { state: { startDate: startDate, endDate: endDate, vehicleName: data?.vehicleName, deviceImei: data.deviceImei, selectedVehicle: data.selectedVehicle } })
  }

  const [center] = useState({ lat: 34, lng: -118 });
  let apikey = localStorage.getItem("apikey");
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apikey,
    libraries: ['places', 'drawing'],
  });

  return (
    <div className="history">
      {/* <div className="history-left" style={{ width: "30rem", height: "93rem" }}>
        <SideBar />
      </div>
      <div
        className="history-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="history-nav">
          <Header />
        </div> */}
        <div className="history-main">
          <div className="history-contaner">
            <div className="histroy-div1">
              <div className="sub1-histroy-div1">
                <div className="left-sub1-histroy-div1">
                  <div className="sub1-left-sub1-histroy-div1">
                    <div style={{ marginRight: "2rem", marginLeft: "2rem" }}>
                      <img
                        src="./assets/searchwithperson.svg"
                        alt="none"
                        className="history-search-icon"
                      />
                    </div>
                    <span>Search Vehicle History</span>
                  </div>

                  <div className="sub2-left-sub1-histroy-div1">
                    <span>{data?.vehicleName}</span>
                    <div>
                      {
                        data.vehicleType === "Car" ?

                          <img
                            src="./assets/blueCar.svg"
                            alt="none"
                            className="history-car-icon"
                          />
                          :
                          <img
                            src="./assets/Truck.svg"
                            alt="none"
                            className="history-car-icon"
                          />

                      }
                    </div>
                  </div>

                  <div className="sub3-left-sub1-histroy-div1">
                    <div className="subsub1-sub3-left-sub1-histroy-div1">
                      <div>
                        <p className="HstartP">From</p>
                        <div className="Hstart">

                          <DatePicker
                            selected={startDate}
                            calendarClassName="rasta-stripes"

                            placeholderText="From"
                            onChange={(date) => {
                              setStartDate(date);
                            }}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            timeInputLabel="Time:"
                            dateFormat="dd/MM/yyyy h:mm aa"
                            showTimeInput
                          />
                        </div>
                      </div>
                      <div>
                        <p className="HendP">To</p>
                        <div className="Hend">

                          <DatePicker
                            calendarClassName="rasta-stripes"
                            selected={endDate}
                            placeholderText="To"
                            onChange={(date) => {
                              setEndDate(date);
                            }}
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
                  </div>
                </div>
                <div className="right-sub1-histroy-div1">
                  <div className="sub1-right-sub1-histroy-div1" onClick={() => handlNavigate()}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="./assets/Searchwithpersonwhite.svg" alt="none" />
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="histroy-div2">
              <div className="dashboard-contaner">
                {
                  isLoaded &&
                  <GoogleMap
                    // onLoad={onMapLoad}
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={15}
                  >

                  </GoogleMap>
                }</div>
              {/* <img src="./assets/map.png" alt="none" className="history-map" /> */}
            </div>
          </div>
        </div>
      {/* </div>
      <Outlet /> */}
    </div>
  );
};

export default History;
