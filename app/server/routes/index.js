/*
 * handling get requests
 */
var request = require('request');
var jf = require('jsonfile');
var util = require('util');

exports.home = function (req, res) {
    res.render('home', {});
};

exports.mortgage = function (req, res) {
    res.render('mortgage', {});
};

exports.currency = function (req, res) {
    var file = 'data/currency/reCountry.json';
    jf.readFile(file, function (err, obj) {
//        console.log(err)
//        console.log(util.inspect(obj))
        console.log(util.inspect(obj));
        res.render('currency', {
            myCus: obj
        });
    });

    // request(url, function(err, resp, body) {})
};

exports.contact = function (req, res) {
    res.render('contact', {});
};

exports.weather = function (req, res) {
    res.render('weather', {});
};

exports.mission = function (req, res) {
    res.render('mission', {});
};

exports.carLoan = function (req, res) {
    res.render('carLoan', {});
};

// exports.searching = function (req, res) {
//     //    res.send("WHEEE");
//     var val = req.query.search;
//     console.log(val);
//     var url = "http://api.openweathermap.org/data/2.5/weather?q=" + val;
//     console.log(url);
//     request(url, function (err, resp, body) {
//         body = JSON.parse(body);

//         if (err) {
//             console.log(err);
//         } else {
//             console.log(body);
//         }
//         res.send(body);
//     });
// };