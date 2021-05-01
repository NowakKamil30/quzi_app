package pl.mariusziprzyjaciele.quiz.questions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mariusziprzyjaciele.quiz.interfaces.CrudMethods;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService implements CrudMethods<Question, String> {

    private final QuestionCrudRepository questionCrudRepository;

    @Autowired
    public QuestionService(QuestionCrudRepository questionCrudRepository) {
        this.questionCrudRepository = questionCrudRepository;
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
}
