import React from "react";
import JobCard from "./JobCard";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000" },
  { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000" },
  { id: 3, title: "Full Stack Developer", company: "InnovateHub", location: "Lagos", salary: "₦500,000" },
  { id: 4, title: "UI/UX Designer", company: "DesignPro", location: "Abuja", salary: "₦350,000" },
  { id: 5, title: "Data Scientist", company: "DataLab", location: "Kano", salary: "₦450,000" },
  { id: 6, title: "DevOps Engineer", company: "CloudNet", location: "Remote", salary: "₦600,000" },
  { id: 7, title: "Product Manager", company: "Visionary Inc.", location: "Lagos", salary: "₦700,000" },
  { id: 8, title: "Cybersecurity Analyst", company: "SafeTech", location: "Port Harcourt", salary: "₦550,000" },
  { id: 9, title: "Mobile App Developer", company: "AppWorks", location: "Ibadan", salary: "₦380,000" },
  { id: 10, title: "Software Tester", company: "QA Experts", location: "Jos", salary: "₦320,000" }
];

const JobList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      ) : (
        <p className="text-red-600 text-center">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
