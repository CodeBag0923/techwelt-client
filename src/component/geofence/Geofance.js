import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import mapboxgl from 'mapbox-gl';

import "./Geofance.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Geofance = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const devices = useSelector((state) => state.devicesList.devices);

  const [center, setCenter] = useState({ lat: 30.3048216, lng: -9.4867983 });
  const [bound1, setBound1] = useState()
  const [isBound1, setIsBound1] = useState(true)
  const [isBound2, setIsBound2] = useState(false)
  const [bound2, setBound2] = useState()
  const [zone1, setZone1] = useState(".1rem solid red");
  const [zone1State, setZone1State] = useState(true);
  const [zone2, setZone2] = useState(".1rem solid grey");
  const [zone2State, setZone2State] = useState(false);
  const [zone3, setZone3] = useState(".1rem solid grey");
  const [zone3State, setZone3State] = useState(false);
  const [radius, setRadius] = useState(0);
  const [circleCenter, setCircleCenter] = useState();
  const [users, setUsers] = useState([])
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false)
  const [searchPlateText, setSearchPlateText] = useState("");
  const [devicesData, setDevicesData] = useState(devices);

  const circleOptions = {
    fillColor: "coral",
    fillOpacity: 0.3,
    strokeWeight: 2,
    strokeColor: "coral",
    clickable: false,
    editable: true,
    zIndex: 1
  };
  const Data = [
    {
      name: "abc1"
    },
    {
      name: "abc2"
    },
    {
      name: "abc3"
    },
    {
      name: "abc4"
    }
  ]
  const States = [
    {
      name: "AUH Y12331"
    },
    {
      name: "FUJ L22145"
    },
  ]

  useEffect(() => {
    setDevicesData(
      devices?.filter((item) => {
        return (!searchPlateText || item?.vehicle?.vehicleName.toLocaleLowerCase().includes(searchPlateText.toLocaleLowerCase()))
      })
    )
  }, [searchPlateText, devices]);

  useEffect(() => {
    setUsers(States)    
    const onClick = (e) => {
      if (e.target !== dropdownRef.current) {
        setIsDropdownDisplayed(false)
      }
    };
    document.addEventListener('click', onClick);

    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 9
    });

    return () => {
      map.remove();
      document.removeEventListener('click', onClick);
    }
  }, [])

  const handleZone = (val, state) => {
    if (val == "zone1") {
      setZone1State(true);
      setZone2State(false);
      setZone3State(false);
      setZone1(".1rem solid red");
      setZone2(".1rem solid grey");
      setZone3(".1rem solid grey");
    } else if (val == "zone2") {
      setZone2State(true);
      setZone1State(false);
      setZone3State(false);
      setZone2(".1rem solid red");
      setZone1(".1rem solid grey");
      setZone3(".1rem solid grey");
    } else {
      setZone3State(true);
      setZone2State(false);
      setZone1State(false);
      setZone3(".1rem solid red");
      setZone2(".1rem solid grey");
      setZone1(".1rem solid grey");
    }
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(e.target)
    if (name === "allSelect") {
      console.log(name + "checkec"+ checked)
      let tewmpUser = devicesData.map((user) => { return { ...user, isChecked: checked } });
      setDevicesData(tewmpUser)
    } else {
      console.log(name + "checkec"+ checked)
      let tewmpUser = devicesData.map((user) => user.vehicle.vehicleName === name ? { ...user, isChecked: checked } : user);
      setDevicesData(tewmpUser)
    }
  }

  return (
    <div className="geofence-main">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="sub1-div1 d-flex justify-content-between align-items-center w-100 h-100">
          <div className="sub1-geofence-div1 d-flex justify-content-center align-items-center bg-white px-5 py-3">
            <div className="subsub1-sub1-geofence-div1 d-flex flex-column justify-content-center align-items-center">
              <label>Select or Create Zone</label>
              <select className='text-center'>
                <option
                  disabled
                  selected
                  style={{ fontSize: "1.6rem", color: "#7A7D8B" }}
                >
                  Geozone
                </option>
                {/* <option style={{ color: "black" }}>hjksh</option>
                <option style={{ color: "black" }}>ljb</option>
                <option style={{ color: "black" }}>lkh</option> */}
              </select>
            </div>
            <div className="subsub2-sub1-geofence-div1 mx-5 my-1"></div>
            <div className="subsub3-sub1-geofence-div1 d-flex flex-column justify-content-center align-items-center position-relative">
              <label>Select Vehicle or Company</label>
              <button
                className='text-center state-dropdown'
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownDisplayed((prevState) => !prevState)
                }}
              >
                Plate No.
              </button>
              {isDropdownDisplayed && <div className='panel' style={{ zIndex: 9999 }} onClick={(e) => { e.stopPropagation() }} ref={dropdownRef}>
                <div className='fieldAll' >
                  <input type='checkbox'
                    onChange={handleChange} name='allSelect' checked={devicesData.filter(user => user?.isChecked !== true).length < 1}
                  />
                  <span >All Vehicles</span>
                </div>
                {devicesData.map((user) => (
                  <div className='field' >
                    <input type='checkbox'
                      name={user.vehicle.vehicleName} onChange={handleChange} checked={user?.isChecked || false}
                    />
                    <label >{user.vehicle.vehicleName}</label>
                  </div>))}
              </div>}
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="tab-button d-flex justify-content-evenly align-items-center my-1">
              <img src="./assets/Save.svg" alt="none" />
              <button>Save</button>
            </div>
            <div className="tab-button d-flex justify-content-evenly align-items-center my-1">
              <img src="./assets/Delete.svg" alt="none" />
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className="geofence-div2">
        <div id='map-container' />
        <div
          className="sub1-geofence-div2"
          style={{ border: zone1 }}
          onClick={() => handleZone("zone1", true)}
        >
          <img src="./assets/img1.png" alt="none" />
        </div>
        <div
          className="sub2-geofence-div2"
          style={{ border: zone2 }}
          onClick={() => handleZone("zone2", true)}
        >
          <img src="./assets/img2.png" alt="none" />
        </div>
        <div className="sub3-geofence-div2">
          <img
            src="./assets/img3.png"
            alt="none"
            style={{ border: zone3 }}
            onClick={() => handleZone("zone3", true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Geofance;
