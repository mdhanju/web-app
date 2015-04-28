var express = require('express');
var routes = require('./server/routes');
var postData = require('./server/routes/postReq.js');
var user = require('./server/routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


//all environments 
app.set('port', process.env.port || 3000);
app.set('host', process.env.host || 'localhost');
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');


//app.use(router);
app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('/', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});

app.get('/', routes.home);
app.get('/services', routes.services);
app.get('/employees', routes.employees);
app.get('/contact', routes.contact);
app.get('/mission', routes.mission);
app.get('/weather', routes.weather);
app.get('/users', user.list);

app.post('/morData', postData.morData);
app.post('/weatherData', postData.weatherData);


http.createServer(app).listen(app.get('port'), app.get('port'), function () {
    console.log('Server  started  http://' + app.get('host') + ":" + app.get('port'));
});