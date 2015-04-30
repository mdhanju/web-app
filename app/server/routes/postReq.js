/*
 *handling post request
 */
parseForm = require('../modules/mortgageCalc');
weather = require('../modules/weather');
var routes = require('../routes');

exports.morData = function (req, res) {
    parseForm.printRes(req);
    var monthlyInst = parseForm.calculateMonthlyInst(req);
    var biMonthlyInst = parseForm.calculateBiMonthlyInst(req);
    console.log(' Monthly Inst = ' + monthlyInst);
    console.log(' Bi Monthly Inst = ' + biMonthlyInst);
    //    res.send('mission', routes.mission);

    res.render('resultmortgage', {
        monthlyInst: monthlyInst,
        biMonthlyInst: biMonthlyInst
    });
};


exports.weatherData = function (req, res) {
    parseForm.printRes(req);
    //    city = req.body.city;
    //    var url = "http://api.openweathermap.org/data/2.5/weather";
    //    var reqObj = url + '?q=' + city;
    //    weather.getWeatherCity(reqObj, function (result) {
    weather.getWeatherCity("http://api.openweathermap.org/data/2.5/weather?q=" + req.body.city, function (result) {
        console.log('**** in callback function after getting weather ****');
        console.log(req.body.city);
        var weatherDes;
        console.log(!result);
        if ((result == 404) || (req.body.city === "")) weatherDes = 'Not able to retrieve weather or Invalid city';
        else {
            console.log("------");
            weatherDesTemp = JSON.parse(result);
            if (weatherDesTemp.hasOwnProperty("message")) weatherDes = 'Invalid city';
            else weatherDes = weatherDesTemp.weather[0].description;
        }
        res.render('resultweather', {
            city: req.body.city,
            weather: weatherDes
        });
    });
    console.log('resWeather ====== ');
};


exports.carLoan = function (req, res) {

    parseForm.printRes(req);

    //    city = req.body.city;
    //    var url = "http://api.openweathermap.org/data/2.5/weather";
    //    var reqObj = url + '?q=' + city;
    //    weather.getWeatherCity(reqObj, function (result) {


    console.log('resWeather ====== ');
    //    weather = ' no weather yet';

};