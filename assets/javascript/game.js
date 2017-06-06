// Function will run once page has loaded
window.onload = function() {
	
	// variables declared for later use
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	var numGuess = 10;
	var winCounter= 0;
	var lossCounter = 0;
	var lose;
	var win;
	var guesses;
	var guessBank = [];
	var incorrect;

	console.log(compLetter);


	//---------- Displays counts of each variable ----------//
	
	// displays wins
	win = document.getElementById("wins").innerHTML = "<h3>Wins: " + winCounter + "</h3>"
	

	// displays losses
	lose = document.getElementById("losses").innerHTML = "<h3>Losses: " + lossCounter + "</h3>"


	//displays number of remaining guesses
	guesses = document.getElementById("guessesLeft").innerHTML = "<h3>You have " + numGuess + " guesses Left</h3>";

	//---------- End counts of each variable ----------//

	// Reset Function

	function reset() {
		numGuess = 10;
		guessBank = [];
		document.getElementById("guessesLeft").innerHTML = "You have " + numGuess + " guesses remaining";
		document.getElementById("wrong").innerHTML = "You have guessed: "
		compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	};

	//---------- Begin user input function ----------//

	function input() {
		document.onkeyup = function() {
			var guess = event.key.toLowerCase();
			// prints to check the guess is recording
			
			console.log(guess)

			if ((numGuess > 0) && (alphabet.indexOf(guess) > -1) && (guessBank.indexOf(guess) <= -1 )) {
				
				// check for match between comp and user guess
				if (guess === compLetter) {
					winCounter++;
					document.getElementById("wins").innerHTML = "Wins: " + winCounter;
					alert("You guessed the correct letter! You're a master mind reader.")
					reset();
				}

				else {
					numGuess--;
					guessBank.push(guess);
					document.getElementById("guessesLeft").innerHTML = "You have " + numGuess + " guesses remaining";
					document.getElementById("wrong").innerHTML += "<h3 id='incorrectGuess'>" + guess + "</h3>";
				}
			}

			else if (guessBank.indexOf(guess) > -1) {
				alert("You have already selected this letter!")
			}

			else if (alphabet.indexOf(guess) <= -1) {
				alert("Please select a letter from the keyboard.")
			}

			else if (numGuess === 0) {
				alert("You lost! Better luck next time!");
				lossCounter++;
				document.getElementById("losses").innerHTML = "Losses: " + lossCounter;
				reset();
			} 
			
		}
	}

input();

	//---------- End user input function ----------//
}





