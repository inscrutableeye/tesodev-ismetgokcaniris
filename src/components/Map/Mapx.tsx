import * as React from "react";
import Map from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { useScreenSize } from "../Hook/useScreenSize";
import MapxMobile from "./MapxMobile";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g"; // Set your mapbox token her

export default function Mapx() {

  const [mobileHeaderToggle, setMobileHeaderToggle] = useState<boolean>(false)
  const { screenControl } = useScreenSize(1024)

  useEffect(() => {
    if (screenControl) {
      setMobileHeaderToggle(false)
    }
  }, [screenControl])
  return (
     <>
     {screenControl ?  (
      <MapxMobile/>
     ) : 
    <Map
    
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      style={{ width: 300, height: 200 , marginLeft:700 , marginTop:50, marginBottom:50  }}
      mapStyle="mapbox://styles/simmmple/ckwxecg1wapzp14s9qlus38p0"
      mapboxAccessToken={MAPBOX_TOKEN}
    ></Map>
  }
    </>
  );
}