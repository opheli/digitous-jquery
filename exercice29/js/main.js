$("button").click(function () {
    let recup = $("input").val();
    if (recup.length > 5) {  
        $("input").addClass("is-valid"); 
      } else {  
        $("input").addClass("is-invalid");  
      };
});