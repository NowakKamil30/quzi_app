package pl.mariusziprzyjaciele.quiz.question;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.mariusziprzyjaciele.quiz.answer.Answer;

@Document
@Data
public class Question {
    private String id;
    private String question;
    private Answer[] answers;
}
