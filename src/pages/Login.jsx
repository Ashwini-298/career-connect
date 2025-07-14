import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleCandidateLogin = () => {
    navigate("/candidate-dashboard");
  };

  const handleEmployerLogin = () => {
    navigate("/employer-dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to the Login Page</h2>
      <p>Please choose your role to continue:</p>

      <button onClick={handleCandidateLogin} style={{ marginRight: "10px" }}>
        Candidate Login
      </button>

      <button onClick={handleEmployerLogin}>Employer Login</button>
    </div>
  );
}

export default Login;
