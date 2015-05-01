var request = require('request');

module.exports = {

    getWeatherCity: function (reqObj, callback) {

        request(reqObj, function (err, resp, body) {
            var result;
            if (err) {
                console.log(' ***** ERROR ***** ');
                result = false;
            } else {
                result = body;
            }
            callback(result);
        });
    },


    sortWeather: function (obj, callback) {
        var result = JSON.parse(obj);
        var err, tDate, cTemp, sr, ss, ci, wd, im;

        var er = result.data.error;
        console.log('===============================' + typeof er === 'object');
        if (typeof er === 'object') {
            console.log(' ***** We got error **** ' + er);
            err = tDate = cTemp = sr = ss = ci = 'Not Available';
        } else {
            console.log(' ***** call success **** ');
            tDate = result.data.weather[0].date;
            cTemp = result.data.current_condition[0].temp_F;
            sr = result.data.weather[0].astronomy[0].sunrise;
            ss = result.data.weather[0].astronomy[0].sunset;
            ci = result.data.request[0].query;
            cTemp = result.data.current_condition[0].temp_F;
            wd = result.data.current_condition[0].weatherDesc[0].value;
            im = result.data.current_condition[0].weatherIconUrl[0].value;
            console.log(tDate + cTemp + sr + ss + wd + im);
        }

        var res = {
            todayDate: tDate,
            currentTemp: cTemp,
            sunrise: sr,
            sunset: ss,
            city: ci,
            error: er,
            description: wd,
            image: im
        };

        callback(res);
    }
};