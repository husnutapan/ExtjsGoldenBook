Ext.define('myApp.store.Books', {
	extend : 'Ext.data.Store',
	storeId : 'bookStore',
	model : 'myApp.model.Book',
	fields : [ 'id', 'title', 'author', 'price', 'qty' ],
	proxy : {
		type : 'ajax',
		url : '/BookCRUD/getBookList',
		actionMethods : {
			create : 'POST',
			read : 'POST',
			update : 'POST',
			destroy : 'POST'
		},
		reader : {
			type : 'json',
			root : 'books'
		}
	},
	autoLoad : true
});