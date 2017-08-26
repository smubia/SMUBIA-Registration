$(document).ready(function () {
    console.log("ready!");
});

$( "#welcome" ).click(function() {
  $("#welcome-page").show("slide", { direction: "left" }, 1000); 
});


$( "#error" ).click(function() {
    $("#error-page").show("slide", { direction: "left" }, 1000); 
});