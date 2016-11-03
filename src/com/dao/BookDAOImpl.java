package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.model.Book;
import com.utility.HibernateUtil;

@Repository
public class BookDAOImpl implements BookDAO {

	@Autowired
	private HibernateUtil hibernateUtil;

	@Override
	public void addBook(Book book) {
		hibernateUtil.create(book);
	}

	@Override
	public void updateBook(Book book) {
		hibernateUtil.update(book);
	}

	@Override
	public List<Book> listBooks() {
		return hibernateUtil.fetchAll(Book.class);
	}

	@Override
	public Book getBookById(int id) {
		return null;
	}

	@Override
	public void removeBook(int id) {
	}

}
