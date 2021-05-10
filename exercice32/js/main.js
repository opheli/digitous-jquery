$(function () {


    console.log("exec script");

    $("button").click(function () {


        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function (data, statuts, response) {
                console.log("pays", data[0].name);
                console.log("capitale", data[0].capital);
            },

        });
    });

    console.log("fin script");
});