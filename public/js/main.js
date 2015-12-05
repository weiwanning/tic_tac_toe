var main = function(){
  var player1turn = true;
  $(".cell").click(function() {
    if (player1turn && !$(this).hasClass("blue")) {
      $(this).addClass("red");
      $("#playerone").removeClass("red");
      $("#playertwo").addClass("blue");
      player1turn = false;
    }else if (!$(this).hasClass("red")){
      $(this).addClass("blue");
      $("#playertwo").removeClass("blue");
      $("#playerone").addClass("red");
      player1turn = true;
    }

    //Check for RED Win --------------
    if ($(".a.red").length == 3 || $(".b.red").length == 3
       || $(".c.red").length == 3 || $(".1.red").length == 3 ||
        $(".2.red").length == 3 || $(".3.red").length == 3){
      $("html").css("background-color", "#F45B69");
      $(".cell.red").css("border-color", "white");
    }
    //Check diagonals
    if ($("#A1").hasClass("red") && $("#B2").hasClass("red") && $("#C3").hasClass("red")){
      $("html").css("background-color", "#F45B69");
      $(".cell.red").css("border-color", "white");
    }
    if ($("#A3").hasClass("red") && $("#B2").hasClass("red") && $("#C1").hasClass("red")){
      $("html").css("background-color", "#F45B69");
      $(".cell.red").css("border-color", "white");
    }
    //Check For BLUE Win ------------------
     if ($(".a.blue").length == 3 || $(".b.blue").length == 3
       || $(".c.blue").length == 3 || $(".1.blue").length == 3 ||
        $(".2.blue").length == 3 || $(".3.blue").length == 3){
      $("html").css("background-color", "#5AB7F4");
      $(".cell.blue").css("border-color", "white");
    }
    //Check diagonals
    if ($("#A1").hasClass("blue") && $("#B2").hasClass("blue") && $("#C3").hasClass("blue")){
      $("html").css("background-color", "#5AB7F4");
      $(".cell.blue").css("border-color", "white");
    }
    if ($("#A3").hasClass("blue") && $("#B2").hasClass("blue") && $("#C1").hasClass("blue")){
      $("html").css("background-color", "#5AB7F4");
      $(".cell.blue").css("border-color", "white");
    }

    //Check for draw
    if ($(".cell.red").length + $(".cell.blue").length == 9){
      $("html").css("background-color", "#ebebeb");
    }
  });
};

$(document).ready(main);
