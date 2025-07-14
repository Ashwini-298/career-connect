import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Welcome to CareerSync – Your Job Search Starts Here!</h2>
      <p>Find jobs, post listings, and upload your resume easily.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/jobs">
          <button>Browse Jobs</button>
        </Link>
        <Link to="/upload" style={{ marginLeft: "10px" }}>
          <button>Upload Resume</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
