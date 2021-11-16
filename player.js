class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0
  }
  saveWinsToStorage() {
    var winsStringified = JSON.stringify(this.wins);
    localStorage.setItem(`${this.name}`, winsStringified);
  }
  retrieveWinsFromStorage() {
    var pullWins = localStorage.getItem(`${this.name}`);
      this.wins = JSON.parse(pullWins) || 0;
      return this.wins;
  }
}
