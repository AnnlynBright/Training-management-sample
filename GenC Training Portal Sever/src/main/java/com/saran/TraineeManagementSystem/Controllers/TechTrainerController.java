package com.saran.TraineeManagementSystem.Controllers;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.TechnicalTrainer;
import com.saran.TraineeManagementSystem.services.TechTrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tech-trainer")
public class TechTrainerController {

    private final TechTrainerService techTrainerService;

    public TechTrainerController(TechTrainerService techTrainerService) {
        this.techTrainerService = techTrainerService;
    }

    @GetMapping("/all-tech-trainers")  // Corrected mapping
    public ResponseEntity<Response> getAllTechTrainers() {
        Response response = techTrainerService.getAllTechTrainer();
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Response> getTechTrainerByName(@PathVariable String name) {
        Response response = techTrainerService.getTechTrainerByName(name);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/associateId/{associateId}")
    public ResponseEntity<Response> getTechTrainerByAssociateId(@PathVariable String associateId) {
        Response response = techTrainerService.getTechTrainerByAssociateId(associateId);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping
    public ResponseEntity<Response> addTechTrainer(@RequestBody TechnicalTrainer technicalTrainer) {
        Response response = techTrainerService.addTechTrainer(technicalTrainer);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Response> updateTechTrainer(@PathVariable Long id, @RequestBody TechnicalTrainer technicalTrainer) {
        Response response = techTrainerService.updateTechTrainer(id, technicalTrainer);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteTechTrainer(@PathVariable Long id) {
        Response response = techTrainerService.deleteTechTrainer(id);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}