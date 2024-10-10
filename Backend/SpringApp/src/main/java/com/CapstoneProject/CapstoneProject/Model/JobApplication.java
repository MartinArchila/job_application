package com.CapstoneProject.CapstoneProject.Model;

import jakarta.persistence.*;

@Entity
@Table(name="job_application")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id")
    private int applicationID;
    @Column(name = "user_name")
    private String username;
    @Column(name = "company_name")
    private String companyName;
    @Column(name = "job_description")
    private String jobDescription;
    @Column(name = "date_applied")
    private String dateApplied;
    @Column(name = "status")
    private String status;
    @Column(name = "notes")
    private String notes;

    public JobApplication(int applicationID, String username, String companyName, String jobDescription, String dateApplied, String status, String notes) {
        this.applicationID = applicationID;
        this.username = username;
        this.companyName = companyName;
        this.jobDescription = jobDescription;
        this.dateApplied = dateApplied;
        this.status = status;
        this.notes = notes;
    }

    public JobApplication(String companyName, String jobDescription, String dateApplied, String status, String notes) {
        this.companyName = companyName;
        this.jobDescription = jobDescription;
        this.dateApplied = dateApplied;
        this.status = status;
        this.notes = notes;
    }

    public JobApplication() {

    }

    public JobApplication(String username, String CompanyName, String jobDescription, String dateApplied, String status, String notes) {
        this.username = username;
        this.companyName = CompanyName;
        this.jobDescription = jobDescription;
        this.dateApplied = dateApplied;
        this.status = status;
        this.notes = notes;
    }

    public int getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(int applicationID) {
        this.applicationID = applicationID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyID) {
        this.companyName = companyID;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getDateApplied() {
        return dateApplied;
    }

    public void setDateApplied(String dateApplied) {
        this.dateApplied = dateApplied;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String toString() {
        return "JobApplication{" +
                "applicationID=" + applicationID +
                ", username='" + username + '\'' +
                ", companyName='" + companyName + '\'' +
                ", jobDescription='" + jobDescription + '\'' +
                ", dateApplied='" + dateApplied + '\'' +
                ", status='" + status + '\'' +
                ", notes='" + notes + '\'' +
                '}';
    }
}
