var ContactRouter = Backbone.Router.extend({
  routes: {
    '*default': 'index'
  },
  initialize: function(options){
    this.collection = options.collection;
  },
  index: function(){
    console.log('Contact Router now rendering index');
    // var that = this
    this.collection.fetch().done(function(){
      var contactsCollectionView = new ContactsCollectionView({
        el: $('.contacts'),
        // collection: that.collection
        collection: this.collection
      })
    }.bind(this));
  }
});
