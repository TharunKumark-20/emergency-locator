import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "6px",
    backgroundColor:
      location.pathname === path ? "#3b82f6" : "transparent",
  });

  return (
    <nav
      style={{
        backgroundColor: "#1e293b",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        🚨 Emergency Locator
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/" style={linkStyle("/")}>
          Home
        </Link>

        <Link to="/report" style={linkStyle("/report")}>
          Report
        </Link>

        <Link to="/track" style={linkStyle("/track")}>
          Track
        </Link>

        <Link to="/dashboard" style={linkStyle("/dashboard")}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;