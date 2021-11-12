
class Game {
  constructor(userSelection) {
    this.player1 = new Player("player", "🕵️‍♀️" );
    this.player2 = new Player("computer", "💻");
    this.computerSelection = null;
    this.userSelection = userSelection;
    this.result = null
  }
  computerSelectionClassic() {
    var choices = ["Rock", "Paper", "Scissors"];
    var randomNum = Math.floor(Math.random() * choices.length)
    computerSelection = choices[randomNum];
  }
  determineOutcomeClassic(computerSelection, userSelection) {
      


  }
  startNewGame(){

  }

}



// When fighter is selected, program should recognize id that was clicked
// id should be stored in player instance
// computer should then generate a random selection
// id should be stored in player2 instances
// a winner should be determined
// win count in instance should be updated
// win count should then be added to localStorage
// have a button to reload page or a timeOut function to play new game
// when page reloads, wins should persist by being retrieved from storage


// game.js

// should have two player instances (a computer and the user)
// track data from game altGameBoard
// determine who won or if it is a draw
// when winner is determined, a way to reset board and play altGameSelection
