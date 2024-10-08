// src/pages/Applications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    Select,
    MenuItem,
} from '@mui/material';


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

    //FIXME: check if this change will actually solve the handleStatusChange error not being defined
    const [status, setStatus] = useState('');
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    
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
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Job Applications
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="applications table">
              <TableHead>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Application Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>{app.companyName}</TableCell>
                    <TableCell>{app.position}</TableCell>
                    <TableCell>{app.applicationDate}</TableCell>
                    <TableCell>
                      <Select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                      >
                        <MenuItem value="Applied">Applied</MenuItem>
                        <MenuItem value="Interviewing">Interviewing</MenuItem>
                        <MenuItem value="Offered">Offered</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    );
};

export default Applications;
