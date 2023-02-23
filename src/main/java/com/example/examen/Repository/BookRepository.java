package com.example.examen.Repository;

import com.example.examen.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("SELECT b FROM Book b WHERE b.title LIKE %:keyword% OR b.author LIKE %:keyword%")
    List<Book> findByKeyword(@Param("keyword") String keyword);

    @Query("SELECT b FROM Book b WHERE LOWER(b.title) LIKE %:keyword% OR LOWER(b.author) LIKE %:keyword%")
    List<Book> findByKeywordIgnoreCase(String keyword);
}