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
    var url = 'http://api.worldweatheronline.com/free/v2/weather.ashx?key=2699c2d06bc888d90e7064bc31eaa&q=' + req.body.city + '&num_of_days=1&format=json';

    weather.getWeatherCity(url, function (result) {
        console.log('**** in callback function after getting weather ****');
        console.log(req.body.city);

        var weatherDes;
        console.log(result);
        parseForm.printRes(result);
        weather.sortWeather(result, function (myObj) {
            console.log('temp == ' + myObj.cTemp);
            res.render('resultweather', {

                city: myObj.city,
                weather: myObj.currentTemp,
                todayDate: myObj.todayDate,
                sunrise: myObj.sunrise,
                sunset: myObj.sunset,
                desc: myObj.description,
                srcurl: myObj.image
            });
        });
        //        sortWeather
        //        if ((result == 404) || (req.body.city === "")) {
        //            weatherDes = 'Not able to retrieve weather or Invalid city';
        //        } else {
        //            console.log("------");
        //           // weatherDesTemp = JSON.parse(result);
        //            if (weatherDesTemp.hasOwnProperty("message")) weatherDes = 'Invalid city';
        //            else weatherDes = weatherDesTemp.weather[0].description;
        //        }
        //        res.render('resultweather', {
        //            //            city: req.body.city,
        //            //            weather: weatherDes
        //        });
    });
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