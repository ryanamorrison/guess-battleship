class fleet {
    constructor(boardSize, useRandom = false) {
        if (useRandom === false) {
            //deterministically compose fleet, derive length from composition
            this.composition = this.calculateComposition(boardSize);
            this.number = this.composition.length;
        } else {
            //calculate number of ships -> compose ships randomly
            this.number = this.calculateNumberOfShips(boardSize);  
        }
        this.remaining = this.number;
        this.ships = this.generateFleet(boardSize, useRandom);
        this.statsCollisionsDuringGeneration = 0;
    }

    //create one of each kind of ship label for the fleet (remove or build parallel to random)
    calculateComposition(boardSize) {
        if (boardSize <= 6) {
            let newComposition = [2,3,4];
            return newComposition;
        } else if (boardSize > 6 && boardSize <= 8) {
            let newComposition = [2,3,4,5];
            return newComposition;
        } else if (boardSize > 8 && boardSize <= 10) {
            let newComposition = [2,3,3,4,5];
            return newComposition;
        } else {
            let newComposition = [2,2,3,3,4,5];
            return newComposition;
        }    
    }

    //create a number of ships based on size of board
    calculateNumberOfShips(boardSize) {
        if (boardSize <= 6) {
            return 3;
        } else if (boardSize > 6 && boardSize <= 8) {
            return 4;
        } else if (boardSize > 8 && boardSize <= 10) {
            return 5;
        } else {
            return 6;
        }
    }
    checkGuess(guessCoords) {
        let returnResult = new answer("any");
        for (let i = 0; i < this.ships.length; i++) {
            let guessResult = this.ships[i].checkHit(guessCoords);
            if (guessResult.hit) {
                if (guessResult.shipSunk) {
                    this.remaining--;
                }
                returnResult = guessResult;
            }
        }
        return returnResult;
    }
    generateFleet(boardSize, useRandom) {
        let newFleet = [ ];
        for (let i = 0; i < this.number; i++) {
            let newShip;
            do {
                if (useRandom) {
                    newShip = new ship(boardSize);
                } else {
                    newShip = new ship(boardSize, this.composition[i]);
                }
                
            } while (this.checkCollision(newShip, newFleet));
            newFleet.push(newShip);
        }
        return newFleet;
    }
    checkCollision(newShip, fleet) {
        if (fleet.length == 0) {
            return false;
        } 
        for (let i = 0; i < fleet.length; i++) {
            let fleetShip = fleet[i];
            if (fleetShip.detectCollision(newShip)) {
                this.statsCollisionsDuringGeneration++;
                return true;
            }
        }
        return false;
    }
}