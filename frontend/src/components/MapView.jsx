import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

function MapView() {
  const [position, setPosition] = useState([12.9716, 77.5946]);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setPosition([
          location.coords.latitude,
          location.coords.longitude,
        ]);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    axios
      .get("https://emergency-locator-1qbl.onrender.com/api/incidents/")
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={11}
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          <strong>📍 You are here</strong>
        </Popup>
      </Marker>

      {incidents.map((incident) => (
        <Marker
          key={incident.id}
          position={[incident.latitude, incident.longitude]}
        >
          <Popup>
            <h3>
              {incident.emergency_type === "Accident" && "🚗 Accident"}
              {incident.emergency_type === "Fire" && "🔥 Fire"}
              {incident.emergency_type === "Medical" && "🏥 Medical"}
              {incident.emergency_type === "Crime" && "🚔 Crime"}
            </h3>

            <p>
              <strong>Description:</strong>
              <br />
              {incident.description}
            </p>

            <p>
              <strong>Status:</strong> {incident.status}
            </p>

            <p>
              <strong>Latitude:</strong> {incident.latitude}
              <br />
              <strong>Longitude:</strong> {incident.longitude}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
