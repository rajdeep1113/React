import React, { useState } from "react";
import "./styles.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPass) {
      setMessage("All fields are required");
    } else if (password !== confirmPass) {
      setMessage("Passwords do not match");
    } else {
      setMessage("Registered successfully!");
    }
  }

  return (
    <form className="form" onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <button type="submit">Register</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default RegisterForm;
