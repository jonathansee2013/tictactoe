
var playerTurn = "X";

var draw = 0;

var numberOfTurns = 0;

var scoreX = 0;
var scoreO = 0;
var scoreDraw = 0;


var gameOver = false; // to initialise the game (because it's not yet over)

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

  var showWin = function (player) {
    $('#winner span').text(player);
    $('#winner').show();
  }

  $('td').click( function () {

    if ( $( this ).text().length || gameOver ) { // If: (1) there is something ("X" or "O") in the box, prevents it from being clicked again; OR (2) game is over, prevents players from clicking or continuing with game.
      return;
    }

    $( this ).html( playerTurn );
    numberOfTurns += 1;
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
      if ($cellOne.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;
    } else if ($cellFour.text().length && $cellFour.text() === $cellFive.text() && $cellFive.text() === $cellSix.text()) {
      // console.log("Player wins!");
      $('.row.second td').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellFour.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;
    } else if ($cellSeven.text().length && $cellSeven.text() === $cellEight.text() && $cellEight.text() === $cellNine.text()) {
      // console.log("Player wins!");
      $('.row.third td').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellSeven.text() === "X") {
      showWin("X");
      scoreX += 1 ;    // scoreX++;
      $('#scoreX').text(scoreX);
    } else {
      showWin("O");
      scoreO += 1;
      $('#scoreO').text(scoreO);
    }
      return;
    } else if ($cellOne.text().length && $cellOne.text() === $cellFour.text() && $cellFour.text() === $cellSeven.text()) {
      // console.log("Player wins!");
      $('tr td:first-child').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellOne.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;
    } else if ($cellTwo.text().length && $cellTwo.text() === $cellFive.text() && $cellFive.text() === $cellEight.text()) {
      // console.log("Player wins!");
      $('tr td:nth-child(2)').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellTwo.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;
    } else if ($cellThree.text().length && $cellThree.text() === $cellSix.text() && $cellSix.text() === $cellNine.text()) {
      // console.log("Player wins!");
      $('tr td:nth-child(3)').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellThree.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;
    } else if ($cellOne.text().length && $cellOne.text() === $cellFive.text() && $cellFive.text() === $cellNine.text()) {
      // console.log("Player wins!");
      $('.diag1').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellOne.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;
    } else if ($cellThree.text().length && $cellThree.text() === $cellFive.text() && $cellFive.text() === $cellSeven.text()) {
      // console.log("Player wins!");
      $('.diag2').css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if ($cellThree.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return;

    } else if( numberOfTurns === 9) {
      // no winning combo found, so check for draw

      /* all boxes are occupied - how to check?
         1. check length of each cell contents
         2. check how many turns have been played

      */
      scoreDraw += 1;
      $('#scoreDraw').text(scoreDraw);
      $('#draw').show();

    }


  });

  $('#reset').click(function () {
    $('td').text('');
    $('td').css('backgroundColor', '');
    playerTurn !== "X";
    $('#winner,#draw').hide();
    numberOfTurns = 0;
    gameOver = false;
  });

});
