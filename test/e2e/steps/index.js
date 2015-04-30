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
        this.isVisible('#home', callback);
    });

    this.When(/^I see Mortgage Loan tab$/, function (callback) {
        this.isVisible('#mortgageLoan', callback);
    });

    this.When(/^I see Car Loan content$/, function (callback) {
        this.isVisible('#carLoan', callback);
    });

    this.When(/^I click on weather tab$/, function (callback) {
        this.click('#weather', function (err, callback) {});
        callback();

    });

    this.Then(/^I see about content$/, function (callback) {
        this.isVisible('#headingWeatherForcast');
        this.pause(1000, callback);
    });
};

module.exports = indexSteps;




//.setValue('#messageBox', 'Hello I\'m a Chrome browser ')
//            .click('=Send');
//
//        firefox
//            .getValue('#chat', function(err, text) {
//                text.should.be.equal('Hello I\'m a Chrome browser');
//            });
//            .setValue('#messageBox', 'Hello Chrome! Here comes the Firefox')
//            .click('=send');