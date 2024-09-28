import React from 'react';
import './Dashboard.css'; // Include the CSS file for styling

function Dashboard() {
  return (
    // <div>
    //     <h1>Dashboard</h1>
    //     <p>Welcome to the Dashboard!</p>
    // </div>


    <div className="dashboard-container">
      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search applications by Job, company, or date applied" />
        <button className="search-button"><i className="fa fa-search"></i></button>
      </div>

      {/* Job application cards */}
      <div className="job-list">
        <div className="job-card">
          <div className="job-info">
            <img src="placeholder-icon.png" alt="Job" className="job-icon" />
            <div>
              <h4>Job Application Title</h4>
              <p>Company Name</p>
            </div>
          </div>
          <div className="job-status offer">Offer Received</div>
        </div>

        <div className="job-card">
          <div className="job-info">
            <img src="placeholder-icon.png" alt="Job" className="job-icon" />
            <div>
              <h4>Job Application Title</h4>
              <p>Company Name</p>
            </div>
          </div>
          <div className="job-status rejected">Rejected</div>
        </div>

        <div className="job-card">
          <div className="job-info">
            <img src="placeholder-icon.png" alt="Job" className="job-icon" />
            <div>
              <h4>Job Application Title</h4>
              <p>Company Name</p>
            </div>
          </div>
          <div className="job-status interview">Interview Scheduled</div>
        </div>

        <div className="job-card">
          <div className="job-info">
            <img src="placeholder-icon.png" alt="Job" className="job-icon" />
            <div>
              <h4>Job Application Title</h4>
              <p>Company Name</p>
            </div>
          </div>
          <div className="job-status awaiting">Awaiting Response</div>
        </div>
      </div>

      {/* Buttons to add applications */}
      <div className="add-buttons">
        <button className="btn manual">Add Manually</button>
        <button className="btn auto">Add Automatically</button>
      </div>
    </div>
  );
}

export default Dashboard;
