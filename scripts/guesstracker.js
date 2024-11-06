//used to track guesses so that the same guess is now allowed more than once per game
class guessTracker {
	constructor() {
		this.guesses = [];
	}
	addGuess(coords) {
		this.guesses.push(coords);
	}
	numberOfGuesses() {
		return this.guesses.length;
	}
	isNewGuess(guess) {
		if (this.numberOfGuesses == 0) {
			return false;
		}
        for (let i = 0; i < this.guesses.length; i++) {
            if (this.guesses[i].comparePair(guess)) {
				//if match, it is not a new guess
                return false;
            }
        }
        return true; 
	}
}
