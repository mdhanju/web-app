/*
 *handling post request
 */
parseForm = require('../modules/mortgageCalc');
weather = require('../modules/weather');
currency = require('../modules/currency');
var request = require('request');

var routes = require('../routes');
WE = require('../modules/parseJson');
var fs = require('fs');

exports.morData = function(req, res) {
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

exports.weatherData = function(req, res) {
    parseForm.printRes(req);

    var url = 'http://api.worldweatheronline.com/free/v2/weather.ashx?key=2699c2d06bc888d90e7064bc31eaa&q=' + req.body.city + '&num_of_days=1&format=json';

    weather.getWeatherCity(url, function(result) {

        var r_city = WE.getValueFromJson('query', result, function() {});
        var r_weather = WE.getValueFromJson('temp_F', result, function() {});
        var r_todayDate = WE.getValueFromJson('date', result, function() {});
        var r_sunrise = WE.getValueFromJson('sunrise', result, function() {});
        var r_sunset = WE.getValueFromJson('sunset', result, function() {});
        var r_desc = WE.getValueFromJson('weatherDesc', result, function() {});
        var r_srcurl = WE.getValueFromJson('weatherIconUrl', result, function() {});

        res.render('resultweather', {
            city: r_city,
            weather: r_weather,
            todayDate: r_todayDate,
            sunrise: r_sunrise,
            sunset: r_sunset,
            desc: r_desc,
            srcurl: r_srcurl
        });
    });
};

exports.carLoan = function(req, res) {
    parseForm.printRes(req);
};

exports.getTodaysRate = function(req, res) {

    // console.log("RESULT = req = " + req.query.currFrom);
    // var ram1 = currency.getTodayRate(req, function() {});
    // console.log("RAMMM  ram1 = " + ram1);
    // var ram = WE.getValueFromJson('rate', function() {});
    // console.log("RAMMM = " + ram);

    var rawUrl = "http://jsonrates.com/get/?";
    var key = "&apiKey=jr-45bd80322cf6cbe3c6bfaede65f4e998";
    var currF = req.query.currFrom;
    var currT = req.query.currTo;

    console.log(' currF == ' + currF);
    console.log(' currT == ' + currT);

    var rate;
    var finalUrl = rawUrl + "from=" + currF + "&to=" + currT + key;

    request(finalUrl, function(err, resp, body) {
        var result;
        if (err)  console.log(' ****** ERROR FROM SERVICE ****** ');
        else{
        console.log(' BODY == ' + body);
         rate = WE.getValueFromJson('rate', body, function() {});
        }
        res.send(rate);
    });
};
