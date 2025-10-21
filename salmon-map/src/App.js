import { useState } from "react";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  // your map code here
  return (
    <div>
      <h2>Salmon Map</h2>
      <MapContainer center={[48.8239, -122.5951]} zoom={11} style={{ height: "70vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
