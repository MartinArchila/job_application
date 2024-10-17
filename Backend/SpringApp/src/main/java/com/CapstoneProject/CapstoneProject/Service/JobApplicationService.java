package com.CapstoneProject.CapstoneProject.Service;


import com.CapstoneProject.CapstoneProject.Model.JobApplication;
import com.CapstoneProject.CapstoneProject.Repository.JobApplicationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepo repo;

    public ResponseEntity<JobApplication> createJobApplication(String username,
                                                               String companyName,
                                                               String jobDescription,
                                                               String dateApplied,
                                                               String status,
                                                               String notes)
    {
        JobApplication jobApplication = new JobApplication(username, companyName, jobDescription, dateApplied, status, notes);
        repo.save(jobApplication);

        return ResponseEntity.status(HttpStatus.CREATED).header("Success", "The job application has been created").body(jobApplication);

    }

    public ResponseEntity<List<JobApplication>> getJobApplications(String username) {
        List<JobApplication> jobApplications = repo.findByUsername(username);
        return ResponseEntity.status(HttpStatus.OK).header("Success", "The job applications have been retrieved").body(jobApplications);
    }

    public ResponseEntity<JobApplication> updateJobApplication(int applicationID,
                                                               String companyName,
                                                               String jobDescription,
                                                               String dateApplied,
                                                               String status,
                                                               String notes)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        JobApplication jobApplication = new JobApplication(applicationID, username, companyName , jobDescription, dateApplied, status, notes);

        if(repo.findByApplicationID(applicationID) == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Error", "The job application does not exist").body(jobApplication);
        }

        repo.save(jobApplication);

        return ResponseEntity.status(HttpStatus.OK).header("Success", "The job application has been updated").body(jobApplication);

    }

    public ResponseEntity<JobApplication> deleteJobApplication(int applicationID) {

        if(repo.findByApplicationID(applicationID) == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Error", "The job application does not exist").body(null);
        }

        JobApplication jobApplication = repo.findByApplicationID(applicationID);
        repo.delete(jobApplication);
        return ResponseEntity.status(HttpStatus.OK).header("Success", "The job application has been deleted").body(jobApplication);
    }


}
