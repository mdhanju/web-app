var request = require('request');
WE = require('../modules/parseJson');
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
    }
};