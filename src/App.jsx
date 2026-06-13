import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ReportIncident from "./pages/ReportIncident";
import TrackIncident from "./pages/TrackIncident";
import Dashboard from "./pages/Dashboard";

function App() {
    const [incidents, setIncidents] = useState([]);
  return (
    <BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={<Home incidents={incidents} />}
    />

    <Route
      path="/report"
      element={
        <ReportIncident
          incidents={incidents}
          setIncidents={setIncidents}
        />
      }
    />

    <Route
      path="/track"
      element={<TrackIncident />}
    />

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;