class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0
  }
  // saveWinsToStorage() {
  //   var player1Stringified = JSON.stringify(currentGame.player1);
  //   localStorage.setItem('Player1', player1Stringified);
  //   var cpuStringified = JSON.stringify(currentGame.cpu);
  //   localStorage.setItem('Cpu', cpuStringified);
  // }
  // retrieveWinsFromStorage() {
  //   var retrievedPlayer = localStorage.getItem('Player1');
  //   JSON.parse(retrievedPlayer);
  //   var retrievedCpu = localStorage.getItem('Cpu');
  //   JSON.parse(retrievedCpu);
  // }
}
