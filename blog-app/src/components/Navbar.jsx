
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("auth");
  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">BlogApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Posts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add">Add Post</Link></li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isAuth ? (
              <li className="nav-item"><button className="btn btn-outline-light" onClick={logout}>Sign out</button></li>
            ) : (
              <li className="nav-item"><Link className="btn btn-outline-light" to="/login">Sign in</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
