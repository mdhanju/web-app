module.exports = function (callback) {

    if (callback) {
        var PROPERTIES = require('../config.json');
        console.log('Loading browser ');
        var browser = require('webdriverio').remote({
            logLevel: PROPERTIES.logLevel || 'none',
            host: PROPERTIES.host || 'localhost',
            desiredCapabilities: {
                browserName: PROPERTIES.browser || 'chrome',
            }
        });
        callback(browser);
    }
};