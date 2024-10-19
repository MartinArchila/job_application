import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="center-container">
      <div className="center-content">
        <h2>Account Created Successfully!</h2>
        <p>Your account has been created. You can now log in.</p>
        <Link to="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
