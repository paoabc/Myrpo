const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');




const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'bower_components/bootstrap/dist')));

const index = require('./routers/index');

app.use(index);



app.listen(3000, function()	{
	console.log('Server started on port 3000');
});
