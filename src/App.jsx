import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Browse from "./pages/Browse";
import MyRequests from "./pages/MyRequests";
import Navbar from "./components/navbar";
// import Account from "./pages/Account";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/requests" element={<MyRequests />} />
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>
    </Router>
  );
}

