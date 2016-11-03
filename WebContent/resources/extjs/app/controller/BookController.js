Ext.define('myApp.controller.BookController', {
	extend : 'Ext.app.Controller',

	views : [ 'BookList', 'CreateWindow', 'UpdateAndDeleteWindow' ],
	stores : [ 'Books' ],

	refs : [ {
		ref : 'bookslist',
		selector : 'bookslist'
	}, {
		ref : 'UpdateAndDeleteWindow',
		selector : 'UpdateAndDeleteWindow'
	} ],

	init : function(application) {
		this.control({

			'bookslist' : {
				itemdblclick : function(grid, record) {
					console.log(grid);
					var win = Ext.widget('UpdateAndDeleteWindow');
					win.down('form').loadRecord(record);
					win.show();
				}
			},

			'bookslist button#btnCreate' : {
				click : this.onCreateClick
			},

			'bookslist button#btnLoad' : {
				click : this.onLoadClick
			},

			'bookslist button#btnSave' : {
				click : this.onSaveClick
			},

			'bookslist button#btnDelete' : {
				click : this.onDeleteClick
			},

			'CreateBookWindow button[action=save]' : {
				click : this.onSaveButtonClick
			},

			'UpdateAndDeleteWindow button[action=update]' : {
				click : this.onUpdateButtonClick
			}

		});

	},

	onCreateClick : function() {
		Ext.widget('CreateBookWindow');
	},

	onLoadClick : function() {
		console.log('onLoadClick Function');
	},

	onSaveClick : function() {
		console.log('onSaveClick Function');
	},

	onDeleteClick : function() {
		console.log('onDeleteClick Function');
	},

	onSaveButtonClick : function(button, record) {
		var win = button.up('window'), form = win.down('form'), values = form
				.getValues();
		Ext.Ajax.request({
			url : '/BookCRUD/saveBook',
			method : 'POST',
			params : {
				bookData : Ext.encode(values)
			},
			scope : this,

			success : this.onRequestBookSave

		});

	},

	onRequestBookSave : function() {
		var win = Ext.WindowManager.getActive();
		if (win) {
			win.close();
		}

		var tBookStore = Ext.StoreManager.lookup('Books');
		tBookStore.load();

		Ext.MessageBox.alert('Success Book Save');

	},

	onUpdateButtonClick : function(button, record) {
		var win = button.up('window'), form = win.down('form'), values = form
				.getValues();

		Ext.Ajax.request({
			url : '/BookCRUD/updateBook',
			method : 'POST',
			params : {
				bookData : Ext.encode(values)
			},
			scope : this
		});

		var win = Ext.WindowManager.getActive();
		if (win) {
			win.close();
		}

		var tBookStore = Ext.StoreManager.lookup('Books');
		tBookStore.load();

		Ext.MessageBox.alert('Success Book Update');

	}

});