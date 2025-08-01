package com.appdev.devs_library.service;

import com.appdev.devs_library.dao.BookRepository;
import com.appdev.devs_library.dao.CheckoutRepository;
import com.appdev.devs_library.entity.Book;
import com.appdev.devs_library.entity.Checkout;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

@Service
@Transactional
public class BookService {

    private BookRepository bookRepository;

    private CheckoutRepository checkoutRepository;

    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository) {
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
    }

    public Book checkoutBook(String userEmail, Long bookId) throws Exception {
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        if (!optionalBook.isPresent() || validateCheckout != null || optionalBook.get().getCopiesAvailable() <= 0) {
            throw  new Exception("Book doesn't exist or already checked out by a user");
        }
        optionalBook.get().setCopiesAvailable(optionalBook.get().getCopiesAvailable() - 1);
        bookRepository.save(optionalBook.get());
        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                optionalBook.get().getId()
        );

        checkoutRepository.save(checkout);
        return optionalBook.get();
    }

    public Boolean checkoutBookByUser(String userEmail, Long bookId) {
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        if (validateCheckout != null) {
            return true;
        } else {
            return false;
        }
    }

    public int currentLoansCount(String userEmail) {
        return checkoutRepository.findBookByUserEmail(userEmail).size();
    }

}
