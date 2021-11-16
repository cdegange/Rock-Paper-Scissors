
// Query Selectors

var classicGameSelection = document.querySelector("#classGameRules");
var altGameSelection = document.querySelector("#altGameRules");
var gameSelectionContainer = document.querySelector("#classicOrSpicy");
var chooseGameTitle = document.querySelector("#chooseGameTitle");
var classicImages = document.querySelector("#classicGameBoard");
var altImages = document.querySelector("#altGameBoard");
var replaceWithWinner = document.querySelector(".gamePlay-images");
var classicFighterSelection = document.querySelector("#classicGameBoard");
var altFighterSelection = document.querySelector("#altGameBoard");
var paperSelectionClassic = document.querySelector("#paper");
var scissorsSelectionClassic = document.querySelector("#scissors");
var rockSelectionClassic = document.querySelector("#rock");
var playerWinColumn = document.querySelector("#humanWinsSection");
var cpuWinColumn = document.querySelector("#cpuWinsSection");
var playerToken = document.querySelector("#humanToken");
var playerName = document.querySelector("#humanPlayerName");
var playerWinCount = document.querySelector("#humanWinsCounter");
var computerToken = document.querySelector("#computerToken");
var computerName = document.querySelector("#computerName");
var computerWinCount = document.querySelector("#computerWinCounter");


// Event Handlers
window.addEventListener("load", function() {
  onPageLoad()
});
classicGameSelection.addEventListener("click", switchClassicFighterView);
altGameSelection.addEventListener("click", switchAltFighterView);
classicFighterSelection.addEventListener("click", function(event){
  fighterSelectionAssignment(event)
});
altFighterSelection.addEventListener("click", function(event){
  fighterSelectionAssignment(event)
});

function onPageLoad() {
  currentGame = new Game();
  // currentGame.player1.retrieveWinsFromStorage();
  // currentGame.cpu.retrieveWinsFromStorage();
};

function switchClassicFighterView() {
  currentGame.gameType = "Classic";
  gameSelectionContainer.classList.add("hidden");
  classicImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
  // loadPlayer();
};

function switchAltFighterView() {
  currentGame.gameType = "Spicy";
  gameSelectionContainer.classList.add("hidden");
  altImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
  // loadCpu();
};

function fighterSelectionAssignment(event) {
  currentGame.userSelection = event.target.id;
  currentGame.takeTurn();
  getOutcome();
};

function getOutcome() {
  if (currentGame.gameType === "Classic") {
  currentGame.determineOutcomeClassic();
} else if (currentGame.gameType === "Spicy") {
  currentGame.determineOutcomeAlt();
}
};


function updatePlayerData() {
  playerWinColumn.innerHTML += `
    <h2 id="humanToken">${currentGame.player1.token}</h2>
    <h2 id="humanPlayerName">${currentGame.player1.name}</h2>
    <h3 id="humanWinsCounter">${currentGame.player1.wins}</h3>
    `

  cpuWinColumn.innerHTML += `
    <h2 id="computerToken">${currentGame.cpu.token}</h2>
    <h2 id="computerName">${currentGame.cpu.name}</h2>
    <h3 id="computerWinCounter">${currentGame.cpu.wins}</h3>
    `

};

// function startNewGame() {
//   onPageLoad()
// }
