package pl.mariusziprzyjaciele.quiz.questions;

import lombok.Data;

@Data
public class Score {
    private int score;
    private int maxPoints;
    private String message;
}
