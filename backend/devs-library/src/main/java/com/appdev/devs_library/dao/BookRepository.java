package com.appdev.devs_library.dao;

import com.appdev.devs_library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
