$(document).ready(function () {

    $(function () {
        $("button").click(function () {
            $.ajax({
                method: "GET",
                url: "https://restcountries.eu/rest/v2/name/france",
                success: function (data, statuts, response) {
                    $("#exercise:not(.btn)").html(
                        "Country: <span id='country'>" + data[0].name + "</span><br>" +
                        "Capital: <span id='capital'>" + data[0].capital + "</span><br>" +
                        "<button class='btn btn-success'>Bouton magique</button>"
                    );
                },

            });
        });
    });

});














