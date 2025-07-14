import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>Welcome to CareerSync – Job Portal Clone</h2>
      <div>
        <h2>
          <Link to="/home">Home</Link>
        </h2>
        <h2>
          <Link to="/jobs">Jobs</Link>
        </h2>
        <h2>
          <Link to="/upload">Upload</Link>
        </h2>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
