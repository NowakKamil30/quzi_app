package pl.mariusziprzyjaciele.quiz.question;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Question {
    private String id;
    private String question;
    private Answer[] answers;
}
