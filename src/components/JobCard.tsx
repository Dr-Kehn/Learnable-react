import React, { useState } from "react";

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
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{company} - {location}</p>
      
      {showDetails && (
        <p className="mt-2 text-green-700 font-semibold">Salary: {salary}</p>
      )}

      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default JobCard;
