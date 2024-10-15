package com.CapstoneProject.CapstoneProject.Repository;

import com.CapstoneProject.CapstoneProject.Model.JobApplication;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobApplicationRepo extends CrudRepository<JobApplication, Integer> {


    List<JobApplication> findByUsername(String username);

}
