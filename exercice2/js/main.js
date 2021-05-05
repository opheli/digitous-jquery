$(document).ready(function() {
	// tout le reste du code viendra ici
  console.log("salut jquery");
});

$(function(){
    $("button").hover(function (){
        $("#notice").hide("3000");
        $('input[name="password"]').focus();
    });
});