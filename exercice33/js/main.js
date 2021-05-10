$(function () {


    console.log("test tout est ok");

    $("button").click(function () {


        $.ajax({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function (data, statuts, response) {
                console.log("pays", data[0].name);
                console.log("capitale", data[0].capital);

                $("#exercise:not(.btn)").html(
                    "Country: <span id='country'>" + data[0].name + "</span><br>" +
                    "Capital: <span id='capital'>" + data[0].capital + "</span><br>" +
                    "<button class='btn btn-success'>Bouton magique</button>" 
                  );
            },

        });
    });

    console.log("fin script");
});







// $(function () {

//     console.log("test tout est ok");
    
//     $("#search").click(function(){
//       let pays = $("#pays").val();
  
//       $.ajax({
//         method: "GET",
//         url: "https://restcountries.eu/rest/v2/name/" + pays.toLowerCase(),
//         success: function (data, statuts, response) {
//           console.log("data", data[0].alpha2Code);
    
//           $("#info").html(
//             "Mon code est <strong class='important'>" + data[0].alpha2Code + "</strong><br>" +
//             "Mon nom est <strong class='important'>" + data[0].name
//           );
//         },
//         error: function () {
//           $("#info").html(
//             `<p class="error">Le pays recherché est invalide</p>`
//           );
//         }
//       });
//     });
  
//     console.log("fin script");
//   });







