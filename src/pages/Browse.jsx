import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";

export default function Browse() {
  const [topMatches, setTopMatches] = useState([]);
  const myProfile = JSON.parse(localStorage.getItem("myProfile"));

  // fallback if no profile
  if (!myProfile) {
    return (
      <div style={{ padding: "3rem", textAlign: "center", color: "#5c2d91" }}>
        ⚠️ Please create your profile first.
      </div>
    );
  }

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "profiles"));
        const users = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name !== myProfile.name) users.push(data);
        });

        const scored = users.map((user) => {
          const score =
            countMatches(myProfile.skillsWanted, user.skillsOffered) +
            countMatches(myProfile.skillsOffered, user.skillsWanted);
          return { ...user, matchScore: score };
        });

        setTopMatches(scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch profiles:", err);
      }
    };

    fetchProfiles();
  }, []);

  const countMatches = (arr1 = [], arr2 = []) => {
    const norm1 = arr1.map((s) => s.toLowerCase());
    const norm2 = arr2.map((s) => s.toLowerCase());
    return norm1.filter((skill) => norm2.includes(skill)).length;
  };

  const handleSwapRequest = async (targetUser) => {
    const newRequest = {
      fromName: myProfile.name,
      toName: targetUser.name,
      skill: targetUser.skillsOffered[0],
      status: "pending",
      timestamp: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "swapRequests"), newRequest);
      alert(`📩 Request sent to ${targetUser.name}`);
    } catch (e) {
      console.error("Error sending request:", e);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", color: "#5c2d91", marginBottom: "1rem" }}>
        🧠 Smart Skill Matches
      </h2>

      {topMatches.length === 0 && (
        <p style={{ color: "#555" }}>No smart matches found yet.</p>
      )}

      {topMatches.map((user, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "1rem",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            marginBottom: "1.5rem",
          }}
        >
          <p><strong>{user.name}</strong> — 📍 {user.location}</p>
          <p>Offers: {user.skillsOffered.join(", ")}</p>
          <p>Wants: {user.skillsWanted.join(", ")}</p>
          <p style={{ color: "#999" }}>Match Score: {user.matchScore}</p>
          <button
            style={{
              marginTop: "0.5rem",
              background: "#5c2d91",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => handleSwapRequest(user)}
          >
            🤝 Request Swap
          </button>
        </div>
      ))}
    </div>
  );
}
