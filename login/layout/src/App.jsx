import React, { useState } from "react";
import Navbar from "./componet/Navbar";
import LoginForm from "./componet/LoginForm";
import RegisterForm from "./componet/RegisterForm";


function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} />
      <div className="container">
        {showLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default App;
