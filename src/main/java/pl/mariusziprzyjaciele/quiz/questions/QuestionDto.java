package pl.mariusziprzyjaciele.quiz.questions;

import lombok.Getter;
import lombok.Setter;
import pl.mariusziprzyjaciele.quiz.answers.AnswerDto;

import java.util.Arrays;

@Getter
@Setter
public class QuestionDto {
    private String id;
    private String question;
    private AnswerDto[] answerDtos;

    public QuestionDto(Question question) {
        this.id = question.getId();
        this.question = question.getQuestion();
        this.answerDtos = (AnswerDto[]) Arrays.stream(question.getAnswers()).map(AnswerDto::new).toArray();
    }
}
