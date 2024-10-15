// src/pages/Dashboard.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Applied', value: 10},
    { name: 'Interviewing', value: 5},
    { name: 'Offer', value: 2},
    { name: 'Rejected', value: 8},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//FIXME: check how to modify the Grid componet from Material Mui in case it doesn't works
const Dashboard = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        {/* The Navbar (Sidebar) is already included via App.js */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            {/* Statistic Cards */}
            {/* You can create a StatsCard component or define them directly */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1">Total Applications</Typography>
                <Typography variant="h4">25</Typography>
              </Paper>
            </Grid>
            {/* Add more statistic cards as needed */}
  
            {/* Pie Chart */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Application Status
                </Typography>
                <PieChart width={400} height={300}>
                  <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </Paper>
            </Grid>
  
            {/* Recent Activities */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Recent Activities
                </Typography>
                {/* Replace with dynamic content as needed */}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
};

export default Dashboard;
