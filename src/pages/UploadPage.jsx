import React, { useState } from "react";

function Upload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [applicantType, setApplicantType] = useState("");

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleTypeChange = (e) => {
    setApplicantType(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Your Resume</h2>

      {/* File Upload */}
      <div style={{ marginBottom: "20px" }}>
        <label>Upload from device:</label>
        <br />
        <input type="file" onChange={handleFileChange} />
      </div>

      {/* Dropdown to choose applicant type */}
      <div style={{ marginBottom: "20px" }}>
        <label>Select your type:</label>
        <br />
        <select value={applicantType} onChange={handleTypeChange}>
          <option value="">-- Select --</option>
          <option value="fresher">Fresher</option>
          <option value="experienced">Experienced</option>
        </select>
      </div>

      {/* Conditional message */}
      {applicantType === "fresher" && (
        <p>You can apply for Entry Level or Trainee jobs.</p>
      )}
      {applicantType === "experienced" && (
        <p>Make sure your resume highlights relevant projects or work.</p>
      )}
    </div>
  );
}

export default Upload;
