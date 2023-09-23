let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4,
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Setup the click event for the "New game" button
  const newBtn = document.getElementById("newGameButton");
  newBtn.addEventListener("click", newGame);

  // Create click-event handlers for each game board button
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener("click", function () {
      boardButtonClicked(button);
    });
  }

  // Clear the board
  newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoardButtons() {
  return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  // Ways to win
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // Check for a winner first
  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== "" &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      // Found a winner
      if (buttons[indices[0]].innerHTML === "X") {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  // See if any more moves are left
  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  // If no winner and no moves left, then it's a draw
  return gameStatus.DRAW_GAME;
}

function newGame() {
  // TODO: Complete the function
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;

  // get game board buttons
  const buttons = getGameBoardButtons();

  // Clear the board
  for (let button of buttons) {
    button.innerHTML = "";
    button.removeAttribute("class");
    button.removeAttribute("disabled");
  }

  // allow the player to take a turn by setting playerTurn to true
  playerTurn = true;

  // set the text of the turn information paragraph to "Your turn".
  const turnInfo = document.getElementById("turnInfo");
  turnInfo.innerHTML = "Your turn";
}

function boardButtonClicked(button) {
  // TODO: Complete the function
  // If playerTurn is true:
  if (playerTurn) {
    // set the button's inner HTML to "X".
    button.innerHTML = "X";
    // add the "x" class to the button
    button.setAttribute("class", "x");
    // set the button's disabled attribute to true so the button cannot be clicked again
    button.setAttribute("disabled", "disabled");
    // call the switchTurn() so the computer can take a turn
    switchTurn();
  }
}

function switchTurn() {
  // TODO: Complete the function
  // Call checkForWinner() to determine the game's status
  const status = checkForWinner();

  const turnInfo = document.getElementById("turnInfo");

  // If the game is a draw, then the computer can't take a turn
  if (status === gameStatus.DRAW_GAME) {
    // if the game is a draw, then display the text "Draw game" in the turn info paragraph
    turnInfo.innerHTML = "Draw game";
    return;
  }

  // If the game is a draw, then the computer can't take a turn
  if (status === gameStatus.HUMAN_WINS || status === gameStatus.COMPUTER_WINS) {
    // Set the playerTurn to false to prevent the user from being able to place an X after the game is over.
    playerTurn = false;

    // if the human has won, display the text "You win!" in the turn info paragraph
    if (status === gameStatus.HUMAN_WINS) {
      turnInfo.innerHTML = "You win!";
    }
    // if the computer has won, display the text "Computer wins!" in the turn info paragraph
    else {
      turnInfo.innerHTML = "Computer wins!";
    }
    return;
  }

  // If the game is a draw, then the computer can't take a turn
  if (status === gameStatus.MORE_MOVES_LEFT) {
    // if switching from the player's turn to the computer's turn, use setTimeout() to call makeComputerMove() after 1 second. Assign the return value of setTimeout() to computerMoveTimeout. The timeout simulates the computer is "thinking", and prevents the nearly-instant response to each player move that would occur from a direct call to makeComputerMove().
    if (playerTurn) {
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    } else {
      clearTimeout(computerMoveTimeout);
      computerMoveTimeout = 0;
    }

    // Toggle playerTurn's value from false to true or from true to false
    playerTurn = !playerTurn;

    // set the turn information paragraph's text content to "Your turn" if playerTurn is true or "Computer's turn" if playerTurn is false.
    turnInfo.innerHTML = playerTurn ? "Your turn" : "Computer's turn";
    return;
  }
}

function makeComputerMove() {
  // TODO: Complete the function
  // Choose a random, available button, and set the button's inner HTML to "O".
  const buttons = getGameBoardButtons();

  // create a new NodeListOf<Element>
  const availableButtons = [];

  buttons.forEach((button) => {
    if (button.innerHTML === "") {
      availableButtons.push(button);
    }
  });

  const randomIndex = Math.floor(Math.random() * availableButtons.length);

  const randomButton = availableButtons[randomIndex];
  randomButton.innerHTML = "O";

  // add the "o" class to the button
  randomButton.setAttribute("class", "o");

  // set the button's disabled attribute to true so the button cannot be clicked again
  randomButton.setAttribute("disabled", "disabled");

  // call the switchTurn() at the end of function to switch back to the player's turn
  switchTurn();
}
