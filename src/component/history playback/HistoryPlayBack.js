import React, { useEffect, useState } from "react";
import "./HistoryPlayBack.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faForward,
  faPause,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, PolylineF, OverlayViewF, useJsApiLoader } from "@react-google-maps/api";
import { getHistoryList } from "../../services/axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_USERTOKEN } from "../../redux/store/types";
import { getDevices } from "../../redux/actions/devices";

const HistoryPlayBack = () => {
  const getData = useLocation();
  const [onVehiclePlay, setPlayState] = useState(false);
  const dispatch = useDispatch();
  const [polylineData, setPolyLineData] = useState([]);
  const [currentTime, setCurrentTime] = useState(getStyleTime(new Date()));
  const deviceListData = useSelector((state) => state.devicesList);
  const { token, devices } = deviceListData;
  const [markerLat, setMarkerLat] = useState();
  const [markerLng, setMarkerLng] = useState();
  const [timeInterval, setTimeInterval] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [speed] = useState(1);
  const fasterStep = [1, 2, 5, 10]
  const [fasterVal, setFasterVal] = useState(0)
  const handleFaster = () => {
    console.log(speed)
    if (fasterVal < 3)
      setFasterVal(fasterVal + 1)
  }

  const handleLater = () => {
    console.log(speed)
    if (fasterVal >= 1)
      setFasterVal(fasterVal - 1)
  }

  const [region, setRegion] = useState({
    latitude: markerLat,
    longitude: markerLng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  function getStyleTime(today) {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_APIKEY,
    libraries: ['places'],
  });

  useEffect(() => {
    console.log(`polyline::`, polylineData);
  }, [polylineData])

  const data = {
    start: getData.state.startDate,
    end: getData.state.endDate,
    vehicleName: getData.state?.vehicleName,
    vehicleType: getData.state?.vehicleType,
    deviceImei: getData.state?.deviceImei,
    selectedVehicle: getData.state?.selectedVehicle
  }

  useEffect(() => {

    if (localStorage.getItem("token") != null) {
      dispatch({
        type: GET_USERTOKEN,
        payload: localStorage.getItem("token")
      });

      const tokenData = {
        token: localStorage.getItem("token")
      };
      (async () => {
        dispatch(getDevices(tokenData));
      })();
      if (devices?.at(data.selectedVehicle)?.teltonikas?.at(0)?.lat) {
        setMarkerLat(devices?.at(data.selectedVehicle)?.teltonikas?.at(0)?.lat);
        setMarkerLng(devices?.at(data.selectedVehicle)?.teltonikas?.at(0)?.lng);
      }
      else {
        setMarkerLat(24.4295083)
        setMarkerLng(54.4274399)
      }
    }
    // if (!data.selectedVehicle) {
    //   navigate("/Dashboard")
    // }
    console.log("🚀 ~ file: HistoryPlayBack.js:90 ~ useEffect ~ devices?.at(data.selectedVehicle)?.teltonikas?.at(0)?.lat:", devices?.at(data.selectedVehicle)?.teltonikas?.at(0)?.lat)


  }, [dispatch]);

  useEffect(() => {
    const getHistory = async () => {
      const historyData = {
        token: token,
        deviceImei: data.deviceImei,
        firstDate: formatISODate(data.start),
        secondDate: formatISODate(data.end)
      }
      console.log("🚀 ~ file: HistoryPlayBack.js:51 ~ getHistory ~ historyData:", historyData)
      var res = await getHistoryList(historyData)
      setHistoryData(res)
      console.log("🚀 ~ file: HistoryPlayBack.js:51 ~ getHistory ~ res:", res)
    }
    getHistory();
  }, [])



  useEffect(() => {
    console.log("__________", markerLat)
  }, [markerLat])

  useEffect(() => {

  }, [sliderValue])


  const handleStartPlay = () => {
    console.log("onVehiclePlay::::", onVehiclePlay)
    console.log("markerLat", markerLat)
    setRegion({
      latitude: markerLat,
      longitude: markerLng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    })
    console.log("region", region)


    if (onVehiclePlay) {
      setPlayState(false)
      console.log("timeInterval before CLEAR::::", timeInterval)
      clearInterval(timeInterval)
    }

    else {

      if (!historyData || historyData.length === 0) {
        alert('HISTORY DATA IS EMPTY');
        return
      }

      setPlayState(true)
      let datalength = historyData.length;
      let posIndex = 0;

      setPolyLineData([])

      const moveVehicle = () => {
        if (posIndex === datalength - 1) {
          console.log("Play finished and timeInterval is :::::", timeInterval)
          clearInterval(timeInterval)
          setPlayState(false)
          return
        }
        setMarkerLat(historyData[posIndex].lat)
        console.log("🚀 ~ file: HistoryPlayBack.js:153 ~ moveVehicle ~ historyData[posIndex].lat:", historyData[posIndex].lat)
        setMarkerLng(historyData[posIndex].lng)
        setCurrentTime(historyData[posIndex].transferDate);

        let tempArray = [];
        for (let index = 0; index <= posIndex; index++) {
          tempArray.push({ lat: historyData[index].lat, lng: historyData[index].lng })
        }
        setPolyLineData(tempArray)
        // if (Math.abs(region.latitude - historyData[posIndex].lat) > 0.0001 || Math.abs(region.longitude - historyData[posIndex].lng) > 0.0002)
        //   setRegion({
        //     latitude: historyData[posIndex].lat,
        //     longitude: historyData[posIndex].lng,
        //     latitudeDelta: 0.005,
        //     longitudeDelta: 0.005,
        //   })

        setSliderValue((posIndex + 1) / datalength * 100)
        posIndex++;
      }

      // timeInterval = setInterval(moveVehicle, 1000);
      setTimeInterval(setInterval(moveVehicle, 1000 / fasterStep[fasterVal]));

      // intervalList.push(timeInterval);
      // setIntervalList(intervalList)
      console.log("timeInterval after SET:::::", timeInterval)

    }
  }

  const formatISODate = (date) => {
    var jj = new Date(date);
    return jj.toISOString();
  }
  const formatLocalDate = (date) => {
    var jj = new Date(date);
    return jj.toLocaleDateString() + " " + jj.toLocaleTimeString();
  }

  const handleSlider = (e) => {
    setSliderValue(e.target.value)
    console.log("🚀 ~ file: HistoryPlayBack.js:226 ~ handleSlider ~ e.target.value:", e.target.value)
  }

  return (
    <div className="history-pb">
      {/* <div
        className="history-pb-left"
        style={{ width: "30rem", height: "93rem" }}
      >
        <SideBar />
      </div>
      <div
        className="history-pb-right"
        style={{ width: "161.9rem", height: "92.9rem" }}
      >
        <div className="history-pb-nav">
          <Header />
        </div> */}
        <div className="history-pb-main">
          <div className="history-pb-contaner">
            <div className="history-pb-div1">
              <div className="sub1-history-pb-div1">
                <p>History Playback</p>
                <p>{data.vehicleName}</p>
                <p>{formatLocalDate(data.start) + " - "} </p>
                <p>{formatLocalDate(data.end)}</p>
              </div>
            </div>
            <div className="history-pb-div2">
              <div className="dashboard-contaner">
                {
                  isLoaded &&
                  <GoogleMap
                    // onLoad={onMapLoad}
                    center={{ lat: markerLat, lng: markerLng }}
                    mapContainerClassName="map-container"
                    zoom={15}
                  >
                    {/* <MarkerF icon={{ url: require("./blueCar.svg").default }}
                      position={{ lat: markerLat, lng: markerLng }} /> */}
                    <OverlayViewF
                      position={{ lat: markerLat, lng: markerLng }}
                      // position={{ lat: item.vehicle.teltonikas.at(0).lat, lng: item.vehicle.teltonikas.at(0).lng }}
                      mapPaneName={"overlayMouseTarget"}
                      getPixelPositionOffset={(width, height) => ({
                        x: -(width / 2),
                        y: -(height / 2)
                      })}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="./assets/map_car.png" alt="map_car" />

                      </div>
                    </OverlayViewF>
                    {/* <Polyline
                      path={polydata1}
                      geodesic={true}
                      options={{
                        strokeColor: "#000",
                        strokeOpacity: 0.75,
                        strokeWeight: 5
                      }}
                    /> */}
                    <PolylineF path={polylineData}
                      geodesic={true}
                      options={{
                        strokeColor: "#00f",
                        strokeOpacity: 1,
                        strokeWeight: 4,
                        zIndex: 99999
                      }} />
                    {/* <MarkerF
                      ref={markerRef}
                      coordinate={{ latitude: markerLat, longitude: markerLng }}
                      onPress={(event) => {
                      }}
                    >
                      <div >
                        <img src="./assets/blueCar.svg" />
                      </div>
                    </MarkerF> */}
                  </GoogleMap>
                }</div>
            </div>

            <div className="player-main">
              <div className="left-player-main">
                {/* Left */}
                <div className="sub1-player-main-div1">
                  <div className="subsub1-sub1-player-main-div1" onClick={handleLater}>
                    <FontAwesomeIcon icon={faBackward} />
                  </div>
                  <div
                    className="subsub2-sub1-player-main-div1"
                    onClick={() => handleStartPlay()}
                  >
                    <FontAwesomeIcon
                      icon={!onVehiclePlay === true ? faPlay : faPause}
                    />
                  </div>
                  <div className="subsub3-sub1-player-main-div1" onClick={handleFaster}>
                    <FontAwesomeIcon icon={faForward} />
                  </div>
                </div>
                <div className="sub2-player-main-div1">
                  <p >{fasterStep[fasterVal] + "x"}</p>
                </div>
              </div>

              <div className="right-player-main">
                <div className="sub1-right-player-main">
                  <div className="subsub1-sub1-right-player-main">
                    <span>0:10 / 2:10</span>
                  </div>
                  <div className="subsub2-sub1-right-player-main">
                    <input type="range" className="range" min={0} max={100} defaultValue={0} value={sliderValue} onChange={(e) => {
                      handleSlider(e)
                    }} />
                  </div>
                </div>
                <div className="sub2-right-player-main">
                  <p>{formatISODate(data.start)}</p>

                  <span>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>

                  <p>{formatISODate(data.end)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div>
      <Outlet /> */}
    </div>
  );
};

export default HistoryPlayBack;
