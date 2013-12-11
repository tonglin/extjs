Ext.application({
	requires: ['Ext.container.Viewport'],
	controllers: ['Users'],
	name: 'AM',
	appFolder: 'app',
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: {
				xtype: 'userlist'
			}
		});
	}
});