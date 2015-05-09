window.onload = function() {
    $('#currTo').change(function() {
        updateRate();
    });

    $('#currFrom').change(function() {
        updateRate();
    });

    function updateRate() {
        var currFrom = $('#currFrom').find(':selected').val();
        var currTo = $('#currTo').find(':selected').val();
        console.log("currFrom = " + currFrom);
        console.log("currTo = " + currTo);

        var reqObj = "currFrom=" + currFrom + "&currTo=" + currTo;
        console.log("reqObj in browser = " + reqObj); 
        $.get('/getTodaysRate', reqObj, function(data) {
            console.log("DATA = " + data);
            if (data=="Not Available") $('#results').html(" ");
            else  $('#results').html(data);
        });
    }
};