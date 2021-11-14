
class Game {
  constructor(userSelection) {
    this.player1 = new Player("player", "🕵️‍♀️" );
    this.cpu = new Player("computer", "💻");
    this.computerSelection ;
    this.userSelection ;
    this.result ;
    this.gameType ;
    this.choices ;
  }
  computerSelectionClassic() {
    console.log(this.gameType)
    if(this.gameType === "Classic") {
    this.choices = ["Rock", "Paper", "Scissors"];
  } else if(this.gameType === "Spicy") {
    this.choices = ["Rock", "Paper", "Scissors", "Plane", "Car"]
  }
  console.log(this.gameType);
  console.log(this.choices);
    var randomNum = Math.floor(Math.random() * this.choices.length)
    this.computerSelection = this.choices[randomNum];
    }

  determineOutcomeClassic() {
      if(this.computerSelection === "Rock" && this.userSelection === "classicRock") {
      this.result = "It's a draw!";
    } else if(this.computerSelection === "Rock" && this.userSelection === "classicPaper") {
      this.result = "You win!";
      this.player1.wins += 1;
    } else if(this.computerSelection === "Rock" && this.userSelection === "classicScissors") {
      this.result = "You lost!";
      this.cpu.wins += 1;
    } else if(this.computerSelection === "Paper" && this.userSelection === "classicPaper") {
      this.result = "It's a draw!";
    } else if(this.computerSelection === "Paper" && this.userSelection === "classicRock") {
      this.result = "You lost!";
      this.cpu.wins += 1;
    } else if(this.computerSelection === "Paper" && this.userSelection === "classicScissors") {
      this.result = "You won!";
      this.player1.wins += 1;
    } else if(this.computerSelection === "Scissors" && this.userSelection === "classicScissors") {
      this.result = "It's a draw!";
    } else if(this.computerSelection === "Scissors" && this.userSelection === "classicRock") {
      this.result = "You won!";
      this.player1.wins += 1;
    } else if(this.computerSelection === "Scissors" && this.userSelection === "classicPaper") {
      this.result = "You lost!";
      this.cpu.wins += 1;
    }
     // this.startNewGame()
// }
console.log(this.userSelection);
console.log(this.computerSelection);
console.log(this.result);
//   // startNewGame(){
//   //
//   //
//   }
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
