var ContactsCollection = Backbone.Collection.extend({
	model: Contact,
	maleContacts: function(){
		return this.models.filter(
			function(contact){
			return contact.get('gender') === "Male"
		})
	}
});