define(['backbone', 'models/test'], function(Backbone, TestModel) {
	var TestCollection = Backbone.Collection.extend({
		url: 'test',
		model: TestModel
	});
	return TestCollection;
});