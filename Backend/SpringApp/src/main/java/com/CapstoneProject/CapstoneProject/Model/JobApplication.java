package com.CapstoneProject.CapstoneProject.Model;

public class JobApplication {

    int applicationID;
    int userID;
    int companyID;
    String jobDescription;
    String dateApplied;
    String status;
    String notes;

    public JobApplication(int applicationID, int userID, int companyID, String jobDescription, String dateApplied, String status, String notes) {
        this.applicationID = applicationID;
        this.userID = userID;
        this.companyID = companyID;
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

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getCompanyID() {
        return companyID;
    }

    public void setCompanyID(int companyID) {
        this.companyID = companyID;
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
}
