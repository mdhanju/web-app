var myBeforeHooks = function () {
    this.Before(function (callback) {
        //            this will be executed before each scenarios
        //        console.log(' ***** In before hook ***** ');

        callback();
    });

};
module.exports = myBeforeHooks;


var myBeforeTagHooks = function () {
    this.Before("@smoke", "@reg,@fun", function (callback) {
        // This hook will be executed before scenarios tagged with @smoke and either
        // @reg or @fun.
        console.log(' ***** In after tag hook ***** ');
        callback();
    });
};
module.exports = myBeforeTagHooks;


var myAfterHooks = function () {

    this.After(function (callback) {
        //        this will be executed after each scenarios
        //        console.log(' ***** In after hook ***** ');
        //            ending test in after hook
        //            cleaning test
        //            closing browser

        this.end(callback);
    });
};
module.exports = myAfterHooks;