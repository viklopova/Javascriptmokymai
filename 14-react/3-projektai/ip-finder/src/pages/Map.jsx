import React, { useState, useEffect } from "react";
import { MAP_API_KEY } from "../utils/constants";
import MapBox, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { ImEvil } from "react-icons/im";

const Map = (props) => {
    const [viewPort, setViewPort] = useState({
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 5,
        width: '100%',
        height: '100%'
    });

    useEffect(() => {
        const tmpViewport = {...viewPort};
        tmpViewport.latitude = props.latitude;
        tmpViewport.longitude = props.longitude;
        tmpViewport.zoom = 14;
    
        setViewPort(tmpViewport);
    }, [props])

  return (
    <MapBox
      mapboxAccessToken={MAP_API_KEY}
      {...viewPort}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={(vp) => setViewPort(vp)}
      style={{ width: 600, height: 400, borderRadius: 8 }}
    >
      <Marker latitude={props.latitude} longitude={props.longitude} anchor="bottom">
        <div style={{ color: "green", fontSize: 32 }}>
          <ImEvil />
        </div>
      </Marker>
    </MapBox>
  );
};

export default Map;
