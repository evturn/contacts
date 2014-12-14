var ContactsCollectionView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.empty();
		this.collection.models.forEach(function(model){
			var modelView = new ContactView({ model: model });
			this.$el.append(modelView.render().$el);
		})
	}
});