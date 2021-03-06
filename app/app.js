var express = require('express');
var routes = require('./server/routes');
var postData = require('./server/routes/postReq.js');
var user = require('./server/routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var PROPERTIES = require('../data/currency/reCountry.json');

//all environments 
app.set('port', process.env.port || 3000);
app.set('host', process.env.host || '127.0.0.1');
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

//app.use(router);
app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('/', function (req, res, next) {
    console.log('Getting Home Page  ...');
    next(); // pass control to the next handler
});

require('./server/router')(app);

http.createServer(app).listen(app.get('port'), app.get('port'), function () {
    console.log('Server  started  http://' + app.get('host') + ":" + app.get('port'));
});