
//Player starts on player 2 because is changes before the first move
var currentPlayer = "Player2";


//Whenever someone makes a move it will be recorded in the moves array
var movesArray = [
  [ "_", "_", "_" ],
  [ "_", "_", "_" ],
  [ "_", "_", "_" ]
]

//this function changes the player after each turn
var changePlayer = function () {
  if ( currentPlayer === "Player1" ) {
    currentPlayer = "Player2";
  } else {
    currentPlayer = "Player1";
  }

}

//calls the function to change the player when a square is clicked
$("body").on("click", ".box", changePlayer);


//registers which box was clicked and pushes that informatin into the moves array
$("body").on("click", ".box", function () {

  // Store the row value in a variable

  var row = $(this).attr("data-row");

  // Store the column value in a variable

  var column = $(this).attr("data-column");

  // Go into the moves array
movesArray[row][column] = currentPlayer;


//gives the box the css class specific to that player so that the box changes
  $(this).addClass(currentPlayer);

  checkIfWonVertical();
  checkIfWonHorizontal();
  checkIfWonDiagonal();
  draw();

});



function checkIfWonVertical(){

  for(var i = 0; i <= 2; i++){

    if (
       movesArray[0][i]=== currentPlayer && 
       movesArray[1][i]=== currentPlayer &&
       movesArray[2][i]=== currentPlayer
       ){

        // function for telling the winner that they won
      sweetAlert({
        title: currentPlayer + " wins!",
        text: "Play again?",
        confirmButtonText: "Sure thing!",
        confirmButtonColor: "#9DB997",
        showCancelButton: true,
        cancelButtonText: "I'm done",
      },
      function(){
        location.reload(); 
      }
      );
      return true;
    }

  }
}

function checkIfWonHorizontal(){

  for(var i = 0; i <= 2; i++){

    if (
       movesArray[i][0]=== currentPlayer && 
       movesArray[i][1]=== currentPlayer &&
       movesArray[i][2]=== currentPlayer
       ){

        // function for telling the winner that they won
      sweetAlert({
        title: currentPlayer + " wins!",
        text: "Play again?",
        confirmButtonText: "Sure thing!",
        confirmButtonColor: "#9DB997",
        showCancelButton: true,
        cancelButtonText: "I'm done"
      },
      function(){
        location.reload(); 
      }
      );
      return true;
    }

  }

}

function checkIfWonDiagonal() {
  var diagonalOne = movesArray[0][0]=== currentPlayer && movesArray[1][1]=== currentPlayer && movesArray[2][2]=== currentPlayer;
  var diagonalTwo = movesArray[0][2]=== currentPlayer && movesArray[1][1]=== currentPlayer && movesArray[2][0]=== currentPlayer;

  if ( diagonalOne || diagonalTwo ) {

  // function for telling the winner that they won
    sweetAlert({
      title: currentPlayer + " wins!",
      text: "Play again?",
      confirmButtonText: "Sure thing!",
      confirmButtonColor: "#9DB997",
      showCancelButton: true,
      cancelButtonText: "I'm done"
    },
    function(){
        location.reload(); 
      }
    );
    return true;
  }
}

function draw() {
  var flattenedArray = movesArray[0].concat( movesArray[1], movesArray[2]);
  var anyUnderscores = flattenedArray.indexOf("_") >= 0;
  var anyWins = checkIfWonDiagonal() || checkIfWonHorizontal() || checkIfWonVertical();

  //Function for alerting a draw
  if ( !anyUnderscores && !anyWins ) {
    sweetAlert({
      title: "Draw!",
      text: "Play again?",
      confirmButtonText: "Sure thing!",
      confirmButtonColor: "#9DB997",
      showCancelButton: true,
      cancelButtonText: "I'm done"
    },
    function(){
        location.reload(); 
      }
    );
  }
}


//when someone clicks on 'help' instructions appear
function giveInstructions () {
  sweetAlert({
  title: "Instructions",
  text: "The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as X and the second is O. Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled.",
  confirmButtonColor: "#9DB997"
  });
}

$("body").on("click", ".help", giveInstructions);







// WORK IN PROGRESS

// var computerMove = function(){
// if (currentPlayer === "Player2") {

//   for (i=0; i<=2; i++) {
//    if (movesArray[0][i]!== "_"){
//     movesArray[0][i] = "Player2";
//    }
//   }
// } 
// }








