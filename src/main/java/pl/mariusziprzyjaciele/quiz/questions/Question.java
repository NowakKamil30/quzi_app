package pl.mariusziprzyjaciele.quiz.questions;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.mariusziprzyjaciele.quiz.answers.Answer;

@Document
@Data
public class Question {
    @Id
    private String id;
    private String question;
    private Answer[] answers;
}
