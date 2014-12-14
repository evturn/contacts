var Contact = Backbone.Model.extend({
	defaults: {
		firstName: "John",
		lastName: "Doe"
	},
	fullName: function() {
		this.get('firstName') + " " + ('this.lastName');
	}
});