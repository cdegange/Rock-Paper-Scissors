
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
  takeTurn() {
    if(this.gameType === "Classic") {
    this.choices = ["rock", "paper", "scissors"];
  } else if(this.gameType === "Spicy") {
    this.choices = ["rock", "scissors", "plane", "train", "car"]
  }
    var randomNum = Math.floor(Math.random() * this.choices.length)
    this.computerSelection = this.choices[randomNum];
    console.log(this.computerSelection)
    console.log(this.userSelection)
    }

  determineOutcomeClassic() {
      if(this.computerSelection === this.userSelection) {
      this.result = "It's a draw!";
    } else if(this.computerSelection === "rock" && this.userSelection === "paper") {
      this.result = "You win!";
      this.player1.wins += 1;
    } else if(this.computerSelection === "rock" && this.userSelection === "scissors") {
      this.result = "You lost!";
      this.cpu.wins += 1;
    } else if(this.computerSelection === "paper" && this.userSelection === "rock") {
      this.result = "You lost!";
      this.cpu.wins += 1;
    } else if(this.computerSelection === "paper" && this.userSelection === "scissors") {
      this.result = "You won!";
      this.player1.wins += 1;
    } else if(this.computerSelection === "scissors" && this.userSelection === "rock") {
      this.result = "You won!";
      this.player1.wins += 1;
    } else if(this.computerSelection === "scissors" && this.userSelection === "paper") {
      this.result = "You lost!";
      this.cpu.wins += 1;
    }
    this.player1.saveWinsToStorage();
    this.player1.retrieveWinsFromStorage();
    updatePlayerData();

   }
   determineOutcomeAlt() {
     if(this.computerSelection === "rock" && this.userSelection === "altRock") {
     this.result = "It's a draw!";
   } else if(this.computerSelection === "rock" && this.userSelection === "altScissors") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "rock" && this.userSelection === "altTrain") {
     this.result = "You win!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "rock" && this.userSelection === "altCar") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "rock" && this.userSelection === "altPlane") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "scissors" && this.userSelection === "altScissors") {
     this.result = "It's a draw!";
   } else if(this.computerSelection === "scissors" && this.userSelection === "altTrain") {
     this.result = "You win!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "scissors" && this.userSelection === "altCar") {
     this.result = "You win!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "scissors" && this.userSelection === "altRock") {
     this.result = "You won!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "scissors" && this.userSelection === "altPlane") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "plane" && this.userSelection === "altPlane") {
     this.result = "It's a draw!";
   } else if(this.computerSelection === "plane" && this.userSelection === "altTrain") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "plane" && this.userSelection === "altCar") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "plane" && this.userSelection === "altRock") {
     this.result = "You won!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "plane" && this.userSelection === "altScissors") {
     this.result = "You won!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "car" && this.userSelection === "altCar") {
     this.result = "It's a draw!";
   } else if(this.computerSelection === "car" && this.userSelection === "altScissors") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "car" && this.userSelection === "altRock") {
     this.result = "You win!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "car" && this.userSelection === "altTrain") {
     this.result = "You won!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "car" && this.userSelection === "altPlane") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "train" && this.userSelection === "altTrain") {
     this.result = "It's a draw!";
   } else if(this.computerSelection === "train" && this.userSelection === "altCar") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "train" && this.userSelection === "altPlane") {
     this.result = "You won!";
     this.player1.wins += 1;
   } else if(this.computerSelection === "train" && this.userSelection === "altRock") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   } else if(this.computerSelection === "train" && this.userSelection === "altScissors") {
     this.result = "You lost!";
     this.cpu.wins += 1;
   }

   updatePlayerData();
// }

//   // startNewGame(){
//   //
//   //
//   }

console.log(this.userSelection);
console.log(this.computerSelection);
console.log(this.result);
  }

  // getWins() {
  //   this.player1.retrieveWinsFromStorage();
  //   this.cpu.retrieveWinsFromStorage();
  // }
  // this.startNewGame()
}
