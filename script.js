var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guessNumber = parseInt(prompt("I'm thinking of a number between 1 and 6. What is it?"));
if (guessNumber === randomNumber) {
  correctGuess = true;
} else if (guessNumber > randomNumber) {
  var secondGuess = parseInt(prompt("Try again. The number I'm thinking is lower than" + guessNumber));
    if (secondGuess === randomNumber) {
      correctGuess = true;
    }
} else {
  var secondGuess = parseInt(prompt("Try again. The number I'm thinking is higher than" + guessNumber));
    if (secondGuess === randomNumber) {
      correctGuess = true;
    }
} 

if (correctGuess) {
  document.write("<h2>You are correct! The secret number is " + randomNumber + "</h2>");
} else {
  document.write("<h2> You are wrong. The correct number is " + randomNumber + "</h2>");
}