var postData = require('./routes/postReq');
var user = require('./routes/user');
var routes = require('./routes');
//var router = express.Router();

module.exports = function (app) {

    app.all(['*', '*/**'], function (req, res, next) {
        console.log('Router is called  ...');
        next(); // pass control to the next handler
    });


    app.get('/', routes.home);
    app.get('/currency', routes.currency);
    app.get('/mortgage', routes.mortgage);
    app.get('/contact', routes.contact);
    app.get('/mission', routes.mission);
    app.get('/weather', routes.weather);
    app.get('/carLoan', routes.carLoan);
    app.get('/users', user.list);

    app.post('/morData', postData.morData);
    app.post('/weatherData', postData.weatherData);
    app.post('/carLoan', postData.carLoan);

};