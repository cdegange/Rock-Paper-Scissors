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
// Event Handlers
classicGameSelection.addEventListener("click", switchClassicFighterView);
altGameSelection.addEventListener("click", switchAltFighterView);
classicFighterSelection.addEventListener("click", function(event){
  identifyUserSelection(event)
});


// Functions
var userSelection
var computerSelection
var currentGame = new Game(userSelection);

function switchClassicFighterView() {
  gameSelectionContainer.classList.add("hidden");
  classicImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
}

function switchAltFighterView() {
  gameSelectionContainer.classList.add("hidden");
  altImages.classList.remove("hidden");
  chooseGameTitle.innerText = "PICK YOUR FIGHTER!";
}
function identifyUserSelection(event) {
  userSelection = event.target.id;
  currentGame.computerSelectionClassic();
  currentGame.determineOutcomeClassic(computerSelection, userSelection);
  console.log(computerSelection, userSelection)
}
