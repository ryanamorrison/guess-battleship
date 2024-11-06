class controller {
	constructor() {
		this.previousGuesses = this.createGuessTracker();
		view.clearHUD();
		view.drawGrid(gameModel.boardSize());
		view.updateRemaining(gameModel.remainingFleet());
	}
	createGuessTracker () {
		let newGuessTracker = new guessTracker();
		return newGuessTracker;
	}
	processGuess(guess) {
		if (guess !== null) {
			let validatedGuess = this.parseGuess(guess);
			if (validatedGuess) {
				if (!this.previousGuesses.isNewGuess(validatedGuess)) {
					alert(`You already guessed ${guess}, try a new guess.`);
				} else {
					this.previousGuesses.addGuess(validatedGuess);
					view.updateGuesses(this.previousGuesses.numberOfGuesses());
					let guessAnswer = gameModel.fire(validatedGuess);
					if (guessAnswer.hit) {
						view.displayMessage("Hit!");
						view.updateHits(gameModel.hits);
						view.displayHit(validatedGuess); // update grid
						if (guessAnswer.shipSunk) {
							view.displaySunk(guessAnswer.shipLabel);
							view.updateNumberSunk(gameModel.sunkNumberOfShips)
							view.updateRemaining(gameModel.remainingFleet());
							view.updateSunk(gameModel.sunkShips);
							if (gameModel.remainingFleet() == 0) {
								//display message _and_ disables controls
								view.gameOver(this.previousGuesses.numberOfGuesses());
							}
						}
					} else {
						view.displayMessage("Missed!");
						view.displayMiss(validatedGuess); // update grid
					}
				}
			}
		}
	}
	parseGuess(guess) {
		if (guess.length < 2 || guess.length > 3) {
			alert("Bad guess, please enter a letter followed by a number using the letters on the side of the grid and the numbers on the top of the grid such as A1");
			
		} else {
			let firstChar = guess.charAt(0).toUpperCase();
			let row = rowLetterToNumber(firstChar);
			let col = guess.slice(1);
	
			if (isNaN(col)) {
				alert(`Bummer, ${col} is not a number from the grid, see side of the grid for valid numbers.`);
			} else if (row < 1 || row > gameModel.boardSize()) {
				alert(`Oops, ${firstChar} is off the grid.  See the side of the grid for valid letters.`);
			} else if (col < 1 || parseInt(col) > gameModel.boardSize()) {
				alert(`Oops, ${col} is off the grid.  See the top of the grid for valid numbers.`);
			} else {
				let guessPair = new coordPair(row, col);
				return guessPair;
			}
		}
		return null;
	}
	parseUserGridSize(userEnteredSize) {
		if (guess.length <= 6 || guess.length >= 12) {
			alert("Bad grid length, please enter a number between 6 and 12");
			return false;
		}
		return true;
	}
};
