define(['backbone', 'models/test'], function(Backbone, TestModel) {
	var TestCollection = Backbone.Collection.extend({
		url: 'testdata/test.json',
		model: TestModel
	});
	return TestCollection;
});