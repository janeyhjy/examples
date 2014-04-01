define(['underscore', 'backbone', 'models/test'], function(_, Backbone, TestModel) {
    var TestCollection = Backbone.Collection.extend({
        url: 'testdata/test.json',
        model: TestModel,
        test: function() {
            console.log
            return _.where(this.models, {id: '111111'});
        }
    });
    return TestCollection;
});