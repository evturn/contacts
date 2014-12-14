var ContactsCollection = Backbone.Collection.extend({
  model: Contact,
  url: '/contacts',
  maleContacts: function(){
    var maleContacts = this.models.filter(
      function(contact){
        return contact.get('gender') === "Male"
      }
    )
    var MaleContactsCollection = Backbone.Collection.extend({model: Contact});
    return new MaleContactsCollection(maleContacts);
  },
  femaleContacts: function(){
    return this.models.filter(
      function(contact){
        return contact.get('gender') === "Female"
      }
    )
  }
})