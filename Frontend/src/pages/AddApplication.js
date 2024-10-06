// src/pages/AddApplication.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
            setErrorMessage(''); // clear any previous error message
            console.log('Submitting form with values:', values); //FIXME: For debugging, remove this line later
            axios
              .post('/api/applications', values) // FIXME: Update the API endpoint (define with backend team)
              .then((response) => {
                    console.log('Application added:', response.data);
                    setSuccess(true);
                    // Optionally, redirect or reset form //TODO: Add this later
                    formik.resetForm(); //FIXME: check if this works
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
        <div className="container">
            <h1>Add Job Application</h1>
            {success && (
                <div className="success-message">
                Application added successfully!
                </div>
            )}
            {errorMessage && (<div className="error-message">{errorMessage}</div>)}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                    />
                    {formik.touched.companyName && formik.errors.companyName ? (
                        <div className="error">{formik.errors.companyName}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="position">Position</label>
                    <input
                        id="position"
                        name="position"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.position}
                    />
                    {formik.touched.position && formik.errors.position ? (
                        <div className="error">{formik.errors.position}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="applicationDate">Application Date</label>
                    <input
                        id="applicationDate"
                        name="applicationDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.applicationDate}
                    />
                    {formik.touched.applicationDate && formik.errors.applicationDate ? (
                        <div className="error">{formik.errors.applicationDate}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Offered">Offered</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    {formik.touched.status && formik.errors.status ? (
                        <div className="error">{formik.errors.status}</div>
                    ) : null}
                    
                </div>
                <div>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        id="notes"
                        name="notes"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.notes}
                    ></textarea>
                    {formik.touched.notes && formik.errors.notes ? (
                        <div className="error">{formik.errors.notes}</div>
                    ) : null}
                </div>
                <button type="submit" disabled={isSubmitting}> 
                    {isSubmitting? 'Submitting...' : 'Add Application'}
                </button>
            </form>
        </div>
    );
};

export default AddApplication;
