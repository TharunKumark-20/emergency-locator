import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ReportIncident() {
  const [emergencyType, setEmergencyType] = useState("Accident");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/incidents/",
        {
          emergency_type: emergencyType,
          description: description,
          latitude: latitude,
          longitude: longitude,
        }
      );

      console.log(response.data);

      alert("Incident Reported Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response?.data);

      alert("Failed to submit incident");
    }
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "500px",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            🚨 Report Incident
          </h1>

          <label>
            <strong>Emergency Type</strong>
          </label>

          <br />
          <br />

          <select
            value={emergencyType}
            onChange={(e) => setEmergencyType(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <option>Accident</option>
            <option>Fire</option>
            <option>Medical</option>
            <option>Crime</option>
          </select>

          <br />
          <br />

          <label>
            <strong>Description</strong>
          </label>

          <br />
          <br />

          <textarea
            rows="6"
            placeholder="Describe the incident..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              resize: "none",
            }}
          />

          <br />
          <br />

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportIncident;