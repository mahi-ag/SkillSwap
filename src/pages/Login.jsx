import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      let userCred;
      if (isSignup) {
        userCred = await createUserWithEmailAndPassword(auth, email, password);
        alert("🎉 Signup successful!");
      } else {
        userCred = await signInWithEmailAndPassword(auth, email, password);
        alert("🔓 Login successful!");
      }

      const loggedInUser = {
        email: userCred.user.email,
        uid: userCred.user.uid,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      navigate("/profile");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("⚠️ Email already in use. Please log in.");
      } else if (err.code === "auth/user-not-found") {
        alert("❌ No user found. Please sign up first.");
      } else if (err.code === "auth/wrong-password") {
        alert("❌ Incorrect password.");
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <div style={outer}>
      <div style={card}>
        <h2 style={title}>
          {isSignup ? "🌟 Create Account" : "🔑 Login to SkillSwap"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAuth} style={button}>
          {isSignup ? "✨ Sign Up" : "🚀 Login"}
        </button>
        <p style={{ marginTop: "1rem", color: "#444" }}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            style={{ color: "#5c2d91", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

const outer = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
};

const card = {
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(14px)",
  borderRadius: "20px",
  padding: "2rem",
  width: "350px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const title = {
  fontSize: "1.8rem",
  marginBottom: "1.5rem",
  color: "#5c2d91",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const button = {
  width: "100%",
  padding: "0.75rem",
  background: "#5c2d91",
  color: "white",
  fontWeight: "bold",
  border: "none",
  borderRadius: "10px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s",
};
