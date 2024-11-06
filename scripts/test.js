function testShips() {
    let cp1 = new coordPair(1,5);
    let cp2 = new coordPair(3,10);
    let cp3 = new coordPair(1,5);

	console.log("compare should be false: " + cp1.comparePair(cp2));
	console.log("compare should be true: " + cp1.comparePair(cp3));

    let s1 = new ship();
	console.log(s1);
	let s2 = new ship();
	let s3 = s1;
	console.log(s2);
	console.log("collision will most likely be false: " + s1.detectCollision(s2));
	console.log("should be true: " + s1.detectCollision(s3));
    
    let g1 = new coordPair(1,5);
    let g2 = new coordPair(2,4);

    console.log("hit check on s1: " + s1.checkHit(g1));
    console.log("hit check on s1: " + s1.checkHit(g2));
    console.log("hit check on s2: " + s2.checkHit(g1));
    console.log("hit check on s2: " + s2.checkHit(g2));
    console.log("is s1 sunk?: " + s1.isSunk());

	let fl = new fleet(5);
	//simulated play
	let previousGuesses = new guessTracker();
	guesses = generateGuesses();
	let totalNumber = guesses.length;
	for (let i = 0; i < totalNumber; i++) {
		//check this isn't a duplicate of a previous guess
		if (previousGuesses.numberOfGuesses() > 0) {
			if (previousGuesses.isNewGuess(guesses[i])) {
				previousGuesses.addGuess(guesses[i]);
				fl.checkGuess(guesses[i]);
				if (fl.isFleetSunk()) {
					console.log("fleet sunk after " + previousGuesses.numberOfGuesses() + " number of guesses");
					i = totalNumber;
				}
			}
		} else {
			previousGuesses.addGuess(guesses[i]);
		}
	}
	if (!fl.isFleetSunk()) {
		console.log("game over after unique guesses: " + previousGuesses.numberOfGuesses());
	}
	console.log(fl);
}

function generateGuesses() {
	let guesses = [ ];
	let totalNumber = (model.boardSize * model.boardSize) * 2;
	console.log("guesses:" + totalNumber);
	for (let i = 0; i < totalNumber; i++) {
		let row = getRandomNumberFromRange(1, model.boardSize);
		let col = getRandomNumberFromRange(1, model.boardSize);
		let newGuess = new coordPair(row,col);
		guesses.push(newGuess);
	}
	//console.log(guesses);
	return guesses;
}