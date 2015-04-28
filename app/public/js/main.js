function HomeController() {
    $(function () {
        $('#search').on('keyup', function (e) {
            if (e.keyCode === 13) {
                var parameters = {
                    search: $(this).val()
                };
                $.get('/searching', parameters, function (data) {
                    console.log("  1 *************************** ");
                    console.log(data);
                    console.log("  2 *************************** ");
                    console.log(data.length);

                    //                $('#results').html(data.city);
                    //                $('#weather').html(data.weather[0].description);
                });
            }
        });
    });



    $('a').click(function () {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
        }
    });

}



$('#datetimepicker4').click(function () {
    $(function () {
        console.log("ready!");
    });
});

function parseMyResult(arg1, arg2) {
    console.log("arg1 = " + arg1);
    console.log("arg2 = " + arg2);
}