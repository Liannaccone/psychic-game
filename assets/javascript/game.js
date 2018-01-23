

// VARIABLES
// ===========================================

	//  array of letters
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	// assigns a randomly selected item from the alphabet array to the variable "computerLetter"
	var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

	// start the game with score and losses set at 0
	var winsCount = 0;
	var lossesCount = 0;

	// user has 9 attempts to correctly guess the computerLetter
	var guessesLeft = 9;
	var guessedLetters = []
	var userGuess = null

	console.log("computerLetter: " + computerLetter + ", winsCount: " + winsCount + ", lossesCount: " + lossesCount + ", guessesLeft: " + guessesLeft + ", guessedLetters: " + guessedLetters)

//  FUNCTIONS
// ===================================

	// refreshes #wrongGuesses with the updated array
	var refreshWrongGuesses = function() {
		document.querySelector("#wrongGuesses").innerHTML = "Your guesses so far:  " + guessedLetters.join(", ");	
	}

	//  refreshes #guessesLeft after each attempt
	var refreshGuessesLeft = function() {
		document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
		}

	// refreshes #wins when called
	var refreshWins = function() {
		document.querySelector("#wins").innerHTML = "Wins: " + winsCount;
	}

	// refreshes computerLetter variable, randomly assigning another value from the alphabet array
	var refreshComputerLetter = function() {
  		this.computerLetter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
 	}

	// refreshes #losses when called
	var refreshLosses = function() {
		document.querySelector("#losses").innerHTML = "Losses: " + lossesCount;
	}


	// reset function to be used when guesses = 0 || userGuess = computerLetter
	var reset = function() {
		guessesLeft = 9;
		guessedLetters = [];
		refreshWrongGuesses();
		refreshGuessesLeft();
		refreshComputerLetter();

	}



	// MAIN PROCESS
	// ==================================

	// refreshGuessesLeft();
	refreshComputerLetter();


	// When user presses a key it runs the following function:
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.which).toLowerCase();
		// decreases the number of guesses left by 1

		if (guessedLetters.indexOf(userGuess) !== -1) {
			alert("You already guessed " + userGuess + " silly!!!");
			return;
		}

		if (alphabet.indexOf(userGuess) === -1) {
			alert("That's not even a letter, try again!");
			return;
		}

		guessesLeft--;

		guessedLetters.push(userGuess);
		console.log(guessedLetters);


			// losing scenario, out of guesses
		if (guessesLeft === 0) {
			// increase lossesCount by 1
			lossesCount++;
			// alerts user of loss
			alert("Out of guesses! Try again?");
			// refresh the #losses div with updated lossesCount
			refreshLosses();
			// resets variables back to 0
			reset();

		}
			// winning scenario, correct guess
		if (userGuess == computerLetter) {
			// increase wins count by 1
			winsCount++;
			// alerts user of win
			alert("You got it! I was thinking " + computerLetter + "!")
			// refreshes the #wins div with updated winsCount
			refreshWins();
			// resets variables back to 0
			reset();
		}

		else {
			refreshWrongGuesses();
			refreshGuessesLeft();
		}


	};




	