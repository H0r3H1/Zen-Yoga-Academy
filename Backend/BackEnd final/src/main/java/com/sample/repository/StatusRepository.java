package  com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Status;

public interface StatusRepository extends JpaRepository<Status, Long> {
    
}