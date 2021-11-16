
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
var changeGameButton = document.querySelector("#changeGameButton");
var newGameButton = document.querySelector("#newGameButton");


// Event Handlers
window.addEventListener("load", function() {
  onPageLoad()
});
classicGameSelection.addEventListener("click", switchClassicView);
altGameSelection.addEventListener("click", switchAltView);
classicFighterSelection.addEventListener("click", function(event){
  fighterSelectionAssignment(event)
});
altFighterSelection.addEventListener("click", function(event){
  fighterSelectionAssignment(event)
});

function onPageLoad() {
  currentGame = new Game();
  updatePlayerData()
  // currentGame.getWins();
};

function switchClassicView() {
  currentGame.gameType = "Classic";
  gameSelectionContainer.classList.add("hidden");
  classicImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
  changeGameButton.classList.remove("hidden");
  newGameButton.classList.remove("hidden");
};

function switchAltView() {
  currentGame.gameType = "Spicy";
  gameSelectionContainer.classList.add("hidden");
  altImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
  changeGameButton.classList.remove("hidden");
  newGameButton.classList.remove("hidden");
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
  playerWinCount.innerHTML = '';
  playerWinCount.innerHTML += `
    <h3 id="humanWinsCounter">Wins: ${currentGame.player1.retrieveWinsFromStorage()}</h3>
    `
  computerWinCount.innerHTML = '';
  computerWinCount.innerHTML += `
    <h3 id="computerWinCounter">Wins: ${currentGame.cpu.retrieveWinsFromStorage()}</h3>
  `
};

// function startNewGame() {
//   onPageLoad()
// }
