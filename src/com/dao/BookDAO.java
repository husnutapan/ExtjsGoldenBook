package com.dao;

import java.util.List;

import com.model.Book;

public interface BookDAO {
	public void addBook(Book book);
	public void updateBook(Book book);
	public List<Book> listBooks();
	public Book getBookById(int id);
	public void removeBook(int id);
}
