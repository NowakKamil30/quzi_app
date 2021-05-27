package pl.mariusziprzyjaciele.quiz.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import pl.mariusziprzyjaciele.quiz.answers.Answer;
import pl.mariusziprzyjaciele.quiz.builders.QuestionBuilder;
import pl.mariusziprzyjaciele.quiz.questions.Question;
import pl.mariusziprzyjaciele.quiz.questions.QuestionCrudRepository;
import pl.mariusziprzyjaciele.quiz.questions.QuestionService;

import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class QALoader implements CommandLineRunner {

    private final QuestionService questionService;
    private final QuestionCrudRepository questionCrudRepository;

    @Autowired
    public QALoader(QuestionService questionService,
                    QuestionCrudRepository questionCrudRepository){
        this.questionService = questionService;
        this.questionCrudRepository = questionCrudRepository;
    }

    @Bean
    public Resource loadQuizQuestionsAndAnswers() {
        return new ClassPathResource("QuizCSVPath/QuestionsAndAnswers.csv");
        /*
        format pliku to
        NR_PYTANIA.PYTANIE::ODPA::ODPB:ODPC::ODPD::NUMER_PRAWIDLOWEJ_ODPOWIEDZI - jak A to 1 jak D to 4
        31.dsadsadsadsdsa::AA::BB::CC::DD::4
        */
    }


    @Override
    public void run(String... args) throws Exception {

        try (Stream<String> lines = Files.lines(loadQuizQuestionsAndAnswers().getFile().toPath())){
            List<Question> questions = lines
                    .map(QALoader::utilParseCsv)
                    .collect(Collectors.toList());

            sendToDB(questions);
        }
    }

    private static Question utilParseCsv(String line){
        List<String> splitList = Arrays.stream(line.split("::")).toList();

        List<Answer> answerList = new ArrayList<>(){{
            add(new Answer(splitList.get(ParsingQuestion.ANSWER_A.getParsingSequenceNumber()), false));
            add(new Answer(splitList.get(ParsingQuestion.ANSWER_B.getParsingSequenceNumber()), false));
            add(new Answer(splitList.get(ParsingQuestion.ANSWER_C.getParsingSequenceNumber()), false));
            add(new Answer(splitList.get(ParsingQuestion.ANSWER_D.getParsingSequenceNumber()), false));
        }};

        String correctNum = splitList.get(ParsingQuestion.CORRECT_ANS.getParsingSequenceNumber());
        answerList.get(Integer.parseInt(correctNum)-1).setCorrect(true);

        Answer[] answers = answerList.toArray(new Answer[answerList.size()]);

        Question question = QuestionBuilder.getInstanceOf()
                .setQuestion(splitList.get(ParsingQuestion.QUESTION.getParsingSequenceNumber()))
                .setAnswers(answers)
                .build();

        return question;
    }

    private void sendToDB(List<Question> questions){
        questions.forEach(question -> {
            if(questionCrudRepository.findByQuestion(question.getQuestion()).isEmpty()){
                questionService.add(question);
            }
        });
    }


}
