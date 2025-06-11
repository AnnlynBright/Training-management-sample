package com.saran.TraineeManagementSystem.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Coach {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Coach name is mandatory")
    @Size(min = 2, max = 50, message = "Coach name must be between 2 and 50 characters")
    private String coachName;

    @NotBlank(message = "Coach email is mandatory")
    @Email(message = "Email should be valid")
    private String coachEmail;

    @NotBlank(message = "Coach associate ID is mandatory")
    @Size(min = 5, max = 20, message = "Coach associate ID must be between 5 and 20 characters")
    private String coachAssociateId;
}
