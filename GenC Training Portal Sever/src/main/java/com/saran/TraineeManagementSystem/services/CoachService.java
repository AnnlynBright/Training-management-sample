package com.saran.TraineeManagementSystem.services;

import com.saran.TraineeManagementSystem.Dtos.Response;

import com.saran.TraineeManagementSystem.models.Coach;

public interface CoachService {
	
	Response getAllCoaches();
	Response getCoachByName(String name);
	Response getCoachByAssociateId(String associateId);
	Response addCoach(Coach coach);
	Response updateCoach(Long id,Coach coach) ;
	Response deleteCoach(Long id);
	
}
