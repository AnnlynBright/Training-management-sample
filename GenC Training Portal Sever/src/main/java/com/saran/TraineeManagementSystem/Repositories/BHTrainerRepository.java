package com.saran.TraineeManagementSystem.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saran.TraineeManagementSystem.models.BHTrainer;

public interface BHTrainerRepository extends JpaRepository<BHTrainer, Long>{

	Optional<BHTrainer> findByBhTrainerName(String name);

	Optional<BHTrainer> findByBhTrainerAssociateId(String associateId);

}
