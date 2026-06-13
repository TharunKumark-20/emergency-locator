import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/incidents/")
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const totalIncidents = incidents.length;

  const pendingIncidents = incidents.filter(
    (incident) => incident.status === "Pending"
  ).length;

  const resolvedIncidents = incidents.filter(
    (incident) => incident.status === "Resolved"
  ).length;

  const accidentCount = incidents.filter(
    (incident) => incident.emergency_type === "Accident"
  ).length;

  const fireCount = incidents.filter(
    (incident) => incident.emergency_type === "Fire"
  ).length;

  const medicalCount = incidents.filter(
    (incident) => incident.emergency_type === "Medical"
  ).length;

  const crimeCount = incidents.filter(
    (incident) => incident.emergency_type === "Crime"
  ).length;

  const chartData = [
    { name: "Accident", value: accidentCount },
    { name: "Fire", value: fireCount },
    { name: "Medical", value: medicalCount },
    { name: "Crime", value: crimeCount },
  ];

  const COLORS = [
    "#dc2626",
    "#ea580c",
    "#0891b2",
    "#7c3aed",
  ];

  const cardStyle = {
    borderRadius: "12px",
    padding: "25px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    color: "white",
  };

  return (
    <div>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          📊 Dashboard
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              ...cardStyle,
              backgroundColor: "#2563eb",
            }}
          >
            <h2>Total Incidents</h2>
            <h1>{totalIncidents}</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              backgroundColor: "#f59e0b",
            }}
          >
            <h2>Pending</h2>
            <h1>{pendingIncidents}</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              backgroundColor: "#16a34a",
            }}
          >
            <h2>Resolved</h2>
            <h1>{resolvedIncidents}</h1>
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "25px",
          }}
        >
          Incident Categories
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              ...cardStyle,
              backgroundColor: "#dc2626",
            }}
          >
            <h2>🚗 Accident</h2>
            <h1>{accidentCount}</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              backgroundColor: "#ea580c",
            }}
          >
            <h2>🔥 Fire</h2>
            <h1>{fireCount}</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              backgroundColor: "#0891b2",
            }}
          >
            <h2>🏥 Medical</h2>
            <h1>{medicalCount}</h1>
          </div>

          <div
            style={{
              ...cardStyle,
              backgroundColor: "#7c3aed",
            }}
          >
            <h2>🚔 Crime</h2>
            <h1>{crimeCount}</h1>
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          Incident Distribution
        </h2>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "900px",
            margin: "0 auto",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;