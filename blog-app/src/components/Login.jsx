
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // Demo auth only
    if(email && password){
      localStorage.setItem("auth", JSON.stringify({ email, time: Date.now() }));
      navigate("/");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div className="container my-5" style={{maxWidth: 480}}>
      <h2 className="mb-3">Sign in</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary w-100">Sign in</button>
      </form>
    </div>
  );
}
