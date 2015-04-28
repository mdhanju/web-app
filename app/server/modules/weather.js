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
    }
};