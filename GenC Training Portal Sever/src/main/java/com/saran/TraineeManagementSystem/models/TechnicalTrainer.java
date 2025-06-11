package com.saran.TraineeManagementSystem.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TechnicalTrainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Technical Trainer name is mandatory")
    @Size(min = 2, max = 50, message = "Technical Trainer name must be between 2 and 50 characters")
    private String techTrainerName;

    @NotBlank(message = "Technical Trainer email is mandatory")
    @Email(message = "Email should be valid")
    private String techTrainerEmail;

    @NotBlank(message = "Technical Trainer associate ID is mandatory")
    @Size(min = 5, max = 20, message = "Technical Trainer associate ID must be between 5 and 20 characters")
    private String techTrainerAssociateId;
}
