import React, { useState } from "react";
import "./JobCard.css"; // Import the CSS file

interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

const JobCard: React.FC<JobProps> = ({ title, company, location, salary }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p className="company">{company} - <span className="location">{location}</span></p>

      {showDetails && (
        <p className="salary">💰 Salary: {salary}</p>
      )}

      <button className="details-button" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default JobCard;
