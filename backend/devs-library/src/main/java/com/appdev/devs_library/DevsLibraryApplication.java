package com.appdev.devs_library;

import com.appdev.devs_library.dao.BookRepository;
import com.appdev.devs_library.entity.Book;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class DevsLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevsLibraryApplication.class, args);
		System.out.println("DB URL: " + System.getProperty("spring.datasource.url"));
	}

	@Bean
	CommandLineRunner runner(BookRepository bookRepository) {
		return args -> {
			System.out.println("Books in DB:");
			bookRepository.findAll().forEach(System.out::println);
		};
	}

}
