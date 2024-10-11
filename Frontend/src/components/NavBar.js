// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';
import './Navbar.css'; // We'll create this CSS file next


const Navbar = () => {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <List>
          <ListItem
            button
            component={NavLink}
            to="/"
            exact
            sx={{
              color: 'inherit',
              '&.active': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/add-application"
            sx={{
              color: 'inherit',
              '&.active': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Application" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/applications"
            sx={{
              color: 'inherit',
              '&.active': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItem>
        </List>
      </Drawer>
    );
};


export default Navbar;
