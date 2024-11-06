//the coordinate grid will have a set maximum
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L"];

//misc but none-the-less important objects and functions
function getRandomNumberFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//typically used for mapping output
function rowNumberToLetter(number) {
	adjustedIndex = number - 1;
	return alphabet[adjustedIndex];
}
//typically used for processing input
function rowLetterToNumber(letter) {
	return (alphabet.indexOf(letter) + 1);  //add 1 to skip axis row
}

class board {
    //classic game starts with a size of 10
    constructor(boardSize = 10) {
        this.size = boardSize;
    }
}

class coordPair {
	constructor(row, col) {
		this.row = row;
		this.col = col;
	}
    comparePair(queryPair) {
        if (queryPair.col == this.col && queryPair.row == this.row) {
            //positive match
            return true;
        }
        return false;
    } 
    //used to create cell ID's for visual grid
    getCombinedRowAndColumn() {
        let row = rowNumberToLetter(this.row);
        return row + this.col;
    }
}

//a 'miss' is the default answer
class answer {
    constructor(shipLabel) {
        this.hit = false;
        this.shipSunk = false;
        this.shipLabel = shipLabel;
    }
}

//to be expanded upon ... later
class player {
    constructor() {
        this.label = "";
    }
}