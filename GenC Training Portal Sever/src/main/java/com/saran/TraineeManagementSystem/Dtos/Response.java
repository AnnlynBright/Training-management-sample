package com.saran.TraineeManagementSystem.Dtos;



import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.saran.TraineeManagementSystem.models.BHTrainer;
import com.saran.TraineeManagementSystem.models.Coach;
import com.saran.TraineeManagementSystem.models.Mentor;
import com.saran.TraineeManagementSystem.models.TechnicalTrainer;
import lombok.*;


@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {

    private int status;
    private String message;

    private Coach coach;
    private List<Coach> coachList;
    private Mentor mentor;
    private List<Mentor> mentorList;
    private BHTrainer bhTrainer;
    private List<BHTrainer> BHTrainerList;
    private TechnicalTrainer technicalTrainer;
    private List<TechnicalTrainer> TechTrainerList;
	
}
