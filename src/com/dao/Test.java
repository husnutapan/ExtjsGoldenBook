package com.dao;

import com.model.Book;

public class Test {

	public static void main(String[] args) {
		BookDAOImpl bookDAOImpl = new BookDAOImpl();
		Book book = new Book(1, "Title1", "Author1", 2000, 1111);
		bookDAOImpl.addBook(book);
	}

}
