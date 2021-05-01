package pl.mariusziprzyjaciele.quiz.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface CrudMethodResponse<T,ID> {
    @GetMapping
    ResponseEntity<List<T>> getAll();
    @GetMapping("/{id}")
    ResponseEntity<T> getById(@PathVariable ID id);
    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteById(@PathVariable ID id);
    @PutMapping("/{id}")
    ResponseEntity<Void> put(@PathVariable ID id, @RequestBody T object);
    @PostMapping
    ResponseEntity<Void> post(@RequestBody T object);
}
