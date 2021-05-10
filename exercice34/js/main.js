$(function () {
    // request.get('https//', function (req, res, body) {
    //   // s'execute avec les données de la requete
    // });
  
    console.log("test tout est ok");
    
    $("button").click(function(){
      let pays = $("input").val();
  
      $.ajax({
        method: "GET",
        url: "https://restcountries.eu/rest/v2/name/" + pays.toLowerCase(),
        success: function (data, statuts, response) {
          console.log("data", data[0].alpha2Code);

          $("#exercise").html(
            "<input class='form-control mb-3' value='usa' />" +
            "Country: <span id='country'>" + data[0].name + "</span><br>" +
            "Capital: <span id='capital'>" + data[0].capital + "</span><br>" +
            "<button class='btn btn-success'>Bouton magique</button>" 
          );
    
        //   $("#info").html(
        //     "Mon code est <strong class='important'>" + data[0].alpha2Code + "</strong><br>" +
        //     "Mon nom est <strong class='important'>" + data[0].name
        //   );
        },
        // error: function () {
        //   $("#info").html(
        //     `<p class="error">Le pays recherché est invalide</p>`
        //   );
        // }
      });
    });
  
    console.log("fin script");
  });