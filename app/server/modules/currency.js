var request = require('request');
WE = require('../modules/parseJson');
var Promise = require('promise');

module.exports = {

    getTodayRate: function(req, res, callback) {
        parseForm.printRes(req);

        var rawUrl = "http://jsonrates.com/get/?";
        var key = "&apiKey=jr-45bd80322cf6cbe3c6bfaede65f4e998";
        var currF = req.query.currFrom;
        var currT = req.query.currTo;

        console.log(' currF == ' + currF);
        console.log(' currT == ' + currT);


        var finalUrl = rawUrl + "from=" + currF + "&to=" + currT + key;

        // request(finalUrl, function(err, resp, body) {
        //     var result;
        //     if (err) console.log(' ***** ERROR ***** ');
        //     // callback(body);
        //     console.log(' BODY == ' + body);
        //     return body;

        // });

        var promise = new Promise(function(resolve, reject) {
            get(rawUrl, function(err, res) {
                if (err) reject(err);
                else {
                    // resolve(res);
                    console.log(' BODY == ' + body);
                    return body;
                }
            })
        })


    }
};
