import React from "react";
import JobList from "./components/JobList";
import "./App.css"; // Import the CSS file

const App: React.FC = () => {
  return (
    <div className="app">
      <JobList />
    </div>
  );
};

export default App;
