// src/pages/AddApplication.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';

const AddApplication = () => {
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            companyName: '',
            position: '',
            status: 'Applied', // Default value: Applied
            applicationDate: '', 
            notes: ''
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required('Required'),
            position: Yup.string().required('Required'),
            applicationDate: Yup.date().required('Required'),
            status: Yup.string().required('Required')
            // TODO: add validation for notes (optional)
        }),

        onSubmit: (values) => {
            //TODO: Prepare to send data to the backend here
            setIsSubmitting(true); // disable the submit button
            setSuccess(false); // clear any previous success message
            setErrorMessage(''); // clear any previous error message
            console.log('Submitting form with values:', values); //FIXME: For debugging, remove this line later
            axios
              .post('/api/applications', values) // FIXME: Update the API endpoint (define with backend team)
              .then((response) => {
                    console.log('Application added:', response.data);
                    setSuccess(true);
                    // Optionally, redirect or reset form //TODO: Add this later
                    formik.resetForm(); //FIXME: check if this works, if not, use formik.resetForm();
              })
              .catch((error) => {
                    console.error('Error adding application:', error);
                    setErrorMessage('Failed to add application. Please try again.');
              })
              .finally(() => {
                    setIsSubmitting(false); // re-enable the submit button
              });
        },
    });

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Add Job Application
          </Typography>
          {success && (
            <Typography variant="body1" color="success.main">
              Application added successfully!
            </Typography>
          )}
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="companyName"
              name="companyName"
              label="Company Name"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
              helperText={formik.touched.companyName && formik.errors.companyName}
              margin="normal"
            />
            <TextField
              fullWidth
              id="position"
              name="position"
              label="Position"
              value={formik.values.position}
              onChange={formik.handleChange}
              error={formik.touched.position && Boolean(formik.errors.position)}
              helperText={formik.touched.position && formik.errors.position}
              margin="normal"
            />
            <TextField
              fullWidth
              id="applicationDate"
              name="applicationDate"
              label="Application Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.applicationDate}
              onChange={formik.handleChange}
              error={formik.touched.applicationDate && Boolean(formik.errors.applicationDate)}
              helperText={formik.touched.applicationDate && formik.errors.applicationDate}
              margin="normal"
            />
            <TextField
              fullWidth
              id="status"
              name="status"
              label="Status"
              select
              value={formik.values.status}
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
              margin="normal"
            >
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Interviewing">Interviewing</MenuItem>
              <MenuItem value="Offered">Offered</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </TextField>
            {/* Include Notes field if needed */}
            <TextField
              fullWidth
              id="notes"
              name="notes"
              label="Notes"
              multiline
              rows={4}
              value={formik.values.notes}
              onChange={formik.handleChange}
              margin="normal"
            />
            <Button color="primary" variant="contained" type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Submitting...' : 'Add Application'}
            </Button>
          </form>
        </Box>
      );
};

export default AddApplication;
