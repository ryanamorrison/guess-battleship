//state
class model {
	constructor(boardSize = 10) {
		this.gameBoard = this.assignBoard(boardSize);
		this.gameFleet = this.createFleet(this.gameBoard.size);
		this.hits = 0;
		this.sunkNumberOfShips = 0;
		this.sunkShips = [];
		this.useClassicShipLabels = false;
	}
	assignBoard(boardSize) {
		let newBoard = new board(boardSize);
		return newBoard;
	}
	createFleet(boardsize) {
		let newFleet = new fleet(boardsize);
		console.log(newFleet);
		return newFleet;
	}
	boardSize() {
		return this.gameBoard.size;
	}
	fire(guess) {
		let guessAnswer = this.gameFleet.checkGuess(guess)
		if (guessAnswer.hit) {
			this.hits++;
			if (guessAnswer.shipSunk) {
				this.sunkNumberOfShips++;
				this.sunkShips.push(guessAnswer.shipLabel);
			}
		}
		return guessAnswer;
	}
	remainingFleet() {
		return this.gameFleet.remaining;
	}
};