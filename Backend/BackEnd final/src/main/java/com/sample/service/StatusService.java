package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Status;
import com.sample.repository.StatusRepository;

@Service
public class StatusService {
    
    @Autowired
    private StatusRepository statusRepository;

    
    public String saveStatus(Status status){
        statusRepository.save(status);
        return "Status saved";
    }

    public String updateStatus(Status status){
        statusRepository.saveAndFlush(status);
        return "Status updated";
    }

    public List<Status> getStatuses(){
        return statusRepository.findAll();
    }

    public String deleteStatus(Long id){
        statusRepository.deleteById(id);
        return "Status deleted";
    }
}
