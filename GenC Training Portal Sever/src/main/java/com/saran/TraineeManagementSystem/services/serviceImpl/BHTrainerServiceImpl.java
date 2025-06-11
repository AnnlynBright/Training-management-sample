package com.saran.TraineeManagementSystem.services.serviceImpl;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.BHTrainer;
import com.saran.TraineeManagementSystem.Repositories.BHTrainerRepository;
import com.saran.TraineeManagementSystem.services.BHTrainerService;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.Optional;

@Service
public class BHTrainerServiceImpl implements BHTrainerService {

    private final BHTrainerRepository bhTrainerRepository;

    public BHTrainerServiceImpl(BHTrainerRepository bhTrainerRepository) {
        this.bhTrainerRepository = bhTrainerRepository;
    }

    @Override
    public Response getAllBHTrainer() {
        List<BHTrainer> bhTrainers = bhTrainerRepository.findAll();
        if (bhTrainers.isEmpty()) {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("No BH Trainers found.")
                    .build();
        }
        return Response.builder()
                .status(HttpStatus.OK.value())
                .message("All BH Trainers retrieved successfully")
                .BHTrainerList(bhTrainers)
                .build();
    }

    @Override
    public Response getBHTrainerByName(String name) {
        Optional<BHTrainer> bhTrainer = bhTrainerRepository.findByBhTrainerName(name);
        if (bhTrainer.isPresent()) {
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("BH Trainer retrieved successfully")
                    .bhTrainer(bhTrainer.get())
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("BH Trainer with name " + name + " not found")
                    .build();
        }
    }

    @Override
    public Response getBHTrainerByAssociateId(String associateId) {
        Optional<BHTrainer> bhTrainer = bhTrainerRepository.findByBhTrainerAssociateId(associateId);
        if (bhTrainer.isPresent()) {
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("BH Trainer retrieved successfully")
                    .bhTrainer(bhTrainer.get())
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("BH Trainer with associate ID " + associateId + " not found")
                    .build();
        }
    }

    @Override
    public Response addBHTrainer(BHTrainer bhTrainer) {
        Optional<BHTrainer> existingTrainer = bhTrainerRepository.findByBhTrainerName(bhTrainer.getBhTrainerName());
        if (existingTrainer.isPresent()) {
            return Response.builder()
                    .status(HttpStatus.CONFLICT.value())
                    .message("BH Trainer with name " + bhTrainer.getBhTrainerName() + " already exists")
                    .build();
        }
        BHTrainer savedBHTrainer = bhTrainerRepository.save(bhTrainer);
        return Response.builder()
                .status(HttpStatus.CREATED.value())
                .message("BH Trainer added successfully")
                .bhTrainer(savedBHTrainer)
                .build();
    }

    @Override
    public Response updateBHTrainer(Long id, BHTrainer bhTrainer) {
        Optional<BHTrainer> existingBHTrainer = bhTrainerRepository.findById(id);
        if (existingBHTrainer.isPresent()) {
            bhTrainer.setId(id);
            BHTrainer updatedBHTrainer = bhTrainerRepository.save(bhTrainer);
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("BH Trainer updated successfully")
                    .bhTrainer(updatedBHTrainer)
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("BH Trainer with ID " + id + " not found")
                    .build();
        }
    }

    @Override
    public Response deleteBHTrainer(Long id) {
        Optional<BHTrainer> existingBHTrainer = bhTrainerRepository.findById(id);
        if (existingBHTrainer.isPresent()) {
            bhTrainerRepository.deleteById(id);
            return Response.builder()
                    .status(HttpStatus.OK.value())
                    .message("BH Trainer deleted successfully")
                    .build();
        } else {
            return Response.builder()
                    .status(HttpStatus.NOT_FOUND.value())
                    .message("BH Trainer with ID " + id + " not found")
                    .build();
        }
    }
}