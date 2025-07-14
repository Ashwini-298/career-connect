import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams(); // get job ID from URL
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Dummy job data
    const jobData = [
      {
        id: "1",
        title: "Frontend Developer",
        level: "Junior",
        location: "Bangalore",
        description: "Build UI using React.",
        criteria: "Basic JavaScript, HTML, CSS",
      },
      {
        id: "2",
        title: "Backend Developer",
        level: "Senior",
        location: "Hyderabad",
        description: "Work with Node.js and databases.",
        criteria: "3+ years backend experience",
      },
      {
        id: "3",
        title: "Full Stack Developer",
        level: "Entry Level",
        location: "Remote",
        description: "Frontend + Backend features.",
        criteria: "Basic understanding of both",
      },
    ];

    const selectedJob = jobData.find((job) => job.id === id);
    setJobDetails(selectedJob);
  }, [id]);

  if (!jobDetails) {
    return <div>Loading job details...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        {jobDetails.title} ({jobDetails.level})
      </h2>
      <p>
        <strong>Location:</strong> {jobDetails.location}
      </p>
      <p>
        <strong>Description:</strong> {jobDetails.description}
      </p>
      <p>
        <strong>Criteria:</strong> {jobDetails.criteria}
      </p>
    </div>
  );
}

export default JobDetail;
