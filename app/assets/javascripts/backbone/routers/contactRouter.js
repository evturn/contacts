var ContactsRouter = Backbone.Router.extend({
	routes: {
		'*default': 'index'
	},
	initialize: function(options){
		this.collection = options.collection;
	},
	index: function() {
		this.collection.fetch().done(function() {
			var contactsCollectionView = new ContactsCollectionView({
				el: $('.contacts'),
				collection: this.collection
			})
		}.bind(this));
	}
});
