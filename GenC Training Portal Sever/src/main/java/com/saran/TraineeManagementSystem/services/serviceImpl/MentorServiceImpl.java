package com.saran.TraineeManagementSystem.services.serviceImpl;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.Mentor;
import com.saran.TraineeManagementSystem.Repositories.MentorRepository;
import com.saran.TraineeManagementSystem.services.MentorService;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorServiceImpl implements MentorService {

    private final MentorRepository mentorRepository;

    public MentorServiceImpl(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    @Override
    public Response getAllMentor() {
        List<Mentor> mentors = mentorRepository.findAll();
        if(mentors.isEmpty()){
            return Response.builder()
               .status(HttpStatus.NOT_FOUND.value())
               .message("No mentors found.")
               .build();
       }
        return Response.builder()
                .status(200)
                .message("All mentors retrieved successfully")
                .mentorList(mentors)
                .build();
    }

    @Override
    public Response getMentorByName(String name) {
        Optional<Mentor> mentor = mentorRepository.findByMentorName(name);
        if (mentor.isPresent()) {
            return Response.builder()
                    .status(200)
                    .message("Mentor retrieved successfully")
                    .mentor(mentor.get())
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Mentor with name " + name + " not found")
                    .build();
        }
    }

    @Override
    public Response getMentorByAssociateId(String associateId) {
        Optional<Mentor> mentor = mentorRepository.findByMentorAssociateId(associateId);
        if (mentor.isPresent()) {
            return Response.builder()
                    .status(200)
                    .message("Mentor retrieved successfully")
                    .mentor(mentor.get())
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Mentor with associate ID " + associateId + " not found")
                    .build();
        }
    }

    @Override
    public Response addMentor(Mentor mentor) {
        Optional<Mentor> newMentor = mentorRepository.findByMentorName(mentor.getMentorName());
        if (newMentor.isPresent()) {
            return Response.builder()
                    .status(403)
                    .message("Mentor with name " + mentor.getMentorName() + " is already present")
                    .build();
        }
        mentorRepository.save(mentor);
        return Response.builder()
                .status(201)
                .message("Mentor added successfully")
             
                .build();
    }

    @Override
    public Response updateMentor(Long id, Mentor mentor) {
        Optional<Mentor> existingMentor = mentorRepository.findById(id);
        if (existingMentor.isPresent()) {
            mentor.setId(id);
             mentorRepository.save(mentor);
            return Response.builder()
                    .status(200)
                    .message("Mentor updated successfully")
                    
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Mentor with ID " + id + " not found")
                    .build();
        }
    }

    @Override
    public Response deleteMentor(Long id) {
        Optional<Mentor> existingMentor = mentorRepository.findById(id);
        if (existingMentor.isPresent()) {
            mentorRepository.deleteById(id);
            return Response.builder()
                    .status(200)
                    .message("Mentor deleted successfully")
                    .build();
        } else {
            return Response.builder()
                    .status(404)
                    .message("Mentor with ID " + id + " not found")
                    .build();
        }
    }
}
