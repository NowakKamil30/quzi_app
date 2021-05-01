package pl.mariusziprzyjaciele.quiz.questions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@RequestMapping("/api/v1/question")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public List<Question> getAllQuestion() {
        return questionService.getAll();
    }

    @PostMapping
    public void addQuestion(@RequestBody Question question) {
        questionService.add(question);
    }
}
