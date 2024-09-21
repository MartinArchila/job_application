import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return (
        <div className="nav-bar">
            <div className="nav-item">
                <Link to="/dashboard"><i className="icon-dashboard"></i>Dashboard</Link>
            </div>
            <div className="nav-item">
                <Link to="/settings"><i className="icon-settings"></i>Settings</Link>
            </div>
        </div>
    );
}

export default NavBar;