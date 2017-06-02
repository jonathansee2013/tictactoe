
var playerTurn = "X";

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

  var dogImages = [
    "img/DogImage1.jpg",
    "img/DogImage2.jpg",
    "img/DogImage3.jpg",
    "img/DogImage4.jpg",
    "img/DogImage5.jpg",
    "img/DogImage6.jpg",
    "img/DogImage7.jpg",
    "img/DogImage8.jpg",
  ];

  var catImages = [
    "img/CatImage1.jpg",
    "img/CatImage2.jpg",
    "img/CatImage3.jpg",
    "img/CatImage4.jpg",
    "img/CatImage5.jpg",
    "img/CatImage6.jpg",
    "img/CatImage7.jpg",
    "img/CatImage8.jpg",
  ];

  var currentDogImageIndex = 0;
  var currentCatImageIndex = 0;

  $('#dogPic').click( function () {
    currentDogImageIndex += 1; // adds 1 to the index
    currentDogImageIndex %= dogImages.length // updates to 2 until it reaches index 7 and goes back to index 0
    var urlDog = dogImages[currentDogImageIndex]; // sets the chosen dog image
    $(this).attr('src', urlDog); // displays the dog image
  });

  $("#catPic").click( function () {
    currentCatImageIndex += 1;
    currentCatImageIndex %= catImages.length
    var urlCat = catImages[currentCatImageIndex];
    $(this).attr('src', urlCat);
  })

  var showWin = function (player) {
    if (player === "X") {
      $('#winnerDog').css('visibility', 'visible');
      $('#dogMessage').show();
    } else {
      $('#winnerCat').css('visibility', 'visible');
      $('#catMessage').show();
    }
  //  $('#playerOnePic').animate({width: '10%'}, 1000);
  }

  var checkWinState = function ( firstCell, secondCell, thirdCell, winSelect ) {
    if (firstCell.text().length && firstCell.text() === secondCell.text() && secondCell.text() === thirdCell.text()) {
      $(winSelect).css('borderColor', 'red');
      gameOver = true;
      if (firstCell.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++; to keep score
        $('#scoreX').text(scoreX); // to show score
      } else {
        showWin("O");
        scoreO += 1;
        $('#scoreO').text(scoreO);
      }
      return true;
    } else {
      return false;
    }
  };

  $('td').click( function () {

    if ( $( this ).text().length || gameOver ) { // If: (1) there is something ("X" or "O") in the box, prevents it from being clicked again; OR (2) game is over, prevents players from clicking or continuing with game.
      return;
    }

    $( this ).html( playerTurn ); // shows the X or O (which has 0px)
    $( this ).addClass(playerTurn); // shows the image corresponding to X and O
    // $( this ).

    numberOfTurns += 1; // adds 1 everytime a player takes turns
    if ( playerTurn === "X" ) { // if statement to alternate X and O
      playerTurn = "O";
    } else { // playerTurn !== "X"
      playerTurn = "X";
    }

    if ( checkWinState( $cellOne, $cellTwo, $cellThree, '.row.first td' ) ) {
      return;
    }
    if ( checkWinState( $cellFour, $cellFive, $cellSix, '.row.second td' ) ) {
      return;
    }
    if ( checkWinState( $cellSeven, $cellEight, $cellNine, '.row.third td' ) ) {
      return;
    }
    if ( checkWinState( $cellOne, $cellFour, $cellSeven, 'tr td:first-child' ) ) {
      return;
    }
    if ( checkWinState( $cellTwo, $cellFive, $cellEight, 'tr td:nth-child(2)' ) ) {
      return;
    }
    if ( checkWinState( $cellThree, $cellSix, $cellNine, 'tr td:nth-child(3)' ) ) {
      return;
    }
    if ( checkWinState( $cellOne, $cellFive, $cellNine, '.diag1' ) ) {
      return;
    }
    if ( checkWinState( $cellThree, $cellFive, $cellSeven, '.diag2' ) ) {
      return;
    }
    else if ( numberOfTurns === 9) {
      scoreDraw += 1; // adds 1 to DRAW score everytime there is draw
      $('#scoreDraw').text(scoreDraw); // displays DRAW score
      $('#draw').show() // displays "Nobody Wins" message
    }

  });

  $('#reset').click(function () {
    $('td').text(''); // clears the X & O (which has 0px) from boxes
    $('td').css('borderColor', ''); // removes the red color on border
    playerTurn !== "X"; // starts with a different player every reset
    $('#draw').hide(); // hides the "Nobody wins!" message
    $('td').removeClass("X O"); // removes all images corresponding to X & 0
    $('#winnerDog,#winnerCat').css('visibility', 'hidden'); // hides "Winner!" message
    $('#dogMessage,#catMessage').hide();
    numberOfTurns = 0; // resets number of turns to 0
    gameOver = false; // resets game
  });

});
