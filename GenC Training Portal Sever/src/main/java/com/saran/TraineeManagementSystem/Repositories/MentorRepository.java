package com.saran.TraineeManagementSystem.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saran.TraineeManagementSystem.models.Mentor;

public interface MentorRepository  extends JpaRepository<Mentor, Long>{

	Optional<Mentor> findByMentorName(String name);


	Optional<Mentor> findByMentorAssociateId(String associateId);

}
