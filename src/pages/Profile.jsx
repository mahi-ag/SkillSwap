// import { useState } from "react";
// import { db } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";

// // 🔐 Pull logged-in user from localStorage
// const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

// export default function Profile() {
//   const [formData, setFormData] = useState({
//     name: loggedInUser.email ? loggedInUser.email.split("@")[0] : "",
//     location: "",
//     skillsOffered: "",
//     skillsWanted: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     const profile = {
//       name: formData.name,
//       location: formData.location,
//       skillsOffered: formData.skillsOffered.split(",").map((s) => s.trim()),
//       skillsWanted: formData.skillsWanted.split(",").map((s) => s.trim()),
//     };

//     try {
//       await setDoc(doc(db, "profiles", profile.name), profile);
//       localStorage.setItem("myProfile", JSON.stringify(profile));
//       alert("✅ Profile saved!");
//     } catch (e) {
//       console.error("Firestore error:", e);
//       alert("❌ Failed to save profile");
//     }
//   };

//   return (
//     <div style={{ padding: "3rem", maxWidth: "600px", margin: "0 auto", color: "#333" }}>
//       <h2 style={{ color: "#5c2d91", fontSize: "2rem", marginBottom: "1rem" }}>👤 Create Your Profile</h2>
//       <input
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         value={formData.name}
//         style={inputStyle}
//       />
//       <input
//         name="location"
//         placeholder="Your Location"
//         onChange={handleChange}
//         value={formData.location}
//         style={inputStyle}
//       />
//       <input
//         name="skillsOffered"
//         placeholder="Skills You Can Teach (comma-separated)"
//         onChange={handleChange}
//         value={formData.skillsOffered}
//         style={inputStyle}
//       />
//       <input
//         name="skillsWanted"
//         placeholder="Skills You Want to Learn (comma-separated)"
//         onChange={handleChange}
//         value={formData.skillsWanted}
//         style={inputStyle}
//       />
//       <button onClick={handleSave} style={buttonStyle}>
//         💾 Save
//       </button>
//     </div>
//   );
// }

// const inputStyle = {
//   display: "block",
//   width: "100%",
//   marginBottom: "1rem",
//   padding: "0.75rem",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   fontSize: "1rem",
// };

// const buttonStyle = {
//   padding: "0.75rem 1.5rem",
//   backgroundColor: "#5c2d91",
//   color: "white",
//   border: "none",
//   borderRadius: "10px",
//   fontWeight: "bold",
//   fontSize: "1rem",
//   cursor: "pointer",
// };

import { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

export default function Profile() {
  const [formData, setFormData] = useState({
    name: loggedInUser.email?.split("@")[0] || "",
    location: "",
    skillsOffered: "",
    skillsWanted: "",
    availability: "", // ✅ add to state
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = async () => {
    const profile = {
      name: formData.name,
      location: formData.location,
      skillsOffered: formData.skillsOffered.split(",").map((s) => s.trim()),
      skillsWanted: formData.skillsWanted.split(",").map((s) => s.trim()),
      availability: formData.availability,
    };
    try {
      await setDoc(doc(db, "profiles", profile.name), profile);
      localStorage.setItem("myProfile", JSON.stringify(profile));
      alert("✅ Profile saved!");
    } catch (e) {
      alert("❌ Failed to save profile");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="section-title">👤 Your Profile</h2>

        <input
          name="name"
          className="input"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="location"
          className="input"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          name="skillsOffered"
          className="input"
          placeholder="Skills You Can Teach (comma-separated)"
          value={formData.skillsOffered}
          onChange={handleChange}
        />
        <input
          name="skillsWanted"
          className="input"
          placeholder="Skills You Want to Learn (comma-separated)"
          value={formData.skillsWanted}
          onChange={handleChange}
        />

        {/* ✅ Availability dropdown — NOW inside the JSX return */}
        <select
          name="availability"
          className="input"
          value={formData.availability}
          onChange={handleChange}
        >
          <option value="">Choose Availability</option>
          <option value="Mornings">🌅 Mornings</option>
          <option value="Evenings">🌆 Evenings</option>
          <option value="Weekends">📅 Weekends</option>
        </select>

        <button className="button" onClick={handleSave}>
          💾 Save
        </button>
      </div>
    </div>
  );
}
