const express = require('express');
const router = express.Router();

var todoitems = [
		{id: 1, desc: 'foo'},
		{id: 2, desc: 'bar'},
		{id: 3, desc: 'baz'}
];

router.get('/', function(req, res){
	res.render('test', {
		title: 'My App',
		items: todoitems
   
   });
});

router.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	todoitems.push({
		id: todoitems.length + 1,
		desc: newItem
	});
	res.redirect('/');
});
module.exports = router;