$(document).ready(function() {

  $("#explore").mouseenter(function() {
      $("#overlay").fadeIn();
  });

  $("#overlay").mouseleave(function() {
    $("#overlay").fadeOut();
  });

  $("#explore").click(function() {
    $("#side").addClass("sideactive");
    $(".genre").show();
    $("#arrow").show();
    $("#explore").hide();
    $("#overlay").unbind('mouseleave');
  });

  $("#arrow").click(function() {
    $("#side").removeClass("sideactive");
    $(".genre").hide();
    $("#explore").show();
    $("#arrow").hide();
    $('#overlay').hide();
    $('#overlay').bind('mouseleave');
  });

  $("#dubstep").click(function() {
    $("#dubstep0").show();
  });

  $("#drumnbass").click(function() {
    $("#drumnbass0").show();
  });

  $("#house").click(function() {
    $("#house0").show();
  });

  $("#trance").click(function() {
    $("#trance0").show();
  });

  $("#trap").click(function() {
    $("#trap0").show();
  });

  $("#techno").click(function() {
    $("#techno0").show();
  });

  $(".x").click(function(){
    $(".popup-container").hide();
  });

});
