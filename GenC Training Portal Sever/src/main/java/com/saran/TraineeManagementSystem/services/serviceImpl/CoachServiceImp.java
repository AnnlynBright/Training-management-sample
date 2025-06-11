package com.saran.TraineeManagementSystem.services.serviceImpl;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.Repositories.CoachRepository;
import com.saran.TraineeManagementSystem.models.Coach;
import com.saran.TraineeManagementSystem.services.CoachService;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoachServiceImp implements CoachService {

    private final CoachRepository coachRepository;

    public CoachServiceImp(CoachRepository coachRepository) {
        this.coachRepository = coachRepository;
    }

    @Override
    public Response getAllCoaches() {
        List<Coach> coaches = coachRepository.findAll();
        if(coaches.isEmpty()){
            return Response.builder()
               .status(HttpStatus.NOT_FOUND.value())
               .message("No coaches found.")
               .build();
       }
        return Response.builder()
                .status(200)
                .message("All coaches retrieved successfully")
                .coachList(coaches)
                .build();
    }

    @Override
    public Response getCoachByName(String name) {
        Optional<Coach> coach = coachRepository.findByCoachName(name);
        if (coach.isPresent()) {
            return Response.builder()
                    .status(200)
                    .message("Coach retrieved successfully")
                    .coach(coach.get())
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Coach with name " + name + " not found")
                    .build();
        }
    }

    @Override
    public Response getCoachByAssociateId(String associateId) {
        Optional<Coach> coach = coachRepository.findByCoachAssociateId(associateId);
        if (coach.isPresent()) {
            return Response.builder()
                    .status(200)
                    .message("Coach retrieved successfully")
                    .coach(coach.get())
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Coach with associate ID " + associateId + " not found")
                    .build();
        }
    }

    @Override
    public Response addCoach(Coach coach) {
    	Optional<Coach> newcoach = coachRepository.findByCoachName(coach.getCoachName());
    	
    	if(newcoach.isPresent()) {
    		return Response.builder()
    				.status(403)
    				.message("Coach with ID " + coach.getCoachName() + " is already present")
    				.build();
    	}
        coachRepository.save(coach);
        return Response.builder()
                .status(201)
                .message("Coach added successfully")
                
                .build();
    }

    @Override
    public Response updateCoach(Long id, Coach coach) {
        Optional<Coach> existingCoach = coachRepository.findById(id);
        if (existingCoach.isPresent()) {
            coach.setId(id);
             coachRepository.save(coach);
            return Response.builder()
                    .status(200)
                    .message("Coach updated successfully")                 
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Coach with ID " + id + " not found")
                    .build();
        }
    }

    @Override
    public Response deleteCoach(Long id) {
        Optional<Coach> existingCoach = coachRepository.findById(id);
        if (existingCoach.isPresent()) {
            coachRepository.deleteById(id);
            return Response.builder()
                    .status(200)
                    .message("Coach deleted successfully")
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Coach with ID " + id + " not found")
                    .build();
        }
    }
}
