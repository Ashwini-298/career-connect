import React, { useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobList, setJobList] = useState([
    {
      id: "1",
      title: "Frontend Developer",
      level: "Junior",
      location: "Bangalore",
      description: "Build responsive UI using React, HTML, CSS.",
      criteria: "Basic knowledge of JavaScript and Git.",
    },
    {
      id: "2",
      title: "Backend Developer",
      level: "Senior",
      location: "Hyderabad",
      description: "Work with Node.js, Express and databases.",
      criteria: "3+ years experience with backend systems.",
    },
    {
      id: "3",
      title: "Full Stack Developer",
      level: "Entry Level",
      location: "Remote",
      description: "Develop frontend and backend features.",
      criteria: "Good understanding of full web development flow.",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Job Listings</h2>

      {jobList.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>
            {job.title} ({job.level})
          </h3>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Description:</strong> {job.description}
          </p>
          <p>
            <strong>Criteria to Apply:</strong> {job.criteria}
          </p>
          <Link to={`/jobs/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
