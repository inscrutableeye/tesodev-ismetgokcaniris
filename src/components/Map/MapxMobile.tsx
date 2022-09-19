import * as React from "react";
import Map from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";


const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g"; // Set your mapbox token her

export default function MapxMobile() {


  return (
    <Map
    
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      style={{ width: 300, height: 100 , marginLeft:40 , marginTop:50, marginBottom:50  }}
      mapStyle="mapbox://styles/simmmple/ckwxecg1wapzp14s9qlus38p0"
      mapboxAccessToken={MAPBOX_TOKEN}
    ></Map>
  );
}