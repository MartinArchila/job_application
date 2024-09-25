package com.CapstoneProject.CapstoneProject.Service;

import com.CapstoneProject.CapstoneProject.Model.JobApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationService {

    public ResponseEntity<JobApplication> createJobApplication(int applicationID,
                                                               int userID,
                                                               int companyID,
                                                               String jobDescription,
                                                               String dateApplied,
                                                               String status,
                                                               String notes)
    {
        JobApplication jobApplication = new JobApplication(applicationID, userID, companyID, jobDescription, dateApplied, status, notes);
        // repo method

        return ResponseEntity.status(HttpStatus.CREATED).header("Success", "The job application has been created").body(jobApplication);

    }
}
