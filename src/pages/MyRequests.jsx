import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import jsPDF from "jspdf";

export default function MyRequests() {
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);
  const myProfile = JSON.parse(localStorage.getItem("myProfile"));

  if (!myProfile) {
    return (
      <div style={{ padding: "3rem", textAlign: "center", color: "#5c2d91" }}>
        ⚠️ Please create your profile first.
      </div>
    );
  }

  useEffect(() => {
    const fetchRequests = async () => {
      const snapshot = await getDocs(collection(db, "swapRequests"));
      const all = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSent(all.filter((r) => r.fromName === myProfile.name));
      setReceived(all.filter((r) => r.toName === myProfile.name));
    };
    fetchRequests();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "swapRequests", id), { status });
    location.reload();
  };

  const cancelRequest = async (id) => {
    await deleteDoc(doc(db, "swapRequests", id));
    location.reload();
  };

  const generateCertificate = (r) => {
    const docPDF = new jsPDF();
    docPDF.setFontSize(18);
    docPDF.text("🏆 SkillSwap Certificate of Exchange", 20, 30);
    docPDF.setFontSize(12);
    docPDF.text(`${r.fromName} exchanged the skill "${r.skill}" with ${r.toName}.`, 20, 50);
    docPDF.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70);
    docPDF.save(`SkillSwap_Certificate_${r.fromName}.pdf`);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", color: "#5c2d91", marginBottom: "1rem" }}>
        📤 Sent Requests
      </h2>

      {sent.length === 0 && <p>No sent requests yet.</p>}

      {sent.map((r) => (
        <div
          key={r.id}
          style={{
            background: "#fff",
            padding: "1rem",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            marginBottom: "1.5rem",
          }}
        >
          <p>To: <strong>{r.toName}</strong> — Skill: {r.skill}</p>
          <p>Status: {r.status}</p>
          {r.status === "pending" && (
            <button
              onClick={() => cancelRequest(r.id)}
              style={dangerButton}
            >
              ❌ Cancel
            </button>
          )}
          {r.status === "accepted" && (
            <button
              onClick={() => generateCertificate(r)}
              style={primaryButton}
            >
              🏆 Get Certificate
            </button>
          )}
        </div>
      ))}

      <h2 style={{ fontSize: "2rem", color: "#5c2d91", marginTop: "3rem", marginBottom: "1rem" }}>
        📥 Received Requests
      </h2>

      {received.length === 0 && <p>No received requests yet.</p>}

      {received.map((r) => (
        <div
          key={r.id}
          style={{
            background: "#fff",
            padding: "1rem",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            marginBottom: "1.5rem",
          }}
        >
          <p>From: <strong>{r.fromName}</strong> — Skill: {r.skill}</p>
          <p>Status: {r.status}</p>
          {r.status === "pending" && (
            <>
              <button
                onClick={() => updateStatus(r.id, "accepted")}
                style={primaryButton}
              >
                ✅ Accept
              </button>
              <button
                onClick={() => updateStatus(r.id, "rejected")}
                style={dangerButton}
              >
                ❌ Reject
              </button>
            </>
          )}
          {r.status === "accepted" && (
            <button
              onClick={() => generateCertificate(r)}
              style={primaryButton}
            >
              🏆 Get Certificate
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

const primaryButton = {
  marginRight: "0.5rem",
  backgroundColor: "#5c2d91",
  color: "white",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const dangerButton = {
  ...primaryButton,
  backgroundColor: "#d63447",
};
