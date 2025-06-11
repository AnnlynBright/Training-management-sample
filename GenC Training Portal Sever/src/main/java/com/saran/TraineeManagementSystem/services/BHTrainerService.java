package com.saran.TraineeManagementSystem.services;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.BHTrainer;

public interface BHTrainerService {

	Response getAllBHTrainer();
	Response getBHTrainerByName(String name);
	Response getBHTrainerByAssociateId(String associateId);
	Response addBHTrainer(BHTrainer bhTrainer);
	Response updateBHTrainer(Long id, BHTrainer bhTrainer);
	Response deleteBHTrainer(Long id);
}
