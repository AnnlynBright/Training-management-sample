package com.saran.TraineeManagementSystem.services;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.Mentor;

public interface MentorService {

	Response getAllMentor();
	Response addMentor(Mentor mentor);
	Response getMentorByName(String name);
	Response getMentorByAssociateId(String associateId);
	Response updateMentor(Long id, Mentor mentor);
	Response deleteMentor(Long id);
}
