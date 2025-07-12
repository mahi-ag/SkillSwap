// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav style={navStyle}>
//       <h2 style={logoStyle}>SkillSwap</h2>
//       <div style={linkGroupStyle}>
//         <Link to="/" style={linkStyle}>Home</Link>
//         <Link to="/profile" style={linkStyle}>Profile</Link>
//         <Link to="/browse" style={linkStyle}>Browse</Link>
//         <Link to="/requests" style={linkStyle}>My Requests</Link>
//         {/* <Link to="/account" style={linkStyle}>My Account</Link> */}
//         <Link to="/login" style={linkStyle}>Login</Link>
//       </div>
//     </nav>
//   );
// }

// const navStyle = {
//   background: "rgba(255, 255, 255, 0.6)",
//   backdropFilter: "blur(10px)",
//   padding: "1rem 2rem",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   position: "sticky",
//   top: 0,
//   zIndex: 999,
// };

// const logoStyle = {
//   fontSize: "1.5rem",
//   fontWeight: "bold",
//   color: "#5c2d91",
// };

// const linkGroupStyle = {
//   display: "flex",
//   gap: "1.5rem",
// };

// const linkStyle = {
//   textDecoration: "none",
//   fontWeight: 500,
//   color: "#333",
//   transition: "all 0.2s ease",
// };
// 

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("myProfile");
    alert("🚪 Logged out successfully");
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>SWAPtitute</h2>
      <div style={linkGroup}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/browse" style={linkStyle}>Browse</Link>
        <Link to="/requests" style={linkStyle}>Requests</Link>
        <Link to="/Login" style={linkStyle}>Login</Link>
        <button onClick={handleLogout} style={logoutButton}>Logout</button>
      </div>
    </nav>
  );
}

const navStyle = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 999,
};

const logoStyle = {
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: "#5c2d91",
};

const linkGroup = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
};

const logoutButton = {
  background: "#d63447",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  cursor: "pointer",
};
