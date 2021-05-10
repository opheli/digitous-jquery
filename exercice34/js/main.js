$(function () {

    console.log("test tout est ok");

    $("button").click(function () {
        let pays = $("input").val();

        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/name/" + pays.toLowerCase(),
            success: function (data, statuts, response) {
                console.log("data", data[0].alpha2Code);

                $("#country").html(
                    "Country: <span id='country'>" + data[0].name + "</span>"
                );

                $("#capital").html(
                    "Capital: <span id='capital'>" + data[0].capital + "</span>"
                );
            },
        });
    });

    console.log("fin script");
});