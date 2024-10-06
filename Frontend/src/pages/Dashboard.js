// src/pages/Dashboard.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Applied', value: 10},
    { name: 'Interviewing', value: 5},
    { name: 'Offer', value: 2},
    { name: 'Rejected', value: 8},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={150} label>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
            ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Dashboard;
