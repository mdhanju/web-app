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

    city = req.body.city;

    var url = "http://api.openweathermap.org/data/2.5/weather";
    var reqObj = url + '?q=' + city;
    //    reqObj = 'http://api.wunderground.com/api/' + '751ccf6e87586dc4' + '/conditions/q/CA/' + 'city' + '.json';

    weather.getWeatherCity(reqObj, function (result) {
        console.log('**** in callback function after getting weather ****');
        console.log(result);
        var weatherDes;
        if (!result) {
            weatherDes = 'Not able to retrieve weather';
        } else {
            weatherDes = JSON.parse(result).weather[0].description;
        }

        res.render('resultweather', {
            city: city,
            weather: weatherDes
        });

    });

    console.log('resWeather ====== ');
    //    weather = ' no weather yet';

};