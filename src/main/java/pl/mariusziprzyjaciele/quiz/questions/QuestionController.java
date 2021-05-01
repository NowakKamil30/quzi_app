package pl.mariusziprzyjaciele.quiz.questions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.mariusziprzyjaciele.quiz.interfaces.CrudMethodResponse;

import java.util.List;

@RestController
@RequestMapping("/api/v1/question")
public class QuestionController implements CrudMethodResponse<Question, String> {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }


    @Override
    public ResponseEntity<List<Question>> getAll() {
        return ResponseEntity.ok(questionService.getAll());
    }

    @Override
    public ResponseEntity<Question> getById(@PathVariable String id) {
        return questionService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity
                        .noContent()
                        .build());
    }


    @Override
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        questionService.delete(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Override
    public ResponseEntity<Void> put(String id, Question question) {
        question.setId(id);
        questionService.add(question);
        return ResponseEntity
                .accepted()
                .build();
    }

    @Override
    public ResponseEntity<Void> post(Question question) {
        questionService.add(question);
        return ResponseEntity
                .accepted()
                .build();
    }
}
