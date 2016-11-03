Ext.define('myApp.view.BookList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.bookslist',
	store : 'Books',
	title : 'Book List * By Husnu TAPAN',


	initComponent : function() {

		this.tbar = [ {
			text : 'Add Book',
			action : 'add',
			iconCls : 'book-add'
		} ];

		this.columns = [ {
			header : 'Title',
			dataIndex : 'title',
			flex : 1
		}, {
			header : 'Author',
			dataIndex : 'author',
		}, {
			header : 'Price',
			dataIndex : 'price',
			width : 60
		}, {
			header : 'Quantity',
			dataIndex : 'qty',
			flex : 1
		} ];

		this.dockedItems = [ {
			xtype : 'toolbar',
			ui : 'footer',
			layout : {
				pack : 'center'
			},
			defaults : {
				minWidth : 80
			},

			items : [ {
				text : 'Create',
				xtype : 'button',
				itemId : 'btnCreate',

			}, {
				text : 'Load Data',
				itemId : 'btnLoad'
			}, {
				text : 'Save',
				itemId : 'btnSave'
			}, {
				text : 'Delete',
				itemId : 'btnDelete'
			} ]

		} ];

		this.callParent(arguments);
	}

});