var ContactsCollection = Backbone.Collection.extend({
	model: Contact,
	url: '/api',
	maleContacts: function(){
		var maleContacts = this.models.filter(
			function(contact){
			return contact.get('gender') === "Male"
			}
		)
		var MaleContactsContactsCollection = Backbone.Collection.extend({ model: Contact });
		return new MaleContactsCollection(maleContacts);
	},
	femaleContacts: function(){
		return this.models.filter(
			function(contact){
			return contact.get('gender') === "Female"
			}
		)
	}
});