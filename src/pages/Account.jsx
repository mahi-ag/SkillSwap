import { useEffect, useState } from "react";

export default function Account() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myProfile"));
    console.log("Loaded profile data:", data);
    setProfile(data);
  }, []);

  if (!profile) {
    return (
      <div style={wrapper}>
        <h2 style={title}>⚠️ No profile found.</h2>
        <p style={text}>Please create your profile first.</p>
      </div>
    );
  }

  return (
    <div style={wrapper}>
      <div style={card}>
        <img
          src={`https://ui-avatars.com/api/?name=${profile.name}&background=5c2d91&color=fff&size=128`}
          alt="Profile"
          style={avatar}
        />
        <h2 style={title}>{profile.name}</h2>
        <p style={location}>📍 {profile.location}</p>

        <div style={section}>
          <h4 style={sectionTitle}>💡 Skills You Can Offer</h4>
          <ul style={list}>
            {profile.skillsOffered.map((skill, index) => (
              <li key={index} style={listItem}>🛠️ {skill}</li>
            ))}
          </ul>
        </div>

        <div style={section}>
          <h4 style={sectionTitle}>🎯 Skills You Want to Learn</h4>
          <ul style={list}>
            {profile.skillsWanted.map((skill, index) => (
              <li key={index} style={listItem}>📚 {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const wrapper = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
};

const card = {
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "2rem",
  maxWidth: "400px",
  width: "100%",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  color: "#333",
  textAlign: "center",
};

const avatar = {
  borderRadius: "50%",
  marginBottom: "1rem",
  width: "100px",
  height: "100px",
};

const title = {
  fontSize: "1.8rem",
  color: "#5c2d91",
  marginBottom: "0.25rem",
};

const location = {
  fontSize: "1rem",
  color: "#666",
  marginBottom: "1.5rem",
};

const section = {
  marginTop: "1rem",
  textAlign: "left",
};

const sectionTitle = {
  fontSize: "1.2rem",
  color: "#5c2d91",
  marginBottom: "0.5rem",
};

const list = {
  listStyle: "none",
  paddingLeft: 0,
};

const listItem = {
  background: "#fff",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  marginBottom: "0.5rem",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};
