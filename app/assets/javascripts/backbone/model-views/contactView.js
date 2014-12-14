var ContactView = Backbone.View.extend({
	tagName: 'li',
	className: 'contact',
	initialize: function() {
		this.render();
	},
	template: Handlebars.compile($('#contact-template)').text() ),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});