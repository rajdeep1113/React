import React from "react";
import "./styles.css";

function Navbar({ setShowLogin }) {
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <div>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
