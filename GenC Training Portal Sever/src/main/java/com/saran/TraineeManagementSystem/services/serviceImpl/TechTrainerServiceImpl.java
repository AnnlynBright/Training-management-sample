package com.saran.TraineeManagementSystem.services.serviceImpl;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.TechnicalTrainer;
import com.saran.TraineeManagementSystem.Repositories.TechTrainerRepository;
import com.saran.TraineeManagementSystem.services.TechTrainerService;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus; 
import java.util.List;
import java.util.Optional;

@Service
public class TechTrainerServiceImpl implements TechTrainerService {

    private final TechTrainerRepository techTrainerRepository;

    public TechTrainerServiceImpl(TechTrainerRepository techTrainerRepository) {
        this.techTrainerRepository = techTrainerRepository;
    }

    @Override
    public Response getAllTechTrainer() {
        List<TechnicalTrainer> technicalTrainers = techTrainerRepository.findAll();
        if(technicalTrainers.isEmpty()){
             return Response.builder()
                .status(HttpStatus.NOT_FOUND.value())
                .message("No Technical Trainers found.")
                .build();
        }
        return Response.builder()
                .status(HttpStatus.OK.value())
                .message("All Technical Trainers retrieved successfully")
                .TechTrainerList(technicalTrainers)
                .build();
    }

    @Override
    public Response getTechTrainerByName(String name) {
        Optional<TechnicalTrainer> technicalTrainer = techTrainerRepository.findByTechTrainerName(name);
        if (technicalTrainer.isPresent()) {
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("Technical Trainer retrieved successfully")
                    .technicalTrainer(technicalTrainer.get())
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("Technical Trainer with name " + name + " not found")
                    .build();
        }
    }

    @Override
    public Response getTechTrainerByAssociateId(String associateId) {
        Optional<TechnicalTrainer> technicalTrainer = techTrainerRepository.findByTechTrainerAssociateId(associateId);
        if (technicalTrainer.isPresent()) {
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("Technical Trainer retrieved successfully")
                    .technicalTrainer(technicalTrainer.get())
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("Technical Trainer with associate ID " + associateId + " not found")
                    .build();
        }
    }

    @Override
    public Response addTechTrainer(TechnicalTrainer technicalTrainer) {
        Optional<TechnicalTrainer> existingTrainer = techTrainerRepository.findByTechTrainerName(technicalTrainer.getTechTrainerName());
        if (existingTrainer.isPresent()) {
            return Response.builder()
                    .status(HttpStatus.CONFLICT.value()) // Use 409 Conflict for duplicate
                    .message("Technical Trainer with name " + technicalTrainer.getTechTrainerName() + " already exists")
                    .build();
        }
        techTrainerRepository.save(technicalTrainer);
        return Response.builder()
                .status(HttpStatus.CREATED.value())
                .message("Technical Trainer added successfully")
                
                .build();
    }

    @Override
    public Response updateTechTrainer(Long id, TechnicalTrainer technicalTrainer) {
        Optional<TechnicalTrainer> existingTechnicalTrainer = techTrainerRepository.findById(id);
        if (existingTechnicalTrainer.isPresent()) {
            technicalTrainer.setId(id);
            techTrainerRepository.save(technicalTrainer);
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("Technical Trainer updated successfully")
                    
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("Technical Trainer with ID " + id + " not found")
                    .build();
        }
    }

    @Override
    public Response deleteTechTrainer(Long id) {
        Optional<TechnicalTrainer> existingTechnicalTrainer = techTrainerRepository.findById(id);
        if (existingTechnicalTrainer.isPresent()) {
            techTrainerRepository.deleteById(id);
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("Technical Trainer deleted successfully")
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("Technical Trainer with ID " + id + " not found")
                    .build();
        }
    }
}