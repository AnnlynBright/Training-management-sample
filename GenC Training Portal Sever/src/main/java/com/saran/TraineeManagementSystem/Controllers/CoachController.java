package com.saran.TraineeManagementSystem.Controllers;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.Coach;
import com.saran.TraineeManagementSystem.services.CoachService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/coach")
public class CoachController {

    private final CoachService coachService;

    
    public CoachController(CoachService coachService) {
        this.coachService = coachService;
    }

    @GetMapping("/all-coaches")
    public ResponseEntity<Response> getAllCoaches() {
        Response response = coachService.getAllCoaches();
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Response> getCoachByName(@PathVariable String name) {
        Response response = coachService.getCoachByName(name);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/associateId/{associateId}")
    public ResponseEntity<Response> getCoachByAssociateId(@PathVariable String associateId) {
        Response response = coachService.getCoachByAssociateId(associateId);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping
    public ResponseEntity<Response> addCoach(@RequestBody Coach coach) {
        Response response = coachService.addCoach(coach);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Response> updateCoach(@PathVariable Long id, @RequestBody Coach coach) {
        Response response = coachService.updateCoach(id, coach);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteCoach(@PathVariable Long id) {
        Response response = coachService.deleteCoach(id);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
