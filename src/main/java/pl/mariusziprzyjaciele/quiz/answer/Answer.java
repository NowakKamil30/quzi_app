package pl.mariusziprzyjaciele.quiz.answer;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Answer {

    @Id
    private String id;
    private String answer;
    private boolean isCorrect;
}
