var gameController;
var gameModel;

function init() {
	let optionsButton = document.getElementById("optionsButton");
	optionsButton.onclick = startGame;
}

function startGame() {
	let boardSizeInput = document.getElementById("boardSizeInput");
	let boardSize = boardSizeInput.value;
	//TODO: process other form elements
	gameModel = new model(boardSize);  
	gameController = new controller();
	let optionsForm = document.getElementById("playerOptions");
	optionsForm.setAttribute("class", "playerOptionsHide");
	let guessForm = document.getElementById("guess");
	guessForm.setAttribute("class", "guessShow");
	//testShips();
	let fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	let guessInput = document.getElementById("guessInput");
	guessInput.onkeydown = handleKeyPress;
}

function handleFireButton() {
	let guessInput = document.getElementById("guessInput");
	let guess = guessInput.value;
	gameController.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress(e) {
	let fireButton = document.getElementById("fireButton");
	if (e.keyCode == 13) {
		fireButton.click();
		return false;
	}
}
window.onload = init;