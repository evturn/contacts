var contactsCollection = new ContactsCollection();

var contactsRouter = new ContactRouter({
  collection: contactsCollection
})
Backbone.history.start();
