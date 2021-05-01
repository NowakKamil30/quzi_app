package pl.mariusziprzyjaciele.quiz.question;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionCrudRepository extends ReactiveCrudRepository<Question, String> {

}
