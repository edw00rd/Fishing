import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const center = [48.8239, -122.5951];

  return (
    <div style={{ height: "100vh", width: "100%", margin: 0, padding: 0 }}>
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>Salmon Map</h2>
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: "85vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          positions={[
            [48.8239, -122.5951],
            [48.85, -122.58],
            [48.87, -122.56],
          ]}
          color="#0077B6"
          weight={5}
        >
          <Popup>Lummi River Section</Popup>
        </Polyline>
      </MapContainer>
    </div>
  );
}

export default App;
