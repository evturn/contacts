var johnDoe = new Contact({ gender: "male" });

var janeDoe = new Contact({ firstName: "Jane", gender: "female" });

var contactsCollection = new ContactsCollection();

contactsCollection.add(johnDoe);
contactsCollection.add(janeDoe);