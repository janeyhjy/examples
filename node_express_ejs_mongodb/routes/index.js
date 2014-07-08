var express = require('express');
var User = require('../models/User.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* Hello World page */
router.get('/helloworld', function(req, res) {
	User.get('janey', function(err, doc) {
		console.log(err, doc);
		if(err) {
			res.render('helloworld', {title: 'Hello, World'});
		} else {
			res.render('helloworld', {title: 'Hello, World', user: doc});
		}
	});
	
});
module.exports = router;
