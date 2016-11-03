package com.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.model.Book;
import com.service.BookService;

@Controller
public class BookController {

	@Autowired
	private BookService bookService;

	@RequestMapping(value = "/getBookList", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, List<Book>> getBookList() {
		List<Book> bookList = new ArrayList<>();
		bookList = bookService.listBooks();
		Map<String, List<Book>> books = new HashMap<String, List<Book>>();
		books.put("books", bookList);
		return books;
	}

	@RequestMapping(value = "/saveBook", method = RequestMethod.POST)
	public @ResponseBody String saveBook(HttpServletRequest servletRequest) {
		String bookData = servletRequest.getParameter("bookData");
		Gson gson = new Gson();
		Book book = gson.fromJson(bookData, Book.class);

		System.out.println(bookData);
		bookService.addBook(book);
		return "";
	}

	@RequestMapping(value = "/updateBook", method = RequestMethod.POST)
	public @ResponseBody String updateBook(HttpServletRequest httpServletRequest) {
		String bookData = httpServletRequest.getParameter("bookData");
		Gson gson = new Gson();
		Book book = gson.fromJson(bookData, Book.class);
		bookService.updateBook(book);
		return "";
	}

}
