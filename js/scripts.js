$(document).ready(function() {
  $(".form-inline").submit(function(event) {
  var inputName2 = $("input#inputName2").val();

  $(".recipient").text(inputName2);

  $("#letter").show();

  event.preventDefault();
  });
});
