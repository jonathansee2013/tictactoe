
var playerTurn = "X";

$(document).ready( function () {

  var $cellOne = $('#cellOne');
  var $cellTwo = $('#cellTwo');
  var $cellThree = $('#cellThree');
  var $cellFour = $('#cellFour');
  var $cellFive = $('#cellFive');
  var $cellSix = $('#cellSix');
  var $cellSeven = $('#cellSeven');
  var $cellEight = $('#cellEight');
  var $cellNine = $('#cellNine');

  var gameOver = false; // to initialise the game (because it's not yet over)

  $('td').click( function () {

    if ( $( this ).text().length || gameOver ) { // If: (1) there is something ("X" or "O") in the box, prevents it from being clicked again; OR (2) game is over, prevents players from clicking or continuing with game.
      return;
    }

    $( this ).html( playerTurn );

    if ( playerTurn === "X" ) {
      playerTurn = "O";
    } else { // playerTurn !== "X"
      playerTurn = "X";
    }
    //debugger;
    if ($cellOne.text().length && $cellOne.text() === $cellTwo.text() && $cellTwo.text() === $cellThree.text()) {
      // console.log("Player wins!");
      $('.row.first td').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellFour.text().length && $cellFour.text() === $cellFive.text() && $cellFive.text() === $cellSix.text()) {
      // console.log("Player wins!");
      $('.row.second td').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellSeven.text().length && $cellSeven.text() === $cellEight.text() && $cellEight.text() === $cellNine.text()) {
      // console.log("Player wins!");
      $('.row.third td').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellOne.text().length && $cellOne.text() === $cellFour.text() && $cellFour.text() === $cellSeven.text()) {
      // console.log("Player wins!");
      $('tr td:first-child').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellTwo.text().length && $cellTwo.text() === $cellFive.text() && $cellFive.text() === $cellEight.text()) {
      // console.log("Player wins!");
      $('tr td:nth-child(2)').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellThree.text().length && $cellThree.text() === $cellSix.text() && $cellSix.text() === $cellNine.text()) {
      // console.log("Player wins!");
      $('tr td:nth-child(3)').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellOne.text().length && $cellOne.text() === $cellFive.text() && $cellFive.text() === $cellNine.text()) {
      // console.log("Player wins!");
      $cellOne.css('backgroundColor', '#D9BBF9');
      $cellFive.css('backgroundColor', '#D9BBF9');
      $cellNine.css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else if ($cellThree.text().length && $cellThree.text() === $cellFive.text() && $cellFive.text() === $cellSeven.text()) {
      // console.log("Player wins!");
      $cellThree.css('backgroundColor', '#D9BBF9');
      $cellFive.css('backgroundColor', '#D9BBF9');
      $cellSeven.css('backgroundColor', '#D9BBF9');
      gameOver = true;
      return;
    } else {
      // score a tie
    }
  });
  $('#reset').click(function () {
    $('td').text('');
    $('td').css('backgroundColor', '');
    gameOver = false;
  });

});
