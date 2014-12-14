var ContactView = Backbone.View.extend({
	tagName: 'li',
	className: 'contact',
	initialize: function() {
		this.render();
	},
	template: _.template($('#contact-template').html() ),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});