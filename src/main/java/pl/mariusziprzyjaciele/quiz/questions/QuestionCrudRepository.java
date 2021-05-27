package pl.mariusziprzyjaciele.quiz.questions;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionCrudRepository extends MongoRepository<Question, String> {
    Optional<Question> findByQuestion(String s);
}
