define(['backbone', 'models/test'], function(Backbone, TestModel) {
	var TestCollection = Backbone.Collection.extend({
		url: 'testdata/test.json',
		model: TestModel,
                     test: function() {
                        return this.where({id: '111111'});
                    }
	});
	return TestCollection;
});