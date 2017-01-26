var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express(); 
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/photos', express.static(__dirname + "/photos"));
app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});