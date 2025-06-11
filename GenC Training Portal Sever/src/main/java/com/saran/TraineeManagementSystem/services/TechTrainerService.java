package com.saran.TraineeManagementSystem.services;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.TechnicalTrainer;

public interface TechTrainerService {

	Response addTechTrainer(TechnicalTrainer technicalTrainer);
	Response getAllTechTrainer();
	Response getTechTrainerByName(String name);
	Response getTechTrainerByAssociateId(String associateid);
	Response updateTechTrainer(Long id, TechnicalTrainer technicalTrainer);
	Response deleteTechTrainer(Long id);
}
