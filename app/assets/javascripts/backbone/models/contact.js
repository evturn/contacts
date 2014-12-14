var Contact = Backbone.Model.extend({
	defaults: {
		firstName: "John",
		lastName: "Doe",
		gender: "",
		phone: ""
	},
	fullName: function() {
		this.get('firstName') + " " + ('this.lastName');
	}
});