define(['backbone'], function(Backbone) {
	var TestModel = Backbone.Model.extend({
                    defaults: {
                        id: '111111',
                        name: '1'
                    },
		//url: 'testdata/test.json', 
		urlRoot: "",//当有collection时，只要定义一个空的urlRoot
		
	});
	return TestModel;
});