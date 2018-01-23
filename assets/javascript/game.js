

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

//  FUNCTIONS
// ===================================

	// refreshes #wrongGuesses with the updated array
	var refreshWrongGuesses = function() {
		document.getElementById("#wrongGuesses").innterHTML = "It's not " + guessedLetters.join(", or ");	
	}

	//  refreshes #guessesLeft after each attempt
	var refreshGuessesLeft = function() {
		document.getElementById("#guessesLeft").innterHTML = "Guesses Left: " + guessesLeft;
		}


	// reset function to be used when guesses = 0 || userGuess = computerLetter
	var reset = function() {
		guessesLeft = 9;
		guessedLetters = [];
		refreshWrongGuesses();
		refreshGuessesLeft();

	}






	}






	