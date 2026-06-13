import Navbar from "../components/Navbar";
import MapView from "../components/MapView";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "32px",
          }}
        >
          📍 Live Emergency Map
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "25px",
            fontSize: "18px",
          }}
        >
          View reported incidents across the city in real time
        </p>

        <MapView />
      </div>
    </div>
  );
}

export default Home;