
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
    if (currentDogImageIndex >= dogImages.length) { // until it reaches the last index
      currentDogImageIndex = 0; // then goes back to first image
    }
    // currentDogImageIndex += 1;
    // currentDogImageIndex = currentDogImageIndex % dogImages.length;

    console.log("click dog: ", currentDogImageIndex);
    var urlDog = dogImages[currentDogImageIndex]; // sets the chosen dog image
    $(this).attr('src', urlDog);
  })

  $("#catPic").click( function () {
    currentCatImageIndex += 1;
    if (currentCatImageIndex >= catImages.length) {
      currentCatImageIndex = 0;
    }
    var urlCat = catImages[currentCatImageIndex];
    $(this).attr('src', urlCat);
  })

  var showWin = function (player) {
    $('#winner span').text(player);
    $('#winner').show();
  //  $('#playerOnePic').animate({width: '10%'}, 1000);
  }

  var checkWinState = function ( firstCell, secondCell, thirdCell, winSelect ) {
    if (firstCell.text().length && firstCell.text() === secondCell.text() && secondCell.text() === thirdCell.text()) {
      $(winSelect).css('backgroundColor', '#D9BBF9');
      gameOver = true;
      if (firstCell.text() === "X") {
        showWin("X");
        scoreX += 1 ;    // scoreX++;
        $('#scoreX').text(scoreX);
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

  // $('img').click( function () {
  //   // $(this).
  // })

  $('td').click( function () {

    if ( $( this ).text().length || gameOver ) { // If: (1) there is something ("X" or "O") in the box, prevents it from being clicked again; OR (2) game is over, prevents players from clicking or continuing with game.
      return;
    }

    $( this ).html( playerTurn );
    $( this ).addClass(playerTurn);

    numberOfTurns += 1;
    if ( playerTurn === "X" ) { // if statement to alternate X and O
      playerTurn = "O";
    } else { // playerTurn !== "X"
      playerTurn = "X";
    }
    //debugger;
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
    $('td').removeClass("X O");
    numberOfTurns = 0;
    gameOver = false;
  });

});
