var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guessNumber = parseInt(prompt("I'm thinking of a number between 1 and 6. What is it?"));
if (guessNumber === randomNumber) {
  correctGuess = true;
} else if (guessNumber > randomNumber) {
  alert("The secret number is lower than " + guessNumber);
  guessNumber = parseInt(prompt("I'm thinking of a number between 1 and 6. What is it?"));
    if (guessNumber === randomNumber) {
      correctGuess = true;
    }
} else {
  alert("The secret number is higher than " + guessNumber);
  guessNumber = parseInt(prompt("I'm thinking of a number between 1 and 6. What is it?"));
    if (guessNumber === randomNumber) {
      correctGuess = true;
    }
} 

if (correctGuess) {
  document.write("<h2>You are correct! The secret number is " + randomNumber + "</h2>");
} else {
  document.write("<h2> You are wrong. The correct number is " + randomNumber + "</h2>");
}