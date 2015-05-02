/*
 *handling post request
 */
parseForm = require('../modules/mortgageCalc');
weather = require('../modules/weather');
var routes = require('../routes');
WE = require('../modules/parseJson');

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

    var url = 'http://api.worldweatheronline.com/free/v2/weather.ashx?key=2699c2d06bc888d90e7064bc31eaa&q=' + req.body.city + '&num_of_days=1&format=json';

    weather.getWeatherCity(url, function (result) {
        
        var r_city = WE.getValueFromJson('query', result, function () {});
        var r_weather = WE.getValueFromJson('temp_F', result, function () {});
        var r_todayDate = WE.getValueFromJson('date', result, function () {});
        var r_sunrise = WE.getValueFromJson('sunrise', result, function () {});
        var r_sunset = WE.getValueFromJson('sunset', result, function () {});
        var r_desc = WE.getValueFromJson('weatherDesc', result, function () {});
        var r_srcurl = WE.getValueFromJson('weatherIconUrl', result, function () {});

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

exports.carLoan = function (req, res) {
    parseForm.printRes(req);
};