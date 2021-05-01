package pl.mariusziprzyjaciele.quiz.questions;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionCrudRepository extends MongoRepository<Question, String> {

}
