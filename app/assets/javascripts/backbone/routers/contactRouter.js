var ContactsRouter = Backbone.Router.extend({
	routes: {
		'*default': 'index'
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
