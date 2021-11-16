class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0
  }
  saveWinsToStorage() {
    // var player1Stringified = JSON.stringify(currentGame.player1);
    localStorage.setItem(this.name, this.wins);
  }
  retrieveWinsFromStorage() {
    var pullWins = localStorage.getItem(this.name);
    if(pullWins === null) {
      this.wins = 0
    } else {
      this.wins = pullWins;
    }
  }
}
