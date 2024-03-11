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

import com.sample.entity.Status;
import com.sample.service.StatusService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins="*")
public class StatusController {
    
    @Autowired
    private StatusService statusService;

    @PostMapping("/addstatus")
    public String addStatus(@RequestBody Status status){
        return statusService.saveStatus(status);
    }

    @PutMapping("/updatestatus")
    public String updateStatus(@RequestBody Status status){
        return statusService.updateStatus(status);
    }

    @GetMapping("/getstatuses")
    public List<Status> getStatuses(){
        return statusService.getStatuses();
    }

    @DeleteMapping("/deletestatus/{id}")
    public String deleteStatus(@PathVariable Long id){
        return statusService.deleteStatus(id);
    }
}
