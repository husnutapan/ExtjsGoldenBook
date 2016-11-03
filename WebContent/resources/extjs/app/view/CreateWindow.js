Ext.define('myApp.view.CreateWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.CreateBookWindow',
	autoShow : true,
	title : 'Creating Book',
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
		text : 'Save',
		iconCls : 'button-save',
		itemId : 'saveWindowButton',
		action : 'save',
	}, {
		text : 'Cancel',
		iconCls : 'button-cancel',
		handler : function(btn) {
			btn.up('window').close();
		}
	} ]

});