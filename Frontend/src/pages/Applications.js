// src/pages/Applications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Applications = () => {
    const [applications, setApplications] = useState([
        // TODO: Sample data for now, modify this later
        {
        id: 1,
        companyName: 'Company A',
        position: 'Software Engineer',
        applicationDate: '2023-10-01',
        status: 'Applied',
        },
        {
        id: 2,
        companyName: 'Company B',
        position: 'Frontend Developer',
        applicationDate: '2023-10-05',
        status: 'Interviewing',
        },
    ]);

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    
    useEffect(() => {
        // TODO: fetch data from the backend here
        axios
            .get('/api/applications') // FIXME: Update the API endpoint (define with backend team)
            .then((response) => {
                setApplications(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching applications:', error);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container"> Loading applications...</div>;
    }

    if (error){
        return <div className="container">Error loading applications.</div>;
    }

    return (
        <div className="container">
        <h1>Job Applications</h1>
            <table>
            <thead>
            <tr>
                <th>Company Name</th>
                <th>Position</th>
                <th>Application Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                {applications.map((app) => (
                    <tr key={app.id}>
                    <td>{app.companyName}</td>
                    <td>{app.position}</td>
                    <td>{app.applicationDate}</td>
                    <td>{app.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default Applications;
