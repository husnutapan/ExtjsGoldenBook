package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.BookDAO;
import com.model.Book;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDAO bookDAO;

	@Override
	@Transactional
	public void addBook(Book book) {
		bookDAO.addBook(book);
	}

	@Override
	@Transactional
	public void updateBook(Book book) {
		bookDAO.updateBook(book);
	}

	@Override
	@Transactional
	public List<Book> listBooks() {
		return bookDAO.listBooks();
	}

	@Override
	@Transactional
	public Book getBookById(int id) {
		return bookDAO.getBookById(id);
	}

	@Override
	@Transactional
	public void removeBook(int id) {
		bookDAO.removeBook(id);
	}

}
