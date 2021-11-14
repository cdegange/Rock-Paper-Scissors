
// Query Selectors

var classicGameSelection = document.querySelector("#classGameRules");
var altGameSelection = document.querySelector("#altGameRules");
var gameSelectionContainer = document.querySelector("#classicOrSpicy");
var chooseGameTitle = document.querySelector("#chooseGameTitle");
var classicImages = document.querySelector("#classicGameBoard");
var altImages = document.querySelector("#altGameBoard");
var classicFighterSelection = document.querySelector("#classicGameBoard");
var paperSelectionClassic = document.querySelector("#classicPaper");
var scissorsSelectionClassic = document.querySelector("#classicScissors");
var rockSelectionClassic = document.querySelector("#classicRock");
var loadPlayerData = document.querySelector("#humanWinsSection");
var loadCpuData = document.querySelector("#cpuWinsSection");
// Event Handlers
window.addEventListener("load", function() {
  onPageLoad()
});
classicGameSelection.addEventListener("click", switchClassicFighterView);
altGameSelection.addEventListener("click", switchAltFighterView);
classicFighterSelection.addEventListener("click", function(event){
  identifyUserSelection(event)
});

function onPageLoad() {
  currentGame = new Game();
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.cpu.retrieveWinsFromStorage();
}

function switchClassicFighterView() {
  currentGame.gameType = "Classic";
  gameSelectionContainer.classList.add("hidden");
  classicImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
  loadPlayer();
}


function switchAltFighterView() {
  currentGame.gameType = "Spicy";
  gameSelectionContainer.classList.add("hidden");
  altImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
  loadCpu();
}
function identifyUserSelection(event) {
  currentGame.userSelection = event.target.id;
  currentGame.computerSelectionClassic();
  currentGame.determineOutcomeClassic();
  displayOutcome()
}

function loadPlayer() {
  loadPlayerData.classList.add("hidden");
  loadPlayerData.innerHTML += `
    <h2 id="humanToken">${currentGame.player1.token}</h2>
    <h2 id="humanWinsColumn">${currentGame.player1.name}</h2>
    <h3 id="humanWinsCounter">${currentGame.player1.wins}</h3>
    `
}
function loadCpu() {
  loadCpuData.classList.add("hidden");
  loadPlayerData.innerHTML += `
    <h2 id="computerToken">${currentGame.cpu.token}</h2>
    <h2 id="computerWinColumn">${currentGame.cpu.name}</h2>
    <h3 id="computerWinCounter">${currentGame.cpu.wins}</h3>`
}
function displayOutcome() {

}
