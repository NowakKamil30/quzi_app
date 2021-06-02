package pl.mariusziprzyjaciele.quiz.questions;

import lombok.Data;

@Data
public class ResultDto {
    private String name;
    private String mail;
    private QuestionDto[] questionDtos;
}
