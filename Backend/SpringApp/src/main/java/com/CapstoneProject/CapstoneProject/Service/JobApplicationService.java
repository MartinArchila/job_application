package com.CapstoneProject.CapstoneProject.Service;


import com.CapstoneProject.CapstoneProject.Model.JobApplication;
import com.CapstoneProject.CapstoneProject.Repository.JobApplicationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepo repo;

    public ResponseEntity<JobApplication> createJobApplication(String username,
                                                               String companyID,
                                                               String jobDescription,
                                                               String dateApplied,
                                                               String status,
                                                               String notes)
    {
        JobApplication jobApplication = new JobApplication(username, companyID, jobDescription, dateApplied, status, notes);
        repo.save(jobApplication);

        return ResponseEntity.status(HttpStatus.CREATED).header("Success", "The job application has been created").body(jobApplication);

    }

    public ResponseEntity<List<JobApplication>> getJobApplications(String username) {
        List<JobApplication> jobApplications = repo.findByUsername(username);
        return ResponseEntity.status(HttpStatus.OK).header("Success", "The job applications have been retrieved").body(jobApplications);
    }


}
