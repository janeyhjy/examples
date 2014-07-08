var mongodb = require("../db.js");
function User(user) {
	this.name = user.name;
	this.gender = user.gender;
	this.age = user.age;
}
module.exports = User;
User.prototype.Insert = function(callback) {
	var user = {
		id: this.id,
		name: this.name,
		gender: this.gender,
		age: this.age
	}
	mongodb.open(function(err, db) {
		if(err) {
			return callback(err);
		}
		db.collection('user', function(err, collection) {
			if(err) {
				mongodb.close();
				return callback(err);
			}
			collection.insert(user, {safe: true}, function(err, result) {
				mongodb.close();
				callback(err, user);
			});
		});
	});
}
User.get = function(name, callback) {
	mongodb.open(function(err, db) {
		if(err) {
			return callback(err);
		}
		db.collection('user', function(err, collection) {
			if(err) {
				mongodb.close();
				return callback(err);
			}
			collection.findOne({name: name}, function(err, doc) {
				mongodb.close();
				if(doc) {
					var user = new User(doc);
					callback(err, user);
				} else {
					callback(err, null);
				}
			})
		});
	});
}