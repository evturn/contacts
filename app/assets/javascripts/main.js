var contactsCollection = new ContactsCollection();

contactsCollection.fetch();

Handlebars.registerHelper('debugger', function() {
	debugger;
})