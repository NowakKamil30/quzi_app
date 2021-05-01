package pl.mariusziprzyjaciele.quiz.interfaces;


import java.util.List;
import java.util.Optional;

public interface CrudMethods<T, ID> {
    List<T> getAll();
    Optional<T> getById(ID id);
    void add(T object);
    void delete(ID id);
    void change(T object, ID id);
}
