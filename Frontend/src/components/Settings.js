import React from 'react';
import './Settings.css'; // Include the CSS file for styling

function Settings() {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Enable Notifications:</label>
        <input type="checkbox" />
      </div>

      <div className="setting-item">
        <label>Dark Mode:</label>
        <input type="checkbox" />
      </div>

      <div className="setting-item">
        <label>Auto-Sync Applications:</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default Settings;
