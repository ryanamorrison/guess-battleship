//neoLabels is default because they are easier to understand (default set at model)
const classicLabels = ["destroyer","submarine","cruiser","battleship","carrier"];
const neoLabels = ["patrol boat","submarine","destroyer","battleship","carrier"];

class ship {
    constructor(boardSize, useSetSize = 0, useClassicLabels) {
        this.direction = this.generateRandomDirection();
        if (useSetSize > 1) {
            this.size = useSetSize;
            this.label = this.generateShipLabel(this.size, useClassicLabels);
        } else {
            this.size = this.generateRandomShipSize();
            //the param '2' below indicates use a random size
            this.label = this.generateShipLabel(this.size, useClassicLabels, 2); 
        }
        this.coords = this.generateShipCoordinates(boardSize);
        this.hits = 0;
    }
    checkHit(guessCoords) {
        let returnAnswer = new answer(this.label);
        for (let i = 0; i < this.coords.length; i++) {
            if (this.coords[i].comparePair(guessCoords)) {
                //hit
                this.hits++;
                returnAnswer.hit = true;
                if (this.isSunk()) {
                    returnAnswer.shipSunk = true;
                }
                return returnAnswer;
            }
        }
        return returnAnswer; 
    }
    isSunk() {
        if (this.size == this.hits) {
            return true;
        }
        return false;
    }
    generateShipLabel(newShipSize, useClassicLabels, deterministicShipThree) {
        switch (newShipSize) {
            case 2:
                if (useClassicLabels) {
                    return classicLabels[0];
                } else {
                    return neoLabels[0];
                }
            case 3:
                let whichThree;
                if (deterministicShipThree === 2) {
                    //randomly determine label of ship
                    whichThree = Math.floor(Math.random() * 2); 
                } else if (deterministicShipThree === 0 || deterministicShipThree === 1) {
                    //use passed in value of 0 or 1
                    whichThree = deterministicShipThree;
                } else {
                    //a sane default value, both ships will likely be the same
                    whichThree = 1;
                }
                if (whichThree) {
                    if (useClassicLabels) {
                        return classicLabels[1];
                    } else {
                        return neoLabels[1];
                    }
                } else {
                    if (useClassicLabels) {
                        return classicLabels[2];
                    } else {
                        return neoLabels[2];
                    }
                }
            case 4:
                if (useClassicLabels) {
                    return classicLabels[3];
                } else {
                    return neoLabels[3];
                }
            case 5:
                if (useClassicLabels) {
                    return classicLabels[4];
                } else {
                    return neoLabels[4];
                }
        }
    }
    generateRandomShipSize() {
        return getRandomNumberFromRange(2,5);
    }
    generateRandomDirection() {
		//Math.random returns decimal numbers between 0 and 1, so multiply by 2
		//to get the numbers 0-1, Math.floor() rounds down to an integer
		return Math.floor(Math.random() * 2);        
    }
    generateShipCoordinates(boardSize) {
        let row;
        let col;
        let newShipCoords = [ ];
        if (this.direction == 1) {
            //generate a starting coordinate for horizontal ship
            row = getRandomNumberFromRange(1, boardSize);
            col = getRandomNumberFromRange(1, (boardSize - this.size));
        } else {
            //generate a starting coordinate for vertical ship
            row = getRandomNumberFromRange(1, (boardSize - this.size));
            col = getRandomNumberFromRange(1, boardSize);
        }
        //starting point coordinates
        let newCoords = new coordPair(row, col);
        newShipCoords.push(newCoords);
        //generate additional points
        for (let i = 1; i < (this.size); i++) {
            if (this.direction === 1) {
                //add coordinates to array for new horizontal ship
                let newCoords = new coordPair(row, col + i);
                newShipCoords.push(newCoords);
            } else {
                //add coordinates to array for new vertical ship
                let newCoords = new coordPair(row + i, col);
                newShipCoords.push(newCoords);
            }
        }
        return newShipCoords;
    }
    detectCollision(anotherShip) {
        for (let i = 0; i < this.coords.length; i++) {
            for (let j = 0; j < anotherShip.coords.length; j++) {
                if (this.coords[i].comparePair(anotherShip.coords[j])) {
                    return true;
                }
            }
        }
        return false;
    }
}