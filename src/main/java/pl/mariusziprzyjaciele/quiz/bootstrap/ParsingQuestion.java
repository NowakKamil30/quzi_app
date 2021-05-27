package pl.mariusziprzyjaciele.quiz.bootstrap;

public enum ParsingQuestion {

    QUESTION (0),
    ANSWER_A (1),
    ANSWER_B (2),
    ANSWER_C (3),
    ANSWER_D (4),
    CORRECT_ANS (5);

    private final Integer parsingSequenceNumber;

    ParsingQuestion(Integer parsingSequenceNumber){
        this.parsingSequenceNumber = parsingSequenceNumber;
    }

    public Integer getParsingSequenceNumber(){
        return parsingSequenceNumber;
    }

}
