import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">🔐 AuthApp</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
      </nav>

      <main className="hero-section">
        <h1>Welcome to MERN Auth System</h1>
        <p>Securely manage user authentication with email verification and JWT in a modern MERN stack app.</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/Register" className="btn btn-outline">Register</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
