package pl.mariusziprzyjaciele.quiz.questions;

import lombok.Getter;
import lombok.Setter;
import pl.mariusziprzyjaciele.quiz.answers.AnswerDto;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class QuestionDto {
    private String id;
    private String question;
    private List<AnswerDto> answerDtos;

    public QuestionDto(Question question) {
        this.id = question.getId();
        this.question = question.getQuestion();
        this.answerDtos = Arrays.stream(question.getAnswers()).map(AnswerDto::new).collect(Collectors.toList());
    }
}
