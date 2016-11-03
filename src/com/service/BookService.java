package com.service;

import java.util.List;

import com.model.Book;

public interface BookService {
	public void addBook(Book book);
	public void updateBook(Book book);
	public List<Book> listBooks();
	public Book getBookById(int id);
	public void removeBook(int id);

}
