/*
 *Handle post requests
 *
 */

module.exports = {

    printRes: function (res) {
        console.log(res.body);
    },

    calculateMonthlyInst: function (res) {
        console.log(' ** this will return monthly installment **');
        var result = 2343;
        return result;
    },

    calculateBiMonthlyInst: function (res) {
        console.log(' ** this will return bi-monthly installment **');
        var result = 2343 / 2;
        return result;
    },

};