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

	//---------- Begin user input function ----------//

	function input() {
		document.onkeyup = function() {
			var guess = event.key.toLowerCase();
			// prints to check the guess is recording
			
			console.log(guess)

			if ((numGuess > 0) && (alphabet.indexOf(guess) > -1)) {
				if (guess === compLetter) {
					wins++
					alert("You guessed the correct letter! You're a master mind reader.")
				}
			}
		}
	}
input();
	//---------- End user input function ----------//
}





