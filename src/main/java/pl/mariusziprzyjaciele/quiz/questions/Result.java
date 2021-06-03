package pl.mariusziprzyjaciele.quiz.questions;

import lombok.Data;

@Data
public class Result {
    private User user;
    private ResumeQuestions[] resumeQuestions;
}
