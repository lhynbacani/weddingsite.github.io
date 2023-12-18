// Prompt the user to enter a value
var input = prompt("Enter a value:");

// Check if the input is a number
if (!isNaN(input)) {
  console.log("Your input is a valid number");
} else {
  console.log("Your input is not a valid number");
}