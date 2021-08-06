$(document).ready(function () {

  $(".btn").click(function () {
    if ($("input").val().length > 5) {
      $("input").removeClass("is-invalid");
      $("input").addClass("is-valid");
    } else {
      $("input").removeClass("is-valid");
      $("input").addClass("is-invalid");
    }
  });

});