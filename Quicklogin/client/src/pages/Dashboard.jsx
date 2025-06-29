import { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'; // Import the CSS

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/auth/profile")
      .then(res => {setUser(res.data.user)
        console.log(res.data.user)
      })
      
      .catch(() => navigate("/login"));
  }, []);

  const handleLogout = async () => {
    await axios.get("/auth/logout");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {user ? (
        <div className="dashboard-card">
          <h2>Welcome, <span>{user.username}</span></h2>
          <p>Email: <span>{user.email}</span></p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
