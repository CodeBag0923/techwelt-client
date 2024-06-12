import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { LiveChatWidget, EventHandlerPayload } from "@livechat/widget-react";
import MapGL, { Marker } from "react-map-gl";

import GoogleMapComponent from "./GoogleMap";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const getData = useLocation().state;
  const devices = useSelector((state) => state.devicesList.devices);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const mapMode = useSelector((state) => state.global.mapMode);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isCar, setIsCar] = useState(false);
  const [center, setCenter] = useState({ lat: 33.748843, lng: -84.387743 });
  const [location, setLocation] = useState(center);
  const [searchText, setSearchText] = useState("");
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    bearing: 0,
    pitch: 0,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (mapMode === 2) {
      if (getData?.lng && getData?.lat) {
        setViewport((prevViewport) => ({
          ...prevViewport,
          latitude: getData?.lat,
          longitude: getData?.lng,
        }));
      } else {
        if (devices?.length > 0) {
          const bounds = devices.reduce(
            (acc, device) => {
              return [
                Math.min(acc[0], device.vehicle.lat),
                Math.min(acc[1], device.vehicle.lng),
                Math.max(acc[2], device.vehicle.lat),
                Math.max(acc[3], device.vehicle.lng),
              ];
            },
            [
              Number.POSITIVE_INFINITY,
              Number.POSITIVE_INFINITY,
              Number.NEGATIVE_INFINITY,
              Number.NEGATIVE_INFINITY,
            ]
          );

          const newViewport = {
            ...viewport,
            latitude: (bounds[0] + bounds[2]) / 2,
            longitude: (bounds[1] + bounds[3]) / 2,
            zoom: calculateZoomLevel(bounds),
          };

          setViewport(newViewport);
        }
      }
    }
  }, [devices, mapMode, getData]);

  const calculateZoomLevel = (bounds) => {
    const maxZoom = 20;
    const lngDiff = Math.abs(bounds[1] - bounds[3]);
    const latDiff = Math.abs(bounds[0] - bounds[2]);
    const lngZoom = lngDiff ? Math.log(360 / lngDiff) / Math.LN2 : maxZoom;
    const latZoom = latDiff ? Math.log(180 / latDiff) / Math.LN2 : maxZoom;
    const zoom = Math.min(lngZoom, latZoom, maxZoom);
    return zoom;
  };

  return (
    <div className="map-container position-relative d-flex justify-content-center w-100">
      {mapMode === 1 ? (
        <GoogleMapComponent devices={devices} point={getData} />
      ) : (
        <MapGL
          {...viewport}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onMove={(evt) => setViewport(evt.viewport)}
        >
          {devices?.map((device, index) => (
            <Marker
              key={index}
              latitude={device.vehicle.lat}
              longitude={device.vehicle.lng}
            >
              <div className="position-relative d-flex flex-column align-items-center">
                <img className="ml-3" src="./assets/map_car.png" alt="marker" />
                <div className="d-flex flex-column align-items-center marker-info px-2">
                  <p className="mb-0">{device.vehicle.vehicleName}</p>
                </div>
              </div>
            </Marker>
          ))}
        </MapGL>
      )}
      {isMobile && (
        <input
          className="field-input position-absolute"
          type="text"
          placeholder="Search vehicle..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      )}
    </div>
  );
};

export default Dashboard;
