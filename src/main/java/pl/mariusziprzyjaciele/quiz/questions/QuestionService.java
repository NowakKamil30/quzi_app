package pl.mariusziprzyjaciele.quiz.questions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mariusziprzyjaciele.RandomWithoutRedundancy;
import pl.mariusziprzyjaciele.quiz.interfaces.CrudMethods;
import pl.mariusziprzyjaciele.quiz.mail.MailService;

import javax.mail.MessagingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
public class QuestionService implements CrudMethods<Question, String> {

    private final QuestionCrudRepository questionCrudRepository;
    private final MailService mailService;

    @Autowired
    public QuestionService(QuestionCrudRepository questionCrudRepository, MailService mailService) {
        this.questionCrudRepository = questionCrudRepository;
        this.mailService = mailService;
    }

    @Override
    public List<Question> getAll() {
        return questionCrudRepository.findAll();
    }

    @Override
    public Optional<Question> getById(String id) {
        return questionCrudRepository.findById(id);
    }

    @Override
    public void add(Question question) {
        questionCrudRepository.save(question);
    }

    @Override
    public void delete(String id) {
        questionCrudRepository.deleteById(id);
    }

    @Override
    public void change(Question question, String id) {
        question.setId(id);
        questionCrudRepository.save(question);
    }

    public List<QuestionDto> getQuestions(int limit) {
        List<Question> questions = questionCrudRepository.findAll();
        if (limit > questions.size()) {
            throw new IndexOutOfBoundsException();
        }
        List<QuestionDto> result = new ArrayList<>();
        RandomWithoutRedundancy randomWithoutRedundancy = new RandomWithoutRedundancy(questions.size() - 1);
        for (int i = 0; i < limit; i++) {
            result.add(new QuestionDto(questions.get(randomWithoutRedundancy.get())));
        }
        return result;
    }

    public Score getScore(Result result) throws MessagingException {
        Score score = new Score();
        score.setMaxPoints(30);
        long userScore = Arrays.stream(result.getResumeQuestions()).filter(resumeQuestions -> {
            AtomicBoolean isCorrect = new AtomicBoolean(false);
            Optional<Question> question = questionCrudRepository.findById(resumeQuestions.getQuestionId());
            question.ifPresent(question1 -> Arrays.stream(question1.getAnswers()).forEach(answer -> {
                if(answer.getAnswer().equals(resumeQuestions.getAnswer())) {
                    isCorrect.set(answer.isCorrect());
                }
            }));
            return isCorrect.get();
        }).count();
        score.setScore((int)userScore);
        double procent = score.getScore() * 1.0 / score.getMaxPoints();
        String message;
        if(procent < 20) {
            message = "musisz się bardziej postarać " + result.getUser().getName();
        } else if(procent < 40) {
            message = "mogło być lepiej " + result.getUser().getName();
        } else if(procent < 70) {
            message = "całkiem nieźle " + result.getUser().getName();
        } else if (procent < 90) {
            message = "świetnie ci poszło " + result.getUser().getName();
        } else {
            message = "jesteś urodzonym programistą " + result.getUser().getName();
        }
        score.setMessage(message);
        mailService.sendMail(result.getUser().getEmail(),
                "Uz dni otwarte quiz",
                "Witaj" + result.getUser().getName() + "\n udało ci się zdobyć " + score.getScore() + "/" + score.getMaxPoints() + "\n" + score.getMessage() + "\n link do strony uczelni https://www.uz.zgora.pl/index.php?pl");
        return score;
    }
}
