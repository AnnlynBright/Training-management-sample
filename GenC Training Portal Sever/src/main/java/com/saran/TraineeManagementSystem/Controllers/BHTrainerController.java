package com.saran.TraineeManagementSystem.Controllers;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.BHTrainer;
import com.saran.TraineeManagementSystem.services.BHTrainerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bh-trainer")
public class BHTrainerController {

    private final BHTrainerService bhTrainerService;

    public BHTrainerController(BHTrainerService bhTrainerService) {
        this.bhTrainerService = bhTrainerService;
    }

    @GetMapping("/all-bh-trainers")
    public ResponseEntity<Response> getAllBHTrainers() {
        Response response = bhTrainerService.getAllBHTrainer();
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Response> getBHTrainerByName(@PathVariable String name) {
        Response response = bhTrainerService.getBHTrainerByName(name);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/associateId/{associateId}")
    public ResponseEntity<Response> getBHTrainerByAssociateId(@PathVariable String associateId) {
        Response response = bhTrainerService.getBHTrainerByAssociateId(associateId);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping
    public ResponseEntity<Response> addBHTrainer(@RequestBody BHTrainer bhTrainer) {
        Response response = bhTrainerService.addBHTrainer(bhTrainer);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Response> updateBHTrainer(@PathVariable Long id, @RequestBody BHTrainer bhTrainer) {
        Response response = bhTrainerService.updateBHTrainer(id, bhTrainer);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteBHTrainer(@PathVariable Long id) {
        Response response = bhTrainerService.deleteBHTrainer(id);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
