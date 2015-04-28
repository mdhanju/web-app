/*
 * handling get requests
 */

var request = require('request');

exports.home = function (req, res) {
    res.render('home', {});
};

exports.employees = function (req, res) {
    res.render('employees', {});
};

exports.services = function (req, res) {
    res.render('services', {});
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


exports.searching = function (req, res) {
    //    res.send("WHEEE");
    var val = req.query.search;
    console.log(val);
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + val;
    console.log(url);
    request(url, function (err, resp, body) {
        body = JSON.parse(body);

        if (err) {
            console.log(err);
        } else {
            console.log(body);
        }
        res.send(body);
    });
};