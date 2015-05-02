WE = require('../modules/parseJson');
parseForm = require('../modules/mortgageCalc');
//parseForm.printRes({});

var fs = require('fs');
var ooobj;
ooobj = fs.readFile('../modules/test.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    //    console.log(obj);


    //    parseForm.printRes(obj);
    var myResult = WE.getValueFromJson('date', obj, function (error) {
        console.log(" error = " + error);
    });
    
    var myResult1 = WE.getValueFromJson('weatherIconUrl', obj, function (error) {
        console.log(" error = " + error);
    });
    
    var myResult2 = WE.getValueFromJson('temp_F', obj, function (error) {
        console.log(" error = " + error);
    });
    
    var myResult3 = WE.getValueFromJson('wwwwww', obj, function (error) {
        console.log(" error = " + error);
    });
    var myResult4 = WE.getValueFromJson('sunrise', obj, function (error) {
        console.log(" error = " + error);
    });
    
//  
    console.log(" RESULT = " + myResult);
    console.log(" RESULT  weatherIconUrl = " + myResult1);
    console.log(" RESULT temp_F = " + myResult2);
    console.log(" RESULT query = " + myResult3);
    console.log(" RESULT sunrise = " + myResult4);
    
});

module.exports = {};