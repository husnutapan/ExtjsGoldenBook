Ext.application({
	name : 'myApp',
	appFolder : 'resources/extjs/app',
	controllers : [ 'BookController' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : {
				xtype : 'bookslist',
			}
		});
	}

});