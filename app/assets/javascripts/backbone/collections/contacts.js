var ContactsCollection = Backbone.Collection.extend({
	model: Contact,
	maleContacts: function(){
		this.models.filter(function(contact){
			return contact.get('gender') === "Male"
		})
	}
});