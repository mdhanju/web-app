//WE = require('../modules/parseJson');
//parseForm = require('../modules/mortgageCalc');
var fs = require('fs');
var jf = require('jsonfile');
var util = require('util');
var file = 'currency/reCountry.json';

fs.readFile('../data/currency/currencyCodes.json', 'utf8', function (err, data) {
    if (err) throw err;
    var arr= [];
    obj = JSON.parse(data);
    if (typeof obj === 'object') {
        allKeys = Object.keys(obj);
        for (i = 0; i < allKeys.length; i++) {
            var value = (allKeys[i]);
            var label = obj[allKeys[i]];
            arr.push({
                value: (allKeys[i]),
                label: obj[allKeys[i]]
            });

        }
    }
    console.log(arr);
    jf.writeFile(file, arr, function (err) {
        console.log(err)
    })
});

module.exports = {};