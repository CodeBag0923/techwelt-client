import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, LoadScriptNext, OverlayView } from '@react-google-maps/api';

const CustomMarker = ({label}) => (
  <div className="position-relative d-flex flex-column align-items-center">
    <img className="ml-3" src="./assets/map_car.png" alt="marker" />
    <div className="d-flex flex-column align-items-center marker-info px-2">
      <p className="mb-0">{label}</p>
    </div>
  </div>
)

const GoogleMapComponent = ({devices, point}) => {
  const mapRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_APIKEY
  })

  const [center, setCenter] = useState({
    lat: 41.3851,
    lng: 2.1734
  })

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (point?.lat && point?.lng) {
      setCenter({
        lat: point.lat,
        lng: point.lng
      })
    }
  }, [point]);

  useEffect(() => {
    const fitBounds = () => {
      if (mapRef.current && devices && devices.length > 0) {
        const bounds = new window.google.maps.LatLngBounds();
        devices.forEach(device => {
          bounds.extend({ lat: device.vehicle.lat, lng: device.vehicle.lng });
        });
        mapRef.current.fitBounds(bounds);
      }
    }

    fitBounds();
  }, [devices]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      // zoom={12}
      center={center}
      onLoad={onLoad}
    >
      {devices?.map(device => (
        <OverlayView 
          key={device.id} 
          position={{lat: device.vehicle.lat, lng: device.vehicle.lng}}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <CustomMarker label={device.vehicle.vehicleName} />
        </OverlayView>
      ))}
    </GoogleMap>
  ) : <></>

  // return (
  //   <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_APIKEY}>
  //     <GoogleMap
  //       mapContainerStyle={mapStyles}
  //       // zoom={12}
  //       center={center}
  //       onLoad={onLoad}
  //     >
  //       {devices?.map(device => (
  //         <OverlayView 
  //           key={device.id} 
  //           position={{lat: device.vehicle.lat, lng: device.vehicle.lng}}
  //           mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  //         >
  //           <CustomMarker label={device.vehicle.vehicleName} />
  //         </OverlayView>
  //       ))}
  //     </GoogleMap>
  //   </LoadScriptNext>
  // );
};

export default GoogleMapComponent;
