var indexSteps = function () {

    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');
    this.Given(/^I am on home page$/, function (callback) {
        console.log(' App url = ' + PROPERTIES.host);
        console.log(' App port = ' + PROPERTIES.port);
        var appUrl = PROPERTIES.host + ':' + PROPERTIES.port;
        this.init().url(appUrl, callback);


    });

    this.When(/^I see home tab$/, function (callback) {
        this.pause(5000, callback);

    });

    this.When(/^I see about tab$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.When(/^I see home content$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.When(/^I click on about tab$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.Then(/^I see about content$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        //        this.end(callback);
        callback();

    });
};

module.exports = indexSteps;