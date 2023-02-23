package com.example.examen.Controller;

import com.example.examen.Repository.BookRepository;
import com.example.examen.entities.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {
    @Autowired
    private BookRepository bookRepository;
    ArrayList<String> devWord = new ArrayList<>();


    @GetMapping("/books")
    public List<Book> searchBooks(@RequestParam("q") String keyword) {
        System.out.println(keyword);
        System.out.println(bookRepository.findByKeyword(keyword).toString());
        if (bookRepository.findByKeywordIgnoreCase(keyword).isEmpty()) {
            devWord.add(keyword);
            System.out.println("Afisez lista:");
            System.out.println(devWord);
        }

        return bookRepository.findByKeywordIgnoreCase(keyword);
    }

    @GetMapping("/books-all")
    public List<Book> getBooks() {
        System.out.println(bookRepository.findAll());
        return bookRepository.findAll();
    }
}