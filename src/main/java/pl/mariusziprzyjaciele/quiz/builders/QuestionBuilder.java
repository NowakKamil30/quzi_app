package pl.mariusziprzyjaciele.quiz.builders;

import pl.mariusziprzyjaciele.quiz.answers.Answer;
import pl.mariusziprzyjaciele.quiz.questions.Question;

public class QuestionBuilder {

    private String question;
    private Answer[] answers;

    private QuestionBuilder(){
    }

    public static QuestionBuilder getInstanceOf(){
        return new QuestionBuilder();
    }

    public QuestionBuilder setQuestion(String question){
        this.question = question;
        return this;
    }

    public QuestionBuilder setAnswers(Answer[] answers){
        this.answers = answers;
        return this;
    }

    public Question build(){
        Question question = new Question();
        question.setQuestion(this.question);
        question.setAnswers(this.answers);

        return question;

    }


}
