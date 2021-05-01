package pl.mariusziprzyjaciele.quiz.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
public class QuestionService {

    private final QuestionCrudRepository questionCrudRepository;

    @Autowired
    public QuestionService(QuestionCrudRepository questionCrudRepository) {
        this.questionCrudRepository = questionCrudRepository;
    }

    public Flux<Question> getAllQuestion() {
        return questionCrudRepository.findAll();
    }
}
