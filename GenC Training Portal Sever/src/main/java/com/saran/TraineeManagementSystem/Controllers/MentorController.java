package com.saran.TraineeManagementSystem.Controllers;

import com.saran.TraineeManagementSystem.Dtos.Response;
import com.saran.TraineeManagementSystem.models.Mentor;
import com.saran.TraineeManagementSystem.services.MentorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mentor")
public class MentorController {

    private final MentorService mentorService;

    public MentorController(MentorService mentorService) {
        this.mentorService = mentorService;
    }

    @GetMapping("/all-mentors")
    public ResponseEntity<Response> getAllMentors() {
        Response response = mentorService.getAllMentor();
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Response> getMentorByName(@PathVariable String name) {
        Response response = mentorService.getMentorByName(name);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/associateId/{associateId}")
    public ResponseEntity<Response> getMentorByAssociateId(@PathVariable String associateId) {
        Response response = mentorService.getMentorByAssociateId(associateId);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping
    public ResponseEntity<Response> addMentor(@RequestBody Mentor mentor) {
        Response response = mentorService.addMentor(mentor);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Response> updateMentor(@PathVariable Long id, @RequestBody Mentor mentor) {
        Response response = mentorService.updateMentor(id, mentor);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteMentor(@PathVariable Long id) {
        Response response = mentorService.deleteMentor(id);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
