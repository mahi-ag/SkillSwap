// import "../App.css";

// export default function Home() {
//   return (
//     <div className="home-page">
//       <h1 className="hero-title">SkillSwap</h1>
//       <p className="hero-subtitle">
//         Connect. Exchange Skills. Grow Together. 🌱
//       </p>

//       <button className="cta-button">🚀 Get Started</button>

//       <div className="how-it-works">
//         <h2 className="section-title">🔄 How It Works</h2>
//         <ul className="how-list">
//           <li>📝 Create your profile with skills you offer & want</li>
//           <li>🤝 Browse top-matched users through Smart Matching</li>
//           <li>📩 Send & receive skill swap requests</li>
//           <li>✅ Accept, exchange, and complete the swap</li>
//           <li>🏆 Download a beautiful SkillSwap Certificate</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div style={outerWrapper}>
      <div style={overlay}></div>

      <div style={heroContainer}>
        <div style={left}>
          <h1 style={headline}>Welcome to <span style={gradientText}>SkillSwap</span></h1>
          <p style={subtitle}>
            🌱 Connect. Exchange Skills. Grow Together.
          </p>
          <Link to="/profile" style={ctaBtn}>🚀 Get Started</Link>
        </div>

        <div style={right}>
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Hero"
            style={heroImage}
          />
        </div>
      </div>

      <div style={stepsSection}>
        <h2 style={sectionTitle}>🔄 How It Works</h2>
        <ul style={stepList}>
          <li>📝 Create your profile with skills you offer & want</li>
          <li>🤝 Get smart matches based on mutual interests</li>
          <li>📩 Send & receive swap requests</li>
          <li>✅ Accept, exchange, and complete the swap</li>
          <li>🏆 Earn and download your SkillSwap Certificate</li>
        </ul>
      </div>
    </div>
  );
}
const outerWrapper = {
  position: "relative",
  minHeight: "100vh",
  background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  overflowX: "hidden",
  padding: "3rem 1.5rem",
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "url(https://www.transparenttextures.com/patterns/cubes.png) repeat",
  opacity: 0.08,
  zIndex: 1,
};

const heroContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
};

const left = {
  flex: 1,
  paddingRight: "2rem",
  minWidth: "300px",
};

const right = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
};

const heroImage = {
  width: "100%",
  maxWidth: "400px",
  animation: "float 3s ease-in-out infinite",
};

const headline = {
  fontSize: "3rem",
  fontWeight: "900",
  color: "#333",
  marginBottom: "1rem",
};

const gradientText = {
  background: "linear-gradient(to right, #5c2d91, #a18cd1)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#555",
};

const ctaBtn = {
  backgroundColor: "#5c2d91",
  color: "white",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  borderRadius: "10px",
  border: "none",
  transition: "0.3s",
};

const stepsSection = {
  maxWidth: "800px",
  margin: "4rem auto 0",
  background: "rgba(255,255,255,0.3)",
  backdropFilter: "blur(14px)",
  borderRadius: "20px",
  padding: "2rem",
  position: "relative",
  zIndex: 2,
};

const sectionTitle = {
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#5c2d91",
  textAlign: "center",
};

const stepList = {
  listStyleType: "none",
  padding: 0,
  color: "#333",
  fontSize: "1.1rem",
  lineHeight: "2",
};
