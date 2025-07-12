import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>SkillSwap</h2>
      <div style={linkGroupStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/browse" style={linkStyle}>Browse</Link>
        <Link to="/requests" style={linkStyle}>My Requests</Link>
        {/* <Link to="/account" style={linkStyle}>My Account</Link> */}
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
}

const navStyle = {
  background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  position: "sticky",
  top: 0,
  zIndex: 999,
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#5c2d91",
};

const linkGroupStyle = {
  display: "flex",
  gap: "1.5rem",
};

const linkStyle = {
  textDecoration: "none",
  fontWeight: 500,
  color: "#333",
  transition: "all 0.2s ease",
};

