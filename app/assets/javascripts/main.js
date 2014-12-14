var contactsCollection = new ContactsCollection({});


var contactsCollection = new ContactsCollection();

contactsCollection.fetch().done(function(){
	var contactsCollectionView = new ContactsCollectionView({
		$el: $('.contacts'),
		collection: contactsCollection
	})
});

var contactsRouter = new ContactsRouter({
	collection: contactsCollection
});

Backbone.history.start();
