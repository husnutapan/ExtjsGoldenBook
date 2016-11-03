Ext.define('myApp.view.UpdateAndDeleteWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.UpdateAndDeleteWindow',
	autoShow : true,
	title : 'Delete And Update Book',
	items : [ {
		xtype : 'form',
		bodyPadding : 5,
		flex : 1,
		defaultType : 'textfield',
		items : [ {
			name : 'title',
			fieldLabel : 'Title'
		}, {
			name : 'author',
			fieldLabel : 'Author'
		}, {
			name : 'price',
			fieldLabel : 'Price',
			maskRe : /[0-9.]/
		}, {
			name : 'qty',
			fieldLabel : 'Quantity',
			maskRe : /[0-9.]/
		} ]
	} ],

	buttons : [ {
		text : 'Update',
		itemId : 'updateButton',
		action : 'update',
	}, {
		text : 'Delete',
		itemId : 'deleteButton',
		action : 'delete',
	}, {
		text : 'Cancel',
		iconCls : 'button-cancel',
		handler : function(btn) {
			btn.up('window').close();
		}
	} ]

});