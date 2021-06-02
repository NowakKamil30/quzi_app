package pl.mariusziprzyjaciele.quiz.answers;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerDto {
    private String answer;

    public AnswerDto(Answer answer) {
        this.answer = answer.getAnswer();
    }
}
