import React, { useState } from "react";
import "./styles.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setMessage("All fields are required");
    } else {
      setMessage("Logged in successfully!");
    }
  }

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default LoginForm;
