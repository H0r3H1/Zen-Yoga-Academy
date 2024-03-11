package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.Application;
import com.sample.service.ApplicationService;

@RestController
@RequestMapping("/appl")
@CrossOrigin(origins="*")


public class ApplicationController {
    
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/addapplication")
    public String addApplication(@RequestBody Application application){
        return applicationService.saveApplication(application);
    }

    @PutMapping("/updateapplication")
    public String updateApplication(@RequestBody Application application){
        return applicationService.updateApplication(application);
    }

    @GetMapping("/getapplications")
    public List<Application> getApplications(){
        return applicationService.getApplications();
    }

    @DeleteMapping("/deleteapplication/{id}")
    public String deleteApplication(@PathVariable Long id){
        return applicationService.deleteApplication(id);
    }
}
