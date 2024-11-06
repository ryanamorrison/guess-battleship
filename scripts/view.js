let view = {
	//takes a cell number and displays a hit graphic in grid (table)
	displayHit(coordinates) {
		let cell = document.getElementById(coordinates.getCombinedRowAndColumn());
		cell.setAttribute("class", "hit");
	},
	//takes a cell number and displays a miss graphic in the grid
	displayMiss(coordinates) {
		let cell = document.getElementById(coordinates.getCombinedRowAndColumn());
		cell.setAttribute("class", "miss");
	},
	//display a message when a ship is sunk
	displaySunk(shipLabel) {
		let HUD = document.getElementById("messageArea");
		HUD.innerHTML = "You sank my " + shipLabel + "!";

		//OPTIONAL: add corny insults with each additional ship sunk beyond the first
	
	},
	//display message takes a string and displays it in
	//the message display area
	displayMessage(msg) {
		let HUD = document.getElementById("messageArea");
		HUD.innerHTML = msg;
	},
	//display message takes a string and displays it in
	//the message display area
	clearHUD() {
		let HUD = document.getElementById("messageArea");
		HUD.innerHTML = "";
	},
	updateGuesses(guesses) {
		let scoreBoard = document.getElementById("guesses");
		scoreBoard.innerHTML = "";
		scoreBoard.innerHTML = guesses;
	}, 
	updateHits(hitScore) {
		let scoreBoard = document.getElementById("hits");
		scoreBoard.innerHTML = "";
		scoreBoard.innerHTML = hitScore;
	},
	updateRemaining(remainingScore) {
		let scoreBoard = document.getElementById("remaining");
		scoreBoard.innerHTML = "";
		scoreBoard.innerHTML = remainingScore;
	},
	updateNumberSunk(numberSunkScore) {
		let scoreBoard = document.getElementById("numberSunk");
		scoreBoard.innerHTML = "";
		scoreBoard.innerHTML = numberSunkScore;
	},
	updateSunk(sunkShipLabels) {
		let scoreBoard = document.getElementById("sunk");
		scoreBoard.innerHTML = "";
		let labelString = "";
		for (i = 0; i < sunkShipLabels.length; i++) {
			if (i < (sunkShipLabels.length - 1)) {
				labelString = labelString + sunkShipLabels[i] + ", <BR/>";
			} else {
				labelString = labelString + sunkShipLabels[i]
			}
		}
		scoreBoard.innerHTML = labelString;
	},
	gameOver(numberGuesses) {
		let HUD = document.getElementById("messageArea");
		HUD.innerHTML = "You sank my battleships!  You won in " + numberGuesses + " number of guesses."
		document.getElementById("fireButton").disabled = true;
		document.getElementById("guessInput").disabled = true;
	},
	//draws coordinate grid according to the size it needs to be
	drawGrid(boardSize) {
		let idCounter = 0;
		let board = document.getElementById("tableboard");
		for (i = 0; i <= boardSize; i++) {
			//by rows
			var row = document.createElement('TR');
			//by columns
			for (j = 0; j <= boardSize; j++) {
				var cell = document.createElement('TD');
				let attr = document.createAttribute("class");
				let attrIDVal = "";
				if (i != 0 && j != 0) {
					//all other cells
					attr.value = "empty";
					attrIDVal = alphabet[i-1] + j;
				} else if (i == 0 && j != 0) {
					//header row
					attr.value = "x-axis";
					var label = document.createTextNode(j);
					cell.appendChild(label);
					attrIDVal = "0" + j;
				} else if (i != 0 && j == 0) {
					//header/side column
					attr.value = "y-axis";
					var label = document.createTextNode(alphabet[i-1]);
					cell.appendChild(label);
					attrIDVal = i + "0";
				} else {
					//cell 00
					attr.value = "noborder";
					attrIDVal = "00";
				}
				cell.setAttributeNode(attr);
				attr = document.createAttribute("id");
				attr.value = attrIDVal;
				cell.setAttributeNode(attr);
				row.appendChild(cell);
				idCounter++;
			}
			board.appendChild(row);
		}
	}
};