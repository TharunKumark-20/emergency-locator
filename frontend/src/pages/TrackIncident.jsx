import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function TrackIncident() {
  const [incidents, setIncidents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = () => {
    axios
      .get("http://127.0.0.1:8000/api/incidents/")
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const markAsResolved = (id) => {
    axios
      .patch(`http://127.0.0.1:8000/api/incidents/${id}/`, {
        status: "Resolved",
      })
      .then(() => {
        fetchIncidents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filteredIncidents =
    filter === "All"
      ? incidents
      : incidents.filter(
          (incident) => incident.status === filter
        );

  const filterButtonStyle = {
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          📋 Track Incidents
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          <button
            style={{
              ...filterButtonStyle,
              backgroundColor:
                filter === "All" ? "#2563eb" : "#1e293b",
            }}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            style={{
              ...filterButtonStyle,
              backgroundColor:
                filter === "Pending" ? "#2563eb" : "#1e293b",
            }}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>

          <button
            style={{
              ...filterButtonStyle,
              backgroundColor:
                filter === "Resolved" ? "#2563eb" : "#1e293b",
            }}
            onClick={() => setFilter("Resolved")}
          >
            Resolved
          </button>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#1e293b",
                  color: "white",
                }}
              >
                <th style={{ padding: "12px" }}>ID</th>
                <th style={{ padding: "12px" }}>Type</th>
                <th style={{ padding: "12px" }}>Description</th>
                <th style={{ padding: "12px" }}>Status</th>
                <th style={{ padding: "12px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredIncidents.map((incident) => (
                <tr
                  key={incident.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "12px" }}>{incident.id}</td>

                  <td style={{ padding: "12px" }}>
                    {incident.emergency_type}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {incident.description}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {incident.status === "Pending" ? (
                      <span
                        style={{
                          backgroundColor: "#fef3c7",
                          color: "#92400e",
                          padding: "5px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        🟡 Pending
                      </span>
                    ) : (
                      <span
                        style={{
                          backgroundColor: "#dcfce7",
                          color: "#166534",
                          padding: "5px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        🟢 Resolved
                      </span>
                    )}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {incident.status === "Pending" && (
                      <button
                        onClick={() =>
                          markAsResolved(incident.id)
                        }
                        style={{
                          backgroundColor: "#2563eb",
                          color: "white",
                          border: "none",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        Mark as Resolved
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TrackIncident;